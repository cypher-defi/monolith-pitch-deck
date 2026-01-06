"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Icon from "@/components/Icon";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";

export default function Slide7_5RiskFramework() {
  return (
    <Slide id={7} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-4 md:mb-8 text-center">
          PROTECTING YOUR CAPITAL
        </Title>

        <p className="text-gray-300 text-base md:text-xl text-center mb-8 md:mb-12">
          Bank-grade security through three proven layers
        </p>

        <ThreeColumnGrid className="gap-4 md:gap-8 mb-8 md:mb-12">
          {/* AUDIT + TESTING */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4 md:p-8">
            <div className="text-center mb-4 md:mb-6">
              <Icon
                name="shield"
                size={48}
                className="text-blue-400 mx-auto mb-2 md:mb-4"
              />
              <h3 className="text-lg md:text-2xl font-bold text-blue-300">
                Independent Code Audits
              </h3>
            </div>

            <div className="space-y-2 md:space-y-4 text-xs md:text-sm text-gray-300 mb-4 md:mb-6">
              <div className="flex gap-2 items-start">
                <span className="text-blue-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">Dual audits:</strong> Two
                  leading cybersecurity firms review all code
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-blue-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">$50K bug bounty:</strong>{" "}
                  Ethical hackers paid to find vulnerabilities
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-blue-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">Continuous testing:</strong>{" "}
                  Automated security checks before every update
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-blue-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">Ongoing monitoring:</strong>{" "}
                  Quarterly reviews ensure security remains current
                </span>
              </div>
            </div>

            <div className="bg-blue-900/30 p-3 md:p-4 rounded-lg border border-blue-500/30">
              <p className="text-center text-blue-300 font-semibold text-sm md:text-base leading-tight">
                Like SOC 2 compliance + penetration testing
              </p>
            </div>
          </div>

          {/* NON-CUSTODIAL ARCHITECTURE */}
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-4 md:p-8">
            <div className="text-center mb-4 md:mb-6">
              <Icon
                name="lock"
                size={48}
                className="text-purple-400 mx-auto mb-2 md:mb-4"
              />
              <h3 className="text-lg md:text-2xl font-bold text-purple-300">
                Direct Asset Ownership
              </h3>
            </div>

            <div className="space-y-2 md:space-y-4 text-xs md:text-sm text-gray-300 mb-4 md:mb-6">
              <div className="flex gap-2 items-start">
                <span className="text-purple-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">No intermediaries:</strong>{" "}
                  Assets held in your account, not ours—like owning stock
                  certificates directly
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-purple-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">Distributed control:</strong>{" "}
                  Major changes require 3 of 5 key holders (prevents single
                  point of failure)
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-purple-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">48-hour notice:</strong> All
                  system updates announced in advance (transparency standard)
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-purple-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">Kill switch:</strong> System
                  can be paused if anomalies detected
                </span>
              </div>
            </div>

            <div className="bg-purple-900/30 p-3 md:p-4 rounded-lg border border-purple-500/30">
              <p className="text-center text-purple-300 font-semibold text-sm md:text-base leading-tight">
                No FTX or Celsius risk—we can't access your funds
              </p>
            </div>
          </div>

          {/* INSURANCE BACKING */}
          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-4 md:p-8">
            <div className="text-center mb-4 md:mb-6">
              <Icon
                name="check"
                size={48}
                className="text-green-400 mx-auto mb-2 md:mb-4"
              />
              <h3 className="text-lg md:text-2xl font-bold text-green-300">
                Third-Party Insurance (Nexus Mutual)
              </h3>
            </div>

            <div className="space-y-2 md:space-y-4 text-xs md:text-sm text-gray-300 mb-4 md:mb-6">
              <div className="flex gap-2 items-start">
                <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">Coverage Capacity:</strong> Up to available pool capacity (typically $10-15M per vault tier) for smart contract exploits, protocol failures, and stablecoin depegs
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">Assessment:</strong> Member-voted claims (transparent, no corporate gatekeeping—unlike traditional insurance)
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">Track Record:</strong> $18M+ in claims paid since 2019; $190M+ in capital reserves backing coverage
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">Claims Timeline:</strong> Assessed within 7-14 days; paid by independent insurer (not Monolith)
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-tight">
                  <strong className="text-white">Cost:</strong> Premium ~0.08-0.12% annually, bundled into management fee
                </span>
              </div>
            </div>

            <div className="bg-amber-900/30 p-3 md:p-4 rounded-lg border border-amber-500/30">
              <p className="text-center text-amber-300 font-semibold text-sm md:text-base leading-tight">
                <strong>Risk Transfer, Not Risk Elimination:</strong> Insurance covers catastrophic protocol failures that audits miss (e.g., Euler Finance's $196M loss despite professional audits). It does NOT cover normal market volatility, yield shortfalls, or impermanent loss.
              </p>
            </div>
          </div>
        </ThreeColumnGrid>

        {/* WHY THIS MATTERS: THE INSTITUTIONAL TRUST MODEL */}
        <div className="max-w-5xl mx-auto mb-8 md:mb-12">
          <div className="bg-gradient-to-br from-red-500/10 via-amber-500/10 to-green-500/10 border-2 border-green-500/50 rounded-xl p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-white">
              WHY THIS MATTERS: The Institutional Trust Model
            </h3>

            <p className="text-center text-gray-300 text-sm md:text-base mb-6 md:mb-8">
              Your CFO has seen centralized custody failures:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8 text-xs md:text-sm">
              <div className="bg-red-500/5 border border-red-500/30 rounded-lg p-3 md:p-4">
                <div className="text-red-400 font-bold mb-1">Lehman 2008</div>
                <div className="text-gray-300 leading-tight">Bank failed → Customers waited YEARS → Many didn't recover</div>
              </div>

              <div className="bg-amber-500/5 border border-amber-500/30 rounded-lg p-3 md:p-4">
                <div className="text-amber-400 font-bold mb-1">MF Global 2011</div>
                <div className="text-gray-300 leading-tight">Broker moved $900M of customer funds → 8+ year recovery</div>
              </div>

              <div className="bg-orange-500/5 border border-orange-500/30 rounded-lg p-3 md:p-4">
                <div className="text-orange-400 font-bold mb-1">Madoff 2008</div>
                <div className="text-gray-300 leading-tight">Manager controlled custody → $65B fraud hidden 20 years</div>
              </div>

              <div className="bg-red-500/5 border border-red-500/30 rounded-lg p-3 md:p-4">
                <div className="text-red-400 font-bold mb-1">SVB 2023</div>
                <div className="text-gray-300 leading-tight">Bank failure → Government rescue required</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-2 border-green-500/50 rounded-lg p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold text-green-300 mb-3 md:mb-4 text-center">
                With Monolith:
              </h4>
              <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-300 max-w-3xl mx-auto">
                <div className="flex items-start gap-2 md:gap-3">
                  <Icon name="check" size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white leading-tight">
                    <strong>Your vault shares live in YOUR wallet. Not ours.</strong>
                  </p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <Icon name="check" size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white leading-tight">
                    Even if Monolith fails, you still own your shares.
                  </p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <Icon name="check" size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white leading-tight">
                    Blockchain makes unauthorized transfers impossible.
                  </p>
                </div>
              </div>
              <p className="text-center text-green-300 text-sm md:text-lg font-bold mt-4 md:mt-6">
                Together, audits + insurance + non-custodial = why institutions allocate here.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-blue-500/50 rounded-xl p-4 md:p-8">
            <h3 className="text-lg md:text-2xl font-bold text-center mb-4 md:mb-6 text-white">
              = Defense-in-Depth Security Strategy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 text-center text-xs md:text-sm text-gray-300">
              <div>
                <div className="text-blue-400 font-bold text-base md:text-lg mb-1 md:mb-2">
                  1. Prevention
                </div>
                <div className="leading-tight">
                  Independent audits catch vulnerabilities early
                </div>
              </div>
              <div>
                <div className="text-purple-400 font-bold text-base md:text-lg mb-1 md:mb-2">
                  2. Structural Safety
                </div>
                <div className="leading-tight">
                  Segregated accounts prevent internal theft
                </div>
              </div>
              <div>
                <div className="text-green-400 font-bold text-base md:text-lg mb-1 md:mb-2">
                  3. Financial Backstop
                </div>
                <div className="leading-tight">
                  Insurance covers worst-case scenarios
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 text-xs md:text-sm mt-4 md:mt-6 leading-tight">
              Treasury-grade protection: tested by institutional clients
              managing $100M+
            </p>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
