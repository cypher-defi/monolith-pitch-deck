"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"
import Icon from "@/components/Icon"

export default function Slide4_75WhereYields() {
  return (
    <Slide id={6} background='bg-gradient-to-br from-black via-blue-950/20 to-black'>
      <SlideContent>
        <Title size='lg' className='mb-12 text-center'>
          WHERE YIELDS COME FROM
        </Title>
        <Subtitle size='md' className='mb-12 text-center'>
          Unlike traditional finance where yields depend on Fed rates, DeFi yields come from three independent sources
        </Subtitle>

        {/* THREE YIELD SOURCES */}
        <ThreeColumnGrid className='gap-8 mb-12'>
          {/* 1. BORROWING DEMAND */}
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6'>
            <div className='text-center mb-4'>
              <div className='inline-block p-4 rounded-full bg-blue-500/20 border-2 border-blue-500 mb-3'>
                <span className='text-3xl font-bold text-blue-400'>1</span>
              </div>
              <h3 className='text-xl font-bold'>Borrowing Demand</h3>
              <div className='text-sm text-gray-400 mt-1'>(50-70% of yield)</div>
            </div>

            <div className='mb-4'>
              <h4 className='text-sm font-bold text-blue-300 mb-2'>Why traders borrow stablecoins:</h4>
              <div className='space-y-1 text-xs text-gray-300'>
                <div>• Short cryptocurrencies (borrow USDC, sell for BTC, profit when BTC falls)</div>
                <div>• Leverage long positions (borrow USDC, buy more ETH for amplified gains)</div>
                <div>• Arbitrage opportunities (exploit price differences across exchanges)</div>
                <div>• Market-making liquidity</div>
              </div>
            </div>

            <div className='p-3 bg-blue-900/30 rounded-lg mb-3 border border-blue-700/50'>
              <div className='text-xs font-semibold text-blue-300 mb-1'>Key insight:</div>
              <div className='text-xs text-gray-300'>Higher crypto volatility = higher borrowing demand = higher yields</div>
            </div>

            <div className='p-3 bg-blue-900/20 rounded-lg text-xs text-gray-400'>
              <span className='font-semibold text-blue-400'>Example:</span> During March 2020 COVID crash, Aave USDC yields spiked to 8-12% as short demand surged
            </div>
          </div>

          {/* 2. PROTOCOL TOKEN INCENTIVES */}
          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6'>
            <div className='text-center mb-4'>
              <div className='inline-block p-4 rounded-full bg-purple-500/20 border-2 border-purple-500 mb-3'>
                <span className='text-3xl font-bold text-purple-400'>2</span>
              </div>
              <h3 className='text-xl font-bold'>Protocol Token Incentives</h3>
              <div className='text-sm text-gray-400 mt-1'>(20-40% of yield)</div>
            </div>

            <div className='mb-4'>
              <h4 className='text-sm font-bold text-purple-300 mb-2'>Why protocols subsidize yields:</h4>
              <div className='space-y-1 text-xs text-gray-300'>
                <div>• Aave distributes AAVE tokens to lenders (governance rewards)</div>
                <div>• Curve distributes CRV tokens to liquidity providers (liquidity mining)</div>
                <div>• Morpho distributes MORPHO tokens to participants (growth incentives)</div>
              </div>
            </div>

            <div className='p-3 bg-purple-900/30 rounded-lg mb-3 border border-purple-700/50'>
              <div className='text-xs font-semibold text-purple-300 mb-1'>Key insight:</div>
              <div className='text-xs text-gray-300'>These incentives are INDEPENDENT of Fed rates—maintained even when central banks cut to 0%</div>
            </div>

            <div className='p-3 bg-purple-900/20 rounded-lg text-xs text-gray-400'>
              <span className='font-semibold text-purple-400'>Example:</span> During 2020-2022 zero-rate environment, Curve pools still offered 6-12% yields from CRV emissions
            </div>
          </div>

          {/* 3. TRADING FEES */}
          <div className='bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6'>
            <div className='text-center mb-4'>
              <div className='inline-block p-4 rounded-full bg-amber-500/20 border-2 border-amber-500 mb-3'>
                <span className='text-3xl font-bold text-amber-400'>3</span>
              </div>
              <h3 className='text-xl font-bold'>Trading Fees</h3>
              <div className='text-sm text-gray-400 mt-1'>(10-30% of yield)</div>
            </div>

            <div className='mb-4'>
              <h4 className='text-sm font-bold text-amber-300 mb-2'>How DEX fees work:</h4>
              <div className='space-y-1 text-xs text-gray-300'>
                <div>• Curve 3Pool generates $47M daily volume</div>
                <div>• 0.04% trading fee = $18.8K daily fees for liquidity providers</div>
                <div>• 24/7 global markets = constant fee generation</div>
              </div>
            </div>

            <div className='p-3 bg-amber-900/30 rounded-lg mb-3 border border-amber-700/50'>
              <div className='text-xs font-semibold text-amber-300 mb-1'>Key insight:</div>
              <div className='text-xs text-gray-300'>Unlike traditional markets (9:30am-4pm ET), DeFi never closes</div>
            </div>

            <div className='p-3 bg-amber-900/20 rounded-lg text-xs text-gray-400'>
              <span className='font-semibold text-amber-400'>Note:</span> 24/7 operations means continuous yield generation across all time zones
            </div>
          </div>
        </ThreeColumnGrid>

        {/* WHY DEFI YIELDS OUTPERFORM IN CRISES */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-center mb-6 text-white'>
            Why DeFi Yields Outperform in Crises
          </h3>
          <div className='max-w-6xl mx-auto bg-gradient-to-br from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl p-6'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='border-b border-green-500/30'>
                    <th className='text-left py-3 px-4 font-bold text-white'>Market Condition</th>
                    <th className='text-left py-3 px-4 font-bold text-white'>Traditional Yields</th>
                    <th className='text-left py-3 px-4 font-bold text-white'>DeFi Yields (Monolith Conservative)</th>
                    <th className='text-left py-3 px-4 font-bold text-white'>Why?</th>
                  </tr>
                </thead>
                <tbody className='text-gray-300'>
                  <tr className='border-b border-green-500/20'>
                    <td className='py-3 px-4'>Normal (2024-2025)</td>
                    <td className='py-3 px-4'>MMAs: 4-5%<br/>Bonds: 4-6%</td>
                    <td className='py-3 px-4 text-green-400 font-semibold'>5-8%</td>
                    <td className='py-3 px-4 text-xs'>Competitive with TradFi</td>
                  </tr>
                  <tr className='border-b border-green-500/20'>
                    <td className='py-3 px-4'>Crisis (2020, 2022)</td>
                    <td className='py-3 px-4 text-red-400'>MMAs: 0.06%<br/>Bonds: 1-2%</td>
                    <td className='py-3 px-4 text-green-400 font-semibold'>5-8% maintained</td>
                    <td className='py-3 px-4 text-xs'>Utilization-based pricing + Protocol incentives</td>
                  </tr>
                  <tr>
                    <td className='py-3 px-4'>Bull Market (2021)</td>
                    <td className='py-3 px-4 text-red-400'>MMAs: 0.1%<br/>Bonds: 1-3%</td>
                    <td className='py-3 px-4 text-green-400 font-semibold'>8-15%</td>
                    <td className='py-3 px-4 text-xs'>Extreme leverage demand</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='mt-6 pt-6 border-t border-green-500/30'>
              <p className='text-center text-lg font-bold text-green-400 mb-3'>
                Result: DeFi yields are COUNTER-CYCLICAL to traditional finance
              </p>
              <p className='text-center text-sm text-gray-300 mb-2'>
                When Fed cuts rates to zero and banks pay 0.1%, DeFi protocols maintain 5-12% yields because:
              </p>
              <div className='grid grid-cols-3 gap-4 text-center mt-4'>
                <div className='p-3 bg-green-900/20 rounded-lg border border-green-700/50'>
                  <div className='text-xs text-gray-300'>
                    <span className='font-semibold text-green-400'>1.</span> Crypto volatility increases (more shorting/arbitrage activity)
                  </div>
                </div>
                <div className='p-3 bg-green-900/20 rounded-lg border border-green-700/50'>
                  <div className='text-xs text-gray-300'>
                    <span className='font-semibold text-green-400'>2.</span> Protocols double down on liquidity incentives
                  </div>
                </div>
                <div className='p-3 bg-green-900/20 rounded-lg border border-green-700/50'>
                  <div className='text-xs text-gray-300'>
                    <span className='font-semibold text-green-400'>3.</span> Global 24/7 markets never close
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}
