"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import TwoColumnGrid from "@/components/TwoColumnGrid";

export default function Slide29_PortfolioDiversification() {
  return (
    <Slide id={29} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-8 text-center">
          APPENDIX E-4: MONOLITH IN A DIVERSIFIED PORTFOLIO
        </Title>
        <Subtitle size="md" className="mb-12 text-center">
          How Monolith fits alongside traditional allocations
        </Subtitle>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Typical Institutional Portfolio Mix
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 text-left">Asset Class</th>
                  <th className="p-3 text-left">Normal Yield</th>
                  <th className="p-3 text-left">Crisis Behavior</th>
                  <th className="p-3 text-left">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-3 font-semibold">Equities</td>
                  <td className="p-3">8-12%</td>
                  <td className="p-3 text-red-400">-30-50% drawdown</td>
                  <td className="p-3">Growth</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 font-semibold">Corporate Bonds</td>
                  <td className="p-3">4-6%</td>
                  <td className="p-3 text-orange-400">Default risk spikes</td>
                  <td className="p-3">Income</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 font-semibold">Government Bonds</td>
                  <td className="p-3">3-4%</td>
                  <td className="p-3 text-green-400">
                    Flight to safety (good)
                  </td>
                  <td className="p-3">Hedge</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 font-semibold">Gold</td>
                  <td className="p-3">0% + storage</td>
                  <td className="p-3 text-yellow-400">Uncertain (±20%)</td>
                  <td className="p-3">Inflation hedge</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 font-semibold">Cash/MMAs</td>
                  <td className="p-3">0.5-1% (now)</td>
                  <td className="p-3 text-red-400">0.10% (crisis)</td>
                  <td className="p-3">Liquidity</td>
                </tr>
                <tr className="border-b border-gray-700 bg-green-900/20">
                  <td className="p-3 font-bold text-green-300">MONOLITH</td>
                  <td className="p-3 font-bold text-green-400">3-5%</td>
                  <td className="p-3 font-bold text-amber-400">
                    Variable (2-8% range)
                  </td>
                  <td className="p-3 font-bold text-green-400">
                    Different correlation + liquidity
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            10% Monolith Allocation in $100M Portfolio
          </h2>
          <p className="text-lg md:text-xl mb-6 text-center text-gray-300">
            Fed Easing Scenario Comparison (2020 example):
          </p>

          <TwoColumnGrid className="gap-8 mb-6">
            <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-red-300 text-center">
                Traditional 60/40 + Cash
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="font-semibold">60% Equities:</span> $60M × 8%
                  = $4.8M normal | -30% = -$18M downturn
                </p>
                <p>
                  <span className="font-semibold">30% Bonds:</span> $30M × 4% =
                  $1.2M normal | $30M × 1% = $300K (Fed easing)
                </p>
                <p>
                  <span className="font-semibold">10% Cash:</span> $10M × 0.5% =
                  $50K normal | $10M × 0.06% = $6K (Fed easing)
                </p>
                <hr className="my-3 border-red-500/30" />
                <p className="font-bold text-base">Normal: $6.05M income</p>
                <p className="font-bold text-base text-red-400">
                  Fed Easing: -$17.7M (net)
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-300 text-center">
                WITH 10% MONOLITH
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="font-semibold">60% Equities:</span> $60M × 8%
                  = $4.8M normal | -30% = -$18M downturn
                </p>
                <p>
                  <span className="font-semibold">30% Bonds:</span> $30M × 4% =
                  $1.2M normal | $30M × 1% = $300K (Fed easing)
                </p>
                <p>
                  <span className="font-semibold text-green-400">
                    10% MONOLITH:
                  </span>{" "}
                  $10M × 4% = $400K normal | $10M × 4-6% = $400-600K (Fed
                  easing)
                </p>
                <hr className="my-3 border-green-500/30" />
                <p className="font-bold text-base text-green-400">
                  Normal: $6.4M income
                </p>
                <p className="font-bold text-base text-green-400">
                  Fed Easing: -$17.3M to -$17.1M (net) | $400-600K better!
                </p>
              </div>
            </div>
          </TwoColumnGrid>

          <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-xl">
            <p className="text-lg md:text-xl font-semibold text-center text-blue-400">
              Key insight: Monolith doesn't replace equities or bonds. It offers
              different correlation - particularly valuable during Fed easing
              cycles when cash yields collapse.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Why Monolith vs Other Alternative Allocations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4 text-blue-400 text-center">
                vs Gold
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="font-semibold">Normal yield:</span> Gold: 0%
                  + storage (-0.5%) | Monolith: 3-5%
                </p>
                <p>
                  <span className="font-semibold">Fed easing:</span> Gold:
                  Uncertain (±20%) | Monolith: 4-6% historically
                </p>
                <p>
                  <span className="font-semibold">Liquidity:</span> Gold: T+2,
                  spread costs | Monolith: 24/7 instant
                </p>
                <p className="text-green-400 font-semibold mt-3">
                  ✓ Monolith: Positive carry during all cycles
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4 text-blue-400 text-center">
                vs Long Gov Bonds
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="font-semibold">Normal yield:</span> Bonds:
                  3-4% | Monolith: 3-5%
                </p>
                <p>
                  <span className="font-semibold">Fed easing:</span> Bonds:
                  Capital gains + 2-3% yield | Monolith: 4-6% yield
                </p>
                <p>
                  <span className="font-semibold">Duration risk:</span> Bonds:
                  Capital loss if rates spike | Monolith: Zero duration risk
                </p>
                <p className="text-green-400 font-semibold mt-3">
                  ✓ Monolith: Different correlation, no duration risk
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4 text-blue-400 text-center">
                vs Private Credit
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="font-semibold">Normal yield:</span> Private:
                  6-10% | Monolith: 3-5%
                </p>
                <p>
                  <span className="font-semibold">Downturn:</span> Private:
                  Default risk spikes | Monolith: Variable (2-8%)
                </p>
                <p>
                  <span className="font-semibold">Liquidity:</span> Private:
                  Locked 3-7 years | Monolith: Instant
                </p>
                <p className="text-green-400 font-semibold mt-3">
                  ✓ Monolith: Lower yield but different correlation + instant
                  liquidity
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-green-500/50 rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            The Honest Pitch to Institutional Investors
          </h2>

          <blockquote className="text-base text-gray-300 space-y-3">
            <p>"You already diversify. You don't need us to tell you that.</p>

            <p>
              What you don't have is a yield asset with different correlation
              that:
            </p>
            <ul className="list-disc ml-8 space-y-1">
              <li>Earns 3-5% through utilization pricing, not Fed policy</li>
              <li>
                Historically maintained 4-6% during Fed easing (2020) when cash
                paid 0.06%
              </li>
              <li>
                Has different correlation to TradFi (genuine diversification)
              </li>
              <li>Provides 24/7 liquidity (unlike private credit)</li>
              <li>Has positive carry (unlike gold or options)</li>
            </ul>

            <p>
              The $20M pilot isn't 'betting on crypto.' It's diversifying the
              cash allocation with a different correlation profile.
            </p>

            <p className="font-semibold text-green-400">
              If we're right, you add $500K-$1M annually to portfolio returns
              AND have meaningful diversification during Fed easing cycles.
            </p>

            <p className="font-semibold text-blue-400">
              If we're wrong, you've tested with 4% of AUM in a fully liquid,
              insured, non-custodial structure and can exit anytime."
            </p>
          </blockquote>
        </div>
      </SlideContent>
    </Slide>
  );
}
