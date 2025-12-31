"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Icon from "@/components/Icon";

export default function Slide21_WhyInvestNow() {
  return (
    <Slide
      id={19}
      background="bg-gradient-to-br from-black via-blue-950/30 to-black"
    >
      <SlideContent>
        <Title size="lg" className="mb-6 md:mb-8 text-center">
          APPENDIX C-6: WHY INVEST NOW
        </Title>

        <p className="text-gray-300 text-base md:text-xl text-center mb-8 md:mb-16 max-w-4xl mx-auto">
          The convergence of market conditions, regulatory clarity, and
          institutional demand creates a unique window
        </p>

        {/* FIVE KEY REASONS */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* REASON 1 */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <Icon
                name="dollar"
                size={40}
                className="text-blue-400 flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-blue-300 mb-2 md:mb-3">
                  Large Institutional Capital Base Still Unallocated
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  $93B in institutional stablecoins earning 0% while DeFi offers
                  5-22% yields across risk tiers. The yield gap represents
                  $4.65B+ in annual returns left on the table.
                </p>
              </div>
            </div>
          </div>

          {/* REASON 2 */}
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <Icon
                name="shield"
                size={40}
                className="text-purple-400 flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-purple-300 mb-2 md:mb-3">
                  Regulatory Clarity Has Improved
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  GENIUS Act passed (July 2025), MiCA operational in EU,
                  regulatory uncertainty dropped from 85% to 25%. Institutions
                  now have clear frameworks for stablecoin deployment.
                </p>
              </div>
            </div>
          </div>

          {/* REASON 3 */}
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <Icon
                name="server"
                size={40}
                className="text-amber-400 flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-amber-300 mb-2 md:mb-3">
                  Infrastructure & Risk Tools Are Mature
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  Aave ($40B TVL, 5+ years zero failures), Morpho (Coinbase
                  partnership), Ondo ($1.4B RWAs), InsurAce coverage.
                  Battle-tested protocols + institutional insurance available
                  now.
                </p>
              </div>
            </div>
          </div>

          {/* REASON 4 */}
          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <Icon
                name="trending"
                size={40}
                className="text-green-400 flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-green-300 mb-2 md:mb-3">
                  Significant Revenue Potential Even in Conservative Scenarios
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  Breakeven at $40-50M AUM (9-12 months). Year 2: $300-400M AUM
                  = $3.54-4.58M ARR with 49-61% operating margins. Downside
                  survivability at 6 clients / $120M AUM with 20% EBITDA.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FIFTH REASON - FULL WIDTH */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/5 border-2 border-red-500/50 rounded-xl p-4 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
              <Icon
                name="building"
                size={48}
                className="text-red-400 flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-red-300 mb-3 md:mb-4">
                  Increased Institutional Interest in Stablecoin Yields
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  75% of firms report customer demand for stablecoin-based
                  products. $47.3B deployed into stablecoin yield strategies in
                  Q3 2025. Circle (USDC) publicly traded at $5B valuation.
                  Corporate treasuries and family offices actively exploring
                  DeFi.
                </p>
                <p className="text-red-300 font-semibold text-base md:text-lg">
                  The market is ready. The infrastructure is proven. The
                  regulatory path is clear. The time is now.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="max-w-5xl mx-auto p-4 md:p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl">
          <p className="text-white text-lg md:text-2xl font-bold text-center mb-3 md:mb-4">
            The Perfect Storm
          </p>
          <p className="text-center text-sm md:text-lg text-gray-300">
            Regulatory clarity + Institutional interest + Mature infrastructure
            + Market growth + Capital-efficient model
          </p>
          <p className="text-center text-green-400 font-semibold mt-4 md:mt-6 text-base md:text-xl">
            This is the window to capture institutional DeFi yield
            infrastructure
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
