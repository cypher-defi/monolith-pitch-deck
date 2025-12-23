"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";
import Icon from "@/components/Icon";

export default function Slide5Market() {
  return (
    <Slide id={5} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-12 text-center">
          MARKET SIZE & OPPORTUNITY
        </Title>

        {/* TOP: MARKET OVERVIEW */}
        <div className="max-w-6xl mx-auto mb-16">
          <ThreeColumnGrid className="gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-2 border-blue-500/50 rounded-xl">
              <div className="text-7xl font-bold text-blue-400 mb-3">$310B</div>
              <div className="text-xl text-gray-300 mb-2">
                Total Stablecoin Market
              </div>
              <div className="text-sm text-gray-500">Growing 50%+ YoY</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500/50 rounded-xl">
              <div className="text-7xl font-bold text-amber-400 mb-3">$93B</div>
              <div className="text-xl text-gray-300 mb-2">
                Institutional Holdings
              </div>
              <div className="text-sm text-gray-500">
                Corporate treasuries + banks
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-red-500/10 to-red-600/5 border-2 border-red-500/50 rounded-xl">
              <div className="text-7xl font-bold text-red-400 mb-3">0%</div>
              <div className="text-xl text-gray-300 mb-2">
                What They're Earning
              </div>
              <div className="text-sm text-gray-500">
                vs 4-15% available in DeFi
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
                  4-15%
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

        {/* REVENUE SCENARIOS */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-4">
            Revenue Growth: 1.25% Management Fee Model
          </h3>
          <p className="text-center text-gray-400 mb-10 text-lg">
            Institutional-grade pricing with full compliance infrastructure
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* PHASE 1: MONTH 6 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-600 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="inline-block px-4 py-2 bg-slate-700 rounded-full mb-3">
                    <span className="text-sm font-semibold text-slate-300">
                      MONTH 6
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">$20M</div>
                  <div className="text-sm text-gray-400">
                    AUM - Pilot Launch
                  </div>
                </div>
                <div className="border-t border-slate-700 pt-4 mt-4">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-400">
                      Customer Type:
                    </span>
                    <span className="font-bold text-white">Pilot Program</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-slate-700">
                    <span className="text-gray-300 font-semibold">
                      Annual Revenue:
                    </span>
                    <span className="font-bold text-blue-400 text-xl">
                      $250K
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 text-xs">
                    <span className="text-gray-500">Profit:</span>
                    <span className="text-gray-500">-$91K (pilot)</span>
                  </div>
                </div>
              </div>

              {/* PHASE 2: MONTH 12-15 */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-950 border-2 border-blue-500 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="inline-block px-4 py-2 bg-blue-600 rounded-full mb-3">
                    <span className="text-sm font-semibold text-white">
                      MONTH 12-15
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">$100M</div>
                  <div className="text-sm text-gray-300">
                    AUM - Profitable
                  </div>
                </div>
                <div className="border-t border-blue-800 pt-4 mt-4">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300">
                      3 Customers:
                    </span>
                    <span className="font-bold text-white">Scale Phase</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-blue-800">
                    <span className="text-gray-200 font-semibold">
                      Annual Revenue:
                    </span>
                    <span className="font-bold text-green-400 text-xl">
                      $1.25M
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 text-xs">
                    <span className="text-green-500">Profit:</span>
                    <span className="text-green-500 font-bold">+$360K ✓</span>
                  </div>
                </div>
              </div>

              {/* PHASE 3: YEAR 2 */}
              <div className="bg-gradient-to-br from-purple-900 to-purple-950 border-2 border-purple-500 rounded-xl p-6 transform scale-105 shadow-xl shadow-purple-500/20">
                <div className="text-center mb-4">
                  <div className="inline-block px-4 py-2 bg-purple-600 rounded-full mb-3">
                    <span className="text-sm font-semibold text-white">
                      YEAR 2
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">$300-400M</div>
                  <div className="text-sm text-gray-300">
                    AUM - Series A Ready
                  </div>
                </div>
                <div className="border-t border-purple-800 pt-4 mt-4">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300">
                      5-6 Customers:
                    </span>
                    <span className="font-bold text-white">Expansion</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-purple-800">
                    <span className="text-gray-200 font-semibold">
                      Annual Revenue:
                    </span>
                    <span className="font-bold text-green-400 text-xl">
                      $3.75-5M
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 text-xs">
                    <span className="text-green-500">Profit:</span>
                    <span className="text-green-500 font-bold">+$2-3.3M</span>
                  </div>
                </div>
              </div>

              {/* PHASE 4: YEAR 3 */}
              <div className="bg-gradient-to-br from-green-900 to-green-950 border-2 border-green-500 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="inline-block px-4 py-2 bg-green-600 rounded-full mb-3">
                    <span className="text-sm font-semibold text-white">
                      YEAR 3
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">$800M-1B</div>
                  <div className="text-sm text-gray-300">
                    AUM - At Scale
                  </div>
                </div>
                <div className="border-t border-green-800 pt-4 mt-4">
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-300">
                      8-10 Customers:
                    </span>
                    <span className="font-bold text-white">Market Leader</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-green-800">
                    <span className="text-gray-200 font-semibold">
                      Annual Revenue:
                    </span>
                    <span className="font-bold text-green-400 text-xl">
                      $10-12.5M
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 text-xs">
                    <span className="text-green-500">Profit:</span>
                    <span className="text-green-500 font-bold">+$6-8.7M</span>
                  </div>
                </div>
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
            <div className="grid grid-cols-3 gap-6 text-center mb-6">
              <div>
                <Icon
                  name="x"
                  size={32}
                  className="text-red-400 mx-auto mb-3"
                />
                <div className="text-sm text-gray-300">
                  No in-house DeFi expertise
                </div>
              </div>
              <div>
                <Icon
                  name="x"
                  size={32}
                  className="text-red-400 mx-auto mb-3"
                />
                <div className="text-sm text-gray-300">
                  6-12 months to build compliance
                </div>
              </div>
              <div>
                <Icon
                  name="x"
                  size={32}
                  className="text-red-400 mx-auto mb-3"
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
