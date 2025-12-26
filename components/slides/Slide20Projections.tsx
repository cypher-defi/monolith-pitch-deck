"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"
import FourColumnGrid from "@/components/FourColumnGrid"

export default function Slide20Projections() {
  return (
    <Slide id={20} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-16 text-center'>
          APPENDIX D: 3-YEAR FINANCIAL PROJECTIONS
        </Title>

        <ThreeColumnGrid className='mb-12 gap-8'>
          {/* YEAR 1 */}
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8'>
            <h3 className='text-blue-300 text-3xl mb-6 text-center font-bold'>
              Year 1
            </h3>

            <div className='space-y-4 text-center'>
              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  AUM Growth
                </p>
                <p className='text-3xl font-bold text-yellow-400'>
                  $20M → $100M
                </p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Revenue
                </p>
                <p className='text-3xl font-bold text-blue-300'>$1.25M</p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Expenses
                </p>
                <p className='text-2xl font-bold text-green-400'>$1.6M</p>
                <div className='text-xs text-gray-400 mt-1'>
                  <div>
                    • Security (Insurance + Audits): $140K (at $100M AUM)
                  </div>
                  <div>• Engineering: $900K</div>
                  <div>• Operations & Infrastructure: $560K</div>
                </div>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>Net</p>
                <p className='text-2xl font-bold text-red-400'>($350K)</p>
                <p className='text-xs text-gray-500'>Seed capital covers gap</p>
                <p className='text-xs text-green-400 font-bold mt-1'>
                  Profitable by Month 12–15
                </p>
              </div>
            </div>
          </div>

          {/* YEAR 2 */}
          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-8'>
            <h3 className='text-purple-300 text-3xl mb-6 text-center font-bold'>
              Year 2
            </h3>

            <div className='space-y-4 text-center'>
              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  AUM Growth
                </p>
                <p className='text-3xl font-bold text-yellow-400'>
                  $100M → $300–400M
                </p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Revenue
                </p>
                <p className='text-3xl font-bold text-purple-300'>$3.75–5M</p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Expenses
                </p>
                <p className='text-2xl font-bold text-green-400'>$1.7–2M</p>
                <div className='text-xs text-gray-400 mt-1'>
                  <div>
                    • Security (AUM-scaled): $240–320K (on $300–400M AUM)
                  </div>
                  <div>• Engineering: $1M</div>
                  <div>• Operations & Infrastructure: $460–680K</div>
                </div>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>Net</p>
                <p className='text-2xl font-bold text-green-500'>+$2–3.3M</p>
                <p className='text-xs text-green-400 font-bold'>
                  ✓ 5–6 Customers, Profitable
                </p>
                <p className='text-xs text-gray-500 mt-1'>
                  Series A ready (Month 18–20)
                </p>
              </div>
            </div>
          </div>

          {/* YEAR 3 */}
          <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-8'>
            <h3 className='text-green-300 text-3xl mb-6 text-center font-bold'>
              Year 3
            </h3>

            <div className='space-y-4 text-center'>
              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  AUM Growth
                </p>
                <p className='text-3xl font-bold text-yellow-400'>
                  $400M → $800M–1B
                </p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Revenue
                </p>
                <p className='text-3xl font-bold text-green-300'>$10–12.5M</p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Expenses
                </p>
                <p className='text-2xl font-bold text-green-400'>$3.3–4.3M</p>
                <div className='text-xs text-gray-400 mt-1'>
                  <div>
                    • Security (AUM-scaled): $640–800K (on $800M–1B AUM)
                  </div>
                  <div>• Engineering: $1.5M</div>
                  <div>• Operations & Infrastructure: $1.2–1.8M</div>
                </div>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>Net</p>
                <p className='text-2xl font-bold text-green-500'>+$6–8.7M</p>
                <p className='text-xs text-green-400 font-bold'>
                  ✓ 8–10 Customers, 60–70% margin
                </p>
                <p className='text-xs text-gray-500 mt-1'>Series B ready</p>
              </div>
            </div>
          </div>
        </ThreeColumnGrid>

        <h3 className='text-2xl mb-6 text-blue-400 text-center'>
          Series A Target (Month 15–18)
        </h3>

        <FourColumnGrid className='mb-8'>
          <div className='text-center'>
            <div className='text-slate-400 mb-2 text-sm'>Raise</div>
            <div className='text-4xl font-bold'>$5–8M</div>
          </div>

          <div className='text-center'>
            <div className='text-slate-400 mb-2 text-sm'>Valuation</div>
            <div className='text-4xl font-bold'>$25–35M</div>
            <div className='text-sm text-slate-400'>pre-money</div>
          </div>

          <div className='text-center'>
            <div className='text-slate-400 mb-2 text-sm'>TVL Required</div>
            <div className='text-4xl font-bold'>$50M+</div>
          </div>

          <div className='text-center'>
            <div className='text-slate-400 mb-2 text-sm'>Revenue</div>
            <div className='text-4xl font-bold'>$750K+</div>
            <div className='text-sm text-slate-400'>annual run-rate</div>
          </div>
        </FourColumnGrid>

        <div className='p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg mb-8'>
          <p className='text-blue-300 text-lg text-center'>
            Projections assume conservative institutional adoption. Security,
            audit, and insurance costs scale linearly with AUM; monitoring
            infrastructure is embedded in core operating expenses.
          </p>
        </div>

        {/* TIER MIX SCENARIO ANALYSIS */}
        <div className='max-w-6xl mx-auto'>
          <h3 className='text-2xl font-bold text-center mb-6 text-white'>
            Revenue Scenario Analysis: Impact of Tier Mix
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
            {/* BASE CASE */}
            <div className='bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6'>
              <h4 className='text-lg font-bold text-blue-300 mb-4 text-center'>
                Base Case (100% Conservative Tier)
              </h4>
              <div className='space-y-3 text-sm text-gray-300'>
                <div className='flex justify-between'>
                  <span>Year 1:</span>
                  <span className='font-bold text-blue-400'>$1.25M revenue</span>
                </div>
                <div className='flex justify-between'>
                  <span>Year 2:</span>
                  <span className='font-bold text-blue-400'>$3.75M revenue</span>
                </div>
                <div className='flex justify-between'>
                  <span>Year 3:</span>
                  <span className='font-bold text-blue-400'>$10M revenue</span>
                </div>
              </div>
              <div className='mt-4 pt-4 border-t border-blue-500/30 text-center text-xs text-gray-400'>
                As shown in projections above
              </div>
            </div>

            {/* LIKELY CASE */}
            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6'>
              <h4 className='text-lg font-bold text-purple-300 mb-4 text-center'>
                Likely Case (60% Cons, 30% Bal, 10% Agg)
              </h4>
              <div className='space-y-3 text-sm text-gray-300'>
                <div className='flex justify-between'>
                  <span>Year 1:</span>
                  <span className='font-bold text-purple-400'>$1.44M revenue <span className='text-green-400'>(+15%)</span></span>
                </div>
                <div className='flex justify-between'>
                  <span>Year 2:</span>
                  <span className='font-bold text-purple-400'>$4.31M revenue <span className='text-green-400'>(+15%)</span></span>
                </div>
                <div className='flex justify-between'>
                  <span>Year 3:</span>
                  <span className='font-bold text-purple-400'>$11.5M revenue <span className='text-green-400'>(+15%)</span></span>
                </div>
              </div>
              <div className='mt-4 pt-4 border-t border-purple-500/30 text-center text-xs text-gray-400'>
                Likely with tier mix adoption
              </div>
            </div>

            {/* BEST CASE */}
            <div className='bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6'>
              <h4 className='text-lg font-bold text-green-300 mb-4 text-center'>
                Best Case (40% Cons, 40% Bal, 20% Agg)
              </h4>
              <div className='space-y-3 text-sm text-gray-300'>
                <div className='flex justify-between'>
                  <span>Year 1:</span>
                  <span className='font-bold text-green-400'>$1.69M revenue <span className='text-green-400'>(+35%)</span></span>
                </div>
                <div className='flex justify-between'>
                  <span>Year 2:</span>
                  <span className='font-bold text-green-400'>$5.06M revenue <span className='text-green-400'>(+35%)</span></span>
                </div>
                <div className='flex justify-between'>
                  <span>Year 3:</span>
                  <span className='font-bold text-green-400'>$13.5M revenue <span className='text-green-400'>(+35%)</span></span>
                </div>
              </div>
              <div className='mt-4 pt-4 border-t border-green-500/30 text-center text-xs text-gray-400'>
                With aggressive tier mix optimization
              </div>
            </div>
          </div>

          {/* IMPORTANT NOTE ON VAULT TIER SELECTION */}
          <div className='p-6 bg-blue-900/20 border-2 border-blue-500/50 rounded-xl mb-8'>
            <h4 className='text-lg font-bold text-blue-300 mb-3 text-center'>
              Important Note on Vault Tier Selection
            </h4>
            <div className='space-y-3 text-sm text-gray-300'>
              <div>
                <span className='font-bold text-blue-400'>Management fees are based on AUM size, not vault tier:</span>
                <ul className='ml-4 mt-1 text-xs text-gray-400'>
                  <li>• Tiered pricing: 1.75% ($0-25M) → 1.25% ($50-100M) → 0.85% ($250M+)</li>
                  <li>• Customer chooses vault tier (Conservative, Balanced, Aggressive) based on risk appetite</li>
                  <li>• Revenue to Monolith is SAME regardless of which vault tier customer selects</li>
                </ul>
              </div>
              <div>
                <span className='font-bold text-blue-400'>All projections assume Conservative vault tier (5-8% yields):</span>
                <ul className='ml-4 mt-1 text-xs text-gray-400'>
                  <li>• Most conservative estimates for customer satisfaction and retention</li>
                  <li>• Customers earning 5-8% yields have lower expectations than 12-22%</li>
                  <li>• Reduces performance pressure and execution risk</li>
                </ul>
              </div>
              <div>
                <span className='font-bold text-blue-400'>If customers adopt higher-yield tiers:</span>
                <ul className='ml-4 mt-1 text-xs text-gray-400'>
                  <li>• Revenue: SAME (fee based on AUM, not tier)</li>
                  <li>• Costs: Slightly higher insurance premiums (Balanced +0.02%, Aggressive +0.04% of TVL)</li>
                  <li>• Net impact: Marginally lower margins but higher customer satisfaction if higher yields delivered</li>
                </ul>
              </div>
            </div>
          </div>

          {/* INSURANCE COST SCALING */}
          <h4 className='text-xl font-bold text-center mb-4 text-white'>
            Insurance Cost Scaling by Tier Mix
          </h4>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4'>
              <div className='text-center mb-3'>
                <div className='text-blue-300 font-bold text-lg'>Year 1 ($100M AUM, 100% Conservative)</div>
              </div>
              <div className='text-sm text-gray-300'>
                Insurance: <span className='text-blue-400 font-bold'>$80K</span> (0.08% of TVL)
              </div>
            </div>

            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-4'>
              <div className='text-center mb-3'>
                <div className='text-purple-300 font-bold text-lg'>Year 2 ($300-400M AUM, Mixed Tier Example)</div>
              </div>
              <div className='text-xs text-gray-300 space-y-1'>
                <div>Conservative ($200M): $160K (0.08%)</div>
                <div>Balanced ($120M): $120K (0.10%)</div>
                <div>Aggressive ($40M): $48K (0.12%)</div>
                <div className='pt-2 border-t border-purple-500/30 font-bold text-purple-400'>Total: $328K</div>
              </div>
            </div>

            <div className='bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/50 rounded-xl p-4'>
              <div className='text-center mb-3'>
                <div className='text-green-300 font-bold text-lg'>Year 3 ($800M-1B AUM, Mixed Tier Example)</div>
              </div>
              <div className='text-xs text-gray-300 space-y-1'>
                <div>Conservative ($360M): $288K (0.08%)</div>
                <div>Balanced ($360M): $360K (0.10%)</div>
                <div>Aggressive ($180M): $216K (0.12%)</div>
                <div className='pt-2 border-t border-green-500/30 font-bold text-green-400'>Total: $864K</div>
              </div>
            </div>
          </div>

          <div className='mt-4 p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg'>
            <p className='text-xs text-amber-300 text-center'>
              *Insurance costs scale with both AUM growth and tier mix adoption. Higher-yield tiers have higher insurance costs but generate same revenue (fee based on AUM, not tier). All projections assume Conservative tier for conservative estimates.
            </p>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}
