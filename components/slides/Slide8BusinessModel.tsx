"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Icon from "@/components/Icon"

export default function Slide8BusinessModel() {
  return (
    <Slide id={11} background='bg-black'>
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
        <div className='mb-8 md:mb-10'>
          <h3 className='text-xl md:text-2xl font-bold text-blue-400 mb-4 md:mb-6 text-center'>
            Revenue Model
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
            <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-4 md:p-6 text-center'>
              <h4 className='text-base md:text-lg font-bold mb-2 md:mb-3 text-green-300'>
                Management Fee
              </h4>
              <div className='text-2xl md:text-4xl font-bold text-green-300 mb-2'>
                1.25-1.75%*
              </div>
              <div className='text-xs md:text-sm text-gray-400'>Annual on AUM</div>
              <div className='text-[10px] md:text-xs text-gray-500 mt-2'>
                *Tier-dependent: Conservative 1.25%, Balanced 1.50%, Aggressive 1.75% (before volume discounts)
              </div>
            </div>

            <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4 md:p-6 text-center'>
              <h4 className='text-base md:text-lg font-bold mb-2 md:mb-3 text-blue-300'>
                Implementation
              </h4>
              <div className='text-2xl md:text-4xl font-bold text-blue-300 mb-2'>
                $25-75K
              </div>
              <div className='text-xs md:text-sm text-gray-400'>One-Time Setup</div>
            </div>

            <div className='bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-4 md:p-6 text-center'>
              <h4 className='text-base md:text-lg font-bold mb-2 md:mb-3 text-amber-300'>
                White-Label SDK
              </h4>
              <div className='text-2xl md:text-4xl font-bold text-amber-300 mb-2'>
                $2-15K
              </div>
              <div className='text-xs md:text-sm text-gray-400'>Monthly SaaS</div>
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
              <div className='flex flex-col'>
                <h4 className='text-lg font-bold text-green-400 mb-3'>
                  Revenue Per $100M AUM
                </h4>
                <div className='bg-green-900/30 p-4 rounded-lg mb-2'>
                  <div className='text-3xl font-bold text-green-300'>
                    $1.44M/year
                  </div>
                  <div className='text-sm text-gray-400'>Management Fee (1.44% avg on tiered pricing)</div>
                </div>
              </div>

              <div className='flex flex-col'>
                <h4 className='text-lg font-bold text-blue-400 mb-3'>
                  Cost Structure
                </h4>
                <div className='space-y-2 text-sm'>
                  <div className='text-xs font-bold text-purple-300 mb-2'>COST OF REVENUE (Direct Costs):</div>
                  <div className='flex justify-between gap-3 ml-2'>
                    <span className='text-gray-300 flex-1 text-left'>
                      Insurance (tier-dependent)**
                    </span>
                    <span className='text-gray-300 font-bold whitespace-nowrap'>$80-120K</span>
                  </div>
                  <div className='text-xs text-gray-500 ml-4'>
                    **Conservative: 0.08% | Balanced: 0.10% | Aggressive: 0.12%
                  </div>
                  <div className='flex justify-between gap-3 ml-2'>
                    <span className='text-gray-300 flex-1 text-left'>
                      Audits & Security
                    </span>
                    <span className='text-gray-300 font-bold whitespace-nowrap'>$60K</span>
                  </div>
                  <div className='flex justify-between gap-3 font-semibold ml-2 pt-1 border-t border-purple-500/30'>
                    <span className='text-purple-300 flex-1 text-left'>Total Cost of Revenue</span>
                    <span className='text-purple-300 whitespace-nowrap'>$140-180K</span>
                  </div>
                  <div className='flex justify-between gap-3 font-bold bg-purple-900/30 p-2 rounded'>
                    <span className='text-green-400 flex-1 text-left'>Gross Profit</span>
                    <span className='text-green-400 whitespace-nowrap'>$1.26-1.30M</span>
                  </div>
                  <div className='text-xs text-green-400 text-right font-semibold'>87-90% Gross Margin</div>

                  <div className='text-xs font-bold text-blue-300 mb-2 mt-4'>OPERATING EXPENSES (Platform Costs):</div>
                  <div className='flex justify-between gap-3 ml-2'>
                    <span className='text-gray-300 flex-1 text-left'>
                      Monitoring & Infrastructure
                    </span>
                    <span className='text-gray-300 font-bold whitespace-nowrap'>$120K</span>
                  </div>
                  <div className='flex justify-between gap-3 ml-2'>
                    <span className='text-gray-300 flex-1 text-left'>
                      Engineering & Platform Ops
                    </span>
                    <span className='text-gray-300 font-bold whitespace-nowrap'>$400K</span>
                  </div>
                  <div className='flex justify-between gap-3 ml-2'>
                    <span className='text-gray-300 flex-1 text-left'>Sales & BD</span>
                    <span className='text-gray-300 font-bold whitespace-nowrap'>$230K</span>
                  </div>
                  <div className='flex justify-between gap-3 font-semibold ml-2 pt-1 border-t border-blue-500/30'>
                    <span className='text-blue-300 flex-1 text-left'>Total Operating Expenses</span>
                    <span className='text-blue-300 whitespace-nowrap'>$750K</span>
                  </div>
                  <div className='flex justify-between gap-3 font-bold bg-green-900/40 p-2 rounded border-2 border-green-500/40'>
                    <span className='text-green-400 flex-1 text-left'>Operating Profit</span>
                    <span className='text-green-400 whitespace-nowrap'>$510-550K</span>
                  </div>
                  <div className='text-xs text-green-400 text-right font-semibold'>35-38% Operating Margin</div>
                </div>
              </div>
            </div>

            <div className='bg-blue-900/30 p-4 rounded-lg mt-4'>
              <h5 className='text-sm font-bold text-blue-300 mb-3'>
                Why This Model Works
              </h5>
              <div className='text-xs text-gray-300 space-y-2'>
                <div className='flex gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span><strong className='text-green-400'>87-90% Gross Margin</strong> shows capital-efficient core product (revenue minus direct costs of insurance + audits)</span>
                </div>
                <div className='flex gap-2'>
                  <span className='text-blue-400'>✓</span>
                  <span><strong className='text-blue-400'>35-38% Operating Margin</strong> at $100M AUM improves to 42% at Month 12-15, then 49-61% at Year 2 as platform costs spread across more customers</span>
                </div>
                <div className='flex gap-2'>
                  <span className='text-purple-400'>✓</span>
                  <span><strong className='text-purple-400'>Fixed platform costs + variable direct costs</strong> = healthy SaaS economics with improving leverage</span>
                </div>
              </div>
              <p className='text-xs text-amber-300 mt-3 text-center border-t border-amber-500/30 pt-3'>
                Note: Revenue scales with both AUM volume AND vault tier selection. Higher-yield tiers command premium management fees (Balanced +0.25%, Aggressive +0.50%) to offset higher insurance costs.
              </p>
            </div>
          </div>
        </div>

        {/* Revenue Model: Tier + Volume Pricing */}
        <div>
          <h3 className='text-lg md:text-2xl font-bold text-green-400 mb-4 md:mb-6 text-center'>
            Revenue Model: Tier + Volume Pricing
          </h3>

          {/* THREE TIER PRICING TABLES */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8'>
            {/* CONSERVATIVE TIER */}
            <div className='bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4 md:p-6'>
              <h4 className='text-base md:text-lg font-bold text-blue-300 mb-3 md:mb-4 text-center'>
                Conservative Tier Pricing (Base)
              </h4>
              <div className='text-center'>
                <table className='w-full text-[10px] md:text-xs mx-auto [&_th]:text-center [&_td]:text-center md:[&_th:first-child]:text-left md:[&_td:first-child]:text-left md:[&_th:last-child]:text-right md:[&_td:last-child]:text-right'>
                  <thead>
                    <tr className='border-b border-blue-500/30'>
                      <th className='py-1.5 md:py-2 px-1 text-gray-300 w-1/3'>AUM Tier</th>
                      <th className='py-1.5 md:py-2 px-1 text-gray-300 w-1/3'>Fee</th>
                      <th className='py-1.5 md:py-2 px-1 text-gray-300 w-1/3'>Example</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-blue-500/20'>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$0-25M</td>
                      <td className='py-1.5 md:py-2 px-1 text-blue-400 font-bold'>1.75%</td>
                      <td className='py-1.5 md:py-2 px-1 text-blue-400'>$438K/yr</td>
                    </tr>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$25-50M</td>
                      <td className='py-1.5 md:py-2 px-1 text-blue-400 font-bold'>1.50%</td>
                      <td className='py-1.5 md:py-2 px-1 text-blue-400'>$750K/yr</td>
                    </tr>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$50-100M</td>
                      <td className='py-1.5 md:py-2 px-1 text-blue-400 font-bold'>1.25%</td>
                      <td className='py-1.5 md:py-2 px-1 text-blue-400'>$1.25M/yr</td>
                    </tr>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$100-250M</td>
                      <td className='py-1.5 md:py-2 px-1 text-blue-400 font-bold'>1.00%</td>
                      <td className='py-1.5 md:py-2 px-1 text-blue-400'>$2M/yr</td>
                    </tr>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$250M+</td>
                      <td className='py-1.5 md:py-2 px-1 text-blue-400 font-bold'>0.85%</td>
                      <td className='py-1.5 md:py-2 px-1 text-blue-400'>$2.55M/yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* BALANCED TIER */}
            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-4 md:p-6'>
              <h4 className='text-base md:text-lg font-bold text-purple-300 mb-3 md:mb-4 text-center'>
                Balanced Tier (+0.25% premium)
              </h4>
              <div className='text-center'>
                <table className='w-full text-[10px] md:text-xs mx-auto [&_th]:text-center [&_td]:text-center md:[&_th:first-child]:text-left md:[&_td:first-child]:text-left md:[&_th:last-child]:text-right md:[&_td:last-child]:text-right'>
                  <thead>
                    <tr className='border-b border-purple-500/30'>
                      <th className='py-1.5 md:py-2 px-1 text-gray-300 w-1/3'>AUM Tier</th>
                      <th className='py-1.5 md:py-2 px-1 text-gray-300 w-1/3'>Fee</th>
                      <th className='py-1.5 md:py-2 px-1 text-gray-300 w-1/3'>Example</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-purple-500/20'>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$0-25M</td>
                      <td className='py-1.5 md:py-2 px-1 text-purple-400 font-bold'>2.00%</td>
                      <td className='py-1.5 md:py-2 px-1 text-purple-400'>$500K/yr</td>
                    </tr>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$25-50M</td>
                      <td className='py-1.5 md:py-2 px-1 text-purple-400 font-bold'>1.75%</td>
                      <td className='py-1.5 md:py-2 px-1 text-purple-400'>$875K/yr</td>
                    </tr>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$50-100M</td>
                      <td className='py-1.5 md:py-2 px-1 text-purple-400 font-bold'>1.50%</td>
                      <td className='py-1.5 md:py-2 px-1 text-purple-400'>$1.5M/yr</td>
                    </tr>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$100-250M</td>
                      <td className='py-1.5 md:py-2 px-1 text-purple-400 font-bold'>1.25%</td>
                      <td className='py-1.5 md:py-2 px-1 text-purple-400'>$2.5M/yr</td>
                    </tr>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$250M+</td>
                      <td className='py-1.5 md:py-2 px-1 text-purple-400 font-bold'>1.10%</td>
                      <td className='py-1.5 md:py-2 px-1 text-purple-400'>$3.3M/yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* AGGRESSIVE TIER */}
            <div className='bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-4 md:p-6'>
              <h4 className='text-base md:text-lg font-bold text-amber-300 mb-3 md:mb-4 text-center'>
                Aggressive Tier (+0.50% premium)
              </h4>
              <div className='text-center'>
                <table className='w-full text-[10px] md:text-xs mx-auto [&_th]:text-center [&_td]:text-center md:[&_th:first-child]:text-left md:[&_td:first-child]:text-left md:[&_th:last-child]:text-right md:[&_td:last-child]:text-right'>
                  <thead>
                    <tr className='border-b border-amber-500/30'>
                      <th className='py-1.5 md:py-2 px-1 text-gray-300 w-1/3'>AUM Tier</th>
                      <th className='py-1.5 md:py-2 px-1 text-gray-300 w-1/3'>Fee</th>
                      <th className='py-1.5 md:py-2 px-1 text-gray-300 w-1/3'>Example</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-amber-500/20'>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$0-25M</td>
                      <td className='py-1.5 md:py-2 px-1 text-amber-400 font-bold'>2.25%</td>
                      <td className='py-1.5 md:py-2 px-1 text-amber-400'>$563K/yr</td>
                    </tr>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$25-50M</td>
                      <td className='py-1.5 md:py-2 px-1 text-amber-400 font-bold'>2.00%</td>
                      <td className='py-1.5 md:py-2 px-1 text-amber-400'>$1M/yr</td>
                    </tr>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$50-100M</td>
                      <td className='py-1.5 md:py-2 px-1 text-amber-400 font-bold'>1.75%</td>
                      <td className='py-1.5 md:py-2 px-1 text-amber-400'>$1.75M/yr</td>
                    </tr>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$100-250M</td>
                      <td className='py-1.5 md:py-2 px-1 text-amber-400 font-bold'>1.50%</td>
                      <td className='py-1.5 md:py-2 px-1 text-amber-400'>$3M/yr</td>
                    </tr>
                    <tr>
                      <td className='py-1.5 md:py-2 px-1 text-gray-300'>$250M+</td>
                      <td className='py-1.5 md:py-2 px-1 text-amber-400 font-bold'>1.35%</td>
                      <td className='py-1.5 md:py-2 px-1 text-amber-400'>$4.05M/yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* IMPLEMENTATION FEE & WHITE-LABEL */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8'>
            <div className='bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/50 rounded-xl p-4 md:p-6'>
              <h4 className='text-base md:text-lg font-bold text-green-300 mb-3 md:mb-4 text-center'>
                Implementation Fee (One-Time)
              </h4>
              <div className='space-y-2 text-sm'>
                <div className='flex justify-between gap-3'>
                  <span className='text-gray-300'>$5-10M:</span>
                  <span className='text-green-400 font-bold'>$75K</span>
                </div>
                <div className='flex justify-between gap-3'>
                  <span className='text-gray-300'>$10-25M:</span>
                  <span className='text-green-400 font-bold'>$50K</span>
                </div>
                <div className='flex justify-between gap-3'>
                  <span className='text-gray-300'>$25-50M:</span>
                  <span className='text-green-400 font-bold'>$35K</span>
                </div>
                <div className='flex justify-between gap-3'>
                  <span className='text-gray-300'>$50M+:</span>
                  <span className='text-green-400 font-bold'>FREE ✓</span>
                </div>
              </div>
              <p className='text-xs text-gray-500 mt-3 text-center'>
                *Same across all tiers
              </p>
            </div>

            <div className='bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4 md:p-6'>
              <h4 className='text-base md:text-lg font-bold text-blue-300 mb-3 md:mb-4 text-center'>
                White-Label SDK
              </h4>
              <div className='text-center'>
                <div className='text-2xl md:text-4xl font-bold text-blue-300 mb-2'>$2-15K/month</div>
                <div className='text-xs md:text-sm text-gray-400'>Optional SaaS add-on</div>
              </div>
              <p className='text-xs text-gray-500 mt-3 text-center'>
                *Same across all tiers
              </p>
            </div>
          </div>

          {/* TIER PRICING JUSTIFICATION */}
          <div className='mb-6 md:mb-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-amber-500/10 border-2 border-blue-500/50 rounded-xl p-4 md:p-6'>
            <h4 className='text-lg md:text-xl font-bold text-white mb-3 md:mb-4 text-center'>
              Tier Pricing Justification
            </h4>
            <p className='text-xs md:text-sm text-gray-300 text-center mb-3 md:mb-4'>
              <strong className='text-blue-400'>Why tiered pricing makes sense:</strong>
            </p>

            <div className='overflow-x-auto'>
              <table className='w-full text-xs'>
                <thead>
                  <tr className='border-b border-blue-500/30'>
                    <th className='text-left py-2 px-2 text-gray-300'>Factor</th>
                    <th className='text-center py-2 px-2 text-blue-300'>Conservative</th>
                    <th className='text-center py-2 px-2 text-purple-300'>Balanced</th>
                    <th className='text-center py-2 px-2 text-amber-300'>Aggressive</th>
                    <th className='text-right py-2 px-2 text-green-300'>Fee Differential</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-blue-500/20'>
                  <tr>
                    <td className='py-2 px-2 text-gray-300'>Target Yield</td>
                    <td className='text-center text-blue-400'>5-8%</td>
                    <td className='text-center text-purple-400'>8-12%</td>
                    <td className='text-center text-amber-400'>12-22%</td>
                    <td className='text-right text-green-400 text-xs'>Higher yield = higher fee</td>
                  </tr>
                  <tr>
                    <td className='py-2 px-2 text-gray-300'>Leverage Used</td>
                    <td className='text-center text-blue-400'>0x</td>
                    <td className='text-center text-purple-400'>1.5x max</td>
                    <td className='text-center text-amber-400'>2x max</td>
                    <td className='text-right text-green-400 text-xs'>More complexity = higher fee</td>
                  </tr>
                  <tr>
                    <td className='py-2 px-2 text-gray-300'>Rebalancing</td>
                    <td className='text-center text-blue-400'>Monthly</td>
                    <td className='text-center text-purple-400'>Weekly</td>
                    <td className='text-center text-amber-400'>Daily</td>
                    <td className='text-right text-green-400 text-xs'>More active = higher fee</td>
                  </tr>
                  <tr>
                    <td className='py-2 px-2 text-gray-300'>Insurance Cost</td>
                    <td className='text-center text-blue-400'>0.08% TVL</td>
                    <td className='text-center text-purple-400'>0.10% TVL</td>
                    <td className='text-center text-amber-400'>0.12% TVL</td>
                    <td className='text-right text-green-400 text-xs'>Higher cost = higher fee</td>
                  </tr>
                  <tr>
                    <td className='py-2 px-2 text-gray-300'>Liquidity</td>
                    <td className='text-center text-blue-400'>48 hours</td>
                    <td className='text-center text-purple-400'>72 hours</td>
                    <td className='text-center text-amber-400'>5-7 days</td>
                    <td className='text-right text-green-400 text-xs'>More risk = higher fee</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='mt-4 pt-4 border-t border-blue-500/30'>
              <p className='text-xs text-gray-300 text-center'>
                <strong className='text-white'>Customer value proposition:</strong>
                <br/>
                • Conservative clients pay less (1.25%) because we deliver lower yields (5-8%)
                <br/>
                • Aggressive clients pay more (1.75%) but earn dramatically higher yields (12-22%)
                <br/>
                • <strong className='text-green-400'>Net result: All customers profit substantially vs current 0% yields</strong>
              </p>
            </div>
          </div>

          <div className='bg-purple-900/30 p-4 rounded-lg border border-purple-500/50'>
            <p className='text-purple-300 text-sm text-center'>
              ✓ Pricing rewards both volume scale AND tier optimization while maintaining 87-90% gross margins and improving operating margins (42% → 49-61%)
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
