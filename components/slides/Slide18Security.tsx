"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"

export default function Slide18Security() {
  return (
    <Slide id={22} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-12 text-center'>
          APPENDIX B: SECURITY FRAMEWORK
        </Title>
        <Subtitle size='sm' className='mb-8 text-center'>
          Non-custodial architecture + multi-layer security approach
        </Subtitle>

        <div className='p-6 bg-green-100 border-2 border-green-500 rounded-lg mb-8'>
          <h3 className='text-xl font-bold text-green-900 mb-3'>
            ✓ FULLY NON-CUSTODIAL: YOUR VAULT, YOUR FUNDS
          </h3>
          <p className='text-green-900 leading-relaxed text-sm'>
            You deposit stablecoins and receive vault shares (ERC-4626). The
            vault contract is the sole custodian of your assets. Monolith never
            touches your funds—we only orchestrate vault rebalancing across
            audited protocols (Aave, Morpho, Curve). Your vault autonomously
            reallocates capital to optimize yields. You can withdraw anytime
            without permission.
          </p>
        </div>

        {/* Insurance & Risk Management Section */}
        <div className='mb-8'>
          <h3 className='text-2xl mb-6 text-blue-400 font-bold'>
            Insurance & Risk Management: Institutional-Grade Protection
          </h3>

          <div className='bg-gradient-to-br from-blue-500/10 to-green-500/10 border-2 border-blue-500/30 rounded-xl p-6 mb-6'>
            <h4 className='text-xl font-bold text-green-400 mb-4'>
              Coverage Strategy
            </h4>

            <div className='bg-black/30 p-5 rounded-lg mb-5'>
              <h5 className='text-lg font-bold text-blue-300 mb-3'>
                InsurAce Protocol Coverage (Decentralized Insurance)
              </h5>
              <ul className='text-sm text-gray-300 space-y-2'>
                <li>• $15M+ coverage per vault tier (scales with AUM)</li>
                <li>
                  • Covers: Smart contract exploits, protocol failures,
                  stablecoin depegs
                </li>
                <li>
                  • Claims processed in 2-3 days (automated via smart contract)
                </li>
                <li>
                  • Premium: 0.08-0.12% of TVL annually (~$80-120K on $100M)
                </li>
                <li>
                  • Industry standard: Used by Yearn, Beefy, Convex
                  (battle-tested)
                </li>
              </ul>
            </div>

            <div className='bg-black/30 p-5 rounded-lg'>
              <h5 className='text-lg font-bold text-purple-300 mb-3'>
                Recurring Audit Cycle (Ongoing Security)
              </h5>

              <div className='mb-4'>
                <h6 className='text-md font-bold text-purple-300 mb-2'>
                  Vault Contract Security (Continuous)
                </h6>
                <ul className='text-sm text-gray-300 space-y-1 ml-4'>
                  <li>
                    • Initial audit: OpenZeppelin + Hacken (pre-launch,
                    concurrent)
                  </li>
                  <li>
                    • Annual comprehensive audits: Full codebase review + formal
                    verification
                  </li>
                  <li>• Cost: $40-50K/year</li>
                  <li>• Why: Catches bugs in code we control</li>
                </ul>
              </div>

              <div className='mb-4'>
                <h6 className='text-md font-bold text-purple-300 mb-2'>
                  Protocol Integration Security (Per-Integration)
                </h6>
                <ul className='text-sm text-gray-300 space-y-1 ml-4'>
                  <li>
                    • Each new protocol (Aave update, Morpho market, Curve pool)
                    requires audit
                  </li>
                  <li>
                    • External audit by tier-1 firm (OpenZeppelin, Hacken, Trail
                    of Bits)
                  </li>
                  <li>• Budget: $15-20K per integration audit</li>
                  <li>
                    • Estimated annual: 3-4 new integrations/year = $60K/year
                  </li>
                  <li>
                    • Why: Validate that we&apos;re only using safe, audited
                    protocols
                  </li>
                </ul>
              </div>

              <div>
                <h6 className='text-md font-bold text-purple-300 mb-2'>
                  Continuous Monitoring (Threat Detection)
                </h6>
                <ul className='text-sm text-gray-300 space-y-1 ml-4'>
                  <li>
                    • 24/7 on-chain monitoring via Tenderly + custom alerts
                  </li>
                  <li>
                    • Automated pause mechanism if unusual activity detected
                  </li>
                  <li>• Weekly security reports to protocol team</li>
                  <li>• Incident response SLA: 30 minutes</li>
                  <li>• Cost: Included in infrastructure ops ($120K/year)</li>
                  <li>• Why: Detect anomalies and respond fast</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='bg-purple-900/30 p-5 rounded-lg border border-purple-500/50 mb-6'>
            <h4 className='text-lg font-bold text-purple-300 mb-3'>
              Direct Security Costs: $140–160K/year (ex-infrastructure ops) on
              $100M AUM
            </h4>
            <div className='grid grid-cols-3 gap-4 text-sm mb-3'>
              <div>
                <div className='text-gray-400'>Insurance</div>
                <div className='text-green-300 font-bold'>$80-120K</div>
              </div>
              <div>
                <div className='text-gray-400'>
                  Audits (continuous + per-integration)
                </div>
                <div className='text-blue-300 font-bold'>$60K</div>
              </div>
              <div>
                <div className='text-gray-400'>24/7 Monitoring</div>
                <div className='text-purple-300 font-bold'>Embedded in ops</div>
              </div>
            </div>
            <p className='text-xs text-gray-400'>
              As % of revenue: 11-13% (industry standard is 5-20%)
            </p>
          </div>

          <div className='bg-gradient-to-r from-blue-500/20 to-green-500/20 border-2 border-blue-500/50 rounded-lg p-6 mb-6'>
            <h4 className='text-lg font-bold text-blue-300 mb-4'>
              What This Approach Actually Achieves
            </h4>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
              <div className='bg-black/30 p-4 rounded-lg'>
                <h5 className='text-md font-bold text-blue-400 mb-2'>
                  1. Continuous auditing = We take security seriously
                </h5>
                <ul className='text-xs text-gray-400 space-y-1'>
                  <li>• But audits don&apos;t prevent all exploits</li>
                  <li>• 0-day vulnerabilities exist despite audits</li>
                  <li>• Protocol-level failures can bypass audits</li>
                </ul>
              </div>

              <div className='bg-black/30 p-4 rounded-lg'>
                <h5 className='text-md font-bold text-green-400 mb-2'>
                  2. Professional insurance = Risk transfer
                </h5>
                <ul className='text-xs text-gray-400 space-y-1'>
                  <li>• If exploit happens: insured</li>
                  <li>• If protocol fails: insured</li>
                  <li>• If stablecoin depegs: insured</li>
                  <li>• Claims paid by third party, not us</li>
                  <li>• This is the actual protection</li>
                </ul>
              </div>

              <div className='bg-black/30 p-4 rounded-lg'>
                <h5 className='text-md font-bold text-purple-400 mb-2'>
                  3. Non-custodial design = We can&apos;t steal your funds
                </h5>
                <ul className='text-xs text-gray-400 space-y-1'>
                  <li>
                    • Even if we wanted to, we can&apos;t access vault capital
                  </li>
                  <li>• Your vault shares are in your wallet</li>
                  <li>• Withdrawal always available without our permission</li>
                </ul>
              </div>

              <div className='bg-black/30 p-4 rounded-lg'>
                <h5 className='text-md font-bold text-amber-400 mb-2'>
                  4. 24/7 monitoring = We catch incidents fast
                </h5>
                <ul className='text-xs text-gray-400 space-y-1'>
                  <li>• Automated alerts for unusual activity</li>
                  <li>
                    • 30-minute incident response via automated alerts + on-call
                    protocol team
                  </li>
                  <li>• Pause mechanism if something smells wrong</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='bg-blue-900/30 p-5 rounded-lg border border-blue-500/50'>
            <h4 className='text-lg font-bold text-blue-300 mb-3'>
              Why This Framework Enables Institutional B2B
            </h4>
            <p className='text-sm text-gray-300 mb-3'>
              Institutions know audits have limitations. They&apos;ve seen major
              protocols get exploited despite multiple audits. What they need
              is:
            </p>
            <ul className='text-sm text-gray-300 space-y-2'>
              <li>
                ✓ Evidence you take security seriously (continuous audits)
              </li>
              <li>✓ Evidence you accept remaining risk (insurance backing)</li>
              <li>
                ✓ Evidence you can&apos;t steal their money (non-custodial)
              </li>
              <li>
                ✓ Evidence you&apos;ll catch problems fast (24/7 monitoring)
              </li>
            </ul>
            <p className='text-sm text-blue-300 font-semibold mt-4'>
              This model removes the &quot;we&apos;re a beta protocol&quot;
              objection. Monolith = &quot;we follow the same risk framework as
              institutional asset managers.&quot;
            </p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6 mb-6'>
          <div>
            <h3 className='text-xl mb-4 text-blue-400 font-bold'>
              Pre-Launch Security
            </h3>

            <div className='bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-lg p-4 mb-3'>
              <h5 className='font-bold text-blue-300 mb-2'>
                Comprehensive Testing
              </h5>
              <ul className='space-y-1 text-xs text-gray-300'>
                <li>• 100+ unit tests (Foundry)</li>
                <li>• Fuzz testing on all entry points</li>
                <li>• Invariant testing for vault accounting</li>
                <li>• Coverage &gt;95% on critical paths</li>
                <li>• Mainnet fork testing with real data</li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-lg p-4'>
              <h5 className='font-bold text-green-300 mb-2'>
                Professional Audit
              </h5>
              <ul className='space-y-1 text-xs text-gray-300'>
                <li>• Internal security review (2 weeks)</li>
                <li>• External audit by tier-1 firm</li>
                <li>
                  • Options: OpenZeppelin, Trail of Bits, Consensys Diligence
                </li>
                <li>• Public code review period</li>
                <li>• $50K bug bounty on Immunefi</li>
                <li>• Timeline: 10-12 weeks total</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className='text-xl mb-4 text-blue-400 font-bold'>
              Post-Launch Security
            </h3>

            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-lg p-4 mb-3'>
              <h5 className='font-bold text-purple-300 mb-2'>
                Operational Security
              </h5>
              <ul className='space-y-1 text-xs text-gray-300'>
                <li>• 24/7 monitoring via Tenderly + custom alerts</li>
                <li>• Multi-sig governance: 3-of-5 threshold</li>
                <li>• 48-hour timelocks on parameter changes</li>
                <li>• Emergency pause (governance-controlled)</li>
                <li>• Vault autonomy: Rebalancing via smart contract logic</li>
                <li>• Quarterly security reviews</li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/30 rounded-lg p-4'>
              <h5 className='font-bold text-amber-300 mb-2'>User Protection</h5>
              <ul className='space-y-1 text-xs text-gray-300'>
                <li>• Withdrawal limits (first 7 days post-launch)</li>
                <li>• Rate limiting on large transactions</li>
                <li>• Transparent on-chain accounting</li>
                <li>• Emergency withdrawal always available</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='p-5 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg'>
          <p className='text-blue-300 text-center text-sm'>
            <strong>Security-first approach:</strong> Non-custodial by design
            (vault is custodian), autonomous rebalancing (no intermediation),
            professionally audited, continuously monitored, and insured. Your
            keys, your shares, your vault, your control.
          </p>
        </div>
      </SlideContent>
    </Slide>
  )
}
