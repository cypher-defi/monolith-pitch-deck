"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";
import Icon from "@/components/Icon";

export default function Slide03_Market() {
  return (
    <Slide id={3} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-8 md:mb-12 text-center">
          MARKET OPPORTUNITY
        </Title>

        {/* TOP: MARKET OVERVIEW */}
        <div className="max-w-6xl mx-auto mb-10 md:mb-16 px-4">
          <ThreeColumnGrid className="gap-4 md:gap-8">
            <div className="text-center p-4 md:p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/50 rounded-xl">
              <div className="text-5xl md:text-7xl font-bold text-blue-400 mb-2 md:mb-3">
                $310B
              </div>
              <div className="text-base md:text-xl text-gray-300 mb-1 md:mb-2">
                Total Market
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                Stablecoins growing 50%+ YoY
              </div>
            </div>

            <div className="text-center p-4 md:p-8 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/50 rounded-xl">
              <div className="text-5xl md:text-7xl font-bold text-amber-400 mb-2 md:mb-3">
                $93B
              </div>
              <div className="text-base md:text-xl text-gray-300 mb-1 md:mb-2">
                Institutional
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                Corporate treasuries + banks
              </div>
            </div>

            <div className="text-center p-4 md:p-8 bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/50 rounded-xl">
              <div className="text-5xl md:text-7xl font-bold text-red-400 mb-2 md:mb-3">
                0%
              </div>
              <div className="text-base md:text-xl text-gray-300 mb-1 md:mb-2">
                Current Yield
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                vs 5-22% available
              </div>
            </div>
          </ThreeColumnGrid>
        </div>

        {/* THE YIELD GAP */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-red-500/10 via-amber-500/10 to-green-500/10 border-2 border-amber-500/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">
              The Institutional Yield Gap
            </h3>
            <div className="grid grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">0%</div>
                <div className="text-sm text-gray-400 mb-3">
                  Current Reality
                </div>
                <div className="text-xs text-gray-500">
                  Idle USDC/USDT in wallets
                </div>
              </div>
              <div className="flex justify-center">
                <Icon name="arrow-right" size={40} className="text-amber-400" />
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  5-22%
                </div>
                <div className="text-sm text-gray-400 mb-3">
                  DeFi Opportunity
                </div>
                <div className="text-xs text-gray-500">
                  Risk-adjusted yields available
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-amber-500/30 text-center">
              <p className="text-lg text-amber-400 font-bold">
                $93B × 5% avg yield = $4.65B in annual returns left on the table
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Institutions can't access this today due to technical barriers
                &amp; compliance concerns
              </p>
            </div>
          </div>
        </div>

        {/* PATH TO PROFITABILITY */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-4">
            Path to Profitability
          </h3>

          {/* CONTEXT BOX */}
          <div className="max-w-4xl mx-auto mb-10 p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600 rounded-xl">
            <p className="text-center text-gray-300 text-base leading-relaxed">
              <strong className="text-white">Business Model:</strong> We charge
              management fees (0.75-1.75%) on Assets Under Management (AUM).
              <br />
              Growth is driven by{" "}
              <span className="text-blue-400">
                few large institutional clients
              </span>{" "}
              ($25-50M+ allocations) rather than high client volume, plus{" "}
              <span className="text-green-400">
                existing clients expanding allocations
              </span>{" "}
              as they see consistent performance.
              <br />
              <span className="text-amber-400 font-semibold">Operating expenses scale responsibly with revenue progress.</span>
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* MILESTONE 1: OPERATING BREAKEVEN */}
              <div className="bg-gradient-to-br from-amber-900 to-amber-950 border-2 border-amber-500 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-amber-700 rounded-full mb-4">
                    <span className="text-sm font-semibold text-white">
                      MONTH 12
                    </span>
                  </div>
                  <div className="text-5xl font-bold text-white mb-3">$60-80M</div>
                  <div className="text-lg text-amber-300 font-semibold mb-2">
                    Operating Breakeven
                  </div>
                  <div className="text-sm text-gray-400">
                    2-3 clients @ ~$25-30M each
                  </div>
                </div>
                <div className="border-t border-amber-700 pt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monthly Revenue:</span>
                    <span className="text-white font-bold text-lg">~$75K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monthly OpEx:</span>
                    <span className="text-white font-bold text-lg">~$70K</span>
                  </div>
                  <div className="text-center pt-4 border-t border-amber-800">
                    <span className="text-amber-300 font-semibold">
                      Revenue covers ops ✓
                    </span>
                  </div>
                </div>
              </div>

              {/* MILESTONE 2: SERIES A READY */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-950 border-2 border-blue-400 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-blue-600 rounded-full mb-4">
                    <span className="text-sm font-semibold text-white">
                      MONTH 18-20
                    </span>
                  </div>
                  <div className="text-5xl font-bold text-white mb-3">
                    $150M+
                  </div>
                  <div className="text-lg text-blue-300 font-semibold mb-2">
                    Series A Ready
                  </div>
                  <div className="text-sm text-gray-400">
                    4-5 clients @ ~$35M avg
                  </div>
                </div>
                <div className="border-t border-blue-700 pt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">ARR:</span>
                    <span className="text-white font-bold text-lg">$2.1-2.3M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Runway Remaining:</span>
                    <span className="text-green-400 font-bold text-lg">
                      4-8 months
                    </span>
                  </div>
                  <div className="text-center pt-4 border-t border-blue-800">
                    <span className="text-blue-300 font-semibold">
                      Strong unit economics ✓
                    </span>
                  </div>
                </div>
              </div>

              {/* MILESTONE 3: AT SCALE */}
              <div className="bg-gradient-to-br from-green-900 to-green-950 border-2 border-green-400 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-green-600 rounded-full mb-4">
                    <span className="text-sm font-semibold text-white">
                      YEAR 2-3
                    </span>
                  </div>
                  <div className="text-5xl font-bold text-white mb-3">
                    $300-400M
                  </div>
                  <div className="text-lg text-green-300 font-semibold mb-2">
                    Profitable & Scaling
                  </div>
                  <div className="text-sm text-gray-400">
                    6-8 clients @ ~$50M avg
                  </div>
                </div>
                <div className="border-t border-green-700 pt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">ARR:</span>
                    <span className="text-white font-bold text-lg">$3.5-4.6M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Operating Margin:</span>
                    <span className="text-green-400 font-bold text-lg">
                      49-61%
                    </span>
                  </div>
                  <div className="text-center pt-4 border-t border-green-800">
                    <span className="text-green-300 font-semibold">
                      Series B trajectory ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CLIENT VALUE PROPOSITION */}
          <div className="max-w-6xl mx-auto mt-8 p-6 bg-gradient-to-r from-green-900/30 to-blue-900/30 border-2 border-green-500/50 rounded-xl">
            <h4 className="text-lg font-bold text-center text-white mb-4">
              Win-Win Economics
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                <div className="text-sm text-gray-400 mb-2">
                  Client with $30M allocation
                </div>
                <div className="text-3xl font-bold text-green-400 mb-1">
                  $2.4-3.6M
                </div>
                <div className="text-xs text-gray-500">
                  Annual yield earned (8-12%)
                </div>
                <div className="text-sm text-amber-300 mt-2">
                  - $330K fee (1.1%)
                </div>
                <div className="border-t border-green-500/30 mt-3 pt-3">
                  <div className="text-2xl font-bold text-green-300">
                    $2.1-3.3M
                  </div>
                  <div className="text-xs text-gray-400">
                    Client's net profit
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center text-center p-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="text-white font-bold block mb-2">
                    Clients keep 88-92% of all gains
                  </span>
                  We only earn when they earn. Average client makes{" "}
                  <span className="text-green-400 font-bold">7-10x more</span>{" "}
                  than what they pay in fees.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-600">
                  <div className="text-xs text-blue-400 font-semibold">
                    Growth Drivers:
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Pilot clients gradually scale $20M→$40M→$60M • Proven track
                    record attracts larger allocations • Reference selling
                    accelerates
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KEY METRICS SUMMARY */}
          <div className="max-w-5xl mx-auto mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-xl">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  $190-500K
                </div>
                <div className="text-sm text-gray-400">Revenue per client</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  6-9 mo
                </div>
                <div className="text-sm text-gray-400">CAC payback period</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  &lt;5%
                </div>
                <div className="text-sm text-gray-400">Annual churn</div>
              </div>
            </div>
          </div>
        </div>

        {/* WHY US - THE MOAT */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border-2 border-green-500/50 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-center text-white mb-6">
              Why Institutions Can't Do This Without Us
            </h4>
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="flex items-center gap-3">
                <Icon
                  name="x"
                  size={32}
                  className="text-red-400 flex-shrink-0"
                />
                <div className="text-sm text-gray-300">
                  No in-house DeFi expertise
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="x"
                  size={32}
                  className="text-red-400 flex-shrink-0"
                />
                <div className="text-sm text-gray-300">
                  6-12 months to build compliance
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="x"
                  size={32}
                  className="text-red-400 flex-shrink-0"
                />
                <div className="text-sm text-gray-300">
                  Can't evaluate protocol risk
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-green-500/30 text-center">
              <p className="text-lg text-green-400 font-semibold">
                ✓ Turnkey infrastructure • ✓ Compliance-ready • ✓ Risk-managed
                yields • ✓ White-label platform
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
