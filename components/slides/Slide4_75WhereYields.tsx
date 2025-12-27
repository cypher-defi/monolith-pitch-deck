"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"

export default function Slide4_75WhereYields() {
  return (
    <Slide id={6} background='bg-gradient-to-br from-black via-blue-950/20 to-black'>
      <SlideContent>
        <Title size='lg' className='mb-4 md:mb-6 text-center'>
          WHERE YIELDS COME FROM
        </Title>
        <Subtitle size='md' className='mb-6 md:mb-8 text-center text-sm md:text-base leading-tight'>
          Unlike traditional finance where yields depend on Fed rates, DeFi yields come from three independent sources
        </Subtitle>

        {/* THREE YIELD SOURCES - HORIZONTAL CARDS */}
        <div className='space-y-3 mb-6 md:mb-8 max-w-6xl mx-auto'>
          {/* 1. BORROWING DEMAND */}
          <div className='bg-gradient-to-r from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-3 md:p-4'>
            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0'>
                <div className='inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-500/20 border-2 border-blue-500'>
                  <span className='text-xl md:text-2xl font-bold text-blue-400'>1</span>
                </div>
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-baseline gap-2 mb-2'>
                  <h3 className='text-base md:text-lg font-bold'>Borrowing Demand</h3>
                  <span className='text-xs text-gray-400'>(50-70% of yield)</span>
                </div>
                <div className='grid md:grid-cols-2 gap-3'>
                  <div>
                    <div className='text-xs text-gray-300 space-y-1 leading-tight'>
                      <div>• Short cryptocurrencies (borrow USDC, sell BTC, profit when BTC falls)</div>
                      <div>• Leverage long positions • Arbitrage opportunities • Market-making</div>
                    </div>
                  </div>
                  <div>
                    <div className='p-2 bg-blue-900/30 rounded border border-blue-700/50'>
                      <div className='text-xs text-gray-300 leading-tight'>
                        <span className='font-semibold text-blue-400'>Key:</span> Higher crypto volatility = higher yields. <span className='text-blue-300'>Example:</span> March 2020 crash → Aave yields spiked to 8-12%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. PROTOCOL TOKEN INCENTIVES */}
          <div className='bg-gradient-to-r from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-3 md:p-4'>
            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0'>
                <div className='inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-purple-500/20 border-2 border-purple-500'>
                  <span className='text-xl md:text-2xl font-bold text-purple-400'>2</span>
                </div>
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-baseline gap-2 mb-2'>
                  <h3 className='text-base md:text-lg font-bold'>Protocol Token Incentives</h3>
                  <span className='text-xs text-gray-400'>(20-40% of yield)</span>
                </div>
                <div className='grid md:grid-cols-2 gap-3'>
                  <div>
                    <div className='text-xs text-gray-300 space-y-1 leading-tight'>
                      <div>• Aave distributes AAVE tokens to lenders (governance rewards)</div>
                      <div>• Curve distributes CRV • Morpho distributes MORPHO</div>
                    </div>
                  </div>
                  <div>
                    <div className='p-2 bg-purple-900/30 rounded border border-purple-700/50'>
                      <div className='text-xs text-gray-300 leading-tight'>
                        <span className='font-semibold text-purple-400'>Key:</span> INDEPENDENT of Fed rates. <span className='text-purple-300'>Example:</span> 2020-2022 zero rates → Curve still offered 6-12% from CRV
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. TRADING FEES */}
          <div className='bg-gradient-to-r from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-3 md:p-4'>
            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0'>
                <div className='inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-500/20 border-2 border-amber-500'>
                  <span className='text-xl md:text-2xl font-bold text-amber-400'>3</span>
                </div>
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-baseline gap-2 mb-2'>
                  <h3 className='text-base md:text-lg font-bold'>Trading Fees</h3>
                  <span className='text-xs text-gray-400'>(10-30% of yield)</span>
                </div>
                <div className='grid md:grid-cols-2 gap-3'>
                  <div>
                    <div className='text-xs text-gray-300 space-y-1 leading-tight'>
                      <div>• Curve 3Pool generates $47M daily volume</div>
                      <div>• 0.04% fee = $18.8K daily for LPs • 24/7 global markets</div>
                    </div>
                  </div>
                  <div>
                    <div className='p-2 bg-amber-900/30 rounded border border-amber-700/50'>
                      <div className='text-xs text-gray-300 leading-tight'>
                        <span className='font-semibold text-amber-400'>Key:</span> Unlike TradFi (9:30am-4pm ET), DeFi never closes → continuous yield generation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WHY DEFI YIELDS OUTPERFORM IN CRISES */}
        <div className='max-w-6xl mx-auto'>
          <h3 className='text-lg md:text-xl font-bold text-center mb-4 text-white'>
            Why DeFi Yields Outperform in Crises
          </h3>
          <div className='bg-gradient-to-br from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl p-4 md:p-6'>
            <div className='overflow-x-auto'>
              <table className='w-full text-xs md:text-sm'>
                <thead>
                  <tr className='border-b border-green-500/30'>
                    <th className='text-left py-2 px-2 md:px-3 font-bold text-white'>Market</th>
                    <th className='text-left py-2 px-2 md:px-3 font-bold text-white'>TradFi Yields</th>
                    <th className='text-left py-2 px-2 md:px-3 font-bold text-white'>DeFi Yields</th>
                    <th className='text-left py-2 px-2 md:px-3 font-bold text-white'>Why?</th>
                  </tr>
                </thead>
                <tbody className='text-gray-300'>
                  <tr className='border-b border-green-500/20'>
                    <td className='py-2 px-2 md:px-3'>Normal (2024-25)</td>
                    <td className='py-2 px-2 md:px-3 text-xs'>MMAs: 4-5%<br/>Bonds: 4-6%</td>
                    <td className='py-2 px-2 md:px-3 text-green-400 font-semibold'>5-8%</td>
                    <td className='py-2 px-2 md:px-3 text-xs'>Competitive</td>
                  </tr>
                  <tr className='border-b border-green-500/20'>
                    <td className='py-2 px-2 md:px-3'>Crisis (2020, 22)</td>
                    <td className='py-2 px-2 md:px-3 text-red-400 text-xs'>MMAs: 0.06%<br/>Bonds: 1-2%</td>
                    <td className='py-2 px-2 md:px-3 text-green-400 font-semibold'>5-8%</td>
                    <td className='py-2 px-2 md:px-3 text-xs'>Utilization pricing</td>
                  </tr>
                  <tr>
                    <td className='py-2 px-2 md:px-3'>Bull (2021)</td>
                    <td className='py-2 px-2 md:px-3 text-red-400 text-xs'>MMAs: 0.1%<br/>Bonds: 1-3%</td>
                    <td className='py-2 px-2 md:px-3 text-green-400 font-semibold'>8-15%</td>
                    <td className='py-2 px-2 md:px-3 text-xs'>Extreme leverage</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='mt-4 pt-4 border-t border-green-500/30'>
              <p className='text-center text-sm md:text-base font-bold text-green-400 mb-2'>
                Result: DeFi yields are COUNTER-CYCLICAL to traditional finance
              </p>
              <p className='text-center text-xs md:text-sm text-gray-300 mb-3 leading-tight'>
                When Fed cuts rates to zero and banks pay 0.1%, DeFi protocols maintain 5-12% yields because:
              </p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 text-center'>
                <div className='p-2 bg-green-900/20 rounded border border-green-700/50'>
                  <div className='text-xs text-gray-300 leading-tight'>
                    <span className='font-semibold text-green-400'>1.</span> Crypto volatility increases
                  </div>
                </div>
                <div className='p-2 bg-green-900/20 rounded border border-green-700/50'>
                  <div className='text-xs text-gray-300 leading-tight'>
                    <span className='font-semibold text-green-400'>2.</span> Protocols boost incentives
                  </div>
                </div>
                <div className='p-2 bg-green-900/20 rounded border border-green-700/50'>
                  <div className='text-xs text-gray-300 leading-tight'>
                    <span className='font-semibold text-green-400'>3.</span> 24/7 markets never close
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
