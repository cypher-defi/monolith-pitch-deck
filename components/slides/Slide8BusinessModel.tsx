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
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4 lg:items-end'>
              <div className='flex flex-col'>
                <h4 className='text-lg font-bold text-green-400 mb-3'>
                  Revenue (1.25% average)
                </h4>
                <div className='bg-green-900/30 p-4 rounded-lg mb-4 lg:mb-0'>
                  <div className='text-3xl font-bold text-green-300'>
                    $1.25M/year
                  </div>
                  <div className='text-sm text-gray-400'>Management Fee</div>
                </div>
                <div className='bg-green-900/40 p-4 rounded-lg border-2 border-green-500/40 mt-auto'>
                  <div className='flex justify-between gap-3 items-center'>
                    <span className='text-green-400 font-bold text-base flex-1 text-left'>Net Operating Margin</span>
                    <span className='text-green-400 font-bold text-xl whitespace-nowrap'>$360K/year (29%)</span>
                  </div>
                </div>
              </div>

              <div className='flex flex-col'>
                <h4 className='text-lg font-bold text-blue-400 mb-3'>
                  Operating Costs Breakdown
                </h4>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between gap-3'>
                    <span className='text-gray-300 flex-1 text-left'>
                      Insurance (InsurAce, 0.08% of TVL)
                    </span>
                    <span className='text-gray-300 font-bold whitespace-nowrap'>$80K/year</span>
                  </div>
                  <div className='flex justify-between gap-3'>
                    <span className='text-gray-300 flex-1 text-left'>
                      Recurring Audits (new integrations, quarterly)
                    </span>
                    <span className='text-gray-300 font-bold whitespace-nowrap'>$60K/year</span>
                  </div>
                  <div className='flex justify-between gap-3'>
                    <span className='text-gray-300 flex-1 text-left'>
                      24/7 Monitoring & Infrastructure
                    </span>
                    <span className='text-gray-300 font-bold whitespace-nowrap'>$120K/year</span>
                  </div>
                  <div className='flex justify-between gap-3'>
                    <span className='text-gray-300 flex-1 text-left'>
                      Engineering & Platform Ops
                    </span>
                    <span className='text-gray-300 font-bold whitespace-nowrap'>$400K/year</span>
                  </div>
                  <div className='flex justify-between gap-3'>
                    <span className='text-gray-300 flex-1 text-left'>Sales & BD</span>
                    <span className='text-gray-300 font-bold whitespace-nowrap'>$230K/year</span>
                  </div>
                  <div className='border-t border-gray-600 pt-2 mt-2'></div>
                  <div className='flex justify-between gap-3 font-bold'>
                    <span className='text-blue-300 flex-1 text-left'>Total Operating Costs</span>
                    <span className='text-blue-300 whitespace-nowrap'>$890K/year</span>
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

        {/* Revenue Model: Tiered Pricing */}
        <div>
          <h3 className='text-2xl font-bold text-green-400 mb-6 text-center'>
            Revenue Model: Tiered Pricing
          </h3>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
            {/* Management Fee Table */}
            <div className='bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6'>
              <h4 className='text-lg font-bold text-green-300 mb-4 text-center'>
                Management Fee (Annual)
              </h4>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr className='border-b border-green-500/30'>
                      <th className='text-left py-2 text-gray-300'>AUM Tier</th>
                      <th className='text-center py-2 text-gray-300'>Fee</th>
                      <th className='text-right py-2 text-gray-300'>Example Revenue</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-green-500/20'>
                    <tr>
                      <td className='py-2 text-gray-300'>$0-25M</td>
                      <td className='text-center text-green-400 font-bold'>1.75%</td>
                      <td className='text-right text-green-400'>$438K on $25M</td>
                    </tr>
                    <tr>
                      <td className='py-2 text-gray-300'>$25-50M</td>
                      <td className='text-center text-green-400 font-bold'>1.50%</td>
                      <td className='text-right text-green-400'>$750K on $50M</td>
                    </tr>
                    <tr>
                      <td className='py-2 text-gray-300'>$50-100M</td>
                      <td className='text-center text-green-400 font-bold'>1.25%</td>
                      <td className='text-right text-green-400'>$1.25M on $100M</td>
                    </tr>
                    <tr>
                      <td className='py-2 text-gray-300'>$100-250M</td>
                      <td className='text-center text-green-400 font-bold'>1.00%</td>
                      <td className='text-right text-green-400'>$2M on $200M</td>
                    </tr>
                    <tr>
                      <td className='py-2 text-gray-300'>$250M+</td>
                      <td className='text-center text-green-400 font-bold'>0.85%</td>
                      <td className='text-right text-green-400'>$2.55M on $300M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Implementation Fee Table */}
            <div className='bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6'>
              <h4 className='text-lg font-bold text-blue-300 mb-4 text-center'>
                Implementation Fee (One-Time)
              </h4>
              <div className='mb-4'>
                <div className='flex justify-between items-center border-b border-blue-500/30 pb-2 mb-3 text-sm'>
                  <span className='text-gray-300 font-semibold'>AUM at Launch</span>
                  <span className='text-gray-300 font-semibold'>Fee</span>
                </div>
                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between gap-3 items-center'>
                    <span className='text-gray-300 flex-1 text-left'>$5-10M</span>
                    <span className='text-blue-400 font-bold whitespace-nowrap'>$75K</span>
                  </div>
                  <div className='flex justify-between gap-3 items-center'>
                    <span className='text-gray-300 flex-1 text-left'>$10-25M</span>
                    <span className='text-blue-400 font-bold whitespace-nowrap'>$50K</span>
                  </div>
                  <div className='flex justify-between gap-3 items-center'>
                    <span className='text-gray-300 flex-1 text-left'>$25-50M</span>
                    <span className='text-blue-400 font-bold whitespace-nowrap'>$35K</span>
                  </div>
                  <div className='flex justify-between gap-3 items-center'>
                    <span className='text-gray-300 flex-1 text-left'>$50M+</span>
                    <span className='text-green-400 font-bold whitespace-nowrap'>FREE ✓</span>
                  </div>
                </div>
              </div>
              <div className='bg-amber-900/30 p-3 rounded-lg border border-amber-500/30'>
                <div className='text-xs text-gray-300 text-center'>
                  <span className='font-bold text-amber-400'>White-Label SDK:</span> $2-15K/month (optional)
                </div>
              </div>
            </div>
          </div>

          {/* Volume Incentive Examples */}
          <h4 className='text-xl font-bold text-purple-400 mb-4 text-center'>
            Volume Incentive Examples
          </h4>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
            <div className='bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4'>
              <h5 className='text-sm font-bold text-blue-300 mb-3 text-center'>
                Small Deployment ($25M)
              </h5>
              <div className='space-y-2 text-xs'>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Management Fee:</span>
                  <span className='text-white'>1.50% = $375K/year</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Implementation:</span>
                  <span className='text-white'>$50K</span>
                </div>
                <div className='flex justify-between font-bold border-t border-blue-500/30 pt-2 mt-2'>
                  <span className='text-blue-400'>Year 1 Total:</span>
                  <span className='text-blue-400'>$425K</span>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-4'>
              <h5 className='text-sm font-bold text-purple-300 mb-3 text-center'>
                Mid-Scale Deployment ($50M)
              </h5>
              <div className='space-y-2 text-xs'>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Management Fee:</span>
                  <span className='text-white'>1.25% = $625K/year</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Implementation:</span>
                  <span className='text-green-400 font-bold'>$0 (waived)</span>
                </div>
                <div className='flex justify-between font-bold border-t border-purple-500/30 pt-2 mt-2'>
                  <span className='text-purple-400'>Year 1 Total:</span>
                  <span className='text-purple-400'>$625K</span>
                </div>
                <div className='text-xs text-green-400 text-center mt-2'>
                  Savings: $50K implementation fee waived
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/50 rounded-xl p-4'>
              <h5 className='text-sm font-bold text-green-300 mb-3 text-center'>
                Enterprise Deployment ($100M)
              </h5>
              <div className='space-y-2 text-xs'>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Management Fee:</span>
                  <span className='text-white'>1.00% = $1M/year</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Implementation:</span>
                  <span className='text-green-400 font-bold'>$0 (waived)</span>
                </div>
                <div className='flex justify-between font-bold border-t border-green-500/30 pt-2 mt-2'>
                  <span className='text-green-400'>Year 1 Total:</span>
                  <span className='text-green-400'>$1M</span>
                </div>
                <div className='text-xs text-green-400 text-center mt-2'>
                  Savings: 43% lower rate vs small tier + $75K implementation waived
                </div>
              </div>
            </div>
          </div>

          <div className='bg-purple-900/30 p-4 rounded-lg border border-purple-500/50'>
            <p className='text-purple-300 text-sm text-center'>
              ✓ Pricing rewards scale while maintaining 60-70% net margins at all tiers
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
