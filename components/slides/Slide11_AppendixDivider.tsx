"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Icon from "@/components/Icon";

export default function Slide11_AppendixDivider() {
  return (
    <Slide
      id={9}
      background="bg-gradient-to-br from-black via-zinc-900 to-black"
    >
      <SlideContent className="text-center flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">
        <Title size="xl" className="mb-6 text-blue-400">
          APPENDIX
        </Title>
        <Subtitle size="lg" className="mb-4">
          Deep Dives for Traditional Finance Investors
        </Subtitle>
        <p className="text-gray-400 text-sm mb-12 max-w-3xl">
          New to DeFi? These sections translate blockchain complexity into
          familiar business concepts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
          {/* HOW IT WORKS */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-5 text-left">
            <div className="flex items-start gap-3 mb-2">
              <Icon
                name="code"
                size={32}
                className="text-blue-400 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-white mb-1 text-base">
                  A. How DeFi Vaults Work (Plain English)
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Learn: What smart contracts actually do • Why blockchain =
                  instant settlement • How yields come from real borrowers, not
                  magic
                </p>
              </div>
            </div>
          </div>

          {/* WHY NOW */}
          <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/50 rounded-xl p-5 text-left">
            <div className="flex items-start gap-3 mb-2">
              <Icon
                name="chart"
                size={32}
                className="text-emerald-400 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-white mb-1 text-base">
                  B. Why Institutions Are Moving On-Chain Now
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Learn: BlackRock's $2B tokenized fund • JPMorgan settling $1B
                  daily on blockchain • Why 2025 is the inflection point for
                  institutional adoption
                </p>
              </div>
            </div>
          </div>

          {/* COMPETITION */}
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-5 text-left">
            <div className="flex items-start gap-3 mb-2">
              <Icon
                name="shield"
                size={32}
                className="text-purple-400 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-white mb-1 text-base">
                  C. Competition & Why We Win
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Learn: Why Coinbase Prime lacks DeFi access • Why self-custody
                  requires $2M+ tech investment • Our white-label moat
                </p>
              </div>
            </div>
          </div>

          {/* RISK FRAMEWORK */}
          <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/50 rounded-xl p-5 text-left">
            <div className="flex items-start gap-3 mb-2">
              <Icon
                name="document"
                size={32}
                className="text-red-400 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-white mb-1 text-base">
                  D. DeFi Risk vs TradFi Risk (Honest Comparison)
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Learn: Why Aave has never been hacked • Smart contract risk =
                  operational risk, not credit risk • Insurance options
                  available
                </p>
              </div>
            </div>
          </div>

          {/* BUSINESS MODEL */}
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-5 text-left">
            <div className="flex items-start gap-3 mb-2">
              <Icon
                name="chart"
                size={32}
                className="text-amber-400 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-white mb-1 text-base">
                  E. Business Model & Unit Economics
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Learn: Revenue structure (1.25-1.75% management fees) • CAC
                  payback in &lt;12 months • SaaS-like margins (87% gross,
                  49-61% operating)
                </p>
              </div>
            </div>
          </div>

          {/* GTM */}
          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-5 text-left">
            <div className="flex items-start gap-3 mb-2">
              <Icon
                name="code"
                size={32}
                className="text-green-400 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-white mb-1 text-base">
                  F. Go-to-Market Strategy
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Learn: Why we target exchanges & neo-banks first • Pilot
                  program structure • Sales cycle (6-9 months typical)
                </p>
              </div>
            </div>
          </div>

          {/* PROJECTIONS */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border-2 border-cyan-500/50 rounded-xl p-5 text-left">
            <div className="flex items-start gap-3 mb-2">
              <Icon
                name="chart"
                size={32}
                className="text-cyan-400 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-white mb-1 text-base">
                  G. 3-Year Financial Projections
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Learn: Path to $1.54M ARR (Month 12-15) • Series A readiness
                  ($3.5-4.6M ARR, Month 18-24) • Full P&L model
                </p>
              </div>
            </div>
          </div>

          {/* INVESTOR YIELD SCENARIOS */}
          <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 border-2 border-indigo-500/50 rounded-xl p-5 text-left">
            <div className="flex items-start gap-3 mb-2">
              <Icon
                name="shield"
                size={32}
                className="text-indigo-400 flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-white mb-1 text-base">
                  H. Investor Yield Scenarios (Your Upside)
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Learn: Detailed ROI modeling across 3 tiers • Example: How
                  $500K equity + $25M deployed = 14-20x in 18 months
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-8">
          Navigate with arrow keys or click sections to explore
        </p>
      </SlideContent>
    </Slide>
  );
}
