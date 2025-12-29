"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"
import FourColumnGrid from "@/components/FourColumnGrid"

export default function Slide20Projections() {
  return (
    <Slide id={25} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-16 text-center'>
          APPENDIX D-4: 3-YEAR FINANCIAL PROJECTIONS
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
                <p className='text-3xl font-bold text-purple-300'>$3.54–4.58M</p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Expenses
                </p>
                <p className='text-2xl font-bold text-green-400'>$1.8M</p>
                <div className='text-xs text-gray-400 mt-1'>
                  <div>
                    • Security (AUM-scaled): $280–360K (on $300–400M AUM)
                  </div>
                  <div>• Engineering: $1M</div>
                  <div>• Operations & Infrastructure: $520–740K</div>
                </div>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>Net</p>
                <p className='text-2xl font-bold text-green-500'>+$1.74–2.78M</p>
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
                <p className='text-3xl font-bold text-green-300'>$7.72–9.30M</p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Expenses
                </p>
                <p className='text-2xl font-bold text-green-400'>$4.0M</p>
                <div className='text-xs text-gray-400 mt-1'>
                  <div>
                    • Security (AUM-scaled): $720–960K (on $800M–1B AUM)
                  </div>
                  <div>• Engineering: $1.5M</div>
                  <div>• Operations & Infrastructure: $1.54–2.04M</div>
                </div>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>Net</p>
                <p className='text-2xl font-bold text-green-500'>+$3.72–5.30M</p>
                <p className='text-xs text-green-400 font-bold'>
                  ✓ 8–10 Customers, 48–57% margin
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

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6'>
            {/* BASE CASE */}
            <div className='bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4 md:p-6'>
              <h4 className='text-base md:text-lg font-bold text-blue-300 mb-3 md:mb-4 text-center'>
                Base Case (100% Conservative Tier)
              </h4>
              <div className='space-y-2 text-xs text-gray-300 text-center md:text-left'>
                <div>
                  <div className='font-bold text-blue-400'>Year 1 ($100M AUM):</div>
                  <div className='md:ml-2'>$100M @ 1.25% avg = $1.25M</div>
                </div>
                <div>
                  <div className='font-bold text-blue-400'>Year 2 ($350M AUM):</div>
                  <div className='md:ml-2'>$350M @ 1.0% avg = $3.5M</div>
                </div>
                <div>
                  <div className='font-bold text-blue-400'>Year 3 ($900M AUM):</div>
                  <div className='md:ml-2'>$900M @ 0.95% avg = $8.55M</div>
                </div>
              </div>
              <div className='mt-3 md:mt-4 pt-3 md:pt-4 border-t border-blue-500/30 text-center text-xs text-gray-400'>
                As shown in projections above
              </div>
            </div>

            {/* LIKELY CASE */}
            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-4 md:p-6'>
              <h4 className='text-base md:text-lg font-bold text-purple-300 mb-3 md:mb-4 text-center'>
                Likely Case (70% Cons / 20% Bal / 10% Agg)
              </h4>
              <div className='space-y-2 text-xs text-gray-300 text-center md:text-left'>
                <div>
                  <div className='font-bold text-purple-400'>Year 1: $1.4M (+12%)</div>
                  <div className='md:ml-2 text-gray-500'>Cons $70M @ 1.25% = $875K</div>
                  <div className='md:ml-2 text-gray-500'>Bal $20M @ 1.75% = $350K</div>
                  <div className='md:ml-2 text-gray-500'>Agg $10M @ 2.00% = $200K</div>
                </div>
                <div>
                  <div className='font-bold text-purple-400'>Year 2: $3.92M (+12%)</div>
                  <div className='md:ml-2 text-gray-500'>Cons $245M @ 1.0% = $2.45M</div>
                  <div className='md:ml-2 text-gray-500'>Bal $70M @ 1.50% = $1.05M</div>
                  <div className='md:ml-2 text-gray-500'>Agg $35M @ 1.75% = $437.5K</div>
                </div>
                <div>
                  <div className='font-bold text-purple-400'>Year 3: $9.58M (+12%)</div>
                  <div className='md:ml-2 text-gray-500'>Cons $630M @ 0.95% = $5.99M</div>
                  <div className='md:ml-2 text-gray-500'>Bal $180M @ 1.20% = $2.16M</div>
                  <div className='md:ml-2 text-gray-500'>Agg $90M @ 1.50% = $1.35M</div>
                </div>
              </div>
            </div>

            {/* OPTIMISTIC CASE */}
            <div className='bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/50 rounded-xl p-4 md:p-6'>
              <h4 className='text-base md:text-lg font-bold text-green-300 mb-3 md:mb-4 text-center'>
                Optimistic Case (50% Cons / 30% Bal / 20% Agg)
              </h4>
              <div className='space-y-2 text-xs text-gray-300 text-center md:text-left'>
                <div>
                  <div className='font-bold text-green-400'>Year 1: $1.56M (+25%)</div>
                  <div className='md:ml-2 text-gray-500'>Cons $50M @ 1.25% = $625K</div>
                  <div className='md:ml-2 text-gray-500'>Bal $30M @ 1.75% = $525K</div>
                  <div className='md:ml-2 text-gray-500'>Agg $20M @ 2.00% = $400K</div>
                </div>
                <div>
                  <div className='font-bold text-green-400'>Year 2: $4.38M (+25%)</div>
                  <div className='md:ml-2 text-gray-500'>Cons $175M @ 1.0% = $1.75M</div>
                  <div className='md:ml-2 text-gray-500'>Bal $105M @ 1.50% = $1.58M</div>
                  <div className='md:ml-2 text-gray-500'>Agg $70M @ 1.50% = $1.05M</div>
                </div>
                <div>
                  <div className='font-bold text-green-400'>Year 3: $10.69M (+25%)</div>
                  <div className='md:ml-2 text-gray-500'>Cons $450M @ 0.95% = $4.28M</div>
                  <div className='md:ml-2 text-gray-500'>Bal $270M @ 1.20% = $3.24M</div>
                  <div className='md:ml-2 text-gray-500'>Agg $180M @ 1.35% = $2.43M</div>
                </div>
              </div>
            </div>
          </div>

          <div className='p-4 bg-green-900/20 border border-green-500/30 rounded-lg mb-6'>
            <p className='text-xs text-green-300 text-center'>
              <strong>Cost Impact of Tier Mix:</strong> Only marginal increase in insurance costs
              <br/>
              • Conservative: 0.08% TVL • Balanced: 0.10% TVL (+0.02%) • Aggressive: 0.12% TVL (+0.04%)
              <br/>
              • Example: $100M Balanced vs Conservative = +$20K insurance cost, +$250K revenue = <strong className='text-green-400'>+$230K operating profit improvement</strong>
            </p>
          </div>

          {/* IMPORTANT NOTE ON VAULT TIER PRICING */}
          <div className='p-6 bg-blue-900/20 border-2 border-blue-500/50 rounded-xl mb-8'>
            <h4 className='text-lg font-bold text-blue-300 mb-3 text-center'>
              Important Note on Vault Tier Pricing
            </h4>
            <div className='space-y-4 text-sm text-gray-300'>
              <div>
                <span className='font-bold text-blue-400'>Management fees are based on BOTH AUM size AND vault tier:</span>
                <div className='mt-3 space-y-2'>
                  <div className='bg-blue-900/30 p-3 rounded-lg'>
                    <div className='font-bold text-blue-300 mb-1'>Conservative Tier (Base Pricing):</div>
                    <div className='text-xs text-gray-400'>$0-25M: 1.75% • $50-100M: 1.25% • $250M+: 0.85%</div>
                  </div>
                  <div className='bg-purple-900/30 p-3 rounded-lg'>
                    <div className='font-bold text-purple-300 mb-1'>Balanced Tier (+0.25% premium):</div>
                    <div className='text-xs text-gray-400'>$0-25M: 2.00% • $50-100M: 1.50% • $250M+: 1.10%</div>
                  </div>
                  <div className='bg-amber-900/30 p-3 rounded-lg'>
                    <div className='font-bold text-amber-300 mb-1'>Aggressive Tier (+0.50% premium):</div>
                    <div className='text-xs text-gray-400'>$0-25M: 2.25% • $50-100M: 1.75% • $250M+: 1.35%</div>
                  </div>
                </div>
              </div>

              <div className='bg-green-900/20 p-4 rounded-lg border border-green-500/30'>
                <span className='font-bold text-green-400'>Why tiered pricing?</span>
                <ul className='ml-4 mt-2 text-xs text-gray-400 space-y-1'>
                  <li>1. Higher-yield tiers require more active management (daily rebalancing vs monthly)</li>
                  <li>2. Higher insurance costs (0.12% vs 0.08% for Conservative)</li>
                  <li>3. Greater operational complexity (leverage monitoring, liquidation prevention)</li>
                  <li>4. Industry standard: Active strategies command premium fees (hedge funds charge 2% for aggressive, 1% for passive)</li>
                  <li>5. Value-based: Customers earning 17% vs 6% can afford proportionally higher fees</li>
                </ul>
              </div>

              <div className='bg-purple-900/20 p-4 rounded-lg border border-purple-500/30'>
                <span className='font-bold text-purple-400'>Revenue Impact:</span>
                <ul className='ml-4 mt-2 text-xs text-gray-400 space-y-1'>
                  <li>• All projections assume 100% Conservative tier (most conservative)</li>
                  <li>• Tier mix provides 12-25% upside with minimal cost increase</li>
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

          <div className='mt-4 p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg mb-8'>
            <p className='text-xs text-amber-300 text-center'>
              *Insurance costs scale with both AUM growth and tier mix adoption. Higher-yield tiers have higher insurance costs (+0.02-0.04% TVL) but generate premium management fees (+0.25-0.50%). Operating profit improvement from tier mix uplift.
            </p>
          </div>

          {/* TIER PRICING ECONOMICS COMPARISON */}
          <h4 className='text-xl font-bold text-center mb-4 text-white'>
            Tier Pricing Economics: Why This Works
          </h4>
          <p className='text-sm text-gray-400 text-center mb-6'>
            Example: $100M Customer Comparison
          </p>

          <div className='overflow-x-auto'>
            <table className='w-full text-xs border-collapse'>
              <thead>
                <tr className='border-b-2 border-blue-500/50'>
                  <th className='text-left p-3 text-gray-300'>Metric</th>
                  <th className='text-center p-3 text-blue-300'>Conservative</th>
                  <th className='text-center p-3 text-purple-300'>Balanced</th>
                  <th className='text-center p-3 text-amber-300'>Aggressive</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-700'>
                <tr className='bg-blue-900/10'>
                  <td colSpan={4} className='p-2 font-bold text-blue-400'>Customer Economics</td>
                </tr>
                <tr>
                  <td className='p-3 text-gray-300'>Gross Yield</td>
                  <td className='text-center text-blue-400'>6% = $6M</td>
                  <td className='text-center text-purple-400'>10% = $10M</td>
                  <td className='text-center text-amber-400'>17% = $17M</td>
                </tr>
                <tr>
                  <td className='p-3 text-gray-300'>Management Fee</td>
                  <td className='text-center text-blue-400'>1.25% = $1.25M</td>
                  <td className='text-center text-purple-400'>1.50% = $1.5M</td>
                  <td className='text-center text-amber-400'>1.75% = $1.75M</td>
                </tr>
                <tr>
                  <td className='p-3 text-gray-300'>Net Yield to Customer</td>
                  <td className='text-center text-blue-400'>4.75% = $4.75M</td>
                  <td className='text-center text-purple-400'>8.50% = $8.5M</td>
                  <td className='text-center text-amber-400'>15.25% = $15.25M</td>
                </tr>
                <tr>
                  <td className='p-3 text-gray-300 font-bold'>vs Current (0%)</td>
                  <td className='text-center text-green-400 font-bold'>+$4.75M</td>
                  <td className='text-center text-green-400 font-bold'>+$8.5M</td>
                  <td className='text-center text-green-400 font-bold'>+$15.25M</td>
                </tr>
                <tr className='bg-purple-900/10'>
                  <td colSpan={4} className='p-2 font-bold text-purple-400'>Monolith Economics</td>
                </tr>
                <tr>
                  <td className='p-3 text-gray-300'>Revenue</td>
                  <td className='text-center text-blue-400'>$1.25M</td>
                  <td className='text-center text-purple-400'>$1.5M (+$250K)</td>
                  <td className='text-center text-amber-400'>$1.75M (+$500K)</td>
                </tr>
                <tr>
                  <td className='p-3 text-gray-300'>Insurance Cost</td>
                  <td className='text-center text-blue-400'>$80K</td>
                  <td className='text-center text-purple-400'>$100K (+$20K)</td>
                  <td className='text-center text-amber-400'>$120K (+$40K)</td>
                </tr>
                <tr>
                  <td className='p-3 text-gray-300'>Other Costs</td>
                  <td className='text-center text-blue-400'>$810K</td>
                  <td className='text-center text-purple-400'>$810K (same)</td>
                  <td className='text-center text-amber-400'>$810K (same)</td>
                </tr>
                <tr>
                  <td className='p-3 text-gray-300'>Net Profit</td>
                  <td className='text-center text-blue-400'>$360K</td>
                  <td className='text-center text-purple-400'>$590K (+$230K)</td>
                  <td className='text-center text-amber-400'>$820K (+$460K)</td>
                </tr>
                <tr className='bg-green-900/20'>
                  <td className='p-3 text-gray-300 font-bold'>Net Margin</td>
                  <td className='text-center text-blue-400 font-bold'>29%</td>
                  <td className='text-center text-purple-400 font-bold'>39%</td>
                  <td className='text-center text-amber-400 font-bold'>47%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='mt-6 p-6 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border-2 border-green-500/50 rounded-xl'>
            <p className='text-sm text-green-300 text-center'>
              <strong className='text-green-400 text-lg'>Key Insight:</strong>
              <br/>
              <span className='text-white'>• Customers win:</span> All tiers deliver massive value vs 0% current yields
              <br/>
              <span className='text-white'>• Monolith wins:</span> Higher-yield tiers generate significantly higher operating profits (87-90% gross margins maintained)
              <br/>
              <span className='text-white'>• Premium fees (+0.25-0.50%) more than offset incremental costs (+$20-40K)</span>
              <br/>
              <br/>
              <strong className='text-green-400'>This is why offering multiple tiers makes economic sense.</strong>
            </p>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}
