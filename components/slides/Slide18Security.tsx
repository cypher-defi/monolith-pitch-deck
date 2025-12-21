"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import TwoColumnGrid from "@/components/TwoColumnGrid";

export default function Slide18Security() {
  return (
    <Slide id={18} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          APPENDIX B: SECURITY FRAMEWORK
        </Title>
        <Subtitle size="sm" className="mb-8 text-center">
          Non-custodial architecture + multi-layer security approach
        </Subtitle>

        <div className="p-6 bg-green-100 border-2 border-green-500 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-3">
            ✓ FULLY NON-CUSTODIAL: YOUR VAULT, YOUR FUNDS
          </h3>
          <p className="text-green-900 leading-relaxed">
            You deposit stablecoins and receive vault shares (ERC-4626). The
            vault contract is the sole custodian of your assets. Monolith never
            touches your funds—we only orchestrate vault rebalancing across
            audited protocols (Aave, Morpho, Curve). Your vault autonomously
            reallocates capital to optimize yields. You can withdraw anytime
            without permission.
          </p>
        </div>

        <TwoColumnGrid>
          <div>
            <h3 className="text-2xl mb-6 text-blue-400">Pre-Launch Security</h3>

            <Card variant="glass" className="mb-4">
              <CardTitle>Comprehensive Testing</CardTitle>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• 100+ unit tests (Foundry)</li>
                  <li>• Fuzz testing on all entry points</li>
                  <li>• Invariant testing for vault accounting</li>
                  <li>• Coverage &gt;95% on critical paths</li>
                  <li>• Mainnet fork testing with real data</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardTitle>Professional Audit</CardTitle>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• Internal security review (2 weeks)</li>
                  <li>• External audit by tier-1 firm</li>
                  <li>
                    • Options: OpenZeppelin, Trail of Bits, Consensys Diligence
                  </li>
                  <li>• Public code review period</li>
                  <li>• $50K bug bounty on Immunefi</li>
                  <li>
                    • <strong>Timeline:</strong> 10-12 weeks total
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl mb-6 text-blue-400">
              Post-Launch Security
            </h3>

            <Card variant="glass" className="mb-4">
              <CardTitle>Operational Security</CardTitle>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• 24/7 monitoring via Tenderly + custom alerts</li>
                  <li>• Multi-sig governance: 3-of-5 threshold</li>
                  <li>• 48-hour timelocks on parameter changes</li>
                  <li>• Emergency pause (governance-controlled)</li>
                  <li>
                    • Vault autonomy: Rebalancing via smart contract logic
                  </li>
                  <li>• Quarterly security reviews</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass" className="mb-4">
              <CardTitle>Insurance & Risk Management</CardTitle>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• Nexus Mutual coverage for Conservative Vault</li>
                  <li>• Protocol-owned insurance fund (1% of fees)</li>
                  <li>• Gradual coverage expansion to all vaults</li>
                  <li>• Smart contract risk disclosures</li>
                  <li>• Annual third-party security audits</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardTitle>User Protection</CardTitle>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li>• Withdrawal limits (first 7 days post-launch)</li>
                  <li>• Rate limiting on large transactions</li>
                  <li>• Transparent on-chain accounting</li>
                  <li>• Emergency withdrawal always available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TwoColumnGrid>

        <div className="mt-8 p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
          <p className="text-blue-300 text-center">
            <strong>Security-first approach:</strong> Non-custodial by design
            (vault is custodian), autonomous rebalancing (no intermediation),
            professionally audited, continuously monitored, and insured. Your
            keys, your shares, your vault, your control.
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
