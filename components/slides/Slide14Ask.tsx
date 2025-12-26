"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Card from "@/components/Card"
import CardTitle from "@/components/CardTitle"
import CardContent from "@/components/CardContent"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"
import FourColumnGrid from "@/components/FourColumnGrid"

export default function Slide14Ask() {
  return (
    <Slide id={17} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-16 text-center'>
          THE ASK
        </Title>

        <ThreeColumnGrid className='mb-16 gap-8'>
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8 text-center'>
            <h3 className='text-blue-300 mb-6 text-sm font-bold uppercase'>
              Raise Amount
            </h3>
            <div className='text-5xl font-bold text-blue-300'>$1.5-2M</div>
          </div>

          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-8 text-center'>
            <h3 className='text-purple-300 mb-6 text-sm font-bold uppercase'>
              Pre-Money Valuation
            </h3>
            <div className='text-5xl font-bold text-purple-300'>$4-5M</div>
          </div>

          <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-8 text-center'>
            <h3 className='text-green-300 mb-6 text-sm font-bold uppercase'>
              Runway
            </h3>
            <div className='text-5xl font-bold text-green-300'>18 months</div>
            <div className='text-xs text-gray-400 mt-3'>
              Operating profitable at Month 12-15 ($100M AUM, 3 customers, $1.6M ARR).
              <br/>
              Cash flow positive through Month 18 with seed runway buffer.
              <br/>
              Series A ready Month 18-20.
            </div>
          </div>
        </ThreeColumnGrid>

        <h3 className='text-2xl mb-8 text-center text-white'>
          Investment Thesis
        </h3>

        <FourColumnGrid className='mb-8'>
          <Card variant='glass'>
            <CardTitle>Massive TAM, Zero Competition</CardTitle>
            <CardContent>
              $93B institutional stablecoins earning 0%. No white-label B2B
              infrastructure exists. First-mover advantage.
            </CardContent>
          </Card>
          <Card variant='glass'>
            <CardTitle>Capital Efficient</CardTitle>
            <CardContent>
              Technical founders building in-house. B2B customers generate
              $100K-$2M ARR each with &lt;5% churn.
            </CardContent>
          </Card>
          <Card variant='glass'>
            <CardTitle>Clear Path to Profitability & Series A</CardTitle>
            <CardContent>
              <strong>Month 12-15:</strong> 3 customers, $100M AUM,{" "}
              <strong>$1.6M ARR, profitable</strong> (+$710K profit)
              <br />
              <br />
              <strong>Month 18-24:</strong> 5-6 customers, $300-400M AUM,{" "}
              <strong>$3.98-4.64M ARR, Series A ready</strong>
              <br />
              <br />
              Strong unit economics: 55-65% net margins at scale
            </CardContent>
          </Card>
          <Card variant='glass'>
            <CardTitle>Comparable Exits</CardTitle>
            <CardContent>
              Fireblocks ($8B), Anchorage ($3B), Copper ($500M). We're building
              the infrastructure layer for institutional DeFi.
            </CardContent>
          </Card>
        </FourColumnGrid>

        <h3 className='text-2xl mb-8 text-center text-white'>
          Dual Value: Equity Upside + Customer Revenue
        </h3>

        <p className='text-slate-300 text-center mb-6 text-sm'>
          Investors can deploy stablecoins to Monolith vaults while holding equity, creating dual payback streams.*
          <br/>
          <span className='text-xs text-gray-500'>
            *Example scenarios based on Conservative tier (5-8% yield). Balanced tier (8-12%) and Aggressive tier (12-22%) accelerate payback significantly.
          </span>
        </p>

        {/* THREE TIER SCENARIOS */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          {/* CONSERVATIVE TIER */}
          <div className='bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6'>
            <h4 className='text-lg font-bold text-blue-300 mb-4 text-center'>
              Conservative Tier (5-8% Net Yield)
            </h4>
            <div className='overflow-x-auto'>
              <table className='w-full text-xs'>
                <thead>
                  <tr className='border-b border-blue-500/30'>
                    <th className='p-2 text-left text-gray-400'>Allocation</th>
                    <th className='p-2 text-left text-gray-400'>Current</th>
                    <th className='p-2 text-left text-gray-400'>Yield</th>
                    <th className='p-2 text-left text-gray-400'>Annual</th>
                    <th className='p-2 text-left text-gray-400'>Payback</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-blue-500/20 text-gray-300'>
                  <tr>
                    <td className='p-2'>$20M</td>
                    <td className='p-2'>$0</td>
                    <td className='p-2 text-blue-400'>6% avg</td>
                    <td className='p-2'>$1.2M/yr</td>
                    <td className='p-2 text-green-400'>10 mo</td>
                  </tr>
                  <tr>
                    <td className='p-2'>$50M</td>
                    <td className='p-2'>$0</td>
                    <td className='p-2 text-blue-400'>6% avg</td>
                    <td className='p-2'>$3M/yr</td>
                    <td className='p-2 text-green-400'>4 mo</td>
                  </tr>
                  <tr>
                    <td className='p-2'>$100M</td>
                    <td className='p-2'>$0</td>
                    <td className='p-2 text-blue-400'>6% avg</td>
                    <td className='p-2'>$6M/yr</td>
                    <td className='p-2 text-green-400'>2 mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='text-xs text-gray-400 mt-3 text-center'>
              *Conservative tier charges 1.25% management fee (example: $100M AUM = $1.25M annual fee)
              <br/>
              Net to investor after fees: 6% - 1.25% = <strong className='text-blue-400'>4.75% actual yield</strong>
            </p>
          </div>

          {/* BALANCED TIER */}
          <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6'>
            <h4 className='text-lg font-bold text-purple-300 mb-4 text-center'>
              Balanced Tier (8-12% Net Yield)
            </h4>
            <div className='overflow-x-auto'>
              <table className='w-full text-xs'>
                <thead>
                  <tr className='border-b border-purple-500/30'>
                    <th className='p-2 text-left text-gray-400'>Allocation</th>
                    <th className='p-2 text-left text-gray-400'>Current</th>
                    <th className='p-2 text-left text-gray-400'>Yield</th>
                    <th className='p-2 text-left text-gray-400'>Annual</th>
                    <th className='p-2 text-left text-gray-400'>Payback</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-purple-500/20 text-gray-300'>
                  <tr>
                    <td className='p-2'>$20M</td>
                    <td className='p-2'>$0</td>
                    <td className='p-2 text-purple-400'>10% avg</td>
                    <td className='p-2'>$2M/yr</td>
                    <td className='p-2 text-green-400'>6 mo</td>
                  </tr>
                  <tr>
                    <td className='p-2'>$50M</td>
                    <td className='p-2'>$0</td>
                    <td className='p-2 text-purple-400'>10% avg</td>
                    <td className='p-2'>$5M/yr</td>
                    <td className='p-2 text-green-400'>2.4 mo</td>
                  </tr>
                  <tr>
                    <td className='p-2'>$100M</td>
                    <td className='p-2'>$0</td>
                    <td className='p-2 text-purple-400'>10% avg</td>
                    <td className='p-2'>$10M/yr</td>
                    <td className='p-2 text-green-400'>36 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='text-xs text-gray-400 mt-3 text-center'>
              *Balanced tier charges 1.50% management fee (example: $100M AUM = $1.50M annual fee)
              <br/>
              Net to investor after fees: 10% - 1.50% = <strong className='text-purple-400'>8.50% actual yield</strong>
            </p>
          </div>

          {/* AGGRESSIVE TIER */}
          <div className='bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6'>
            <h4 className='text-lg font-bold text-amber-300 mb-4 text-center'>
              Aggressive Tier (12-22% Net Yield)
            </h4>
            <div className='overflow-x-auto'>
              <table className='w-full text-xs'>
                <thead>
                  <tr className='border-b border-amber-500/30'>
                    <th className='p-2 text-left text-gray-400'>Allocation</th>
                    <th className='p-2 text-left text-gray-400'>Current</th>
                    <th className='p-2 text-left text-gray-400'>Yield</th>
                    <th className='p-2 text-left text-gray-400'>Annual</th>
                    <th className='p-2 text-left text-gray-400'>Payback</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-amber-500/20 text-gray-300'>
                  <tr>
                    <td className='p-2'>$20M</td>
                    <td className='p-2'>$0</td>
                    <td className='p-2 text-amber-400'>17% avg</td>
                    <td className='p-2'>$3.4M/yr</td>
                    <td className='p-2 text-green-400'>3.5 mo</td>
                  </tr>
                  <tr>
                    <td className='p-2'>$50M</td>
                    <td className='p-2'>$0</td>
                    <td className='p-2 text-amber-400'>17% avg</td>
                    <td className='p-2'>$8.5M/yr</td>
                    <td className='p-2 text-green-400'>42 days</td>
                  </tr>
                  <tr>
                    <td className='p-2'>$100M</td>
                    <td className='p-2'>$0</td>
                    <td className='p-2 text-amber-400'>17% avg</td>
                    <td className='p-2'>$17M/yr</td>
                    <td className='p-2 text-green-400'>21 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className='text-xs text-gray-400 mt-3 text-center'>
              *Aggressive tier charges 1.75% management fee (example: $100M AUM = $1.75M annual fee)
              <br/>
              Net to investor after fees: 17% - 1.75% = <strong className='text-amber-400'>15.25% actual yield</strong>
            </p>
          </div>
        </div>

        {/* INVESTOR RETURNS */}
        <div className='p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg mb-6'>
          <p className='text-blue-300 text-base text-center mb-4'>
            <strong>Investor Returns from Equity:</strong>
          </p>
          <p className='text-gray-300 text-sm text-center'>
            At Month 18-20: $3.98-4.64M ARR with B2B SaaS multiples (10-15x revenue) = $40-70M valuation potential.
            <br/>
            <span className='text-green-400 font-bold text-lg'>8-14x return on $4-5M pre-money</span> from equity alone.
            <br/>
            <span className='text-purple-400 font-bold'>PLUS: Customer yield stream</span> from deployed capital = dual payoff mechanism.
          </p>
        </div>

        {/* EXAMPLE */}
        <div className='max-w-4xl mx-auto p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/50 rounded-xl mb-8'>
          <h4 className='text-lg font-bold text-green-300 mb-3 text-center'>
            Balanced Tier Example:
          </h4>
          <p className='text-gray-300 text-sm text-center mb-4'>
            Investor contributes $500K to seed round + deploys $25M to Balanced tier.
          </p>

          <div className='space-y-3 text-sm mb-4'>
            <div className='bg-purple-900/20 p-3 rounded-lg border border-purple-500/30'>
              <div className='flex justify-between items-center'>
                <span className='text-gray-300'>Management fee:</span>
                <span className='text-white'>$25M × 1.75% (small AUM tier) = <strong className='text-purple-400'>$437.5K/year</strong></span>
              </div>
            </div>
            <div className='bg-blue-900/20 p-3 rounded-lg border border-blue-500/30'>
              <div className='flex justify-between items-center'>
                <span className='text-gray-300'>Gross yield:</span>
                <span className='text-white'>$25M × 10% = <strong className='text-blue-400'>$2.5M/year</strong></span>
              </div>
            </div>
            <div className='bg-green-900/20 p-3 rounded-lg border border-green-500/30'>
              <div className='flex justify-between items-center'>
                <span className='text-gray-300'>Net yield after fees:</span>
                <span className='text-white'>$2.5M - $437.5K = <strong className='text-green-400'>$2.06M/year</strong></span>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4'>
            <div className='bg-purple-900/20 p-4 rounded-lg border border-purple-500/30'>
              <div className='text-purple-400 font-bold mb-2'>Yield returns (18 months):</div>
              <div className='text-white'>$2.06M × 1.5 years = <span className='text-green-400'>$3.09M</span></div>
            </div>
            <div className='bg-blue-900/20 p-4 rounded-lg border border-blue-500/30'>
              <div className='text-blue-400 font-bold mb-2'>Equity value at Series A (Month 18-20):</div>
              <div className='text-white'>$500K → $4-7M <span className='text-green-400'>(8-14x)</span></div>
            </div>
          </div>

          <div className='mt-4 pt-4 border-t border-green-500/30 text-center'>
            <p className='text-green-300 text-lg font-bold'>
              Total return: $7.09-10.09M on $500K cash + $25M deployed capital
            </p>
            <p className='text-gray-400 text-sm mt-2'>
              Cash-on-cash ROI: <span className='text-green-400 font-bold'>14-20x in 18 months</span>
            </p>
            <p className='text-xs text-gray-500 mt-3'>
              Note: Investor pays management fee but still captures 8.5% net yield vs 0% current yield on stablecoins.
            </p>
          </div>
        </div>

        <div className='max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border-2 border-green-500/50 rounded-xl'>
          <h3 className='text-2xl font-bold text-center mb-6 text-green-300'>
            A Hedge for the Next Economic Cycle
          </h3>
          <p className='text-white text-lg text-center mb-4'>
            When markets are volatile, capital looks for safety - and yield.
          </p>
          <p className='text-gray-300 text-center'>
            Monolith sits at the intersection of stable assets, institutional
            trust, and predictable income.
          </p>
        </div>
      </SlideContent>
    </Slide>
  )
}
