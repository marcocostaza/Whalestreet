"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, PieChart, BarChart3 } from "lucide-react";

/**
 * Prezzi BTC in EUR approssimativi a Gennaio di ogni anno.
 * Fonte: dati storici pubblici (CoinGecko/CoinMarketCap), convertiti USD→EUR.
 *
 * NOTA: aggiornare periodicamente CURRENT_BTC_PRICE_EUR e CURRENT_YEAR.
 */
const BTC_PRICES_EUR: Record<number, number> = {
  2019: 3160,
  2020: 7680,
  2021: 27270,
  2022: 34070,
  2023: 19900,
  2024: 39800,
};

const CURRENT_BTC_PRICE_EUR = 94000;
const CURRENT_YEAR = 2026;
const CURRENT_DATE_LABEL = "Feb 2026";

/**
 * Rendimenti annui storici MSCI ACWI (All Country World Index), fonte pubblica.
 * Fonte: MSCI / dati storici indicizzati (net USD).
 */
const MSCI_ACWI_RETURNS: Record<number, number> = {
  2019: 0.273,
  2020: 0.1682,
  2021: 0.1904,
  2022: -0.1796,
  2023: 0.2281,
  2024: 0.1802,
  2025: 0, // placeholder (anno in corso / non ancora concluso)
};

/**
 * Rendimenti annui approssimativi indice obbligazionario globale (aggregate).
 * Usato per la componente obbligazionaria del portafoglio tradizionale.
 */
const BOND_INDEX_RETURNS: Record<number, number> = {
  2019: 0.06,
  2020: 0.07,
  2021: -0.05,
  2022: -0.16,
  2023: 0.05,
  2024: 0,
  2025: 0.02,
};

function formatEUR(value: number): string {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPct(value: number): string {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

function getRiskProfile(pct: number): { label: string; color: string } {
  if (pct <= 2) return { label: "Conservativo", color: "text-emerald-400" };
  if (pct <= 5) return { label: "Moderato", color: "text-sky-400" };
  if (pct <= 10) return { label: "Dinamico", color: "text-amber-400" };
  return { label: "Aggressivo", color: "text-red-400" };
}

/** Calcola il valore finale di un capitale con rendimenti annui reali (equity + obbligazioni). */
function compoundWithRealReturns(
  initial: number,
  fromYear: number,
  toYear: number,
  equityPct: number,
  bondPct: number
): number {
  let value = initial;
  const equityFrac = equityPct / 100;
  const bondFrac = bondPct / 100;
  for (let y = fromYear; y < toYear; y++) {
    const rEquity = MSCI_ACWI_RETURNS[y] ?? 0;
    const rBond = BOND_INDEX_RETURNS[y] ?? 0;
    const rPortfolio = equityFrac * rEquity + bondFrac * rBond;
    value *= 1 + rPortfolio;
  }
  return value;
}

export default function BitcoinSimulator() {
  const [totalCapital, setTotalCapital] = useState(200000);
  const [allocation, setAllocation] = useState(5);
  const [entryYear, setEntryYear] = useState(2020);
  const [bondPct, setBondPct] = useState(40); // % obbligazioni nel portafoglio tradizionale
  const equityPct = 100 - bondPct;

  const result = useMemo(() => {
    const btcAllocated = totalCapital * (allocation / 100);
    const tradAllocated = totalCapital - btcAllocated;
    const yearsElapsed = CURRENT_YEAR - entryYear;
    const btcEntryPrice = BTC_PRICES_EUR[entryYear];

    // Porzione BTC: crescita storica reale
    const btcValueToday = (btcAllocated / btcEntryPrice) * CURRENT_BTC_PRICE_EUR;
    const btcReturnPct = ((btcValueToday - btcAllocated) / btcAllocated) * 100;

    // Porzione tradizionale: rendimenti reali MSCI ACWI + obbligazioni
    const tradValueToday = compoundWithRealReturns(
      tradAllocated,
      entryYear,
      CURRENT_YEAR,
      equityPct,
      bondPct
    );

    // Portafoglio CON BTC
    const portfolioWithBtc = btcValueToday + tradValueToday;
    const portfolioWithBtcReturn =
      ((portfolioWithBtc - totalCapital) / totalCapital) * 100;

    // Portafoglio SENZA BTC (100% tradizionale, stessi rendimenti reali)
    const portfolioWithoutBtc = compoundWithRealReturns(
      totalCapital,
      entryYear,
      CURRENT_YEAR,
      equityPct,
      bondPct
    );
    const portfolioWithoutBtcReturn =
      ((portfolioWithoutBtc - totalCapital) / totalCapital) * 100;

    // Impatto netto della componente BTC
    const netImpact = portfolioWithBtc - portfolioWithoutBtc;
    const netImpactPct = (netImpact / portfolioWithoutBtc) * 100;

    // Peso BTC sul portafoglio attuale (per barra composizione)
    const btcWeightNow = (btcValueToday / portfolioWithBtc) * 100;

    return {
      btcAllocated,
      btcValueToday,
      btcReturnPct,
      tradValueToday,
      portfolioWithBtc,
      portfolioWithBtcReturn,
      portfolioWithoutBtc,
      portfolioWithoutBtcReturn,
      netImpact,
      netImpactPct,
      btcWeightNow,
      yearsElapsed,
    };
  }, [totalCapital, allocation, entryYear, bondPct, equityPct]);

  const years = Object.keys(BTC_PRICES_EUR).map(Number);
  const allocations = [1, 3, 5, 10];
  const riskProfile = getRiskProfile(allocation);

  return (
    <div className="space-y-8">
      {/* ── Controlli ── */}
      <div className="space-y-6">
        {/* Capitale totale */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-white/60">
              Capitale totale ipotetico del portafoglio
            </label>
            <span className="text-xl font-heading font-bold text-white">
              {formatEUR(totalCapital)}
            </span>
          </div>
          <input
            type="range"
            min={50000}
            max={1000000}
            step={10000}
            value={totalCapital}
            onChange={(e) => setTotalCapital(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/10 accent-[#3B95D9]"
          />
          <div className="flex justify-between mt-1 text-xs text-white/30">
            <span>{formatEUR(50000)}</span>
            <span>{formatEUR(1000000)}</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Allocazione BTC */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-white/60">
                Allocazione in Bitcoin
              </label>
              <span className={`text-sm font-medium ${riskProfile.color}`}>
                {riskProfile.label}
              </span>
            </div>
            <div className="flex gap-2">
              {allocations.map((pct) => (
                <button
                  key={pct}
                  onClick={() => setAllocation(pct)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                    allocation === pct
                      ? "bg-[#3B95D9] text-white shadow-[0_0_20px_-5px_rgba(59,149,217,0.4)]"
                      : "bg-white/10 text-white/50 hover:bg-white/15 hover:text-white/70"
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          {/* Anno di ingresso */}
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Anno di ingresso ipotetico
            </label>
            <div className="flex gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setEntryYear(year)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                    entryYear === year
                      ? "bg-[#3B95D9] text-white shadow-[0_0_20px_-5px_rgba(59,149,217,0.4)]"
                      : "bg-white/10 text-white/50 hover:bg-white/15 hover:text-white/70"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* % Obbligazioni portafoglio tradizionale (MSCI + bonds) */}
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Portafoglio tradizionale: % obbligazioni (resto MSCI ACWI)
            </label>
            <div className="flex gap-2">
              {[0, 20, 40, 60, 80, 100].map((pct) => (
                <button
                  key={pct}
                  onClick={() => setBondPct(pct)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                    bondPct === pct
                      ? "bg-[#3B95D9] text-white shadow-[0_0_20px_-5px_rgba(59,149,217,0.4)]"
                      : "bg-white/10 text-white/50 hover:bg-white/15 hover:text-white/70"
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Risultati ── */}
      <motion.div
        key={`${totalCapital}-${allocation}-${entryYear}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        {/* Confronto portafogli */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* CON BTC */}
          <div className="rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/20 p-6">
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="w-4 h-4 text-emerald-400" />
              <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                Con allocazione BTC ({allocation}%)
              </h4>
            </div>
            <p className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1">
              {formatEUR(Math.round(result.portfolioWithBtc))}
            </p>
            <p className="text-sm text-emerald-400/80">
              {formatPct(result.portfolioWithBtcReturn)} in{" "}
              {result.yearsElapsed} anni
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Componente BTC</span>
                <span className="text-white font-medium">
                  {formatEUR(Math.round(result.btcValueToday))}
                  <span className="text-emerald-400/80 text-xs ml-1">
                    ({formatPct(result.btcReturnPct)})
                  </span>
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Componente tradizionale</span>
                <span className="text-white font-medium">
                  {formatEUR(Math.round(result.tradValueToday))}
                </span>
              </div>
            </div>
          </div>

          {/* SENZA BTC */}
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4 text-white/40" />
              <h4 className="text-sm font-bold text-white/40 uppercase tracking-wider">
                100% tradizionale
              </h4>
            </div>
            <p className="text-2xl sm:text-3xl font-heading font-bold text-white/60 mb-1">
              {formatEUR(Math.round(result.portfolioWithoutBtc))}
            </p>
            <p className="text-sm text-white/30">
              {formatPct(result.portfolioWithoutBtcReturn)} in{" "}
              {result.yearsElapsed} anni
            </p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm text-white/40">
                Dati storici reali: MSCI ACWI (azioni globali) e indice
                obbligazionario globale. Composizione: {100 - bondPct}% azioni /{" "}
                {bondPct}% obbligazioni.
              </p>
            </div>
          </div>
        </div>

        {/* Impatto netto */}
        <div className="rounded-2xl bg-[#3B95D9]/10 border border-[#3B95D9]/30 p-6 text-center">
          <p className="text-sm text-[#3B95D9]/80 mb-1 uppercase tracking-wider font-medium">
            Impatto netto dell&apos;allocazione BTC sul portafoglio
          </p>
          <div className="flex items-center justify-center gap-3">
            <TrendingUp
              className={`w-6 h-6 ${
                result.netImpact >= 0 ? "text-emerald-400" : "text-red-400"
              }`}
            />
            <span
              className={`text-3xl sm:text-4xl font-heading font-bold ${
                result.netImpact >= 0 ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {result.netImpact >= 0 ? "+" : ""}
              {formatEUR(Math.round(result.netImpact))}
            </span>
          </div>
          <p className="text-sm text-white/50 mt-1">
            {formatPct(result.netImpactPct)} rispetto al portafoglio senza BTC
          </p>
        </div>

        {/* Barra composizione visiva */}
        <div className="space-y-2">
          <p className="text-xs text-white/40 uppercase tracking-wider">
            Composizione attuale del portafoglio
          </p>
          <div className="h-3 rounded-full overflow-hidden flex bg-white/10">
            <div
              className="bg-[#3B95D9] transition-all duration-500 rounded-l-full"
              style={{ width: `${Math.min(result.btcWeightNow, 100)}%` }}
            />
            <div
              className="bg-white/20 transition-all duration-500"
              style={{
                width: `${Math.max(100 - result.btcWeightNow, 0)}%`,
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-white/40">
            <span>
              Bitcoin: {result.btcWeightNow.toFixed(1)}%
            </span>
            <span>
              Tradizionale: {(100 - result.btcWeightNow).toFixed(1)}%
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── Disclaimer ── */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-amber-500/20">
        <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-white/40 leading-relaxed">
          Simulazione basata su dati storici approssimativi: BTC in EUR e
          rendimenti storici MSCI ACWI + indice obbligazionario globale per la
          componente tradizionale. I rendimenti passati non sono indicativi di
          risultati futuri. Questo strumento ha esclusivamente scopo educativo e
          informativo e non costituisce sollecitazione all&apos;investimento,
          raccomandazione finanziaria o invito all&apos;acquisto di alcuno
          strumento.
        </p>
      </div>
    </div>
  );
}
