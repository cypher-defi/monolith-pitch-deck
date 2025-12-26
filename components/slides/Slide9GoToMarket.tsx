"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import Card from "@/components/Card"
import CardTitle from "@/components/CardTitle"
import CardContent from "@/components/CardContent"
import TwoColumnGrid from "@/components/TwoColumnGrid"
import Icon from "@/components/Icon"

export default function Slide9GoToMarket() {
  return (
    <Slide id={9} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-16 text-center'>
          GO-TO-MARKET: INSTITUTIONAL B2B
        </Title>
        <Subtitle size='md' className='mb-8 text-center'>
          Focused wedge strategy targeting institutional stablecoin holders
        </Subtitle>

        <div className='max-w-5xl mx-auto mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-2 border-purple-500/50 rounded-xl'>
          <h3 className='text-xl font-bold text-center mb-4 text-purple-300'>
            Target Wedge
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
            <div>
              <Icon name='building' size={32} className='text-purple-400 mx-auto mb-3' />
              <div className='text-sm text-gray-300 font-semibold'>Mid-size funds & crypto-native corporates</div>
            </div>
            <div>
              <Icon name='dollar' size={32} className='text-blue-400 mx-auto mb-3' />
              <div className='text-sm text-gray-300 font-semibold'>Treasury teams holding stablecoin balances</div>
            </div>
            <div>
              <Icon name='users' size={32} className='text-green-400 mx-auto mb-3' />
              <div className='text-sm text-gray-300 font-semibold'>Partnerships with custodians and fintech infrastructure providers</div>
            </div>
          </div>
        </div>

        <TwoColumnGrid>
          <Card variant='glass'>
            <CardTitle>Phase 1: First Customer (Month 6)</CardTitle>
            <CardContent>
              <ul className='space-y-2 text-left'>
                <li>
                  <strong>Target:</strong> Corporate treasurers (emerging
                  markets)
                </li>
                <li>
                  <strong>Profile:</strong> $5-50M in idle USDC/USDT
                </li>
                <li>
                  <strong>Strategy:</strong>
                </li>
                <li className='pl-5'>
                  → Warm intros through custody partners (Fireblocks, Kingdom
                  Trust)
                </li>
                <li className='pl-5'>
                  → Direct outreach to CFOs in Argentina, Nigeria, Brazil
                </li>
                <li className='pl-5'>
                  → Pilot program: $5-10M AUM, prove model
                </li>
                <li className='mt-4 pt-4 border-t-2 border-slate-600'>
                  <strong className='text-blue-400'>
                    Goal: Pilot Program $10-20M AUM → $238K revenue, -$103K profit
                  </strong>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card variant='glass'>
            <CardTitle>Phase 2: Scale to Banks (Month 12-15)</CardTitle>
            <CardContent>
              <ul className='space-y-2 text-left'>
                <li>
                  <strong>Target:</strong> Regional banks piloting stablecoin
                  ops
                </li>
                <li>
                  <strong>Profile:</strong> $10-100M stablecoin reserves
                </li>
                <li>
                  <strong>Strategy:</strong>
                </li>
                <li className='pl-5'>→ Leverage case study from Phase 1</li>
                <li className='pl-5'>
                  → Target banks with JPMorgan Onyx-style stablecoin pilots
                </li>
                <li className='pl-5'>
                  → Compliance-ready pitch: audit trails, insurance, reporting
                </li>
                <li className='mt-4 pt-4 border-t-2 border-slate-600'>
                  <strong className='text-blue-400'>
                    Goal: 3 customers $100M AUM → $1.6M revenue, +$710K profit ✓
                  </strong>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card variant='glass'>
            <CardTitle>Phase 3: Fintech Partnerships (Year 2)</CardTitle>
            <CardContent>
              <ul className='space-y-2 text-left'>
                <li>
                  <strong>Target:</strong> Neobanks & fintech platforms
                </li>
                <li>
                  <strong>Profile:</strong> Want to offer stablecoin yields to
                  customers
                </li>
                <li>
                  <strong>Strategy:</strong>
                </li>
                <li className='pl-5'>
                  → White-label SDK pitch: 2-week integration vs 6-month build
                </li>
                <li className='pl-5'>
                  → Target Revolut/N26/Wise-style fintechs adding crypto
                </li>
                <li className='pl-5'>
                  → Revenue share model: they keep spread, we handle
                  infrastructure
                </li>
                <li className='mt-4 pt-4 border-t-2 border-slate-600'>
                  <strong className='text-blue-400'>
                    Goal: 5-6 customers $300-400M AUM → $3.98-4.64M revenue, +$2.18-2.84M
                    profit
                  </strong>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card variant='glass'>
            <CardTitle>Phase 4: Enterprise Scale (Year 3)</CardTitle>
            <CardContent>
              <ul className='space-y-2 text-left'>
                <li>
                  <strong>Target:</strong> Large institutions & mega-fintechs
                </li>
                <li>
                  <strong>Profile:</strong> $100M-1B+ deployment potential
                </li>
                <li>
                  <strong>Strategy:</strong>
                </li>
                <li className='pl-5'>
                  → Proven track record: $800M-1B managed, 8+ institutions served
                </li>
                <li className='pl-5'>
                  → Enterprise features: SLA guarantees, custom strategies,
                  dedicated teams
                </li>
                <li className='pl-5'>
                  → Strategic partnerships with major custody providers
                </li>
                <li className='mt-4 pt-4 border-t-2 border-slate-600'>
                  <strong className='text-blue-400'>
                    Goal: 8-10 customers $800M-1B AUM → $10.6-11.3M revenue,
                    +$6.6-7.3M profit
                  </strong>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TwoColumnGrid>

        <div className='mt-8 p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg'>
          <p className='text-blue-300 text-lg text-center'>
            <strong>Zero CAC:</strong> Institutions come to us •{" "}
            <strong>Sticky revenue:</strong> &lt;5% churn vs 30-50% retail •{" "}
            <strong>Compound growth:</strong> Each partner grows their deposits
            over time
          </p>
        </div>

        <div className='mt-6 p-4 bg-gray-800/30 border border-gray-700 rounded-lg'>
          <p className='text-xs text-gray-400 text-center'>
            *Revenue projections based on Conservative vault tier adoption across all customers. Actual revenue may be higher if customers adopt Balanced or Aggressive vault tiers, though all projections assume Conservative tier (most conservative estimate).
          </p>
        </div>
      </SlideContent>
    </Slide>
  )
}
