"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";

export default function Slide32_InstitutionalInsuranceFAQ() {
  return (
    <Slide id={31} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-6 text-center">
          APPENDIX E: INSTITUTIONAL INVESTOR FAQs ON INSURANCE
        </Title>

        {/* Q1 */}
        <div className="mb-6">
          <h3 className="text-xl mb-3 text-blue-400 font-bold">
            Q1: "Why Does Monolith Have Insurance When Hedge Funds Don't?"
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/30 rounded-lg p-4">
              <h4 className="text-md font-bold text-red-300 mb-2">
                How Traditional Hedge Fund Insurance Works
              </h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• A fund manager buys D&O (Directors & Officers) insurance</li>
                <li>• This protects the <em>manager</em> against lawsuits if they make a bad investment decision</li>
                <li>• This does NOT protect customer capital from losses</li>
                <li>• Your $10M allocation to a hedge fund is 100% your risk if markets go bad</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/30 rounded-lg p-4">
              <h4 className="text-md font-bold text-green-300 mb-2">
                How Monolith Insurance Works
              </h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• We buy protocol insurance that protects customer <em>capital</em> against smart contract failure</li>
                <li>• This is a different risk than "bad investment decision"</li>
                <li>• It&apos;s the same risk as "the code has a bug we didn&apos;t catch in audits"</li>
                <li>• This is why Yearn, Beefy, Convex all use it—it&apos;s the DeFi standard</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-500/50">
            <p className="text-xs text-gray-300">
              <strong className="text-blue-300">Analogy:</strong> Think of aviation. A plane is extensively inspected and audited. A pilot also has insurance. Both exist because: (1) Inspections prevent mechanical failures (2) Insurance protects against the unknown unknowns. Same with Monolith: Audits prevent code bugs we can find; Insurance protects against bugs we can&apos;t find (like Euler Finance&apos;s).
            </p>
          </div>
        </div>

        {/* Q2 */}
        <div className="mb-6">
          <h3 className="text-xl mb-3 text-green-400 font-bold">
            Q2: "Is 0.08-0.12% Insurance Really Worth It?"
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/30 p-3 rounded-lg border border-red-500/30">
              <h4 className="text-sm font-bold text-red-300 mb-2">Cost of alternatives</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Hire blockchain engineers to monitor 24/7: $200K-$500K/year</li>
                <li>• Build your own insurance: impossible (requires regulatory licensing)</li>
                <li>• Self-insure: requires billions in reserves</li>
              </ul>
            </div>

            <div className="bg-black/30 p-3 rounded-lg border border-green-500/30">
              <h4 className="text-sm font-bold text-green-300 mb-2">Insurance value</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• $80-120K per year on $100M allocation</li>
                <li>• Pays for catastrophic tail events (like Euler&apos;s $196M loss)</li>
                <li>• Industry standard (Yearn, Convex, Beefy all use it)</li>
                <li>• Transparent claims: $18M+ paid since 2019</li>
              </ul>
            </div>

            <div className="bg-black/30 p-3 rounded-lg border border-blue-500/30">
              <h4 className="text-sm font-bold text-blue-300 mb-2">Real example</h4>
              <p className="text-xs text-gray-300">
                If we had a 0-day exploit and lost 1% of your $100M allocation ($1M), Nexus Mutual insurance covers it. That&apos;s a <strong className="text-green-300">12-year ROI</strong> on insurance premiums alone.
              </p>
            </div>
          </div>
        </div>

        {/* Q3 & Q4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-lg p-4">
            <h3 className="text-lg mb-2 text-purple-400 font-bold">
              Q3: "Why Nexus Mutual Instead of Other DeFi Insurers?"
            </h3>
            <div className="mb-3">
              <h4 className="text-sm font-bold text-purple-300 mb-1">1. Proven Track Record</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Nexus Mutual: $18M+ paid claims, $190M+ reserves, 5+ years of operation</li>
                <li>• Active pricing and underwriting (not paused or inactive)</li>
                <li>• Largest DeFi insurance provider with most transparent claims history</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-purple-300 mb-1">2. Institutional Requirements</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• For institutional capital, we prioritize proven reliability over newer alternatives</li>
                <li>• Member-voted claims create accountability and transparency</li>
                <li>• Clear track record with verifiable on-chain claim payments</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-2 border-amber-500/30 rounded-lg p-4">
            <h3 className="text-lg mb-2 text-amber-400 font-bold">
              Q4: "What If Insurance Pool Fills Up?"
            </h3>
            <p className="text-xs text-gray-300 mb-2">
              <strong className="text-white">A:</strong> We coordinate with Nexus Mutual directly.
            </p>
            <ul className="text-xs text-gray-300 space-y-1 mb-2">
              <li>• Nexus Mutual has a community-staked capital pool</li>
              <li>• If our vault tier exceeds available capacity, we work with them to increase it</li>
              <li>• This involves coordinating additional NXM staker incentives</li>
              <li>• Cost may increase modestly (0.01-0.05%) for very large allocations</li>
            </ul>
            <div className="bg-amber-900/30 p-2 rounded border border-amber-500/30">
              <p className="text-xs text-amber-300">
                <strong>Example:</strong> If you want $500M coverage and pool capacity is $300M, we either: (1) Negotiate increased staking (takes weeks) (2) Use multiple insurers for different risks (3) Split allocation across vaults/tiers
              </p>
            </div>
          </div>
        </div>

        {/* Q5 & Q6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-black/30 p-4 rounded-lg border border-blue-500/30">
            <h3 className="text-lg mb-2 text-blue-400 font-bold">
              Q5: "What If Nexus Mutual Has a Failure?"
            </h3>
            <div className="mb-2">
              <h4 className="text-sm font-bold text-blue-300 mb-1">1. They have insurance</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Nexus Mutual itself is backed by capital reserves</li>
                <li>• Members&apos; stakes are at risk if claims exceed capacity</li>
                <li>• This creates strong incentive to underwrite conservatively</li>
              </ul>
            </div>
            <div className="mb-2">
              <h4 className="text-sm font-bold text-blue-300 mb-1">2. We don&apos;t have single-provider risk</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• We can add secondary insurance layers (e.g., protocol-specific coverage)</li>
                <li>• We diversify across protocols (Aave, Morpho, Curve)</li>
                <li>• Protocol failure ≠ Insurance failure</li>
              </ul>
            </div>
            <p className="text-xs text-gray-400">
              <strong className="text-white">Real risk:</strong> Nexus Mutual members vote to deny a legitimate claim. Has never happened. Would be obvious and contentious. Community governance + advisory board review prevents this.
            </p>
          </div>

          <div className="bg-black/30 p-4 rounded-lg border border-green-500/30">
            <h3 className="text-lg mb-2 text-green-400 font-bold">
              Q6: "Why Not Just Use Risk-Free Protocols Like Aave?"
            </h3>
            <div className="mb-2">
              <h4 className="text-sm font-bold text-green-300 mb-1">1. No protocol is truly "risk-free"</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Aave: $40B TVL, 5+ years, zero exploits</li>
                <li>• But zero exploits doesn&apos;t mean zero risk</li>
                <li>• Every protocol has unknown-unknowns</li>
                <li>• Euler had same profile before the exploit</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-green-300 mb-1">2. Insurance is cheaper than avoiding all risk</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• You could deploy only to battle-tested protocols (Aave, Compound)</li>
                <li>• You&apos;d still have 1-3% tail risk (protocol failure)</li>
                <li>• Insurance for 0.08-0.12% transfers that tail risk</li>
                <li>• This is the institutional approach</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Q7 */}
        <div className="mb-6">
          <h3 className="text-xl mb-3 text-purple-400 font-bold">
            Q7: "How Do I Know Claims Actually Get Paid?"
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/30 rounded-lg p-4">
              <h4 className="text-md font-bold text-green-300 mb-2">Track Record (Public Record)</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• $18M+ in claims paid since 2019</li>
                <li>• $3.3M paid for Euler Finance (March 2023)</li>
                <li>• $2.7M paid for Yearn exploit (Feb 2021)</li>
                <li>• $5M paid for Rari Capital Fuse (May 2022)</li>
                <li>• All documented on Nexus Mutual&apos;s claims tracker</li>
              </ul>
            </div>

            <div className="bg-black/30 p-4 rounded-lg border border-purple-500/30">
              <h4 className="text-md font-bold text-purple-300 mb-2">How claims work</h4>
              <ul className="text-xs text-gray-300 space-y-1 mb-2">
                <li>1. You submit proof of loss (transaction hash, block data)</li>
                <li>2. Community members vote on validity (3+ day assessment)</li>
                <li>3. If approved, insurer pays within 7-14 days</li>
                <li>4. Payment is from Nexus Mutual pool, not Monolith</li>
              </ul>
              <div className="bg-purple-900/30 p-2 rounded border border-purple-500/30">
                <p className="text-xs text-purple-300 font-semibold">
                  Monolith cannot: Deny claims, Delay claims, Modify coverage, or Access claim funds. Claims are handled entirely by Nexus Mutual independently.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Q8 & Q9 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-amber-500/10 to-red-500/10 border-2 border-amber-500/30 rounded-lg p-4">
            <h3 className="text-lg mb-2 text-amber-400 font-bold">
              Q8: "What if Your Audits Miss Something and Insurance Doesn't Cover It?"
            </h3>
            <div className="mb-2">
              <h4 className="text-sm font-bold text-amber-300 mb-1">Insurance exclusions</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Normal market losses (covered by "smart contract failure" exclusion)</li>
                <li>• Leverage liquidations (covered by "normal market movements" exclusion)</li>
                <li>• Yield shortfalls (not a covered event)</li>
              </ul>
            </div>
            <div className="mb-2">
              <h4 className="text-sm font-bold text-amber-300 mb-1">How we prevent this</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Conservative leverage (0x, 1.5x, 2x vs protocol max of 10x)</li>
                <li>• Automatic deleveraging at 80% LTV</li>
                <li>• Daily monitoring + automatic exits</li>
                <li>• These are operational risk controls, not insurance</li>
              </ul>
            </div>
            <p className="text-xs text-amber-300 font-semibold">
              The line: Insurance covers code failures. Operations covers position risk.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/30 rounded-lg p-4">
            <h3 className="text-lg mb-2 text-blue-400 font-bold">
              Q9: "Can You Guarantee Your Insurance Costs Won't Rise?"
            </h3>
            <div className="mb-2">
              <h4 className="text-sm font-bold text-blue-300 mb-1">Fixed costs</h4>
              <p className="text-xs text-gray-300">Insurance in management fee (0.08-0.12% embedded, not separate charge)</p>
            </div>
            <div className="mb-2">
              <h4 className="text-sm font-bold text-blue-300 mb-1">Variable costs</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• If Nexus Mutual premiums rise industry-wide, costs rise</li>
                <li>• If DeFi insurance market hardens, costs rise</li>
                <li>• If you need {'>'}$15M coverage, we negotiate rates</li>
              </ul>
            </div>
            <div className="bg-blue-900/30 p-2 rounded border border-blue-500/30">
              <h4 className="text-xs font-bold text-blue-300 mb-1">Our commitment</h4>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• 30-day notice of any cost changes</li>
                <li>• Transparent breakdown of insurance costs</li>
                <li>• Grandfathered rates for existing customers (at Series A)</li>
                <li>• We absorb increases {'>'}0.05% (our margin compression, not yours)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Q10 */}
        <div className="mb-6">
          <h3 className="text-xl mb-3 text-green-400 font-bold">
            Q10: "Should I Use Monolith Or Build My Own DeFi Infrastructure?"
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-2 border-red-500/30 rounded-lg p-4">
              <h4 className="text-md font-bold text-red-300 mb-2">Building in-house</h4>
              <ul className="text-xs text-gray-300 space-y-1 mb-2">
                <li>• Legal/compliance: $100K-$500K</li>
                <li>• Engineering: $400K-$1M per year (3-5 engineers)</li>
                <li>• Security audits: $150K-$300K annually</li>
                <li>• Insurance: $100K-$200K annually</li>
                <li>• Monitoring/operations: $200K-$400K per year</li>
              </ul>
              <div className="bg-red-900/30 p-2 rounded border border-red-500/30 mb-2">
                <p className="text-xs text-red-300 font-semibold">
                  Total Year 1: $950K-$2.4M<br/>
                  Total Year 1-3: $2.1M-$5.1M<br/>
                  Plus: Opportunity cost (3-6 months to production)
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/30 rounded-lg p-4">
              <h4 className="text-md font-bold text-green-300 mb-2">Using Monolith</h4>
              <ul className="text-xs text-gray-300 space-y-1 mb-3">
                <li>• Management fee: 1.25% on AUM</li>
                <li>• Insurance: embedded (0.08-0.12%)</li>
                <li>• Go live: 2 weeks</li>
                <li>• No engineering needed</li>
              </ul>
              <div className="bg-green-900/30 p-3 rounded border border-green-500/30">
                <h5 className="text-sm font-bold text-green-300 mb-2">Math on $100M allocation</h5>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• In-house cost: $1.5M+ per year</li>
                  <li>• Monolith cost: $1.25M per year</li>
                </ul>
                <p className="text-xs text-green-300 font-bold mt-2">
                  Monolith is cheaper AND faster AND lower risk
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 border-2 border-blue-500/50 rounded-lg p-5">
          <h3 className="text-xl font-bold text-center mb-4 text-white">
            Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-bold text-blue-300 mb-2">Insurance at Monolith is:</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>1. <strong className="text-white">Transparent</strong> — 0.08-0.12%, embedded, tracked</li>
                <li>2. <strong className="text-white">Institutional</strong> — Same approach as Yearn, Beefy, Convex</li>
                <li>3. <strong className="text-white">Proven</strong> — $18M+ paid claims, 5+ years</li>
                <li>4. <strong className="text-white">Necessary</strong> — Protocol failures have happened (Euler $196M)</li>
                <li>5. <strong className="text-white">Sustainable</strong> — Remains viable at $300M+ scale</li>
              </ul>
            </div>
            <div>
              <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/50 mb-3">
                <p className="text-sm text-green-300 font-semibold mb-1">What you get:</p>
                <p className="text-xs text-gray-300">Explicit protection against smart contract failure that audits miss.</p>
              </div>
              <div className="bg-amber-900/30 p-4 rounded-lg border border-amber-500/50">
                <p className="text-sm text-amber-300 font-semibold mb-1">What you pay:</p>
                <p className="text-xs text-gray-300">0.08-0.12% annually.</p>
              </div>
              <p className="text-sm text-blue-300 font-semibold mt-3 text-center">
                It&apos;s the cost of institutional DeFi asset management done right.
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
