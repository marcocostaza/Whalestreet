"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

/**
 * Prezzi BTC in EUR approssimativi a inizio anno (Gennaio).
 * Fonte: dati storici pubblici (CoinGecko, CoinMarketCap).
 * Convertiti USD→EUR con tassi di cambio medi annuali.
 *
 * NOTA: aggiornare periodicamente CURRENT_BTC_PRICE_EUR e CURRENT_DATE_LABEL.
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
const CURRENT_DATE_LABEL = "Febbraio 2026";

function formatEUR(value: number): string {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function BitcoinSimulator() {
  const [amount, setAmount] = useState(10000);
  const [entryYear, setEntryYear] = useState(2020);

  const result = useMemo(() => {
    const entryPrice = BTC_PRICES_EUR[entryYear];
    const btcBought = amount / entryPrice;
    const currentValue = btcBought * CURRENT_BTC_PRICE_EUR;
    const returnPct = ((currentValue - amount) / amount) * 100;
    return { currentValue, returnPct, btcBought };
  }, [amount, entryYear]);

  const years = Object.keys(BTC_PRICES_EUR).map(Number);
  const isPositive = result.returnPct >= 0;

  return (
    <div className="space-y-8">
      {/* Controlli */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Slider importo */}
        <div>
          <label className="block text-sm font-medium text-white/60 mb-3">
            Importo ipotetico
          </label>
          <input
            type="range"
            min={5000}
            max={100000}
            step={1000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/10 accent-[#3B95D9]"
          />
          <div className="flex justify-between mt-2">
            <span className="text-2xl font-heading font-bold text-white">
              {formatEUR(amount)}
            </span>
            <span className="text-xs text-white/40 self-end">
              max {formatEUR(100000)}
            </span>
          </div>
        </div>

        {/* Selettore anno */}
        <div>
          <label className="block text-sm font-medium text-white/60 mb-3">
            Se avessi investito a Gennaio...
          </label>
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setEntryYear(year)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  entryYear === year
                    ? "bg-[#3B95D9] text-white shadow-[0_0_20px_-5px_rgba(59,149,217,0.4)]"
                    : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/80"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Risultato */}
      <motion.div
        key={`${amount}-${entryYear}`}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 sm:p-8"
      >
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">
              Investito a Gen {entryYear}
            </p>
            <p className="text-xl sm:text-2xl font-heading font-bold text-white">
              {formatEUR(amount)}
            </p>
          </div>
          <div>
            <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">
              Valore a {CURRENT_DATE_LABEL}
            </p>
            <p
              className={`text-xl sm:text-2xl font-heading font-bold ${
                isPositive ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {formatEUR(Math.round(result.currentValue))}
            </p>
          </div>
          <div>
            <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">
              Rendimento
            </p>
            <div
              className={`flex items-center justify-center gap-1.5 text-xl sm:text-2xl font-heading font-bold ${
                isPositive ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {isPositive ? (
                <TrendingUp className="w-5 h-5" />
              ) : (
                <TrendingDown className="w-5 h-5" />
              )}
              <span>
                {isPositive ? "+" : ""}
                {result.returnPct.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Disclaimer */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-amber-500/20">
        <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-white/40 leading-relaxed">
          Simulazione basata su dati storici approssimativi del prezzo di Bitcoin
          in EUR. I rendimenti passati non sono indicativi di risultati futuri.
          Questa simulazione ha esclusivamente scopo educativo e informativo e non
          costituisce sollecitazione all&apos;investimento, raccomandazione
          finanziaria o invito all&apos;acquisto di alcuno strumento.
        </p>
      </div>
    </div>
  );
}
