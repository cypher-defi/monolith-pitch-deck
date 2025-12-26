"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"
import Icon from "@/components/Icon"

export default function Slide5Market() {
  return (
    <Slide id={5} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-12 text-center'>
          MARKET SIZE & OPPORTUNITY
        </Title>

        {/* TOP: MARKET OVERVIEW */}
        <div className='max-w-6xl mx-auto mb-16'>
          <ThreeColumnGrid className='gap-8'>
            <div className='text-center p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-2 border-blue-500/50 rounded-xl'>
              <div className='text-7xl font-bold text-blue-400 mb-3'>$310B</div>
              <div className='text-xl text-gray-300 mb-2'>
                Total Stablecoin Market
              </div>
              <div className='text-sm text-gray-500'>Growing 50%+ YoY</div>
            </div>

            <div className='text-center p-8 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500/50 rounded-xl'>
              <div className='text-7xl font-bold text-amber-400 mb-3'>$93B</div>
              <div className='text-xl text-gray-300 mb-2'>
                Institutional Holdings
              </div>
              <div className='text-sm text-gray-500'>
                Corporate treasuries + banks • Idle balances increase during
                market stress
              </div>
            </div>

            <div className='text-center p-8 bg-gradient-to-br from-red-500/10 to-red-600/5 border-2 border-red-500/50 rounded-xl'>
              <div className='text-7xl font-bold text-red-400 mb-3'>0%</div>
              <div className='text-xl text-gray-300 mb-2'>
                What They're Earning
              </div>
              <div className='text-sm text-gray-500'>
                vs 5-22% available in DeFi*
              </div>
              <div className='text-xs text-gray-600 mt-1'>
                *Across Conservative (5-8%), Balanced (8-12%), and Aggressive (12-22%) tiers
              </div>
            </div>
          </ThreeColumnGrid>
        </div>

        {/* THE YIELD GAP */}
        <div className='max-w-5xl mx-auto mb-16'>
          <div className='bg-gradient-to-r from-red-500/10 via-amber-500/10 to-green-500/10 border-2 border-amber-500/50 rounded-xl p-8'>
            <h3 className='text-2xl font-bold text-center mb-6 text-white'>
              The Institutional Yield Gap
            </h3>
            <div className='grid grid-cols-3 gap-6 items-center'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-red-400 mb-2'>0%</div>
                <div className='text-sm text-gray-400 mb-3'>
                  Current Reality
                </div>
                <div className='text-xs text-gray-500'>
                  Idle USDC/USDT in wallets
                </div>
              </div>
              <div className='flex justify-center'>
                <Icon name='arrow-right' size={40} className='text-amber-400' />
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-green-400 mb-2'>
                  5-22%
                </div>
                <div className='text-sm text-gray-400 mb-3'>
                  DeFi Opportunity
                </div>
                <div className='text-xs text-gray-500'>
                  Risk-adjusted yields available
                </div>
              </div>
            </div>
            <div className='mt-6 pt-6 border-t border-amber-500/30 text-center'>
              <p className='text-lg text-amber-400 font-bold'>
                $93B × 5% avg yield = $4.65B in annual returns left on the table
              </p>
              <p className='text-sm text-gray-500 mt-2'>
                Institutions can't access this today due to technical barriers
                &amp; compliance concerns
              </p>
            </div>
          </div>
        </div>

        {/* REVENUE SCENARIOS */}
        <div className='mb-16'>
          <h3 className='text-3xl font-bold text-center mb-4'>
            Revenue Growth: Tiered Pricing Model
          </h3>
          <p className='text-center text-gray-400 mb-10 text-lg'>
            Volume incentives encourage larger allocations while maintaining
            profitability
          </p>

          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
              {/* PHASE 1: MONTH 6-9 */}
              <div className='bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-600 rounded-xl p-6'>
                <div className='text-center mb-4'>
                  <div className='inline-block px-4 py-2 bg-slate-700 rounded-full mb-3'>
                    <span className='text-sm font-semibold text-slate-300'>
                      MONTH 6-9
                    </span>
                  </div>
                  <div className='text-4xl font-bold text-white mb-2'>
                    $10-20M
                  </div>
                  <div className='text-sm text-gray-400'>
                    AUM - Pilot Launch
                  </div>
                </div>
                <div className='border-t border-slate-700 pt-4 mt-4 space-y-2 text-xs'>
                  <div className='flex justify-between'>
                    <span className='text-gray-400'>Customers:</span>
                    <span className='text-white'>1</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-400'>Mgmt Fees:</span>
                    <span className='text-blue-400'>$238K</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-400'>Implementation:</span>
                    <span className='text-white'>$0</span>
                  </div>
                  <div className='flex justify-between font-semibold'>
                    <span className='text-gray-400'>Total Revenue:</span>
                    <span className='text-blue-400'>$238K</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-400'>Operating Costs:</span>
                    <span className='text-amber-400'>$341K</span>
                  </div>
                  <div className='flex justify-between pt-2 border-t border-slate-700 font-bold'>
                    <span className='text-red-400'>Net Profit:</span>
                    <span className='text-red-400'>-$103K</span>
                  </div>
                  <div className='text-center text-gray-500 mt-2 italic'>
                    Pilot validation phase
                  </div>
                </div>
              </div>

              {/* PHASE 2: MONTH 9-12 */}
              <div className='bg-gradient-to-br from-amber-900 to-amber-950 border-2 border-amber-600 rounded-xl p-6'>
                <div className='text-center mb-4'>
                  <div className='inline-block px-4 py-2 bg-amber-700 rounded-full mb-3'>
                    <span className='text-sm font-semibold text-white'>
                      MONTH 9-12
                    </span>
                  </div>
                  <div className='text-4xl font-bold text-white mb-2'>
                    $40-50M
                  </div>
                  <div className='text-sm text-gray-300'>AUM - Breakeven</div>
                </div>
                <div className='border-t border-amber-800 pt-4 mt-4 space-y-2 text-xs'>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Customers:</span>
                    <span className='text-white'>2</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Mgmt Fees:</span>
                    <span className='text-blue-400'>$675K</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Implementation:</span>
                    <span className='text-white'>$50K</span>
                  </div>
                  <div className='flex justify-between font-semibold'>
                    <span className='text-gray-300'>Total Revenue:</span>
                    <span className='text-blue-400'>$725K</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Operating Costs:</span>
                    <span className='text-amber-400'>$650K</span>
                  </div>
                  <div className='flex justify-between pt-2 border-t border-amber-800 font-bold'>
                    <span className='text-green-400'>Net Profit:</span>
                    <span className='text-green-400'>+$75K ✓</span>
                  </div>
                  <div className='text-center text-gray-400 mt-2 italic'>
                    Operating breakeven
                  </div>
                </div>
              </div>

              {/* PHASE 3: MONTH 12-15 */}
              <div className='bg-gradient-to-br from-blue-900 to-blue-950 border-2 border-blue-500 rounded-xl p-6'>
                <div className='text-center mb-4'>
                  <div className='inline-block px-4 py-2 bg-blue-600 rounded-full mb-3'>
                    <span className='text-sm font-semibold text-white'>
                      MONTH 12-15
                    </span>
                  </div>
                  <div className='text-4xl font-bold text-white mb-2'>
                    $100M
                  </div>
                  <div className='text-sm text-gray-300'>AUM - Profitable</div>
                </div>
                <div className='border-t border-blue-800 pt-4 mt-4 space-y-2 text-xs'>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Customers:</span>
                    <span className='text-white'>3</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Mgmt Fees:</span>
                    <span className='text-blue-400'>$1.5M</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Implementation:</span>
                    <span className='text-white'>$100K</span>
                  </div>
                  <div className='flex justify-between font-semibold'>
                    <span className='text-gray-300'>Total Revenue:</span>
                    <span className='text-blue-400'>$1.6M</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Operating Costs:</span>
                    <span className='text-amber-400'>$890K</span>
                  </div>
                  <div className='flex justify-between pt-2 border-t border-blue-800 font-bold'>
                    <span className='text-green-400'>Net Profit:</span>
                    <span className='text-green-400'>+$710K ✓</span>
                  </div>
                  <div className='text-center text-green-400 mt-2 italic'>
                    44% margin
                  </div>
                </div>
              </div>

              {/* PHASE 4: YEAR 2 */}
              <div className='bg-gradient-to-br from-purple-900 to-purple-950 border-2 border-purple-500 rounded-xl p-6'>
                <div className='text-center mb-4'>
                  <div className='inline-block px-4 py-2 bg-purple-600 rounded-full mb-3'>
                    <span className='text-sm font-semibold text-white'>
                      YEAR 2
                    </span>
                  </div>
                  <div className='text-4xl font-bold text-white mb-2'>
                    $300-400M
                  </div>
                  <div className='text-sm text-gray-300'>
                    AUM - Series A Ready
                  </div>
                </div>
                <div className='border-t border-purple-800 pt-4 mt-4 space-y-2 text-xs'>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Customers:</span>
                    <span className='text-white'>5-6</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Mgmt Fees:</span>
                    <span className='text-blue-400'>$3.88-4.5M</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Implementation:</span>
                    <span className='text-white'>$105-140K</span>
                  </div>
                  <div className='flex justify-between font-semibold'>
                    <span className='text-gray-300'>Total Revenue:</span>
                    <span className='text-blue-400'>$3.98-4.64M</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Operating Costs:</span>
                    <span className='text-amber-400'>$1.8M</span>
                  </div>
                  <div className='flex justify-between pt-2 border-t border-purple-800 font-bold'>
                    <span className='text-green-400'>Net Profit:</span>
                    <span className='text-green-400'>+$2.18-2.84M</span>
                  </div>
                  <div className='text-center text-green-400 mt-2 italic'>
                    55-61% margin
                  </div>
                </div>
              </div>

              {/* PHASE 5: YEAR 3 */}
              <div className='bg-gradient-to-br from-green-900 to-green-950 border-2 border-green-500 rounded-xl p-6'>
                <div className='text-center mb-4'>
                  <div className='inline-block px-4 py-2 bg-green-600 rounded-full mb-3'>
                    <span className='text-sm font-semibold text-white'>
                      YEAR 3
                    </span>
                  </div>
                  <div className='text-4xl font-bold text-white mb-2'>
                    $800M-1B
                  </div>
                  <div className='text-sm text-gray-300'>AUM - At Scale</div>
                </div>
                <div className='border-t border-green-800 pt-4 mt-4 space-y-2 text-xs'>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Customers:</span>
                    <span className='text-white'>8-10</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Mgmt Fees:</span>
                    <span className='text-blue-400'>$10.5-11.1M</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Implementation:</span>
                    <span className='text-white'>$105-175K</span>
                  </div>
                  <div className='flex justify-between font-semibold'>
                    <span className='text-gray-300'>Total Revenue:</span>
                    <span className='text-blue-400'>$10.6-11.3M</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Operating Costs:</span>
                    <span className='text-amber-400'>$4M</span>
                  </div>
                  <div className='flex justify-between pt-2 border-t border-green-800 font-bold'>
                    <span className='text-green-400'>Net Profit:</span>
                    <span className='text-green-400'>+$6.6-7.3M</span>
                  </div>
                  <div className='text-center text-green-400 mt-2 italic'>
                    62-65% margin
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTNOTE */}
          <div className='max-w-7xl mx-auto mt-6 p-4 bg-gray-800/30 border border-gray-700 rounded-lg'>
            <p className='text-xs text-gray-400 text-center'>
              ✓ Pricing rewards scale while maintaining 60-70% net margins at all tiers
              <br/>
              <span className='text-gray-500'>
                *Revenue projections based on Conservative vault tier adoption. All customers assumed to use Conservative tier (5-8% yields) regardless of AUM size. Actual revenue same across all vault tiers since management fee is based on AUM size, not vault tier selected.
              </span>
            </p>
          </div>
        </div>

        {/* WHY US - THE MOAT */}
        <div className='max-w-5xl mx-auto'>
          <div className='bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border-2 border-green-500/50 rounded-xl p-8'>
            <h4 className='text-2xl font-bold text-center text-white mb-6'>
              Why Institutions Can't Do This Without Us
            </h4>
            <div className='grid grid-cols-3 gap-6 text-center mb-6'>
              <div>
                <Icon
                  name='x'
                  size={32}
                  className='text-red-400 mx-auto mb-3'
                />
                <div className='text-sm text-gray-300'>
                  No in-house DeFi expertise
                </div>
              </div>
              <div>
                <Icon
                  name='x'
                  size={32}
                  className='text-red-400 mx-auto mb-3'
                />
                <div className='text-sm text-gray-300'>
                  6-12 months to build compliance
                </div>
              </div>
              <div>
                <Icon
                  name='x'
                  size={32}
                  className='text-red-400 mx-auto mb-3'
                />
                <div className='text-sm text-gray-300'>
                  Can't evaluate protocol risk
                </div>
              </div>
            </div>
            <div className='pt-6 border-t border-green-500/30 text-center'>
              <p className='text-lg text-green-400 font-semibold'>
                ✓ Turnkey infrastructure • ✓ Compliance-ready • ✓ Risk-managed
                yields • ✓ White-label platform
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}
