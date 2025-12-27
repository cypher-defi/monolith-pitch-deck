"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"
import Icon from "@/components/Icon"

export default function Slide5Market() {
  return (
    <Slide id={7} background='bg-black'>
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
          <p className='text-center text-gray-400 mb-4 text-lg'>
            Volume incentives + tier-based pricing create scalable unit economics
          </p>
          <div className='text-center text-sm text-gray-300 mb-8 max-w-4xl mx-auto'>
            <p className='mb-2'><strong className='text-blue-400'>Pricing Structure:</strong></p>
            <p>• <strong>Conservative tier:</strong> 1.25% base (volume discounts: 1.75% → 0.75%)</p>
            <p>• <strong>Balanced tier:</strong> 1.50% base (volume discounts: 2.00% → 1.00%)</p>
            <p>• <strong>Aggressive tier:</strong> 1.75% base (volume discounts: 2.25% → 1.25%)</p>
            <p className='mt-4 text-xs text-gray-500 italic'>
              Financial model uses blended fee assumption across client tiers, skewed toward conservative allocations.
            </p>
          </div>
          <p className='text-center text-gray-400 mb-10 text-base'>
            <strong className='text-white'>Conservative Tier Projections (Base Case):</strong>
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

          {/* TIER MIX UPSIDE SCENARIOS */}
          <div className='max-w-7xl mx-auto mt-8 p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-amber-500/10 border-2 border-blue-500/50 rounded-xl'>
            <h4 className='text-xl font-bold text-center text-white mb-6'>
              Tier Mix Upside Scenarios
            </h4>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-4'>
              {/* SCENARIO 1: 100% Conservative */}
              <div className='bg-blue-900/30 border border-blue-500/50 rounded-lg p-4'>
                <h5 className='text-sm font-bold text-blue-300 mb-3 text-center'>
                  Scenario 1: 100% Conservative (Base Case)
                </h5>
                <div className='space-y-2 text-xs text-gray-300'>
                  <div className='flex justify-between'>
                    <span>Year 1 Revenue:</span>
                    <span className='text-white font-bold'>$1.25M</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Year 2 Revenue:</span>
                    <span className='text-white font-bold'>$3.75M</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Year 3 Revenue:</span>
                    <span className='text-white font-bold'>$9.75M</span>
                  </div>
                </div>
              </div>

              {/* SCENARIO 2: 70/20/10 */}
              <div className='bg-purple-900/30 border border-purple-500/50 rounded-lg p-4'>
                <h5 className='text-sm font-bold text-purple-300 mb-3 text-center'>
                  Scenario 2: 70% Cons / 20% Bal / 10% Agg (Likely)
                </h5>
                <div className='space-y-2 text-xs text-gray-300'>
                  <div className='flex justify-between'>
                    <span>Year 1 Revenue:</span>
                    <span className='text-white font-bold'>$1.4M <span className='text-green-400'>(+12%)</span></span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Year 2 Revenue:</span>
                    <span className='text-white font-bold'>$4.2M <span className='text-green-400'>(+12%)</span></span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Year 3 Revenue:</span>
                    <span className='text-white font-bold'>$10.9M <span className='text-green-400'>(+12%)</span></span>
                  </div>
                </div>
              </div>

              {/* SCENARIO 3: 50/30/20 */}
              <div className='bg-amber-900/30 border border-amber-500/50 rounded-lg p-4'>
                <h5 className='text-sm font-bold text-amber-300 mb-3 text-center'>
                  Scenario 3: 50% Cons / 30% Bal / 20% Agg (Optimistic)
                </h5>
                <div className='space-y-2 text-xs text-gray-300'>
                  <div className='flex justify-between'>
                    <span>Year 1 Revenue:</span>
                    <span className='text-white font-bold'>$1.56M <span className='text-green-400'>(+25%)</span></span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Year 2 Revenue:</span>
                    <span className='text-white font-bold'>$4.69M <span className='text-green-400'>(+25%)</span></span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Year 3 Revenue:</span>
                    <span className='text-white font-bold'>$12.2M <span className='text-green-400'>(+25%)</span></span>
                  </div>
                </div>
              </div>
            </div>

            <p className='text-center text-xs text-gray-400 mt-4'>
              ✓ Pricing rewards both volume scale AND tier optimization while maintaining 50-65% net margins
              <br/>
              ✓ All base projections use Conservative tier (most conservative revenue estimate)
            </p>
          </div>

          {/* FOOTNOTE */}
          <div className='max-w-7xl mx-auto mt-6 p-4 bg-gray-800/30 border border-gray-700 rounded-lg'>
            <p className='text-xs text-gray-400 text-center'>
              <span className='text-gray-500'>
                *Base case projections assume 100% Conservative tier adoption. Tier mix optimization provides 12-25% revenue upside with minimal cost increase (only incremental insurance premiums).
              </span>
            </p>
          </div>
        </div>

        {/* UNIT ECONOMICS */}
        <div className='max-w-6xl mx-auto mb-16'>
          <div className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-xl p-8'>
            <h4 className='text-2xl font-bold text-center text-white mb-6'>
              Unit Economics (Per Institutional Client)
            </h4>
            <div className='max-w-4xl mx-auto'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='border-b border-blue-500/30'>
                    <th className='p-3 text-left text-gray-400'>Metric</th>
                    <th className='p-3 text-left text-gray-400'>Assumption (Target Range)</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-blue-500/20'>
                  <tr>
                    <td className='p-3 text-gray-300'>Avg Client AUM</td>
                    <td className='p-3 text-white font-semibold'>$25–50M</td>
                  </tr>
                  <tr>
                    <td className='p-3 text-gray-300'>Avg Fee (blended)</td>
                    <td className='p-3 text-white font-semibold'>0.75–1.25%</td>
                  </tr>
                  <tr>
                    <td className='p-3 text-gray-300'>Annual Revenue / Client</td>
                    <td className='p-3 text-green-400 font-bold'>$190k–$500k</td>
                  </tr>
                  <tr>
                    <td className='p-3 text-gray-300'>Gross Margin</td>
                    <td className='p-3 text-white font-semibold'>70–85%</td>
                  </tr>
                  <tr>
                    <td className='p-3 text-gray-300'>Client Acquisition Cost (CAC)</td>
                    <td className='p-3 text-white font-semibold'>$60k–$120k</td>
                  </tr>
                  <tr>
                    <td className='p-3 text-gray-300'>Payback Period</td>
                    <td className='p-3 text-green-400 font-bold'>6–9 months</td>
                  </tr>
                  <tr>
                    <td className='p-3 text-gray-300'>Annual Churn (initial cohorts)</td>
                    <td className='p-3 text-green-400 font-bold'>&lt;5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='text-center text-xs text-gray-400 mt-6'>
              High-value, low-churn institutional infrastructure model with strong unit economics
            </p>
            <p className='text-center text-xs font-semibold text-blue-400 mt-4'>
              AUM growth is driven by a small number of large institutional clients ($20-50M+ per allocation) rather than high client volume.
            </p>
            <p className='text-center text-xs italic text-gray-500 mt-2'>
              Note: Tier range reflects strategic vault design and risk tolerance, not guaranteed returns. All yields subject to market conditions and protocol performance.
            </p>
          </div>
        </div>

        {/* SCENARIO SENSITIVITY ANALYSIS */}
        <div className='max-w-7xl mx-auto mb-16'>
          <div className='bg-gradient-to-r from-purple-500/10 to-green-500/10 border-2 border-purple-500/50 rounded-xl p-8'>
            <h4 className='text-2xl font-bold text-center text-white mb-6'>
              Scenario Sensitivity (Year 2)
            </h4>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='border-b-2 border-purple-500/30'>
                    <th className='p-4 text-left text-gray-400'>Metric</th>
                    <th className='p-4 text-center text-red-300'>Conservative</th>
                    <th className='p-4 text-center text-blue-300'>Base Case</th>
                    <th className='p-4 text-center text-green-300'>Aggressive</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-purple-500/20'>
                  <tr>
                    <td className='p-4 text-gray-300'>Clients Live</td>
                    <td className='p-4 text-center text-white'>6</td>
                    <td className='p-4 text-center text-white font-bold'>12</td>
                    <td className='p-4 text-center text-white'>20</td>
                  </tr>
                  <tr>
                    <td className='p-4 text-gray-300'>Avg AUM / Client</td>
                    <td className='p-4 text-center text-white'>$20M</td>
                    <td className='p-4 text-center text-white font-bold'>$35M</td>
                    <td className='p-4 text-center text-white'>$50M</td>
                  </tr>
                  <tr>
                    <td className='p-4 text-gray-300'>Total AUM</td>
                    <td className='p-4 text-center text-white'>$120M</td>
                    <td className='p-4 text-center text-white font-bold'>$420M</td>
                    <td className='p-4 text-center text-white'>$1B</td>
                  </tr>
                  <tr>
                    <td className='p-4 text-gray-300'>Blended Fee</td>
                    <td className='p-4 text-center text-white'>0.75%</td>
                    <td className='p-4 text-center text-white font-bold'>1.0%</td>
                    <td className='p-4 text-center text-white'>1.25%</td>
                  </tr>
                  <tr className='bg-blue-900/20'>
                    <td className='p-4 text-gray-300 font-bold'>Annual Revenue</td>
                    <td className='p-4 text-center text-red-300 font-bold'>$0.9M</td>
                    <td className='p-4 text-center text-blue-300 font-bold'>$4.2M</td>
                    <td className='p-4 text-center text-green-300 font-bold'>$12.5M</td>
                  </tr>
                  <tr>
                    <td className='p-4 text-gray-300'>EBITDA Margin</td>
                    <td className='p-4 text-center text-white'>20%</td>
                    <td className='p-4 text-center text-white font-bold'>40%</td>
                    <td className='p-4 text-center text-white'>55%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg'>
              <p className='text-center text-sm text-gray-300'>
                <strong className='text-green-400'>Downside survivability:</strong> Even at 6 clients / $120M AUM, we reach profitability with 20% EBITDA margin
                <br/>
                <strong className='text-blue-400'>Base case:</strong> 12 clients / $420M AUM delivers strong 40% margins and $4.2M ARR
                <br/>
                <strong className='text-purple-400'>Upside potential:</strong> 20 clients / $1B AUM reaches 55% margins with $12.5M ARR
              </p>
            </div>
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
