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
    <Slide id={14} background='bg-black'>
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
            <div className='text-sm text-gray-400 mt-3'>
              to profitability and Series A readiness
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
          Investors allocate stablecoins to Monolith to earn 5% yield. The yield
          directly pays back your $1M seed investment.
        </p>

        <div className='overflow-x-auto mb-12'>
          <table className='comparison-table'>
            <thead>
              <tr className='border-b-2 border-slate-700'>
                <th className='p-4'>Stablecoin Allocation</th>
                <th className='p-4'>Current Yield</th>
                <th className='p-4'>With Monolith (5%)</th>
                <th className='p-4'>Annual Yield</th>
                <th className='p-4'>Payback of $1M Seed</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-700'>
              <tr>
                <td className='p-4 font-semibold text-green-500'>$20M</td>
                <td className='p-4'>$0</td>
                <td className='p-4 text-green-500 font-bold'>5%</td>
                <td className='p-4 text-green-500 font-bold'>$1M/year</td>
                <td className='p-4 text-green-500 font-bold'>12 months</td>
              </tr>
              <tr>
                <td className='p-4 font-semibold text-blue-500'>$100M</td>
                <td className='p-4'>$0</td>
                <td className='p-4 text-blue-500 font-bold'>5%</td>
                <td className='p-4 text-blue-500 font-bold'>$5M/year</td>
                <td className='p-4 text-blue-500 font-bold'>2.4 months</td>
              </tr>
              <tr>
                <td className='p-4 font-semibold text-amber-500'>$300M</td>
                <td className='p-4'>$0</td>
                <td className='p-4 text-amber-500 font-bold'>5%</td>
                <td className='p-4 text-amber-500 font-bold'>$15M/year</td>
                <td className='p-4 text-amber-500 font-bold'>24 days</td>
              </tr>
              <tr>
                <td className='p-4 font-semibold text-purple-500'>$500M</td>
                <td className='p-4'>$0</td>
                <td className='p-4 text-purple-500 font-bold'>5%</td>
                <td className='p-4 text-purple-500 font-bold'>$25M/year</td>
                <td className='p-4 text-purple-500 font-bold'>14 days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg mb-8'>
          <p className='text-blue-300 text-lg text-center'>
            <strong>Investor Returns:</strong> At Month 18-20, $3.98-4.64M ARR
            with B2B SaaS multiples (10-15x revenue) = $40-70M valuation
            potential.{" "}
            <span className='text-green-400 font-bold'>
              8-14x return on $5M post-money
            </span>
            . PLUS customer revenue stream from your own stablecoin yield ={" "}
            <span className='text-green-400 font-bold'>dual payoff</span>.
          </p>
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
