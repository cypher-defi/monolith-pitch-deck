"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Icon from "@/components/Icon"

export default function Slide8BusinessModel() {
  return (
    <Slide id={8} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-12 text-center'>
          BUSINESS MODEL: INSTITUTIONAL B2B
        </Title>

        <div className='max-w-5xl mx-auto mb-12 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl'>
          <h3 className='text-xl font-bold text-center mb-3 text-green-300'>
            Defensive Economics
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
            <div>
              <Icon name='trending' size={24} className='text-green-400 mx-auto mb-2' />
              <div className='text-sm text-gray-300'>Revenue scales with AUM, not trading volume</div>
            </div>
            <div>
              <Icon name='shield' size={24} className='text-green-400 mx-auto mb-2' />
              <div className='text-sm text-gray-300'>Performs well in flat or declining markets</div>
            </div>
            <div>
              <Icon name='check' size={24} className='text-green-400 mx-auto mb-2' />
              <div className='text-sm text-gray-300'>Yield demand increases during crises</div>
            </div>
          </div>
        </div>

        {/* Revenue Model */}
        <div className='mb-10'>
          <h3 className='text-2xl font-bold text-blue-400 mb-6 text-center'>
            Revenue Model
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
            <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6 text-center'>
              <h4 className='text-lg font-bold mb-3 text-green-300'>
                Management Fee
              </h4>
              <div className='text-4xl font-bold text-green-300 mb-2'>
                1.25%
              </div>
              <div className='text-sm text-gray-400'>Annual on AUM</div>
            </div>

            <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6 text-center'>
              <h4 className='text-lg font-bold mb-3 text-blue-300'>
                Implementation
              </h4>
              <div className='text-4xl font-bold text-blue-300 mb-2'>
                $25-75K
              </div>
              <div className='text-sm text-gray-400'>One-Time Setup</div>
            </div>

            <div className='bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6 text-center'>
              <h4 className='text-lg font-bold mb-3 text-amber-300'>
                White-Label SDK
              </h4>
              <div className='text-4xl font-bold text-amber-300 mb-2'>
                $2-15K
              </div>
              <div className='text-sm text-gray-400'>Monthly SaaS</div>
            </div>
          </div>
        </div>

        {/* Operating Cost Structure */}
        <div className='mb-10'>
          <h3 className='text-2xl font-bold text-purple-400 mb-6 text-center'>
            Operating Cost Structure (Per $100M AUM)
          </h3>

          <div className='bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-2 border-purple-500/30 rounded-xl p-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4'>
              <div>
                <h4 className='text-lg font-bold text-green-400 mb-3'>
                  Revenue (1.25% average)
                </h4>
                <div className='bg-green-900/30 p-4 rounded-lg'>
                  <div className='text-3xl font-bold text-green-300'>
                    $1.25M/year
                  </div>
                  <div className='text-sm text-gray-400'>Management Fee</div>
                </div>
              </div>

              <div>
                <h4 className='text-lg font-bold text-blue-400 mb-3'>
                  Operating Costs Breakdown
                </h4>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>
                      Insurance (InsurAce, 0.08% of TVL)
                    </span>
                    <span className='text-gray-300 font-bold'>$80K/year</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>
                      Recurring Audits (new integrations, quarterly)
                    </span>
                    <span className='text-gray-300 font-bold'>$60K/year</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>
                      24/7 Monitoring & Infrastructure
                    </span>
                    <span className='text-gray-300 font-bold'>$120K/year</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>
                      Engineering & Platform Ops
                    </span>
                    <span className='text-gray-300 font-bold'>$400K/year</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-300'>Sales & BD</span>
                    <span className='text-gray-300 font-bold'>$230K/year</span>
                  </div>
                  <div className='border-t border-gray-600 pt-2 mt-2'></div>
                  <div className='flex justify-between font-bold'>
                    <span className='text-blue-300'>Total Operating Costs</span>
                    <span className='text-blue-300'>$890K/year</span>
                  </div>
                  <div className='flex justify-between font-bold text-lg'>
                    <span className='text-green-400'>Net Operating Margin</span>
                    <span className='text-green-400'>$360K/year (29%)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-blue-900/30 p-4 rounded-lg mt-4'>
              <h5 className='text-sm font-bold text-blue-300 mb-2'>
                Unit Economics
              </h5>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center text-xs'>
                <div>
                  <div className='text-gray-400'>Gross Revenue per $100M</div>
                  <div className='text-green-300 font-bold'>$1.25M</div>
                </div>
                <div>
                  <div className='text-gray-400'>All-in Cost per $100M</div>
                  <div className='text-blue-300 font-bold'>$890K</div>
                </div>
                <div>
                  <div className='text-gray-400'>Net Profit per $100M</div>
                  <div className='text-green-400 font-bold'>$360K</div>
                </div>
                <div>
                  <div className='text-gray-400'>Cost of Risk Management</div>
                  <div className='text-purple-300 font-bold'>$140K</div>
                </div>
              </div>
              <p className='text-xs text-gray-400 mt-3 text-center'>
                Insurance + audits enables 2-week deployment vs 6-month build •
                Justifies premium positioning vs Yearn/Beefy
              </p>
            </div>
          </div>
        </div>

        {/* Customer Growth & Profitability */}
        <div>
          <h3 className='text-2xl font-bold text-green-400 mb-6 text-center'>
            Customer Growth & Profitability
          </h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
            {/* Month 6-9 */}
            <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4'>
              <h4 className='text-lg font-bold text-blue-300 mb-3 text-center'>
                Month 6-9
              </h4>
              <div className='text-sm space-y-2'>
                <div className='text-center mb-3'>
                  <div className='text-xs text-gray-400'>
                    Pilot Program
                  </div>
                  <div className='text-2xl font-bold text-yellow-400'>$20M</div>
                  <div className='text-xs text-gray-400'>AUM</div>
                </div>
                <div className='flex justify-between text-xs'>
                  <span className='text-gray-400'>Gross Revenue:</span>
                  <span className='text-green-300'>$250K/year</span>
                </div>
                <div className='flex justify-between text-xs'>
                  <span className='text-gray-400'>Operating Costs:</span>
                  <span className='text-red-300'>$341K/year</span>
                </div>
                <div className='flex justify-between text-xs font-bold border-t border-gray-600 pt-1'>
                  <span className='text-red-300'>Net:</span>
                  <span className='text-red-300'>-$91K</span>
                </div>
                <div className='text-xs text-gray-400 text-center mt-2'>
                  Pilot, prove model
                </div>
              </div>
            </div>

            {/* Year 1 */}
            <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-4'>
              <h4 className='text-lg font-bold text-purple-300 mb-3 text-center'>
                Year 1
              </h4>
              <div className='text-sm space-y-2'>
                <div className='text-center mb-3'>
                  <div className='text-xs text-gray-400'>
                    Scale to 3 Customers
                  </div>
                  <div className='text-2xl font-bold text-yellow-400'>
                    $100M
                  </div>
                  <div className='text-xs text-gray-400'>AUM</div>
                </div>
                <div className='flex justify-between text-xs'>
                  <span className='text-gray-400'>Gross Revenue:</span>
                  <span className='text-green-300'>$1.25M/year</span>
                </div>
                <div className='flex justify-between text-xs'>
                  <span className='text-gray-400'>Operating Costs:</span>
                  <span className='text-blue-300'>$890K/year</span>
                </div>
                <div className='text-xs text-gray-500 ml-4'>
                  <div>• Insurance: $80K</div>
                  <div>• Audits: $60K</div>
                  <div>• Other ops: $750K</div>
                </div>
                <div className='flex justify-between text-xs font-bold border-t border-gray-600 pt-1'>
                  <span className='text-green-400'>Net:</span>
                  <span className='text-green-400'>+$360K/year</span>
                </div>
                <div className='text-xs text-green-400 font-bold text-center mt-2'>
                  ✓ PROFITABLE
                </div>
              </div>
            </div>

            {/* Year 2 */}
            <div className='bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 border-2 border-indigo-500/50 rounded-xl p-4'>
              <h4 className='text-lg font-bold text-indigo-300 mb-3 text-center'>
                Year 2
              </h4>
              <div className='text-sm space-y-2'>
                <div className='text-center mb-3'>
                  <div className='text-xs text-gray-400'>
                    Scale to 5-6 Partners
                  </div>
                  <div className='text-2xl font-bold text-yellow-400'>
                    $300-400M
                  </div>
                  <div className='text-xs text-gray-400'>AUM</div>
                </div>
                <div className='flex justify-between text-xs'>
                  <span className='text-gray-400'>Gross Revenue:</span>
                  <span className='text-green-300'>$3.75-5M/year</span>
                </div>
                <div className='flex justify-between text-xs'>
                  <span className='text-gray-400'>Operating Costs:</span>
                  <span className='text-blue-300'>$1.7-2M/year</span>
                </div>
                <div className='text-xs text-gray-500 ml-4'>
                  <div>• Insurance: $240-320K</div>
                  <div>• Audits: $120K</div>
                  <div>• Other ops: $1.34-1.56M</div>
                </div>
                <div className='flex justify-between text-xs font-bold border-t border-gray-600 pt-1'>
                  <span className='text-green-400'>Net:</span>
                  <span className='text-green-400'>+$2-3.3M/year</span>
                </div>
                <div className='text-xs text-gray-400 text-center mt-2'>
                  Series A ready
                </div>
              </div>
            </div>

            {/* Year 3 */}
            <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-4'>
              <h4 className='text-lg font-bold text-green-300 mb-3 text-center'>
                Year 3
              </h4>
              <div className='text-sm space-y-2'>
                <div className='text-center mb-3'>
                  <div className='text-xs text-gray-400'>8-10 Customers</div>
                  <div className='text-2xl font-bold text-yellow-400'>
                    $800M-1B
                  </div>
                  <div className='text-xs text-gray-400'>AUM</div>
                </div>
                <div className='flex justify-between text-xs'>
                  <span className='text-gray-400'>Gross Revenue:</span>
                  <span className='text-green-300'>$10-12.5M/year</span>
                </div>
                <div className='flex justify-between text-xs'>
                  <span className='text-gray-400'>Operating Costs:</span>
                  <span className='text-blue-300'>$3.3-4.3M/year</span>
                </div>
                <div className='flex justify-between text-xs font-bold border-t border-gray-600 pt-1'>
                  <span className='text-green-400'>Net:</span>
                  <span className='text-green-400'>+$6-8.7M/year</span>
                </div>
                <div className='text-xs text-gray-400 text-center mt-2'>
                  60-70% net margin, Series B ready
                </div>
              </div>
            </div>
          </div>

          <div className='bg-purple-900/30 p-4 rounded-lg border border-purple-500/50'>
            <p className='text-purple-300 text-sm font-semibold mb-2 text-center'>
              KEY INSIGHT: Insurance + Audits = $140K/Year on $100M AUM
            </p>
            <p className='text-gray-300 text-xs text-center'>
              This is 11% of operating costs. It demonstrates we follow
              institutional best practices (audits) and transfer remaining risk
              (insurance). Combined with non-custodial design, this is why
              institutional treasurers allocate capital to Monolith instead of
              managing Aave themselves.
            </p>
          </div>
        </div>

        <div className='mt-6 p-4 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg'>
          <p className='text-blue-300 text-sm text-center'>
            Each institutional partner = $100K-$1M+ ARR • &lt;5% churn (vs
            30-50% retail) • Series A ready at Year 2
          </p>
        </div>
      </SlideContent>
    </Slide>
  )
}
