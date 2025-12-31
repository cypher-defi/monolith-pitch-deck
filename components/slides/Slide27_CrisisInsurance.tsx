"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import TwoColumnGrid from "@/components/TwoColumnGrid";

export default function Slide27_CrisisInsurance() {
  return (
    <Slide id={25} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-8 text-center">
          APPENDIX E-2: DIFFERENT CORRELATION WITH POSITIVE CARRY
        </Title>
        <Subtitle size="md" className="mb-12 text-center">
          DeFi yields don't track Fed policy - offering portfolio
          diversification during rate easing cycles
        </Subtitle>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Performance Across Different Market Environments
          </h2>

          <TwoColumnGrid className="gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-300 text-center">
                FED EASING (2020)
              </h3>
              <ul className="space-y-3 text-base text-gray-300">
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-red-400 flex-shrink-0">•</span>
                  <span>
                    <span className="font-semibold">TradFi:</span> 0.06-0.10%
                    (MMAs/savings)
                  </span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-green-400 flex-shrink-0">•</span>
                  <span>
                    <span className="font-semibold">DeFi Protocols:</span> 4-8%
                    (Aave, Compound)
                  </span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>
                    <span className="font-semibold">Result:</span> 10-50x
                    outperformance
                  </span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span className="text-blue-400 font-semibold">
                    Utilization pricing independent of Fed rates
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-amber-300 text-center">
                FED HIKING (2022)
              </h3>
              <ul className="space-y-3 text-base text-gray-300">
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-green-400 flex-shrink-0">•</span>
                  <span>
                    <span className="font-semibold">TradFi:</span> 4-5%
                    (MMAs/corporate bonds)
                  </span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-red-400 flex-shrink-0">•</span>
                  <span>
                    <span className="font-semibold">DeFi Protocols:</span> 2-8%
                    (compressed during crypto winter)
                  </span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-amber-400 flex-shrink-0">✓</span>
                  <span>
                    <span className="font-semibold">Result:</span> TradFi
                    outperformed
                  </span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-amber-400 flex-shrink-0">•</span>
                  <span className="text-amber-400 font-semibold">
                    Different correlation, not always better
                  </span>
                </li>
              </ul>
            </div>
          </TwoColumnGrid>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Why DeFi Yields Can Diverge from Fed Policy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6">
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-blue-400">
                <span className="inline-flex gap-2 items-baseline">
                  <span className="flex-shrink-0">✓</span>
                  <span>Utilization-based pricing</span>
                </span>
              </h4>
              <p className="text-gray-300 text-sm">
                Borrowing demand spikes during volatility (shorts, hedges,
                liquidations)
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6">
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-blue-400">
                <span className="inline-flex gap-2 items-baseline">
                  <span className="flex-shrink-0">✓</span>
                  <span>Protocol token incentives</span>
                </span>
              </h4>
              <p className="text-gray-300 text-sm">
                Aave, Curve, Morpho subsidize yields independent of Fed rates
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6">
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-blue-400">
                <span className="inline-flex gap-2 items-baseline">
                  <span className="flex-shrink-0">✓</span>
                  <span>Stablecoin accessibility premium</span>
                </span>
              </h4>
              <p className="text-gray-300 text-sm">
                24/7 liquidity when banks close, cross-border access when
                capital controls tighten
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6">
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-blue-400">
                <span className="inline-flex gap-2 items-baseline">
                  <span className="flex-shrink-0">✓</span>
                  <span>Protocol diversification</span>
                </span>
              </h4>
              <p className="text-gray-300 text-sm">
                No single point of failure, real-time rebalancing captures
                spread volatility
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-blue-500/50 rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Example: $20M Institutional Allocation
          </h2>

          <TwoColumnGrid className="gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-300">
                Fed Easing Scenario (2020 example)
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  Traditional MMA: $20M × 0.06% ={" "}
                  <span className="font-semibold">$12K annually</span>
                </p>
                <p>
                  DeFi Protocols: $20M × 4-6% ={" "}
                  <span className="font-semibold text-green-400">
                    $800K-$1.2M annually
                  </span>
                </p>
                <p className="text-lg md:text-xl font-bold text-green-400 mt-4">
                  Outperformance: +$788K-$1.19M per year
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-amber-300">
                Fed Hiking Scenario (2022 example)
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  Traditional MMA: $20M × 4-5% ={" "}
                  <span className="font-semibold text-green-400">
                    $800K-$1M annually
                  </span>
                </p>
                <p>
                  DeFi Protocols: $20M × 2-6% ={" "}
                  <span className="font-semibold">$400K-$1.2M annually</span>
                </p>
                <p className="text-lg md:text-xl font-bold text-amber-400 mt-4">
                  TradFi competitive or better
                </p>
              </div>
            </div>
          </TwoColumnGrid>

          <blockquote className="mt-8 text-lg md:text-xl italic text-gray-300 border-l-4 border-blue-500 pl-6 text-center">
            "Different correlation profile - performs best during Fed easing +
            crypto market activity, compresses during traditional economic
            strength."
          </blockquote>
        </div>
      </SlideContent>
    </Slide>
  );
}
