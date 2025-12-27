"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"
import Icon from "@/components/Icon"

export default function Slide4_5ThreeTierVault() {
  return (
    <Slide id={5} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-6 md:mb-12 text-center'>
          THREE-TIER VAULT STRATEGY
        </Title>
        <Subtitle size='md' className='mb-8 md:mb-16 text-center'>
          Institutional clients choose risk-return profile based on treasury objectives
        </Subtitle>

        {/* THREE VAULT TIERS */}
        <ThreeColumnGrid className='gap-4 md:gap-8 mb-8 md:mb-12'>
          {/* CONSERVATIVE VAULT */}
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4 md:p-8'>
            <div className='text-center mb-4 md:mb-6'>
              <Icon
                name='shield'
                size={40}
                className='text-blue-400 mx-auto mb-2 md:mb-3'
              />
              <h3 className='text-xl md:text-2xl font-bold'>Conservative Vault</h3>
              <div className='mt-2 md:mt-3 p-2 md:p-3 bg-blue-900/30 rounded-lg'>
                <div className='text-2xl md:text-3xl font-bold text-blue-300'>5-8%</div>
                <div className='text-xs md:text-sm text-gray-400'>Net Yield</div>
              </div>
            </div>

            <div className='mb-4 md:mb-6'>
              <h4 className='text-sm md:text-base font-bold text-blue-300 mb-2 md:mb-3'>Key Characteristics:</h4>
              <div className='space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-300'>
                <div className='flex items-start gap-2'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Capital preservation + predictable yield</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Zero leverage, battle-tested protocols only</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Aave V3, Morpho, Curve diversification</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>48-hour liquidity guarantee</span>
                </div>
              </div>
            </div>

            <div className='p-3 md:p-4 bg-blue-900/30 rounded-lg text-center border border-blue-700/50'>
              <div className='text-xs md:text-sm font-semibold text-blue-300'>Ideal For:</div>
              <div className='text-xs text-gray-400 mt-1 leading-tight'>Corporate treasurers, regional banks, conservative family offices</div>
            </div>
          </div>

          {/* BALANCED VAULT */}
          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-4 md:p-8'>
            <div className='text-center mb-4 md:mb-6'>
              <Icon
                name='trending'
                size={40}
                className='text-purple-400 mx-auto mb-2 md:mb-3'
              />
              <h3 className='text-xl md:text-2xl font-bold'>Balanced Vault</h3>
              <div className='mt-2 md:mt-3 p-2 md:p-3 bg-purple-900/30 rounded-lg'>
                <div className='text-2xl md:text-3xl font-bold text-purple-300'>8-12%</div>
                <div className='text-xs md:text-sm text-gray-400'>Net Yield</div>
              </div>
            </div>

            <div className='mb-4 md:mb-6'>
              <h4 className='text-sm md:text-base font-bold text-purple-300 mb-2 md:mb-3'>Key Characteristics:</h4>
              <div className='space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-300'>
                <div className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Attractive yields with institutional risk controls</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Selective leverage (max 1.5x)</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Morpho, Curve, Aave diversification</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>72-hour liquidity, weekly rebalancing</span>
                </div>
              </div>
            </div>

            <div className='p-3 md:p-4 bg-purple-900/30 rounded-lg text-center border border-purple-700/50'>
              <div className='text-xs md:text-sm font-semibold text-purple-300'>Ideal For:</div>
              <div className='text-xs text-gray-400 mt-1 leading-tight'>Fintech platforms, crypto funds, growth treasurers</div>
            </div>
          </div>

          {/* AGGRESSIVE VAULT */}
          <div className='bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-4 md:p-8'>
            <div className='text-center mb-4 md:mb-6'>
              <Icon
                name='lightning'
                size={40}
                className='text-amber-400 mx-auto mb-2 md:mb-3'
              />
              <h3 className='text-xl md:text-2xl font-bold'>Aggressive Vault</h3>
              <div className='mt-2 md:mt-3 p-2 md:p-3 bg-amber-900/30 rounded-lg'>
                <div className='text-2xl md:text-3xl font-bold text-amber-300'>12-22%</div>
                <div className='text-xs md:text-sm text-gray-400'>Net Yield</div>
              </div>
            </div>

            <div className='mb-4 md:mb-6'>
              <h4 className='text-sm md:text-base font-bold text-amber-300 mb-2 md:mb-3'>Key Characteristics:</h4>
              <div className='space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-300'>
                <div className='flex items-start gap-2'>
                  <span className='text-amber-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Maximum yield for DeFi-native institutions</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-amber-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Maximum leverage: 2x with auto-deleveraging</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-amber-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Morpho, Curve CRV-boosted, Convex</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-amber-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>5-7 day liquidity, active monitoring</span>
                </div>
              </div>
            </div>

            <div className='p-3 md:p-4 bg-amber-900/30 rounded-lg text-center border border-amber-700/50'>
              <div className='text-xs md:text-sm font-semibold text-amber-300'>Ideal For:</div>
              <div className='text-xs text-gray-400 mt-1 leading-tight'>Crypto hedge funds, family offices, DeFi treasuries</div>
            </div>
          </div>
        </ThreeColumnGrid>

        {/* FOOTER NOTE */}
        <div className='max-w-6xl mx-auto p-4 md:p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl'>
          <p className='text-center text-gray-300 text-xs md:text-sm mb-2 md:mb-3 leading-tight'>
            <span className='font-bold text-green-400'>All vaults:</span> Non-custodial + InsurAce protocol coverage + 24/7 monitoring + Quarterly audits
          </p>
          <p className='text-center text-xs text-blue-400 font-semibold mb-1 md:mb-2 leading-tight'>
            Conservative tier is the core institutional allocation. Balanced and Aggressive tiers are optional, client-mandated strategies.
          </p>
          <p className='text-center text-[10px] md:text-xs text-gray-500 italic leading-tight'>
            Detailed protocol allocations and waterfall strategies available in Appendix
          </p>
        </div>
      </SlideContent>
    </Slide>
  )
}
