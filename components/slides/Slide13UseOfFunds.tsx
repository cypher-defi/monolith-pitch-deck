"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import FourColumnGrid from "@/components/FourColumnGrid"

export default function Slide13UseOfFunds() {
  return (
    <Slide id={16} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-12 text-center'>
          USE OF FUNDS
        </Title>

        <div className='text-center mb-12'>
          <div className='text-6xl font-bold mb-2 text-blue-400'>$1.5-2M</div>
          <div className='text-slate-400 text-xl'>
            Seed Raise Target • 18-month runway to profitability
          </div>
        </div>

        <FourColumnGrid className='mb-12 gap-6'>
          {/* ENGINEERING */}
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6'>
            <div className='text-center'>
              <h3 className='text-blue-300 mb-3 text-lg font-bold'>
                Engineering
              </h3>
              <div className='text-5xl font-bold text-blue-300 mb-2'>$350K</div>
              <div className='text-blue-400 font-semibold mb-4'>23%</div>
              <ul className='text-left text-xs text-gray-300 space-y-1.5'>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-blue-400 flex-shrink-0'>✓</span>
                  <span>Three-tier vault system development (Conservative, Balanced, Aggressive)</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-blue-400 flex-shrink-0'>✓</span>
                  <span>Full-stack dashboard & API with tier selector</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-blue-400 flex-shrink-0'>✓</span>
                  <span>Cloud infrastructure & DevOps (AWS/Vercel)</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-blue-400 flex-shrink-0'>✓</span>
                  <span>Development tools & comprehensive testing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SECURITY, AUDIT & INSURANCE */}
          <div className='bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/50 rounded-xl p-6'>
            <div className='text-center'>
              <h3 className='text-red-300 mb-3 text-lg font-bold'>
                Security, Audit & Insurance
              </h3>
              <div className='text-5xl font-bold text-red-300 mb-2'>$400K</div>
              <div className='text-red-400 font-semibold mb-4'>27%</div>
              <ul className='text-left text-xs text-gray-300 space-y-1.5'>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>✓</span>
                  <span>Smart contract audits: $225K</span>
                </li>
                <li className='text-xs text-gray-400 ml-4'>
                  - OpenZeppelin audit (3 vaults): $135K
                </li>
                <li className='text-xs text-gray-400 ml-4'>
                  - Hacken audit (3 vaults): $90K
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>✓</span>
                  <span>Formal verification of vault accounting logic: $30K</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>✓</span>
                  <span>Security documentation & threat modeling: $20K</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>✓</span>
                  <span>Bug bounty program ($50K reserve on Immunefi): $50K</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>✓</span>
                  <span>Insurance provider partnerships (InsurAce integration): $75K</span>
                </li>
              </ul>
            </div>
          </div>

          {/* OPERATIONS & SALES */}
          <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6'>
            <div className='text-center'>
              <h3 className='text-green-300 mb-3 text-lg font-bold'>
                Operations & Sales
              </h3>
              <div className='text-5xl font-bold text-green-300 mb-2'>$250K</div>
              <div className='text-green-400 font-semibold mb-4'>17%</div>
              <ul className='text-left text-xs text-gray-300 space-y-1.5'>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span>B2B sales & business development</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span>Pilot customer acquisition</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span>Legal entity setup & compliance infrastructure</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span>Marketing & brand development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RUNWAY RESERVE */}
          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6'>
            <div className='text-center'>
              <h3 className='text-purple-300 mb-3 text-lg font-bold'>
                Runway Reserve
              </h3>
              <div className='text-5xl font-bold text-purple-300 mb-2'>$500K</div>
              <div className='text-purple-400 font-semibold mb-4'>33%</div>
              <ul className='text-left text-xs text-gray-300 space-y-1.5'>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-purple-400 flex-shrink-0'>✓</span>
                  <span>18-month operational buffer to profitability</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-purple-400 flex-shrink-0'>✓</span>
                  <span>Founder salaries (minimal: $6K/month × 2 × 18 = $216K)</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-purple-400 flex-shrink-0'>✓</span>
                  <span>Infrastructure costs (AWS, monitoring, tools): $120K</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-purple-400 flex-shrink-0'>✓</span>
                  <span>Contingency fund for market conditions: $164K</span>
                </li>
              </ul>
            </div>
          </div>
        </FourColumnGrid>

        {/* SEED FUNDING COVERS */}
        <div className='mb-8'>
          <h3 className='text-2xl font-bold text-center mb-6 text-white'>
            Seed Funding Covers Professional Audits & Insurance Infrastructure
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-6'>
            {/* PRE-LAUNCH */}
            <div className='bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6'>
              <h4 className='text-lg font-bold text-blue-300 mb-4'>
                Pre-Launch Security Investment (Months 1-6)
              </h4>
              <ul className='text-sm text-gray-300 space-y-2'>
                <li>• OpenZeppelin: $135K (3 vaults - Aave/Compound/Curve track record)</li>
                <li>• Hacken: $90K (3 vaults - Yearn/Beefy/Convex track record)</li>
                <li>• Formal verification of vault accounting logic: $30K</li>
                <li>• Security documentation & threat modeling: $20K</li>
                <li>• Bug bounty program setup ($50K reserve on Immunefi): $50K</li>
                <li>• Insurance provider partnerships (InsurAce integration): $75K</li>
              </ul>
            </div>

            {/* POST-LAUNCH */}
            <div className='bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6'>
              <h4 className='text-lg font-bold text-green-300 mb-4'>
                Post-Launch Recurring Costs (Funded from Operating Margin)
              </h4>
              <ul className='text-sm text-gray-300 space-y-2'>
                <li>• Annual comprehensive audits: $60K/year (re-audit all 3 vaults)</li>
                <li>• Recurring audits for new protocol integrations: $60K/year (3-4 integrations)</li>
                <li>• InsurAce insurance premium (tier-dependent, 0.08-0.12% of TVL):
                  <ul className='ml-4 mt-1 space-y-1 text-xs text-gray-400'>
                    <li>- Month 6-9 Pilot ($10-20M TVL, Conservative): $8-16K</li>
                    <li>- Month 12-15 / Year 1 ($100M TVL, Conservative): $80K</li>
                    <li>- Year 2 ($300-400M TVL, tier mix): $300-480K</li>
                    <li>- Year 3 ($800M-1B TVL, tier mix): $800K-1.2M</li>
                  </ul>
                </li>
                <li>• Continuous monitoring infrastructure: Embedded in ops ($120K/year)</li>
              </ul>
            </div>
          </div>

          {/* TOTAL ANNUAL SECURITY INVESTMENT */}
          <div className='max-w-4xl mx-auto bg-gradient-to-r from-purple-500/10 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6 mb-6'>
            <h4 className='text-lg font-bold text-purple-300 mb-3 text-center'>
              Total Annual Security Investment
            </h4>
            <div className='grid grid-cols-3 gap-4 text-center text-sm'>
              <div>
                <div className='text-purple-400 font-bold text-2xl mb-1'>~$140K</div>
                <div className='text-gray-400 text-xs'>Year 1 (on $100M AUM, Conservative tier only)</div>
              </div>
              <div>
                <div className='text-purple-400 font-bold text-2xl mb-1'>~$420-600K</div>
                <div className='text-gray-400 text-xs'>Year 2 (on $300-400M AUM, tier mix with Balanced/Aggressive)</div>
              </div>
              <div>
                <div className='text-purple-400 font-bold text-2xl mb-1'>~$920K-1.32M</div>
                <div className='text-gray-400 text-xs'>Year 3 (on $800M-1B AUM, full tier mix at scale)</div>
              </div>
            </div>
          </div>

          {/* WHY SECURITY INVESTMENT SCALES */}
          <div className='max-w-5xl mx-auto bg-gradient-to-r from-red-500/10 to-amber-500/10 border-2 border-red-500/50 rounded-xl p-6'>
            <h4 className='text-lg font-bold text-red-300 mb-3 text-center'>
              Why Security Investment Scales with Growth
            </h4>
            <p className='text-gray-300 text-sm mb-4 text-center'>
              Unlike traditional software, DeFi protocols face evolving risks:
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300'>
              <div>
                <div className='font-bold text-red-400 mb-2'>1. New vulnerabilities emerge:</div>
                <div className='text-xs text-gray-400'>Audits are snapshots. New exploits discovered continuously. Annual re-audits essential.</div>
              </div>
              <div>
                <div className='font-bold text-red-400 mb-2'>2. New protocol integrations:</div>
                <div className='text-xs text-gray-400'>Each Aave update, Morpho market, or Curve pool addition requires audit before capital deployment (3-4×/year).</div>
              </div>
              <div>
                <div className='font-bold text-red-400 mb-2'>3. Insurance scales with TVL:</div>
                <div className='text-xs text-gray-400'>Larger vault = higher coverage needed. Premium grows proportionally with AUM.</div>
              </div>
              <div>
                <div className='font-bold text-red-400 mb-2'>4. Threat landscape evolves:</div>
                <div className='text-xs text-gray-400'>Yesterday's secure protocol has today's vulnerability. 24/7 monitoring non-negotiable.</div>
              </div>
            </div>
            <div className='mt-4 pt-4 border-t border-red-500/30 text-center'>
              <p className='text-red-300 font-bold'>
                This is not a cost to minimize—it's the insurance + audit infrastructure that justifies why institutions choose Monolith over DIY Aave.
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className='max-w-4xl mx-auto p-4 bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-blue-500/50 rounded-xl'>
          <p className='text-center text-sm text-gray-300'>
            Capital-efficient allocation: Technical founders building in-house. No external team hires until Series A. 100% focused on product-market fit.
          </p>
        </div>
      </SlideContent>
    </Slide>
  )
}
