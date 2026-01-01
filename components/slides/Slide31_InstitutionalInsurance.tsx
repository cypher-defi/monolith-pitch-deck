"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";

export default function Slide31_InstitutionalInsurance() {
  return (
    <Slide id={30} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-8 text-center">
          APPENDIX D: INSTITUTIONAL INSURANCE - MONOLITH VS TRADFI
        </Title>

        {/* THE TRADFI REALITY */}
        <div className="mb-8">
          <h3 className="text-2xl mb-4 text-red-400 font-bold">
            The TradFi Reality: Zero Customer Asset Protection
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Institutional asset managers in TradFi do not protect customer capital with insurance. Here&apos;s what they actually do:
          </p>

          <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/30 rounded-lg p-5 mb-6">
            <h4 className="text-lg font-bold text-red-300 mb-4">
              Coverage Types in Traditional Finance
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-gray-300">
                <thead>
                  <tr className="border-b border-red-500/30">
                    <th className="text-left p-2 text-red-300">Type</th>
                    <th className="text-left p-2 text-red-300">What It Covers</th>
                    <th className="text-left p-2 text-red-300">Protects</th>
                    <th className="text-left p-2 text-red-300">Customer Assets Covered?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-red-500/20">
                    <td className="p-2 font-semibold">FDIC (Banks)</td>
                    <td className="p-2">Bank solvency</td>
                    <td className="p-2">Depositors</td>
                    <td className="p-2 text-amber-300">$250K per account</td>
                  </tr>
                  <tr className="border-b border-red-500/20">
                    <td className="p-2 font-semibold">SIPC (Brokers)</td>
                    <td className="p-2">Brokerage firm failure</td>
                    <td className="p-2">Account holders</td>
                    <td className="p-2 text-amber-300">$500K per account</td>
                  </tr>
                  <tr className="border-b border-red-500/20">
                    <td className="p-2 font-semibold">D&O Insurance (All funds)</td>
                    <td className="p-2">Manager lawsuit liability</td>
                    <td className="p-2">Fund managers</td>
                    <td className="p-2 text-red-400 font-bold">NO</td>
                  </tr>
                  <tr className="border-b border-red-500/20">
                    <td className="p-2 font-semibold">E&O Insurance (All funds)</td>
                    <td className="p-2">Professional errors</td>
                    <td className="p-2">Fund managers</td>
                    <td className="p-2 text-red-400 font-bold">NO</td>
                  </tr>
                  <tr className="border-b border-red-500/20">
                    <td className="p-2 font-semibold">Hedge Funds</td>
                    <td className="p-2 text-gray-500">(None)</td>
                    <td className="p-2 text-gray-500">(None)</td>
                    <td className="p-2 text-red-400 font-bold">Customer bears 100% risk</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Private Equity</td>
                    <td className="p-2 text-gray-500">(None)</td>
                    <td className="p-2 text-gray-500">(None)</td>
                    <td className="p-2 text-red-400 font-bold">LP bears 100% risk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-900/30 p-4 rounded-lg border border-amber-500/30">
              <h5 className="text-md font-bold text-amber-300 mb-2">Why This Matters</h5>
              <p className="text-xs text-gray-300 mb-2">
                When you invest $10M in a hedge fund, there is zero insurance protecting that capital against:
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Bad investment decisions by the manager</li>
                <li>• Protocol failures (hedge funds don&apos;t use DeFi yet, but would face same issue)</li>
                <li>• Fraud or mismanagement (only insurance is for the manager against lawsuits, not for your capital)</li>
              </ul>
              <p className="text-xs text-amber-300 mt-2 font-semibold">
                The manager buys D&O/E&O insurance to protect themselves personally if they get sued. Your capital is 100% at risk.
              </p>
            </div>

            <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
              <h5 className="text-md font-bold text-green-300 mb-2">Monolith Is Different</h5>
              <p className="text-xs text-gray-300 mb-2">
                We explicitly transfer protocol failure risk through insurance because:
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• <strong className="text-white">The risk profile is different:</strong> Code can fail in ways that aren&apos;t fraud or mismanagement—they&apos;re just bugs/design flaws</li>
                <li>• <strong className="text-white">The standard already exists:</strong> Yearn ($5B+ managed), Beefy ($8B+ managed), Convex ($5B+ managed) all use Nexus Mutual insurance</li>
                <li>• <strong className="text-white">The track record exists:</strong> Nexus Mutual has paid $18M+ in claims and maintained 100% reliability on valid claims</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/50">
            <h5 className="text-md font-bold text-blue-300 mb-2">EU AIFMD Requirements (For Context)</h5>
            <p className="text-xs text-gray-300 mb-2">
              The European Union requires Alternative Investment Fund Managers to carry insurance:
            </p>
            <ul className="text-xs text-gray-400 space-y-1 mb-2">
              <li>• <strong className="text-white">Requirement:</strong> 0.7% of portfolios managed in insurance coverage</li>
              <li>• <strong className="text-white">What it covers:</strong> Manager errors and omissions (protects investors from manager mistakes, not market losses)</li>
              <li>• <strong className="text-white">Not the same as:</strong> Monolith&apos;s protocol insurance (which protects against protocol failures, not just manager errors)</li>
            </ul>
            <p className="text-xs text-blue-300 font-semibold">
              Monolith&apos;s insurance covers a broader risk than AIFMD requires because DeFi protocol risks are broader than traditional manager liability risks.
            </p>
          </div>
        </div>

        {/* WHY INSTITUTIONAL BUYERS SHOULD VALUE THIS */}
        <div className="mb-8">
          <h3 className="text-2xl mb-4 text-green-400 font-bold">
            Why Institutional Buyers Should Value This
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/30 rounded-lg p-4">
              <h4 className="text-md font-bold text-green-300 mb-3">
                1. Comparative Advantage: You Get Insurance, TradFi Doesn&apos;t
              </h4>
              <p className="text-xs text-gray-300 mb-2">
                Your $50M allocation to Monolith&apos;s conservative vault has explicit insurance coverage against smart contract failure.
              </p>
              <p className="text-xs text-gray-300 mb-2">
                An equivalent $50M allocation to a traditional hedge fund has zero asset protection insurance.
              </p>
              <p className="text-xs text-green-300 font-semibold">
                Cost of comparison: 0.08-0.12% annually (embedded in Monolith fees) vs. $0 (because it doesn&apos;t exist in TradFi)
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-2 border-amber-500/30 rounded-lg p-4">
              <h4 className="text-md font-bold text-amber-300 mb-3">
                2. Real Example: Why This Matters
              </h4>
              <div className="text-xs text-gray-300 space-y-1 mb-2">
                <p><strong className="text-white">Euler Finance (March 2023)</strong></p>
                <p>• Protocol: Legitimate, $196M TVL</p>
                <p>• Status: Multiple professional audits completed</p>
                <p>• Incident: Vulnerability in donate function caused $196M loss</p>
                <p>• Insurance: Nexus Mutual paid $3.3M in claims to affected users</p>
                <p>• Outcome: Sophisticated users with Nexus Mutual coverage recovered losses; uninsured users lost everything</p>
              </div>
              <p className="text-xs text-amber-300 font-semibold">
                This could happen to any protocol. Audits are not prevention. Insurance is the backstop.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/30 rounded-lg p-4">
              <h4 className="text-md font-bold text-blue-300 mb-3">
                3. Institutional Standard
              </h4>
              <p className="text-xs text-gray-300 mb-2">
                The fact that Yearn, Beefy, and Convex all use Nexus Mutual insurance tells you this is how professional DeFi asset managers operate.
              </p>
              <p className="text-xs text-blue-300 font-semibold">
                It&apos;s not a luxury add-on. It&apos;s table stakes for institutions.
              </p>
            </div>
          </div>
        </div>

        {/* INSURANCE ECONOMICS */}
        <div className="mb-8">
          <h3 className="text-2xl mb-4 text-purple-400 font-bold">
            Insurance Economics: Transparent Pricing
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Your insurance is not hidden. Here&apos;s exactly how it works:
          </p>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-lg p-5">
            <h4 className="text-md font-bold text-purple-300 mb-3">
              For a $100M Conservative Vault:
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Gross Yield:</span>
                <span className="text-green-300 font-semibold">6.0% = $6.0M</span>
              </div>
              <div className="flex justify-between">
                <span>Management Fee:</span>
                <span className="text-blue-300 font-semibold">1.25% = $1.25M</span>
              </div>
              <div className="flex justify-between">
                <span>Insurance Premium:</span>
                <span className="text-amber-300 font-semibold">0.08% = $80K ← explicit cost</span>
              </div>
              <div className="flex justify-between">
                <span>Audits & Monitoring:</span>
                <span className="text-amber-300 font-semibold">~$60K ← explicit cost</span>
              </div>
              <div className="flex justify-between border-t border-purple-500/30 pt-2">
                <span>Total Risk Management Cost:</span>
                <span className="text-red-300 font-semibold">~$140K = 0.14% of AUM</span>
              </div>
              <div className="flex justify-between">
                <span>Your net margin:</span>
                <span className="text-green-300 font-semibold">$1.11M = 88.6% gross</span>
              </div>
              <div className="flex justify-between">
                <span>Operating expenses:</span>
                <span className="text-gray-400">~$750K</span>
              </div>
              <div className="flex justify-between border-t border-purple-500/30 pt-2">
                <span className="font-bold">Your net profit:</span>
                <span className="text-green-400 font-bold">$360K = 28.8% of revenue</span>
              </div>
            </div>
            <p className="text-xs text-purple-300 mt-4 font-semibold">
              This is transparent. The insurance cost comes from our margin, not your yield.
            </p>
          </div>
        </div>

        {/* SCALING SCENARIOS */}
        <div className="mb-8">
          <h3 className="text-2xl mb-4 text-blue-400 font-bold">
            Scaling: What Happens as You Grow
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/30 p-4 rounded-lg border border-blue-500/30">
              <h4 className="text-sm font-bold text-blue-300 mb-2">Scenario 1: You Grow to $300M AUM</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Insurance costs increase proportionally: $240K</li>
                <li>• Your platform leverage improves</li>
                <li>• Operating margins improve to ~35-38%</li>
                <li>• Insurance remains sustainable</li>
              </ul>
            </div>

            <div className="bg-black/30 p-4 rounded-lg border border-amber-500/30">
              <h4 className="text-sm font-bold text-amber-300 mb-2">Scenario 2: You Need $500M+ Coverage</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• You hit Nexus Mutual pool capacity limits</li>
                <li>• We negotiate dedicated staking pool</li>
                <li>• Insurance cost may increase 10-20%</li>
                <li>• We absorb or negotiate: margins stay viable</li>
              </ul>
            </div>

            <div className="bg-black/30 p-4 rounded-lg border border-red-500/30">
              <h4 className="text-sm font-bold text-red-300 mb-2">Scenario 3: Insurance Market Hardens</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• If DeFi insurance premiums rise industry-wide</li>
                <li>• We may adjust fees or absorb costs</li>
                <li>• We remain transparent: you&apos;ll know immediately</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-300 mt-4 text-center">
            <strong className="text-blue-300">The point:</strong> insurance costs are manageable at scale, and we&apos;re transparent about them.
          </p>
        </div>

        {/* COMPARISON MATRIX */}
        <div className="mb-8">
          <h3 className="text-2xl mb-4 text-green-400 font-bold">
            Comparison Matrix: Insurance in Asset Management
          </h3>

          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-2 border-green-500/30 rounded-lg p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-gray-300">
                <thead>
                  <tr className="border-b border-green-500/30">
                    <th className="text-left p-2 text-green-300">Factor</th>
                    <th className="text-left p-2 text-green-300">Hedge Funds</th>
                    <th className="text-left p-2 text-green-300">Traditional PE</th>
                    <th className="text-left p-2 text-green-300">Monolith Conservative</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-green-500/20">
                    <td className="p-2 font-semibold">Customer Asset Insurance</td>
                    <td className="p-2 text-red-400">None</td>
                    <td className="p-2 text-red-400">None</td>
                    <td className="p-2 text-green-400">✓ Nexus Mutual (0.08-0.12% cost)</td>
                  </tr>
                  <tr className="border-b border-green-500/20">
                    <td className="p-2 font-semibold">Manager Liability Insurance</td>
                    <td className="p-2 text-gray-400">Yes</td>
                    <td className="p-2 text-gray-400">Yes</td>
                    <td className="p-2 text-gray-400">Yes</td>
                  </tr>
                  <tr className="border-b border-green-500/20">
                    <td className="p-2 font-semibold">Audit Requirements</td>
                    <td className="p-2 text-red-400">None required</td>
                    <td className="p-2 text-amber-400">Limited</td>
                    <td className="p-2 text-green-400">✓ Annual + per-integration</td>
                  </tr>
                  <tr className="border-b border-green-500/20">
                    <td className="p-2 font-semibold">Transparency</td>
                    <td className="p-2 text-amber-400">Fund-disclosed</td>
                    <td className="p-2 text-red-400">Limited</td>
                    <td className="p-2 text-green-400">✓ Real-time on-chain</td>
                  </tr>
                  <tr className="border-b border-green-500/20">
                    <td className="p-2 font-semibold">Claims Payout Timeline</td>
                    <td className="p-2 text-gray-500">N/A</td>
                    <td className="p-2 text-gray-500">N/A</td>
                    <td className="p-2 text-green-400">✓ 7-14 days</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Track Record Available</td>
                    <td className="p-2 text-red-400">No</td>
                    <td className="p-2 text-red-400">No</td>
                    <td className="p-2 text-green-400">✓ $18M+ in paid claims</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-300 mt-4">
              Monolith is the only institutional asset manager offering explicit customer asset protection insurance because DeFi is the only place where protocol failure is a meaningful tail risk for yield strategies.
            </p>
          </div>
        </div>

        {/* THE BOTTOM LINE */}
        <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 border-2 border-blue-500/50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-center mb-4 text-white">
            The Bottom Line
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <p className="mb-3">
                You&apos;re not paying for insurance to feel good. You&apos;re paying for insurance because it&apos;s the institutional standard in DeFi asset management, and Monolith uses the same approach as the largest players in the space (Yearn, Beefy, Convex).
              </p>
              <p className="mb-3">
                This is not an extra cost. This is cost of doing business at institutional scale.
              </p>
            </div>
            <div>
              <p className="mb-2"><strong className="text-green-300">What you gain:</strong> explicit risk transfer against tail events that have already happened in the market (Euler, Aave flash loans, etc.).</p>
              <p className="mb-2"><strong className="text-amber-300">What you give up:</strong> 0.08-0.12% in potential yield, offset by the knowledge that your capital is protected against protocol failure.</p>
              <p className="text-blue-300 font-semibold">For institutions managing $50M-$500M in conservative treasuries, this is a fair trade-off.</p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
