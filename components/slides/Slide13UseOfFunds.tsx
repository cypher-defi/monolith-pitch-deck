"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";

export default function Slide13UseOfFunds() {
  return (
    <Slide id={14} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          USE OF FUNDS
        </Title>

        <div className="text-center mb-12">
          <div className="text-6xl font-bold mb-2 text-blue-400">$1-1.5M</div>
          <div className="text-slate-400 text-xl">
            Seed Raise Target • 18-Month Runway to $500K ARR
          </div>
        </div>

        <ThreeColumnGrid className="mb-12 gap-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-blue-300 mb-4 text-lg font-bold">
                Engineering
              </h3>
              <div className="text-5xl font-bold text-blue-300 mb-4">$450K</div>
              <div className="text-blue-400 font-semibold mb-6">45%</div>
              <ul className="text-left text-sm text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Smart contract dev & optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Full-stack dashboard & API</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Cloud infrastructure & DevOps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Development tools & testing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-green-300 mb-4 text-lg font-bold">
                Security, Audit & Insurance
              </h3>
              <div className="text-5xl font-bold text-green-300 mb-4">
                $200K
              </div>
              <div className="text-green-400 font-semibold mb-6">20%</div>
              <ul className="text-left text-sm text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Smart contract audits (OpenZeppelin $45K + Hacken $30K)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Formal verification of vault accounting logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Security documentation & threat modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Bug bounty program ($50K reserve on Immunefi)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Insurance provider partnerships (InsurAce)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-amber-300 mb-4 text-lg font-bold">
                Operations & Sales
              </h3>
              <div className="text-5xl font-bold text-amber-300 mb-4">
                $350K
              </div>
              <div className="text-amber-400 font-semibold mb-6">35%</div>
              <ul className="text-left text-sm text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>B2B sales & business development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Pilot customer acquisition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Legal & compliance setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Infrastructure & operations</span>
                </li>
              </ul>
            </div>
          </div>
        </ThreeColumnGrid>

        <div className="p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 border-2 border-green-500/30 rounded-lg mb-8">
          <h4 className="text-xl font-bold text-green-400 mb-4 text-center">
            Seed Funding Covers Professional Audits & Insurance Infrastructure
          </h4>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="bg-black/30 p-4 rounded-lg">
              <h5 className="text-lg font-bold text-blue-300 mb-3">Pre-Launch (Months 1-6)</h5>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• OpenZeppelin: $45K (Aave/Compound/Curve track record)</li>
                <li>• Hacken: $30K (Yearn/Beefy/Convex track record)</li>
                <li>• Formal verification of vault accounting logic</li>
                <li>• Security documentation & threat modeling</li>
                <li>• Bug bounty program setup ($50K reserve on Immunefi)</li>
                <li>• Insurance provider partnerships (InsurAce integration)</li>
              </ul>
            </div>

            <div className="bg-black/30 p-4 rounded-lg">
              <h5 className="text-lg font-bold text-purple-300 mb-3">Post-Launch Recurring (Funded from Operating Margin)</h5>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• Annual comprehensive audits: $40-50K/year</li>
                <li>• Recurring audits for new integrations: $60K/year</li>
                <li>• InsurAce insurance premium (0.08% of TVL):
                  <ul className="ml-4 mt-1 text-xs text-gray-400">
                    <li>→ Year 1 ($25M TVL): $20K</li>
                    <li>→ Year 2 ($100M TVL): $80K</li>
                    <li>→ Year 3 ($500M TVL): $400K</li>
                  </ul>
                </li>
                <li>• Continuous monitoring infrastructure (embedded in ops)</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900/30 p-4 rounded-lg">
            <h5 className="text-md font-bold text-blue-300 mb-2">Why Insurance & Audits Are Recurrent (Not One-Time)</h5>
            <p className="text-sm text-gray-300 mb-3">Unlike traditional software, DeFi protocols face evolving risks:</p>
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-300">
              <div>
                <div className="font-bold text-blue-400 mb-1">1. New vulnerabilities emerge</div>
                <div>Audits are snapshots. New exploits happen. We re-audit annually.</div>
              </div>
              <div>
                <div className="font-bold text-blue-400 mb-1">2. New protocol integrations</div>
                <div>Each time we add Aave, Morpho, or Curve, we audit before routing capital. 3-4x/year.</div>
              </div>
              <div>
                <div className="font-bold text-blue-400 mb-1">3. Insurance scales with TVL</div>
                <div>Larger vault = higher coverage needed. Premium grows with AUM.</div>
              </div>
              <div>
                <div className="font-bold text-blue-400 mb-1">4. Threat landscape evolves</div>
                <div>Yesterday&apos;s secure protocol has today&apos;s vulnerability. Continuous monitoring is essential.</div>
              </div>
            </div>
            <p className="text-sm text-green-300 font-bold mt-4 text-center">
              This is not a cost to minimize. It&apos;s the insurance + audit infrastructure that justifies why
              institutions choose Monolith over DIY Aave.
            </p>
            <p className="text-xs text-gray-400 mt-2 text-center">
              The $200K Seed covers launch security setup. Year 1+ insurance/audits come from your 1.25% management
              fees (built into operating cost structure shown in Slide 9).
            </p>
          </div>
        </div>

        <div className="p-8 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg text-center">
          <p className="text-blue-300 text-lg">
            <span className="text-blue-400 font-bold">
              Capital-efficient allocation:
            </span>{" "}
            Technical founders building in-house. No external team hires. 100%
            focused on product-market fit.
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
