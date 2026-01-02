"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Icon from "@/components/Icon";

export default function Slide16_BusinessModel() {
  return (
    <Slide id={15} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-12 text-center">
          APPENDIX C: BUSINESS MODEL - INSTITUTIONAL B2B
        </Title>

        <div className="max-w-5xl mx-auto mb-12 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl">
          <h3 className="text-xl font-bold text-center mb-3 text-green-300">
            Defensive Economics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <Icon
                name="trending"
                size={24}
                className="text-green-400 mx-auto mb-2"
              />
              <div className="text-sm text-gray-300">
                Revenue scales with AUM, not trading volume
              </div>
            </div>
            <div>
              <Icon
                name="shield"
                size={24}
                className="text-green-400 mx-auto mb-2"
              />
              <div className="text-sm text-gray-300">
                Performs well in flat or declining markets
              </div>
            </div>
            <div>
              <Icon
                name="check"
                size={24}
                className="text-green-400 mx-auto mb-2"
              />
              <div className="text-sm text-gray-300">
                Yield demand increases during crises
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Model */}
        <div className="mb-8 md:mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4 md:mb-6 text-center">
            Revenue Model
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-4 md:p-6 text-center">
              <h4 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-green-300">
                Management Fee
              </h4>
              <div className="text-2xl md:text-4xl font-bold text-green-300 mb-2">
                1.25-1.75%*
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                Annual on AUM
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 mt-2">
                *Tier-dependent: Conservative 1.25%, Balanced 1.50%, Aggressive
                1.75% (before volume discounts)
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4 md:p-6 text-center">
              <h4 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-blue-300">
                Implementation
              </h4>
              <div className="text-2xl md:text-4xl font-bold text-blue-300 mb-2">
                $25-75K
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                One-Time Setup
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-4 md:p-6 text-center">
              <h4 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-amber-300">
                White-Label SDK
              </h4>
              <div className="text-2xl md:text-4xl font-bold text-amber-300 mb-2">
                $2-15K
              </div>
              <div className="text-xs md:text-sm text-gray-400">
                Monthly SaaS
              </div>
            </div>
          </div>
        </div>

        {/* Operating Cost Structure */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
            Phased Operating Expense Model
          </h3>

          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-2 border-purple-500/30 rounded-xl p-6">
            <div className="mb-6 p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg">
              <p className="text-sm text-amber-300 text-center">
                <strong>Responsible Burn Rate Management:</strong> Operating expenses scale with revenue progress, not flat spending. This is how institutional B2B SaaS companies manage to profitability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* PHASE 1 */}
              <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/30 rounded-xl p-4">
                <div className="text-center mb-3">
                  <div className="text-red-300 font-bold text-sm mb-1">
                    Months 1-6
                  </div>
                  <div className="text-xs text-gray-400">Pre-Revenue Phase</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Engineering:</span>
                    <span className="text-white font-bold">$33K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Insurance:</span>
                    <span className="text-white font-bold">$10K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Infrastructure:</span>
                    <span className="text-white font-bold">$10K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sales & BD:</span>
                    <span className="text-white font-bold">$8K/mo</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-red-500/30 font-bold">
                    <span className="text-red-300">Total:</span>
                    <span className="text-red-300">~$66K/mo</span>
                  </div>
                </div>
              </div>

              {/* PHASE 2 */}
              <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-2 border-amber-500/30 rounded-xl p-4">
                <div className="text-center mb-3">
                  <div className="text-amber-300 font-bold text-sm mb-1">
                    Months 7-12
                  </div>
                  <div className="text-xs text-gray-400">Early Revenue</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Engineering:</span>
                    <span className="text-white font-bold">$33K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Insurance:</span>
                    <span className="text-white font-bold">$12K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Infrastructure:</span>
                    <span className="text-white font-bold">$10K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sales & BD:</span>
                    <span className="text-white font-bold">$12K/mo</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-amber-500/30 font-bold">
                    <span className="text-amber-300">Total:</span>
                    <span className="text-amber-300">~$70K/mo</span>
                  </div>
                </div>
              </div>

              {/* PHASE 3 */}
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/30 rounded-xl p-4">
                <div className="text-center mb-3">
                  <div className="text-blue-300 font-bold text-sm mb-1">
                    Months 13-18
                  </div>
                  <div className="text-xs text-gray-400">Scaling Phase</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Engineering:</span>
                    <span className="text-white font-bold">$33K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Insurance:</span>
                    <span className="text-white font-bold">$15K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Infrastructure:</span>
                    <span className="text-white font-bold">$10K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sales & BD:</span>
                    <span className="text-white font-bold">$20K/mo</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-blue-500/30 font-bold">
                    <span className="text-blue-300">Total:</span>
                    <span className="text-blue-300">~$83K/mo</span>
                  </div>
                </div>
              </div>

              {/* PHASE 4 */}
              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/30 rounded-xl p-4">
                <div className="text-center mb-3">
                  <div className="text-green-300 font-bold text-sm mb-1">
                    Months 19-24
                  </div>
                  <div className="text-xs text-gray-400">Growth Phase</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Engineering:</span>
                    <span className="text-white font-bold">$33K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Insurance:</span>
                    <span className="text-white font-bold">$20K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Infrastructure:</span>
                    <span className="text-white font-bold">$10K/mo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sales & BD:</span>
                    <span className="text-white font-bold">$25K/mo</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-green-500/30 font-bold">
                    <span className="text-green-300">Total:</span>
                    <span className="text-green-300">~$97K/mo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* OPERATING EXPENSE STRUCTURE & SCALING LOGIC */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-purple-500/40 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-bold text-purple-300 mb-4 text-center">
                Operating Expense Structure & Scaling Logic
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* FIXED INFRASTRUCTURE COSTS */}
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h5 className="text-sm font-bold text-blue-300 mb-3 flex items-center gap-2">
                    <span className="text-blue-400">●</span>
                    Fixed Infrastructure Costs
                  </h5>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 font-semibold">Engineering & Platform Ops:</span>
                        <span className="text-white font-bold">$33K/mo</span>
                      </div>
                      <p className="text-gray-400 text-[10px] leading-tight">
                        Core platform maintenance, DevOps, 24/7 monitoring, technical support.
                        <br />
                        <span className="text-blue-300">Scales slowly:</span> One engineer can support $1B+ AUM with good infrastructure
                      </p>
                    </div>
                    <div className="border-t border-blue-500/20 pt-3">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 font-semibold">Monitoring & Infrastructure:</span>
                        <span className="text-white font-bold">$10K/mo</span>
                      </div>
                      <p className="text-gray-400 text-[10px] leading-tight">
                        Cloud hosting, Tenderly monitoring, alert systems, security tools.
                        <br />
                        <span className="text-blue-300">Scales with AUM:</span> Roughly linear growth
                      </p>
                    </div>
                    <div className="border-t border-blue-500/20 pt-3">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 font-semibold">Insurance & Audits:</span>
                        <span className="text-white font-bold">$10-20K/mo avg</span>
                      </div>
                      <p className="text-gray-400 text-[10px] leading-tight">
                        Nexus Mutual coverage ~0.08-0.12% of AUM + annual audit costs amortized.
                        <br />
                        <span className="text-blue-300">Scales directly with AUM:</span> More AUM = higher premiums + more audits
                      </p>
                    </div>
                  </div>
                </div>

                {/* VARIABLE GROWTH COSTS */}
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h5 className="text-sm font-bold text-green-300 mb-3 flex items-center gap-2">
                    <span className="text-green-400">●</span>
                    Variable Growth Costs (scale with traction)
                  </h5>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 font-semibold">Sales & Business Development:</span>
                        <span className="text-white font-bold">$8-25K/mo</span>
                      </div>
                      <div className="space-y-1.5 text-[10px]">
                        <div className="flex justify-between">
                          <span className="text-gray-400">• Months 1-6:</span>
                          <span className="text-red-300">$8K/mo (founder-led, travel)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">• Months 7-12:</span>
                          <span className="text-amber-300">$12K/mo (shared BD/contractor)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">• Months 13-18:</span>
                          <span className="text-blue-300">$20K/mo (full-time BD)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">• Months 19-24:</span>
                          <span className="text-green-300">$25K/mo (BD + acct mgr)</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-[10px] leading-tight mt-2 pt-2 border-t border-green-500/20">
                        <span className="text-green-300 font-semibold">Why this matters:</span> We scale sales spend ONLY as we prove traction. No point spending $230K/year on sales if you only have $30K/month in revenue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WHY THIS MODEL MAKES SENSE */}
              <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-4 mb-4">
                <h5 className="text-sm font-bold text-amber-300 mb-3">Why This Model Makes Sense:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="flex gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span className="text-gray-300">
                      <strong className="text-green-300">We're not spending carelessly:</strong> Sales spend grows with revenue
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-blue-400 flex-shrink-0">✓</span>
                    <span className="text-gray-300">
                      <strong className="text-blue-300">We're capital efficient:</strong> Fixed infrastructure is the backbone; we layer sales when ready
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-400 flex-shrink-0">✓</span>
                    <span className="text-gray-300">
                      <strong className="text-purple-300">We avoid the trap:</strong> Most startups fail by spending too much on sales before proving PMF
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-amber-400 flex-shrink-0">✓</span>
                    <span className="text-gray-300">
                      <strong className="text-amber-300">We're realistic:</strong> One good BD person can manage 3-5 large institutional customers
                    </span>
                  </div>
                </div>
              </div>

              {/* EXAMPLE COMPARISON */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <h5 className="text-sm font-bold text-red-300 mb-3">Example: Why Spending Scales This Way</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-2">
                    <p className="text-red-300 font-semibold">❌ Unsustainable Approach:</p>
                    <p className="text-gray-400 text-[10px]">
                      $50K/month revenue, but spending $19K/month on sales ($230K/year):
                    </p>
                    <div className="bg-black/30 p-2 rounded text-[10px] font-mono">
                      <div>Revenue: $50K/mo</div>
                      <div>Sales: -$19K/mo</div>
                      <div>Other costs: -$50K/mo</div>
                      <div className="border-t border-red-500/30 mt-1 pt-1 text-red-400 font-bold">
                        Loss: -$19K/mo
                      </div>
                    </div>
                    <p className="text-red-300 text-[10px] font-semibold">That's unsustainable.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-300 font-semibold">✓ Disciplined Approach:</p>
                    <p className="text-gray-400 text-[10px]">
                      $50K/month revenue, spending $12K/month on sales. As revenue grows to $100K/mo, increase sales to $20K/mo:
                    </p>
                    <div className="bg-black/30 p-2 rounded text-[10px] font-mono">
                      <div>Revenue: $100K/mo</div>
                      <div>Sales: -$20K/mo</div>
                      <div>Other costs: -$60K/mo</div>
                      <div className="border-t border-green-500/30 mt-1 pt-1 text-green-400 font-bold">
                        Profit: +$20K/mo
                      </div>
                    </div>
                    <p className="text-green-300 text-[10px] font-semibold">This is how disciplined companies scale.</p>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs text-purple-300 mt-4 pt-4 border-t border-purple-500/30">
                <strong>Bottom line:</strong> We don't have a fixed operating expense model; we have a phased, responsive model tied to traction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-amber-900/20 p-4 rounded-lg border border-amber-500/30">
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">Total Seed Burn (20 months)</div>
                  <div className="text-2xl font-bold text-amber-300">$1.5-1.6M</div>
                  <div className="text-xs text-gray-500 mt-1">$1.5-2M seed round</div>
                </div>
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">Operating Breakeven</div>
                  <div className="text-2xl font-bold text-blue-300">Month 12</div>
                  <div className="text-xs text-gray-500 mt-1">$60-80M AUM, ~$75K MRR</div>
                </div>
              </div>
              <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">Series A Readiness</div>
                  <div className="text-2xl font-bold text-green-300">Month 18-20</div>
                  <div className="text-xs text-gray-500 mt-1">$150M+ AUM, $2.1-2.3M ARR</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/30 p-4 rounded-lg mt-4">
              <h5 className="text-sm font-bold text-blue-300 mb-3">
                Why This Model Works
              </h5>
              <div className="text-xs text-gray-300 space-y-2">
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>
                    <strong className="text-green-400">
                      Phased spend matches revenue progress:
                    </strong>{" "}
                    Start lean ($66K/mo), scale responsibly ($70-97K/mo) as AUM grows
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>
                    <strong className="text-blue-400">
                      20-24 month runway on $1.5-2M:
                    </strong>{" "}
                    Reaches operating breakeven at Month 12, Series A readiness at Month 18-20
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>
                    <strong className="text-purple-400">
                      Sales scales with revenue:
                    </strong>{" "}
                    $8K/mo (founder-led) → $25K/mo (full BD team) only as customers convert
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>
                    <strong className="text-amber-400">
                      Operating margins improve with scale:
                    </strong>{" "}
                    Break-even at Month 12 → 42% margins at Month 18 → 49-61% at Year 2-3
                  </span>
                </div>
              </div>
              <p className="text-xs text-amber-300 mt-3 text-center border-t border-amber-500/30 pt-3">
                This is standard B2B SaaS playbook: responsible burn management, clear milestones, operating leverage at scale.
              </p>
            </div>
          </div>
        </div>

        {/* QUARTERLY FINANCIAL PROJECTIONS */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">
            Quarterly Financial Projections (Year 1)
          </h3>

          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-2 border-green-500/30 rounded-xl p-6 mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b-2 border-green-500/50">
                    <th className="py-3 px-2 text-left text-green-300 font-bold">Quarter</th>
                    <th className="py-3 px-2 text-right text-green-300 font-bold">AUM</th>
                    <th className="py-3 px-2 text-right text-green-300 font-bold">Monthly Avg Revenue</th>
                    <th className="py-3 px-2 text-right text-green-300 font-bold">Monthly Avg OpEx</th>
                    <th className="py-3 px-2 text-right text-green-300 font-bold">Monthly Profit/(Loss)</th>
                    <th className="py-3 px-2 text-right text-green-300 font-bold">Cumulative Cash</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-500/20">
                  <tr className="hover:bg-green-500/5">
                    <td className="py-3 px-2 text-gray-300 font-semibold">Q1 (Mo 1-3)</td>
                    <td className="py-3 px-2 text-right text-white">$0-10M</td>
                    <td className="py-3 px-2 text-right text-amber-400">$0.5K</td>
                    <td className="py-3 px-2 text-right text-red-400">$66K</td>
                    <td className="py-3 px-2 text-right text-red-400 font-bold">-$65.5K</td>
                    <td className="py-3 px-2 text-right text-blue-400 font-bold">$1.3M</td>
                  </tr>
                  <tr className="hover:bg-green-500/5">
                    <td className="py-3 px-2 text-gray-300 font-semibold">Q2 (Mo 4-6)</td>
                    <td className="py-3 px-2 text-right text-white">$10M</td>
                    <td className="py-3 px-2 text-right text-amber-400">$2.6K</td>
                    <td className="py-3 px-2 text-right text-red-400">$66K</td>
                    <td className="py-3 px-2 text-right text-red-400 font-bold">-$63.4K</td>
                    <td className="py-3 px-2 text-right text-blue-400 font-bold">$1.1M</td>
                  </tr>
                  <tr className="hover:bg-green-500/5">
                    <td className="py-3 px-2 text-gray-300 font-semibold">Q3 (Mo 7-9)</td>
                    <td className="py-3 px-2 text-right text-white">$20-30M</td>
                    <td className="py-3 px-2 text-right text-amber-400">$32K</td>
                    <td className="py-3 px-2 text-right text-red-400">$70K</td>
                    <td className="py-3 px-2 text-right text-red-400 font-bold">-$38K</td>
                    <td className="py-3 px-2 text-right text-blue-400 font-bold">$930K</td>
                  </tr>
                  <tr className="hover:bg-green-500/5 bg-green-500/10">
                    <td className="py-3 px-2 text-gray-300 font-semibold">Q4 (Mo 10-12)</td>
                    <td className="py-3 px-2 text-right text-white font-bold">$50-60M</td>
                    <td className="py-3 px-2 text-right text-green-400 font-bold">$75K</td>
                    <td className="py-3 px-2 text-right text-amber-400">$72K</td>
                    <td className="py-3 px-2 text-right text-green-400 font-bold">+$3K</td>
                    <td className="py-3 px-2 text-right text-green-400 font-bold">$818K</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-green-500/30">
              <div className="space-y-2 text-xs">
                <h4 className="font-bold text-green-300 mb-3">Key Milestones:</h4>
                <div className="flex gap-2">
                  <span className="text-blue-400">•</span>
                  <span className="text-gray-300"><strong className="text-blue-300">Q2 End:</strong> First customer fully onboarded ($10M AUM)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  <span className="text-gray-300"><strong className="text-purple-300">Q3 End:</strong> Second customer acquired ($20M AUM)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-amber-400">•</span>
                  <span className="text-gray-300"><strong className="text-amber-300">Q4 End:</strong> Near operating breakeven; third customer starting ($50-60M cumulative)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300"><strong className="text-green-300">Month 12:</strong> Operating breakeven achieved (~$60-80M AUM)</span>
                </div>
              </div>
              <div className="bg-amber-900/20 p-4 rounded-lg border border-amber-500/30">
                <p className="text-xs text-amber-300 leading-relaxed">
                  <strong>Note on Burn Rate:</strong> Q1-Q3 show managed burn, not reckless spending. Operating breakeven is achieved with 3 institutional customers, not artificial metrics. Conservative timeline assumes longer customer acquisition cycles than might actually occur.
                </p>
              </div>
            </div>
          </div>

          {/* YEAR 2 PROJECTIONS */}
          <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">
            Year 2 Projections (Series A Growth)
          </h3>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/30 rounded-xl p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b-2 border-blue-500/50">
                    <th className="py-3 px-2 text-left text-blue-300 font-bold">Period</th>
                    <th className="py-3 px-2 text-right text-blue-300 font-bold">AUM</th>
                    <th className="py-3 px-2 text-right text-blue-300 font-bold">Annual Revenue</th>
                    <th className="py-3 px-2 text-right text-blue-300 font-bold">Annual OpEx</th>
                    <th className="py-3 px-2 text-right text-blue-300 font-bold">Annual Operating Profit</th>
                    <th className="py-3 px-2 text-right text-blue-300 font-bold">Cash Position</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-500/20">
                  <tr className="hover:bg-blue-500/5">
                    <td className="py-3 px-2 text-gray-300 font-semibold">Months 13-18</td>
                    <td className="py-3 px-2 text-right text-white">$80-120M</td>
                    <td className="py-3 px-2 text-right text-green-400 font-bold">$900K</td>
                    <td className="py-3 px-2 text-right text-amber-400">$500K</td>
                    <td className="py-3 px-2 text-right text-green-400 font-bold">+$400K</td>
                    <td className="py-3 px-2 text-right text-green-400 font-bold">Positive, ~$1.2M+</td>
                  </tr>
                  <tr className="hover:bg-blue-500/5 bg-blue-500/10">
                    <td className="py-3 px-2 text-gray-300 font-semibold">Months 19-24</td>
                    <td className="py-3 px-2 text-right text-white font-bold">$120-150M</td>
                    <td className="py-3 px-2 text-right text-green-400 font-bold">$1.5M</td>
                    <td className="py-3 px-2 text-right text-amber-400">$600K</td>
                    <td className="py-3 px-2 text-right text-green-400 font-bold">+$900K</td>
                    <td className="py-3 px-2 text-right text-green-400 font-bold">Healthy, Series A funded</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-blue-500/30">
              <div className="space-y-2 text-xs">
                <h4 className="font-bold text-blue-300 mb-3">Key Milestones:</h4>
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300"><strong className="text-green-300">Month 15:</strong> Clear operating profitability, Series A preparation begins</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span className="text-gray-300"><strong className="text-blue-300">Month 18:</strong> Series A-ready metrics ($150M+ AUM, $100K+/month operating profit)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-400">✓</span>
                  <span className="text-gray-300"><strong className="text-purple-300">Month 20:</strong> Series A raise completed</span>
                </div>
              </div>
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                <p className="text-xs text-purple-300 leading-relaxed">
                  <strong>Series A Timing:</strong> Series A happens when unit economics prove, typically Month 18-20. These projections are conservative and assume longer customer acquisition cycles than might actually occur.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* UNDERSTANDING BREAKEVEN TYPES */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">
            Understanding Our Financial Metrics: Three Types of Breakeven
          </h3>

          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/30 rounded-xl p-6 mb-6">
            <p className="text-center text-sm text-amber-300 mb-6">
              Institutional investors evaluate companies using three separate breakeven metrics. Here's what each means for Monolith:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* TYPE 1: CASH BREAKEVEN */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-red-300 mb-2">Type 1: Cash Breakeven</div>
                  <div className="text-xs text-gray-400 italic">(When Does the Money Run Out?)</div>
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="text-gray-400 font-semibold mb-1">Definition:</div>
                    <p className="text-gray-300 text-[10px] leading-tight">
                      When cumulative cash spent = seed capital invested
                    </p>
                  </div>
                  <div className="border-t border-red-500/20 pt-3">
                    <div className="text-gray-400 font-semibold mb-1">For Monolith:</div>
                    <p className="text-white font-bold">~20-24 months</p>
                  </div>
                  <div className="border-t border-red-500/20 pt-3">
                    <div className="text-gray-400 font-semibold mb-1">Why it matters:</div>
                    <p className="text-gray-300 text-[10px] leading-tight">
                      This is your absolute runway. Miss it = out of business
                    </p>
                  </div>
                  <div className="border-t border-red-500/20 pt-3">
                    <div className="text-gray-400 font-semibold mb-1">Our position:</div>
                    <p className="text-green-300 text-[10px] leading-tight font-semibold">
                      We have sufficient runway; we won't need capital until we choose to scale
                    </p>
                  </div>
                </div>
              </div>

              {/* TYPE 2: OPERATING BREAKEVEN */}
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-5">
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-blue-300 mb-2">Type 2: Operating Breakeven</div>
                  <div className="text-xs text-gray-400 italic">(When Is Monthly Revenue &gt; Monthly Expenses?)</div>
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="text-gray-400 font-semibold mb-1">Definition:</div>
                    <p className="text-gray-300 text-[10px] leading-tight">
                      Monthly operating expenses = monthly recurring revenue
                    </p>
                  </div>
                  <div className="border-t border-blue-500/20 pt-3">
                    <div className="text-gray-400 font-semibold mb-1">For Monolith:</div>
                    <p className="text-white font-bold">~$60-80M AUM (~Month 12)</p>
                  </div>
                  <div className="border-t border-blue-500/20 pt-3">
                    <div className="text-gray-400 font-semibold mb-1">Why it matters:</div>
                    <p className="text-gray-300 text-[10px] leading-tight">
                      This is when the business model "works" on a monthly basis (excluding sunk costs)
                    </p>
                  </div>
                  <div className="border-t border-blue-500/20 pt-3">
                    <div className="text-gray-400 font-semibold mb-1">Our position:</div>
                    <p className="text-green-300 text-[10px] leading-tight font-semibold">
                      Achievable with 2-3 anchor customers of $20-30M+ each
                    </p>
                  </div>
                </div>
              </div>

              {/* TYPE 3: CUMULATIVE BREAKEVEN */}
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-5">
                <div className="text-center mb-4">
                  <div className="text-lg font-bold text-green-300 mb-2">Type 3: Cumulative Breakeven</div>
                  <div className="text-xs text-gray-400 italic">(When Have We Recovered All Invested Capital?)</div>
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="text-gray-400 font-semibold mb-1">Definition:</div>
                    <p className="text-gray-300 text-[10px] leading-tight">
                      Cumulative revenue - cumulative costs = 0
                    </p>
                  </div>
                  <div className="border-t border-green-500/20 pt-3">
                    <div className="text-gray-400 font-semibold mb-1">For Monolith:</div>
                    <p className="text-white font-bold">~18-24 months</p>
                    <p className="text-gray-400 text-[10px]">(depending on growth rate)</p>
                  </div>
                  <div className="border-t border-green-500/20 pt-3">
                    <div className="text-gray-400 font-semibold mb-1">Why it matters:</div>
                    <p className="text-gray-300 text-[10px] leading-tight">
                      This is when you've paid back the seed and start building equity
                    </p>
                  </div>
                  <div className="border-t border-green-500/20 pt-3">
                    <div className="text-gray-400 font-semibold mb-1">Our position:</div>
                    <p className="text-green-300 text-[10px] leading-tight font-semibold">
                      Achievable by Month 18-20 with Series A funding, or by Month 24 with strong execution
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MONOLITH'S POSITION TABLE */}
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-5 mb-6">
              <h4 className="text-sm font-bold text-purple-300 mb-4 text-center">
                Monolith's Position on Each Metric
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b-2 border-purple-500/50">
                      <th className="py-2 px-3 text-left text-purple-300 font-bold">Metric</th>
                      <th className="py-2 px-3 text-center text-purple-300 font-bold">Timeline</th>
                      <th className="py-2 px-3 text-center text-purple-300 font-bold">AUM Target</th>
                      <th className="py-2 px-3 text-center text-purple-300 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-500/20">
                    <tr className="hover:bg-purple-500/5">
                      <td className="py-3 px-3 text-gray-300 font-semibold">Cash Runway</td>
                      <td className="py-3 px-3 text-center text-white">20-24 months</td>
                      <td className="py-3 px-3 text-center text-gray-400">N/A</td>
                      <td className="py-3 px-3 text-center text-green-400 font-bold">✅ Sufficient</td>
                    </tr>
                    <tr className="hover:bg-purple-500/5">
                      <td className="py-3 px-3 text-gray-300 font-semibold">Operating Breakeven</td>
                      <td className="py-3 px-3 text-center text-white">~12 months</td>
                      <td className="py-3 px-3 text-center text-white">$60-80M</td>
                      <td className="py-3 px-3 text-center text-green-400 font-bold">✅ Achievable with 2-3 customers</td>
                    </tr>
                    <tr className="hover:bg-purple-500/5">
                      <td className="py-3 px-3 text-gray-300 font-semibold">Cumulative Breakeven</td>
                      <td className="py-3 px-3 text-center text-white">~18-20 months</td>
                      <td className="py-3 px-3 text-center text-white">$150M+</td>
                      <td className="py-3 px-3 text-center text-green-400 font-bold">✅ Series A-ready metrics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* WHY THIS MATTERS */}
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-5">
              <h4 className="text-sm font-bold text-orange-300 mb-4">
                Why This Matters for Institutional Investors:
              </h4>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                Traditional VCs often misunderstand SaaS unit economics. Here's what you should know:
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex gap-2">
                  <span className="text-red-400 flex-shrink-0">✗</span>
                  <span className="text-gray-300">
                    We're <strong className="text-red-300">not</strong> trying to be profitable by Month 6 (unrealistic)
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span className="text-gray-300">
                    We <strong className="text-green-300">ARE</strong> managing our burn rate responsibly (phased spending)
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span className="text-gray-300">
                    We <strong className="text-green-300">WILL</strong> achieve operational self-sufficiency by Month 12 (with $60-80M AUM)
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span className="text-gray-300">
                    We <strong className="text-green-300">WILL</strong> have Series A-ready metrics by Month 18-20 (with $150M+ AUM)
                  </span>
                </div>
              </div>
              <p className="text-center text-sm text-orange-300 font-semibold mt-4 pt-4 border-t border-orange-500/30">
                This is the trajectory of a healthy, well-managed B2B SaaS company.
              </p>
            </div>
          </div>
        </div>

        {/* CUSTOMER ACQUISITION & REVENUE GROWTH DRIVERS */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
            Customer Acquisition & Revenue Growth Drivers
          </h3>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 rounded-xl p-6">
            <p className="text-center text-sm text-cyan-300 mb-6">
              Our financial projections are achievable because our go-to-market is fundamentally different from high-volume SaaS.
            </p>

            {/* MODEL: B2B ENTERPRISE */}
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-5 mb-6">
              <h4 className="text-lg font-bold text-blue-300 mb-3 text-center">
                Model: B2B Enterprise (3-5 Large Customers)
              </h4>
              <p className="text-sm text-gray-300 mb-4 text-center">
                We don't need 100 customers at $1M each. We need:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/20">
                  <div className="text-blue-300 font-bold mb-1">3-5 anchor customers</div>
                  <div className="text-gray-400">at $30-50M AUM each</div>
                </div>
                <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
                  <div className="text-purple-300 font-bold mb-1">Customer AUM growth</div>
                  <div className="text-gray-400">(biggest revenue driver)</div>
                </div>
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/20">
                  <div className="text-green-300 font-bold mb-1">Referral generation</div>
                  <div className="text-gray-400">1-2 new customers per success</div>
                </div>
              </div>
            </div>

            {/* REVENUE GROWTH DRIVERS */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-cyan-300 mb-4 text-center">
                Revenue Growth Drivers:
              </h4>

              <div className="space-y-4">
                {/* DRIVER 1: CUSTOMER AUM GROWTH */}
                <div className="bg-gradient-to-r from-purple-900/30 to-purple-900/10 border-l-4 border-purple-500 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-bold text-purple-300 mb-2">
                        Customer AUM Growth (Primary Driver)
                      </h5>
                      <div className="space-y-2 text-xs text-gray-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div>
                            <span className="text-purple-400 font-semibold">Scenario:</span> Pilot customer starts at $10M
                          </div>
                          <div>
                            <span className="text-purple-400 font-semibold">Over 12 months:</span> Grows to $30-50M (3-5x growth)
                          </div>
                          <div>
                            <span className="text-purple-400 font-semibold">Revenue impact:</span> $2.6K/month → $31-41K/month (same customer)
                          </div>
                          <div>
                            <span className="text-purple-400 font-semibold">Effort:</span> Minimal new cost (same platform, same team, more AUM)
                          </div>
                        </div>
                        <div className="pt-2 border-t border-purple-500/20">
                          <span className="text-green-400 font-semibold">Why:</span> As customers see consistent performance, they deploy more capital
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DRIVER 2: NEW CUSTOMER ACQUISITION */}
                <div className="bg-gradient-to-r from-blue-900/30 to-blue-900/10 border-l-4 border-blue-500 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-bold text-blue-300 mb-2">
                        New Customer Acquisition (Secondary Driver)
                      </h5>
                      <div className="space-y-2 text-xs text-gray-300">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          <div className="bg-red-900/20 p-2 rounded border border-red-500/20">
                            <div className="text-red-300 font-semibold mb-1">Months 1-6:</div>
                            <div>Land customer 1 ($10M pilot)</div>
                          </div>
                          <div className="bg-amber-900/20 p-2 rounded border border-amber-500/20">
                            <div className="text-amber-300 font-semibold mb-1">Months 7-9:</div>
                            <div>Land customer 2 ($20M, informed by customer 1 success)</div>
                          </div>
                          <div className="bg-green-900/20 p-2 rounded border border-green-500/20">
                            <div className="text-green-300 font-semibold mb-1">Months 10-12:</div>
                            <div>Land customer 3 ($30M, referral from customers 1-2)</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 border-t border-blue-500/20">
                          <div>
                            <span className="text-blue-400 font-semibold">Timeline:</span> 3-6 months between customer acquisition
                          </div>
                          <div>
                            <span className="text-blue-400 font-semibold">Effort:</span> One full-time BD person + founder
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DRIVER 3: REFERENCE SELLING */}
                <div className="bg-gradient-to-r from-green-900/30 to-green-900/10 border-l-4 border-green-500 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-bold text-green-300 mb-2">
                        Reference Selling (Accelerator)
                      </h5>
                      <div className="space-y-1.5 text-xs text-gray-300">
                        <div className="flex gap-2">
                          <span className="text-green-400">•</span>
                          <span>Once customer 1 succeeds (6 months in), customer 2 is easier</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-green-400">•</span>
                          <span>Once customers 1-2 succeed (9 months in), customer 3 is easier</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-green-400">•</span>
                          <span>By Month 15, we have reference stories for Series A marketing</span>
                        </div>
                        <div className="flex gap-2 pt-2 border-t border-green-500/20">
                          <span className="text-green-400 font-bold">⚡</span>
                          <span className="text-green-300 font-semibold">Compounding effect: Success breeds success</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FINANCIAL EXAMPLE: THREE CUSTOMERS */}
            <div className="bg-amber-900/30 border border-amber-500/30 rounded-lg p-5 mb-6">
              <h4 className="text-lg font-bold text-amber-300 mb-4 text-center">
                Financial Example: Three Customers
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b-2 border-amber-500/50">
                      <th className="py-2 px-2 text-left text-amber-300 font-bold">Timeline</th>
                      <th className="py-2 px-2 text-center text-amber-300 font-bold">Customer 1</th>
                      <th className="py-2 px-2 text-center text-amber-300 font-bold">Customer 2</th>
                      <th className="py-2 px-2 text-center text-amber-300 font-bold">Customer 3</th>
                      <th className="py-2 px-2 text-center text-amber-300 font-bold">Total AUM</th>
                      <th className="py-2 px-2 text-right text-amber-300 font-bold">Monthly Rev</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-500/20">
                    <tr className="hover:bg-amber-500/5">
                      <td className="py-2 px-2 text-gray-300 font-semibold">Month 6</td>
                      <td className="py-2 px-2 text-center text-white">$10M</td>
                      <td className="py-2 px-2 text-center text-gray-500">—</td>
                      <td className="py-2 px-2 text-center text-gray-500">—</td>
                      <td className="py-2 px-2 text-center text-blue-400 font-bold">$10M</td>
                      <td className="py-2 px-2 text-right text-amber-400 font-bold">$1.5K</td>
                    </tr>
                    <tr className="hover:bg-amber-500/5">
                      <td className="py-2 px-2 text-gray-300 font-semibold">Month 12</td>
                      <td className="py-2 px-2 text-center text-white">$30M <span className="text-green-400 text-[10px]">(3x)</span></td>
                      <td className="py-2 px-2 text-center text-white">$20M <span className="text-blue-400 text-[10px]">(new)</span></td>
                      <td className="py-2 px-2 text-center text-gray-500">—</td>
                      <td className="py-2 px-2 text-center text-blue-400 font-bold">$50M</td>
                      <td className="py-2 px-2 text-right text-amber-400 font-bold">$62K</td>
                    </tr>
                    <tr className="hover:bg-amber-500/5">
                      <td className="py-2 px-2 text-gray-300 font-semibold">Month 18</td>
                      <td className="py-2 px-2 text-center text-white">$50M <span className="text-green-400 text-[10px]">(5x)</span></td>
                      <td className="py-2 px-2 text-center text-white">$40M <span className="text-green-400 text-[10px]">(2x)</span></td>
                      <td className="py-2 px-2 text-center text-white">$30M <span className="text-blue-400 text-[10px]">(new)</span></td>
                      <td className="py-2 px-2 text-center text-blue-400 font-bold">$120M</td>
                      <td className="py-2 px-2 text-right text-amber-400 font-bold">$150K</td>
                    </tr>
                    <tr className="hover:bg-amber-500/5 bg-green-500/10">
                      <td className="py-2 px-2 text-gray-300 font-semibold">Month 24</td>
                      <td className="py-2 px-2 text-center text-white">$70M</td>
                      <td className="py-2 px-2 text-center text-white">$60M</td>
                      <td className="py-2 px-2 text-center text-white">$50M</td>
                      <td className="py-2 px-2 text-center text-green-400 font-bold">$180M</td>
                      <td className="py-2 px-2 text-right text-green-400 font-bold">$225K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-500/30">
                <p className="text-xs text-amber-300 font-semibold mb-2">Notice:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-300">
                  <div className="flex gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Each customer grows 3-5x over 12-18 months</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>New customers added every 6 months</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Total AUM compounds from growth + new customers</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-amber-400">✓</span>
                    <span>Revenue grows from $1.5K to $225K/month in 24 months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WHY THIS MODEL IS ACHIEVABLE */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-green-300 mb-4 text-center">
                Why This Model Is Achievable:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* REASON 1 */}
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h5 className="text-sm font-bold text-green-300 mb-2">1. Large customers have compelling ROI</h5>
                  <div className="space-y-1.5 text-xs text-gray-300">
                    <div>$30M customer earning 6% = <span className="text-green-400 font-bold">$1.8M/year</span> in yield</div>
                    <div>Our 1.5% fee = <span className="text-amber-400 font-bold">$450K/year</span></div>
                    <div>Customer gets <span className="text-green-400 font-bold">$1.35M net</span> = 3x payback vs our fee</div>
                    <div className="pt-2 border-t border-green-500/20 text-green-300 font-semibold">
                      This is an easy sell
                    </div>
                  </div>
                </div>

                {/* REASON 2 */}
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <h5 className="text-sm font-bold text-blue-300 mb-2">2. Minimal CAC (Customer Acquisition Cost)</h5>
                  <div className="space-y-1.5 text-xs text-gray-300">
                    <div>Each customer typically takes <span className="text-blue-400 font-bold">3-6 months</span> to land</div>
                    <div>One full-time BD person can manage this at scale</div>
                    <div>CAC payback: <span className="text-green-400 font-bold">~6-9 months</span> (customer pays us $37.5K in Year 1)</div>
                    <div className="pt-2 border-t border-blue-500/20">
                      <span className="text-blue-400 font-semibold">LTV:</span> After 3 years, one $50M customer = <span className="text-green-400 font-bold">$2.25M revenue</span>
                    </div>
                  </div>
                </div>

                {/* REASON 3 */}
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                  <h5 className="text-sm font-bold text-purple-300 mb-2">3. Institutional Buying Cycle Advantage</h5>
                  <div className="space-y-1.5 text-xs text-gray-300">
                    <div>Enterprise customers do due diligence for <span className="text-purple-400 font-bold">6-12 weeks</span></div>
                    <div>But once they commit, they stay (low churn <span className="text-green-400 font-bold">&lt;5%</span>)</div>
                    <div>One customer for 5 years &gt; 5 customers for 1 year</div>
                    <div className="pt-2 border-t border-purple-500/20 text-purple-300 font-semibold">
                      Our model optimizes for customer longevity
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* REFERENCE SELLING EFFECT */}
            <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-2 border-cyan-500/50 rounded-xl p-5">
              <h4 className="text-lg font-bold text-cyan-300 mb-3 text-center">
                Reference Selling Effect
              </h4>
              <p className="text-sm text-gray-300 mb-4 text-center">
                By Month 18, we'll have:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div className="bg-green-900/30 p-3 rounded-lg border border-green-500/30 text-center">
                  <div className="text-green-300 font-bold mb-1">Customer 1</div>
                  <div className="text-xs text-gray-400">12+ months of successful track record</div>
                </div>
                <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/30 text-center">
                  <div className="text-blue-300 font-bold mb-1">Customer 2</div>
                  <div className="text-xs text-gray-400">9+ months of successful track record</div>
                </div>
                <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/30 text-center">
                  <div className="text-purple-300 font-bold mb-1">Customer 3</div>
                  <div className="text-xs text-gray-400">3-6 months of successful track record</div>
                </div>
              </div>
              <p className="text-sm text-cyan-300 text-center font-semibold">
                This creates <span className="text-green-400">massive inbound interest</span> from other institutions looking for proof. Customers 4-5 will likely come via referral, not cold outreach.
              </p>
            </div>
          </div>
        </div>

        {/* Revenue Model: Tier + Volume Pricing */}
        <div>
          <h3 className="text-lg md:text-2xl font-bold text-green-400 mb-4 md:mb-6 text-center">
            Revenue Model: Tier + Volume Pricing
          </h3>

          {/* THREE TIER PRICING TABLES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* CONSERVATIVE TIER */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold text-blue-300 mb-3 md:mb-4 text-center">
                Conservative Tier Pricing (Base)
              </h4>
              <div className="text-center">
                <table className="w-full text-[10px] md:text-xs mx-auto [&_th]:text-center [&_td]:text-center md:[&_th:first-child]:text-left md:[&_td:first-child]:text-left md:[&_th:last-child]:text-right md:[&_td:last-child]:text-right">
                  <thead>
                    <tr className="border-b border-blue-500/30">
                      <th className="py-1.5 md:py-2 px-1 text-gray-300 w-1/3">
                        AUM Tier
                      </th>
                      <th className="py-1.5 md:py-2 px-1 text-gray-300 w-1/3">
                        Fee
                      </th>
                      <th className="py-1.5 md:py-2 px-1 text-gray-300 w-1/3">
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-500/20">
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $0-25M
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-blue-400 font-bold">
                        1.75%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-blue-400">
                        $438K/yr
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $25-50M
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-blue-400 font-bold">
                        1.50%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-blue-400">
                        $750K/yr
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $50-100M
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-blue-400 font-bold">
                        1.25%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-blue-400">
                        $1.25M/yr
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $100-250M
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-blue-400 font-bold">
                        1.00%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-blue-400">
                        $2M/yr
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $250M+
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-blue-400 font-bold">
                        0.85%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-blue-400">
                        $2.55M/yr
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* BALANCED TIER */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold text-purple-300 mb-3 md:mb-4 text-center">
                Balanced Tier (+0.25% premium)
              </h4>
              <div className="text-center">
                <table className="w-full text-[10px] md:text-xs mx-auto [&_th]:text-center [&_td]:text-center md:[&_th:first-child]:text-left md:[&_td:first-child]:text-left md:[&_th:last-child]:text-right md:[&_td:last-child]:text-right">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className="py-1.5 md:py-2 px-1 text-gray-300 w-1/3">
                        AUM Tier
                      </th>
                      <th className="py-1.5 md:py-2 px-1 text-gray-300 w-1/3">
                        Fee
                      </th>
                      <th className="py-1.5 md:py-2 px-1 text-gray-300 w-1/3">
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-500/20">
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $0-25M
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-purple-400 font-bold">
                        2.00%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-purple-400">
                        $500K/yr
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $25-50M
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-purple-400 font-bold">
                        1.75%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-purple-400">
                        $875K/yr
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $50-100M
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-purple-400 font-bold">
                        1.50%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-purple-400">
                        $1.5M/yr
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $100-250M
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-purple-400 font-bold">
                        1.25%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-purple-400">
                        $2.5M/yr
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $250M+
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-purple-400 font-bold">
                        1.10%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-purple-400">
                        $3.3M/yr
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* AGGRESSIVE TIER */}
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold text-amber-300 mb-3 md:mb-4 text-center">
                Aggressive Tier (+0.50% premium)
              </h4>
              <div className="text-center">
                <table className="w-full text-[10px] md:text-xs mx-auto [&_th]:text-center [&_td]:text-center md:[&_th:first-child]:text-left md:[&_td:first-child]:text-left md:[&_th:last-child]:text-right md:[&_td:last-child]:text-right">
                  <thead>
                    <tr className="border-b border-amber-500/30">
                      <th className="py-1.5 md:py-2 px-1 text-gray-300 w-1/3">
                        AUM Tier
                      </th>
                      <th className="py-1.5 md:py-2 px-1 text-gray-300 w-1/3">
                        Fee
                      </th>
                      <th className="py-1.5 md:py-2 px-1 text-gray-300 w-1/3">
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-500/20">
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $0-25M
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-amber-400 font-bold">
                        2.25%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-amber-400">
                        $563K/yr
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $25-50M
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-amber-400 font-bold">
                        2.00%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-amber-400">
                        $1M/yr
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $50-100M
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-amber-400 font-bold">
                        1.75%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-amber-400">
                        $1.75M/yr
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $100-250M
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-amber-400 font-bold">
                        1.50%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-amber-400">
                        $3M/yr
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1.5 md:py-2 px-1 text-gray-300">
                        $250M+
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-amber-400 font-bold">
                        1.35%
                      </td>
                      <td className="py-1.5 md:py-2 px-1 text-amber-400">
                        $4.05M/yr
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* IMPLEMENTATION FEE & WHITE-LABEL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/50 rounded-xl p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold text-green-300 mb-3 md:mb-4 text-center">
                Implementation Fee (One-Time)
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-gray-300">$5-10M:</span>
                  <span className="text-green-400 font-bold">$75K</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-gray-300">$10-25M:</span>
                  <span className="text-green-400 font-bold">$50K</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-gray-300">$25-50M:</span>
                  <span className="text-green-400 font-bold">$35K</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-gray-300">$50M+:</span>
                  <span className="text-green-400 font-bold">FREE ✓</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                *Same across all tiers
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold text-blue-300 mb-3 md:mb-4 text-center">
                White-Label SDK
              </h4>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-blue-300 mb-2">
                  $2-15K/month
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  Optional SaaS add-on
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                *Same across all tiers
              </p>
            </div>
          </div>

          {/* TIER PRICING JUSTIFICATION */}
          <div className="mb-6 md:mb-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-amber-500/10 border-2 border-blue-500/50 rounded-xl p-4 md:p-6">
            <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 text-center">
              Tier Pricing Justification
            </h4>
            <p className="text-xs md:text-sm text-gray-300 text-center mb-3 md:mb-4">
              <strong className="text-blue-400">
                Why tiered pricing makes sense:
              </strong>
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-blue-500/30">
                    <th className="text-left py-2 px-2 text-gray-300">
                      Factor
                    </th>
                    <th className="text-center py-2 px-2 text-blue-300">
                      Conservative
                    </th>
                    <th className="text-center py-2 px-2 text-purple-300">
                      Balanced
                    </th>
                    <th className="text-center py-2 px-2 text-amber-300">
                      Aggressive
                    </th>
                    <th className="text-right py-2 px-2 text-green-300">
                      Fee Differential
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-500/20">
                  <tr>
                    <td className="py-2 px-2 text-gray-300">Target Yield</td>
                    <td className="text-center text-blue-400">5-8%</td>
                    <td className="text-center text-purple-400">8-12%</td>
                    <td className="text-center text-amber-400">12-22%</td>
                    <td className="text-right text-green-400 text-xs">
                      Higher yield = higher fee
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 text-gray-300">Leverage Used</td>
                    <td className="text-center text-blue-400">0x</td>
                    <td className="text-center text-purple-400">1.5x max</td>
                    <td className="text-center text-amber-400">2x max</td>
                    <td className="text-right text-green-400 text-xs">
                      More complexity = higher fee
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 text-gray-300">Rebalancing</td>
                    <td className="text-center text-blue-400">Monthly</td>
                    <td className="text-center text-purple-400">Weekly</td>
                    <td className="text-center text-amber-400">Daily</td>
                    <td className="text-right text-green-400 text-xs">
                      More active = higher fee
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 text-gray-300">Insurance Cost</td>
                    <td className="text-center text-blue-400">0.08% TVL</td>
                    <td className="text-center text-purple-400">0.10% TVL</td>
                    <td className="text-center text-amber-400">0.12% TVL</td>
                    <td className="text-right text-green-400 text-xs">
                      Higher cost = higher fee
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 text-gray-300">Liquidity</td>
                    <td className="text-center text-blue-400">48 hours</td>
                    <td className="text-center text-purple-400">72 hours</td>
                    <td className="text-center text-amber-400">5-7 days</td>
                    <td className="text-right text-green-400 text-xs">
                      More risk = higher fee
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-4 border-t border-blue-500/30">
              <p className="text-xs text-gray-300 text-center">
                <strong className="text-white">
                  Customer value proposition:
                </strong>
                <br />
                • Conservative clients pay less (1.25%) because we deliver lower
                yields (5-8%)
                <br />
                • Aggressive clients pay more (1.75%) but earn dramatically
                higher yields (12-22%)
                <br />•{" "}
                <strong className="text-green-400">
                  Net result: All customers profit substantially vs current 0%
                  yields
                </strong>
              </p>
            </div>
          </div>

          <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/50">
            <p className="text-purple-300 text-sm text-center">
              ✓ Pricing rewards both volume scale AND tier optimization while
              maintaining 87-90% gross margins and improving operating margins
              (42% → 49-61%)
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
          <p className="text-blue-300 text-sm text-center">
            Each institutional partner = $100K-$1M+ ARR • &lt;5% churn (vs
            30-50% retail) • Series A ready at Year 2
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
