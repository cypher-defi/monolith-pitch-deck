"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";

export default function Slide15_DeFiRiskComparison() {
  return (
    <Slide id={13} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-6 text-center">
          APPENDIX B-3: LENDING RISK - TRADFI VS DEFI
        </Title>

        <p className="text-gray-300 text-sm md:text-base text-center mb-8">
          Institutional Comparison: How DeFi Eliminates Discretionary Credit
          Risk
        </p>

        {/* COMPARISON TABLE */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-blue-500">
                  <th className="p-3 text-left text-gray-400 font-bold w-1/4">
                    Dimension
                  </th>
                  <th className="p-3 text-left text-blue-300 font-bold w-3/8">
                    TradFi Lending (Banks / PB / Repo)
                  </th>
                  <th className="p-3 text-left text-green-300 font-bold w-3/8">
                    DeFi Lending (Institutional Protocols)
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400 font-semibold">
                    Collateralization
                  </td>
                  <td className="p-3">
                    Often partial or dynamic; haircuts renegotiable
                  </td>
                  <td className="p-3 text-green-400">
                    Mandatory over-collateralization set ex-ante
                  </td>
                </tr>
                <tr className="border-b border-gray-700 bg-gray-900/30">
                  <td className="p-3 text-gray-400 font-semibold">
                    Unsecured Exposure
                  </td>
                  <td className="p-3 text-amber-400">
                    Possible (especially during stress)
                  </td>
                  <td className="p-3 text-green-400">None by design</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400 font-semibold">
                    Risk Parameters
                  </td>
                  <td className="p-3">Contractual, discretionary</td>
                  <td className="p-3 text-green-400">
                    Hard-coded, public, non-negotiable
                  </td>
                </tr>
                <tr className="border-b border-gray-700 bg-gray-900/30">
                  <td className="p-3 text-gray-400 font-semibold">
                    Mark-to-Market
                  </td>
                  <td className="p-3">Periodic (daily / intraday)</td>
                  <td className="p-3 text-green-400">
                    Continuous, real-time (24/7)
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400 font-semibold">
                    Margin Management
                  </td>
                  <td className="p-3">Margin calls with operational delay</td>
                  <td className="p-3 text-green-400">
                    No margin calls; automatic liquidation
                  </td>
                </tr>
                <tr className="border-b border-gray-700 bg-gray-900/30">
                  <td className="p-3 text-gray-400 font-semibold">
                    Enforcement
                  </td>
                  <td className="p-3">Legal + operational process</td>
                  <td className="p-3 text-green-400">
                    Programmatic, incentive-driven liquidation
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400 font-semibold">
                    Reaction Time
                  </td>
                  <td className="p-3">Dependent on ops & market hours</td>
                  <td className="p-3 text-green-400">Immediate</td>
                </tr>
                <tr className="border-b border-gray-700 bg-gray-900/30">
                  <td className="p-3 text-gray-400 font-semibold">
                    Default Risk
                  </td>
                  <td className="p-3">Borrower solvency matters</td>
                  <td className="p-3 text-green-400">
                    Borrower behavior irrelevant
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400 font-semibold">
                    Transparency
                  </td>
                  <td className="p-3">Balance-sheet & reporting based</td>
                  <td className="p-3 text-green-400">
                    Full on-chain, real-time visibility
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* WHERE MONOLITH ADDS VALUE */}
        <div className="max-w-6xl mx-auto mb-6">
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/10 border-2 border-purple-500/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-center mb-4 text-purple-300">
              Where Monolith Adds an Institutional Layer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
              <div className="flex gap-2 items-start">
                <span className="text-purple-400 flex-shrink-0">✓</span>
                <span>
                  <strong className="text-white">Conservative leverage:</strong>{" "}
                  Operates below protocol max LTVs
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-purple-400 flex-shrink-0">✓</span>
                <span>
                  <strong className="text-white">Stablecoin-only:</strong> Core
                  lending exposure in stable assets
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-purple-400 flex-shrink-0">✓</span>
                <span>
                  <strong className="text-white">Exposure caps:</strong> Limits
                  per protocol & venue
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-purple-400 flex-shrink-0">✓</span>
                <span>
                  <strong className="text-white">No inventory risk:</strong>{" "}
                  Avoids market-making as base yield
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-purple-400 flex-shrink-0">✓</span>
                <span>
                  <strong className="text-white">Audit layer:</strong> Regular
                  security reviews & testing
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-purple-400 flex-shrink-0">✓</span>
                <span>
                  <strong className="text-white">Oracle redundancy:</strong>{" "}
                  Multiple price feed sources
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-purple-400 flex-shrink-0">✓</span>
                <span>
                  <strong className="text-white">Automated exits:</strong>{" "}
                  Programmatic risk-off triggers
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-purple-400 flex-shrink-0">✓</span>
                <span>
                  <strong className="text-white">Governance controls:</strong>{" "}
                  Multi-sig kill-switches
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* INSTITUTIONAL RISK CONTEXT: DEFI VS TRADFI */}
        <div className="max-w-6xl mx-auto mb-6">
          <h3 className="text-xl font-bold text-center mb-4 text-white">
            Institutional Risk Context: Monolith DeFi vs TradFi Alternatives
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-purple-500">
                  <th className="p-3 text-left text-gray-400 font-bold">
                    Risk Type
                  </th>
                  <th className="p-3 text-left text-blue-300 font-bold">
                    TradFi (Bonds, CLOs, Private Credit)
                  </th>
                  <th className="p-3 text-left text-green-300 font-bold">
                    Monolith DeFi (Conservative Vault)
                  </th>
                  <th className="p-3 text-left text-purple-300 font-bold">
                    Investor Takeaway
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400 font-semibold">
                    Counterparty
                  </td>
                  <td className="p-3 text-amber-400">Single issuer</td>
                  <td className="p-3 text-green-400">
                    Diversified across protocols
                  </td>
                  <td className="p-3 text-xs">No single point of failure</td>
                </tr>
                <tr className="border-b border-gray-700 bg-gray-900/30">
                  <td className="p-3 text-gray-400 font-semibold">Liquidity</td>
                  <td className="p-3 text-amber-400">
                    Weeks/months, gates in crisis
                  </td>
                  <td className="p-3 text-green-400">48-72h guaranteed</td>
                  <td className="p-3 text-xs">
                    Immediate exit vs long lock-ups
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400 font-semibold">
                    Transparency
                  </td>
                  <td className="p-3">Quarterly reports</td>
                  <td className="p-3 text-green-400">Real-time on-chain</td>
                  <td className="p-3 text-xs">See positions 24/7</td>
                </tr>
                <tr className="border-b border-gray-700 bg-gray-900/30">
                  <td className="p-3 text-gray-400 font-semibold">Custody</td>
                  <td className="p-3 text-amber-400">
                    Broker/bank holds, rehypothecation possible
                  </td>
                  <td className="p-3 text-green-400">Non-custodial</td>
                  <td className="p-3 text-xs">You control the assets</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-3 text-gray-400 font-semibold">
                    Default / Credit Risk
                  </td>
                  <td className="p-3 text-red-400">Bankruptcy = 100% loss</td>
                  <td className="p-3 text-green-400">
                    Auto-liquidation if thresholds breached
                  </td>
                  <td className="p-3 text-xs">
                    Code enforces rules, not promises
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg">
            <p className="text-xs md:text-sm text-center text-purple-300 leading-tight">
              <strong>
                DeFi swaps opaque credit risk for transparent, measurable smart
                contract risk.
              </strong>{" "}
              All exposures are observable and mitigated continuously.
            </p>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl p-6">
            <p className="text-center text-green-300 text-sm md:text-base font-semibold leading-relaxed">
              "DeFi lending replaces discretionary credit risk with continuously
              enforced collateral discipline. Monolith constrains this further
              to meet institutional risk tolerance."
            </p>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
