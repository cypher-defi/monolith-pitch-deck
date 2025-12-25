"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import TwoColumnGrid from "@/components/TwoColumnGrid"

export default function Slide22CrisisInsurance() {
  return (
    <Slide id={22} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-8 text-center'>
          CRISIS INSURANCE WITH POSITIVE CARRY
        </Title>
        <Subtitle size='md' className='mb-12 text-center'>
          The only treasury strategy that pays you to hold it
        </Subtitle>

        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
            The Asymmetric Payoff
          </h2>

          <TwoColumnGrid className='gap-8 mb-8'>
            <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8'>
              <h3 className='text-xl md:text-2xl font-bold mb-4 text-blue-300 text-center'>
                NORMAL TIMES (2025)
              </h3>
              <ul className='space-y-3 text-base text-gray-300'>
                <li className='flex gap-2' style={{ alignItems: "baseline" }}>
                  <span className='text-blue-400 flex-shrink-0'>•</span>
                  <span>
                    <span className='font-semibold'>TradFi:</span> 3-4%
                    (corporate bonds/MMAs)
                  </span>
                </li>
                <li className='flex gap-2' style={{ alignItems: "baseline" }}>
                  <span className='text-blue-400 flex-shrink-0'>•</span>
                  <span>
                    <span className='font-semibold'>
                      Monolith Conservative:
                    </span>{" "}
                    3-5%
                  </span>
                </li>
                <li className='flex gap-2' style={{ alignItems: "baseline" }}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span>
                    <span className='font-semibold'>Edge:</span> +1-2% modest
                    outperformance
                  </span>
                </li>
                <li className='flex gap-2' style={{ alignItems: "baseline" }}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span className='text-green-400 font-semibold'>
                    Cost of insurance: $0 (you're getting paid)
                  </span>
                </li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-8'>
              <h3 className='text-xl md:text-2xl font-bold mb-4 text-green-300 text-center'>
                CRISIS TIMES (2026-2027)
              </h3>
              <ul className='space-y-3 text-base text-gray-300'>
                <li className='flex gap-2' style={{ alignItems: "baseline" }}>
                  <span className='text-red-400 flex-shrink-0'>•</span>
                  <span>
                    <span className='font-semibold'>TradFi:</span> 0.10-0.50%
                    (Fed emergency cuts)
                  </span>
                </li>
                <li className='flex gap-2' style={{ alignItems: "baseline" }}>
                  <span className='text-green-400 flex-shrink-0'>•</span>
                  <span>
                    <span className='font-semibold'>
                      Monolith Conservative:
                    </span>{" "}
                    2-4% (protocols maintain)
                  </span>
                </li>
                <li className='flex gap-2' style={{ alignItems: "baseline" }}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span>
                    <span className='font-semibold'>Edge:</span> 5-10x massive
                    outperformance
                  </span>
                </li>
                <li className='flex gap-2' style={{ alignItems: "baseline" }}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span className='text-green-400 font-bold'>
                    This is when the hedge activates
                  </span>
                </li>
              </ul>
            </div>
          </TwoColumnGrid>
        </div>

        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
            Why Monolith Maintains Yields in Crises
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6'>
              <h4 className='text-lg md:text-xl font-semibold mb-3 text-blue-400'>
                <span className='inline-flex gap-2 items-baseline'>
                  <span className='flex-shrink-0'>✓</span>
                  <span>Utilization-based pricing</span>
                </span>
              </h4>
              <p className='text-gray-300 text-sm'>
                Borrowing demand spikes during volatility (shorts, hedges,
                liquidations)
              </p>
            </div>

            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6'>
              <h4 className='text-lg md:text-xl font-semibold mb-3 text-blue-400'>
                <span className='inline-flex gap-2 items-baseline'>
                  <span className='flex-shrink-0'>✓</span>
                  <span>Protocol token incentives</span>
                </span>
              </h4>
              <p className='text-gray-300 text-sm'>
                Aave, Curve, Morpho subsidize yields independent of Fed rates
              </p>
            </div>

            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6'>
              <h4 className='text-lg md:text-xl font-semibold mb-3 text-blue-400'>
                <span className='inline-flex gap-2 items-baseline'>
                  <span className='flex-shrink-0'>✓</span>
                  <span>Stablecoin accessibility premium</span>
                </span>
              </h4>
              <p className='text-gray-300 text-sm'>
                24/7 liquidity when banks close, cross-border access when
                capital controls tighten
              </p>
            </div>

            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6'>
              <h4 className='text-lg md:text-xl font-semibold mb-3 text-blue-400'>
                <span className='inline-flex gap-2 items-baseline'>
                  <span className='flex-shrink-0'>✓</span>
                  <span>Protocol diversification</span>
                </span>
              </h4>
              <p className='text-gray-300 text-sm'>
                No single point of failure, real-time rebalancing captures
                spread volatility
              </p>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-blue-500/50 rounded-xl p-8'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
            Example: $20M Institutional Allocation
          </h2>

          <TwoColumnGrid className='gap-8'>
            <div>
              <h3 className='text-lg md:text-xl font-semibold mb-4 text-blue-300'>
                Normal Scenario (2025-2026)
              </h3>
              <div className='space-y-2 text-sm text-gray-300'>
                <p>
                  Traditional MMA: $20M × 0.5-1% ={" "}
                  <span className='font-semibold'>$100-200K annually</span>
                </p>
                <p>
                  Monolith Conservative: $20M × 3-5% ={" "}
                  <span className='font-semibold text-green-400'>
                    $600K-$1M annually
                  </span>
                </p>
                <p className='text-lg md:text-xl font-bold text-green-400 mt-4'>
                  Outperformance: +$400-800K per year
                </p>
              </div>
            </div>

            <div>
              <h3 className='text-lg md:text-xl font-semibold mb-4 text-green-300'>
                Crisis Scenario (2026-2027)
              </h3>
              <div className='space-y-2 text-sm text-gray-300'>
                <p>
                  Traditional MMA: $20M × 0.10-0.50% ={" "}
                  <span className='font-semibold'>$20-100K annually</span>
                </p>
                <p>
                  Monolith Conservative: $20M × 2-4% ={" "}
                  <span className='font-semibold text-green-400'>
                    $400-800K annually
                  </span>
                </p>
                <p className='text-lg md:text-xl font-bold text-green-400 mt-4'>
                  Outperformance: +$300-700K per year
                </p>
              </div>
            </div>
          </TwoColumnGrid>

          <blockquote className='mt-8 text-lg md:text-xl italic text-gray-300 border-l-4 border-green-500 pl-6 text-center'>
            "It's not speculation - it's crisis insurance that happens to have
            positive carry."
          </blockquote>
        </div>
      </SlideContent>
    </Slide>
  )
}
