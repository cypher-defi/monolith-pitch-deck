"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"

export default function Slide7Competition() {
  return (
    <Slide id={9} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-16 text-center'>
          WHY INSTITUTIONS CHOOSE US OVER AAVE
        </Title>

        <div className='max-w-5xl mx-auto mb-12'>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='border-b-2 border-blue-500/30'>
                  <th className='p-4 text-left text-gray-400'>Feature</th>
                  <th className='p-4 text-center text-gray-400'>
                    Aave (Protocol)
                  </th>
                  <th className='p-4 text-center text-blue-400 font-bold'>
                    Monolith
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-blue-500/20'>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Target Customer</td>
                  <td className='p-4 text-center text-gray-300'>
                    Crypto traders
                  </td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ Corporate treasurers
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Custody Integration</td>
                  <td className='p-4 text-center text-gray-300'>
                    Self-custody only
                  </td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ Existing systems
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Compliance Reporting</td>
                  <td className='p-4 text-center text-gray-300'>Manual</td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ Automated
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Risk Management</td>
                  <td className='p-4 text-center text-gray-300'>
                    User manages
                  </td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ 24/7 monitoring
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Dashboard & UI</td>
                  <td className='p-4 text-center text-red-400'>
                    ✗ Protocol only
                  </td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ Full platform
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Pre-built Integrations</td>
                  <td className='p-4 text-center text-red-400'>✗ None</td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ 10+ vendors
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Time to Deploy</td>
                  <td className='p-4 text-center text-gray-300'>3-6 months</td>
                  <td className='p-4 text-center text-green-400'>✓ 2 weeks</td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Support</td>
                  <td className='p-4 text-center text-gray-300'>
                    Community only
                  </td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ Account manager
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Yield Optimization</td>
                  <td className='p-4 text-center text-gray-300'>
                    User manages manually
                  </td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ Automated tier-based optimization (5-22%)
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Insurance Included</td>
                  <td className='p-4 text-center text-gray-300'>
                    Optional via Nexus Mutual (you pay)
                  </td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ InsurAce Coverage (premium included in mgmt fee)
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Insurance Coverage</td>
                  <td className='p-4 text-center text-gray-300'>
                    User selects & pays separately
                  </td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ Insurance coverage scales with AUM (100% coverage)
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Claims Processing</td>
                  <td className='p-4 text-center text-gray-300'>
                    Manual, 5-10 days
                  </td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ Automated via smart contract, 2-3 days
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Audit & Monitoring</td>
                  <td className='p-4 text-center text-gray-300'>
                    Not applicable
                  </td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ Annual audits + 24/7 monitoring
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Audit Firms</td>
                  <td className='p-4 text-center text-gray-300'>
                    Not specified
                  </td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ OpenZeppelin + Hacken
                  </td>
                </tr>
                <tr className='hover:bg-blue-500/10 transition'>
                  <td className='p-4 font-semibold'>Risk Transparency</td>
                  <td className='p-4 text-center text-gray-300'>
                    User&apos;s responsibility
                  </td>
                  <td className='p-4 text-center text-green-400'>
                    ✓ Protocol manages, reports quarterly
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='mt-12 p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg'>
          <h3 className='text-xl font-bold text-center mb-4 text-blue-300'>
            Why Monolith Wins
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
            <div className='text-center'>
              <div className='text-sm font-semibold text-gray-300 mb-2'>
                Protocols (Aave, Compound)
              </div>
              <div className='text-xs text-gray-400'>
                Built for crypto-native users • No enterprise workflows • No
                compliance abstraction
              </div>
            </div>
            <div className='text-center'>
              <div className='text-sm font-semibold text-gray-300 mb-2'>
                TradFi Alternatives
              </div>
              <div className='text-xs text-gray-400'>
                Slow, opaque, low-yield • Limited access to on-chain yield
              </div>
            </div>
            <div className='text-center'>
              <div className='text-sm font-semibold text-green-300 mb-2'>
                Monolith Advantage ✓
              </div>
              <div className='text-xs text-gray-400'>
                Institutional UX + DeFi performance • Compliance-aware
                architecture • Risk-curated yield exposure
              </div>
            </div>
          </div>
          <div className='pt-6 border-t border-blue-500/30'>
            <p className='text-lg text-green-300 font-bold text-center'>
              Moat: operational trust, integration depth, and institutional
              distribution.
            </p>
          </div>
        </div>

        <div className='mt-8 p-8 bg-gradient-to-br from-green-500/10 to-blue-500/10 border-2 border-green-500/30 rounded-lg'>
          <h3 className='text-2xl font-bold text-green-400 mb-6 text-center'>
            Your Assets Are Insured Against Protocol Risk
          </h3>

          <p className='text-gray-300 mb-6 text-center'>
            Unlike Aave, where you pay for optional coverage, Monolith addresses
            protocol risk through a three-layer approach:
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
            <div className='bg-black/30 p-6 rounded-lg border border-blue-500/30'>
              <h4 className='text-xl font-bold text-blue-400 mb-3'>
                1. Continuous Audits
              </h4>
              <p className='text-sm text-gray-300 mb-3'>
                Professional review of your vault code + each new protocol
                integration
              </p>
              <ul className='text-xs text-gray-400 space-y-1 mb-3'>
                <li>
                  • OpenZeppelin (industry gold standard, audited
                  Aave/Compound/Curve)
                </li>
                <li>• Hacken (DeFi experts, audited Yearn/Beefy/Convex)</li>
                <li>• Shows we take security seriously</li>
                <li>
                  • Does NOT prevent all exploits or 0-day vulnerabilities
                </li>
              </ul>
            </div>

            <div className='bg-black/30 p-6 rounded-lg border border-green-500/30'>
              <h4 className='text-xl font-bold text-green-400 mb-3'>
                2. Mandatory Insurance
              </h4>
              <p className='text-sm text-gray-300 mb-3'>
                InsurAce protocol coverage built into your fees
              </p>
              <ul className='text-xs text-gray-400 space-y-1 mb-3'>
                <li>
                  • Covers smart contract exploits (even ones audits miss)
                </li>
                <li>• Covers protocol failures and stablecoin depegs</li>
                <li>• Claims paid by third party in 2-3 days</li>
                <li>• This is where actual risk mitigation happens</li>
              </ul>
            </div>

            <div className='bg-black/30 p-6 rounded-lg border border-purple-500/30'>
              <h4 className='text-xl font-bold text-purple-400 mb-3'>
                3. Non-Custodial Design
              </h4>
              <p className='text-sm text-gray-300 mb-3'>
                You control your vault, not us
              </p>
              <ul className='text-xs text-gray-400 space-y-1 mb-3'>
                <li>• We can&apos;t steal your funds even if we wanted to</li>
                <li>• You can withdraw anytime without permission</li>
                <li>• No counterparty risk with Monolith itself</li>
              </ul>
            </div>
          </div>

          <div className='bg-blue-900/30 p-4 rounded-lg border border-blue-500/50'>
            <p className='text-blue-300 text-sm font-semibold mb-2'>
              Why this matters:
            </p>
            <p className='text-gray-300 text-sm'>
              Millions have been lost in DeFi despite audits. Audits find bugs,
              but they can&apos;t prevent all exploits. Insurance transfers the
              risk that audits can&apos;t eliminate. Together, audits +
              insurance + non-custodial = institutional-grade risk reduction.
            </p>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}
