"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";

export default function Slide7_5RiskFramework() {
  return (
    <Slide id={7.5} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-12 text-center">
          RISK FRAMEWORK: HOW WE EARN INSTITUTIONAL TRUST
        </Title>

        <p className="text-gray-300 text-lg text-center mb-10">
          Your vault deposits are protected by three layers:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Layer 1: Code Safety */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6">
            <div className="text-4xl mb-4 text-center">1️⃣</div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4 text-center">CODE SAFETY</h3>

            <ul className="text-sm text-gray-300 space-y-2 mb-6">
              <li>• Two independent audits (OpenZeppelin + Hacken)</li>
              <li>• 100+ unit tests, fuzz testing, invariant testing</li>
              <li>• Public code on GitHub, bug bounty on Immunefi ($50K)</li>
              <li>• Quarterly security reviews</li>
            </ul>

            <div className="bg-blue-900/30 p-3 rounded-lg mb-3">
              <p className="text-xs text-blue-300 font-semibold mb-1">What this does:</p>
              <p className="text-xs text-gray-400">Catches bugs, validates code quality, detects anomalies</p>
            </div>

            <div className="bg-red-900/30 p-3 rounded-lg">
              <p className="text-xs text-red-300 font-semibold mb-1">What this doesn&apos;t do:</p>
              <p className="text-xs text-gray-400">Prevent all exploits (audits have limitations)</p>
            </div>
          </div>

          {/* Layer 2: Operational Safety */}
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6">
            <div className="text-4xl mb-4 text-center">2️⃣</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4 text-center">OPERATIONAL SAFETY</h3>

            <ul className="text-sm text-gray-300 space-y-2 mb-6">
              <li>• Non-custodial design (you control vault shares)</li>
              <li>• Multi-sig governance (3-of-5 threshold)</li>
              <li>• 48-hour timelocks on all parameter changes</li>
              <li>• Emergency pause mechanism</li>
              <li>• 24/7 Tenderly monitoring</li>
            </ul>

            <div className="bg-purple-900/30 p-3 rounded-lg mb-3">
              <p className="text-xs text-purple-300 font-semibold mb-1">What this does:</p>
              <p className="text-xs text-gray-400">Eliminates counterparty risk with Monolith</p>
            </div>

            <div className="bg-red-900/30 p-3 rounded-lg">
              <p className="text-xs text-red-300 font-semibold mb-1">What this doesn&apos;t do:</p>
              <p className="text-xs text-gray-400">Protect against protocol exploits in underlying protocols</p>
            </div>
          </div>

          {/* Layer 3: Insurance Backing */}
          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6">
            <div className="text-4xl mb-4 text-center">3️⃣</div>
            <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">INSURANCE BACKING</h3>

            <ul className="text-sm text-gray-300 space-y-2 mb-6">
              <li>• InsurAce protocol coverage ($15M+ per vault)</li>
              <li>• Covers: Smart contract exploits, protocol failures, stablecoin depegs</li>
              <li>• Claims processed in 2-3 days by third party</li>
              <li>• Premium included in 1.25% fee (you don&apos;t pay extra)</li>
            </ul>

            <div className="bg-green-900/30 p-3 rounded-lg mb-3">
              <p className="text-xs text-green-300 font-semibold mb-1">What this does:</p>
              <p className="text-xs text-gray-400">Transfers risk that audits can&apos;t prevent; actual loss protection</p>
            </div>

            <div className="bg-green-900/30 p-3 rounded-lg">
              <p className="text-xs text-green-300 font-semibold mb-1">What this covers:</p>
              <p className="text-xs text-gray-400">Real exploits, real losses, real claims paid</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 border-2 border-blue-500/50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-center mb-3 text-blue-300">
            RESULT: Risk reduction framework, not risk elimination
          </h3>
          <p className="text-gray-300 text-center mb-4">
            You&apos;re not making yield without risk—you&apos;re transferring the remaining risk to an insurance provider
            so you don&apos;t bear it. This is why institutional CFOs can approve allocations: audits + insurance +
            non-custodial = managed risk.
          </p>
        </div>

        <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-500/50">
          <p className="text-blue-300 font-semibold mb-3 text-center">The honest pitch:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
            <div className="text-center">
              <div className="text-blue-400 font-bold mb-1">Audits</div>
              <div>catch bugs (not exploits)</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 font-bold mb-1">Insurance</div>
              <div>covers losses (when they happen)</div>
            </div>
            <div className="text-center">
              <div className="text-purple-400 font-bold mb-1">Non-custodial</div>
              <div>prevents Monolith from stealing funds</div>
            </div>
            <div className="text-center">
              <div className="text-amber-400 font-bold mb-1">Together</div>
              <div>= institutional-grade risk management</div>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
