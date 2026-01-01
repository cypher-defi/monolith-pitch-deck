"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";
import FourColumnGrid from "@/components/FourColumnGrid";
import TwoColumnGrid from "@/components/TwoColumnGrid";
import Icon from "@/components/Icon";

export default function Slide12_HowItWorks() {
  return (
    <Slide id={10} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-12 text-center">
          APPENDIX A-2: HOW MONOLITH WORKS
        </Title>
        <Subtitle size="md" className="mb-16 text-center">
          White-label infrastructure that takes institutions from 0 to live in 2
          weeks
        </Subtitle>

        {/* THREE CORE STEPS */}
        <div className="max-w-5xl mx-auto mb-16">
          <ThreeColumnGrid className="gap-8">
            {/* STEP 1 */}
            <div className="text-center">
              <div className="inline-block p-6 rounded-full bg-blue-500/20 border-2 border-blue-500 mb-6">
                <span className="text-5xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Choose Integration</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                White-label dashboard, mobile app, or SDK - deploy to your
                infrastructure or ours
              </p>
              <div className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-1">
                <Icon name="lightning" size={16} className="text-yellow-400" />1
                day setup
              </div>
            </div>

            {/* STEP 2 */}
            <div className="text-center">
              <div className="inline-block p-6 rounded-full bg-purple-500/20 border-2 border-purple-500 mb-6">
                <span className="text-5xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Connect & Deploy</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                One-click integrations to QuickBooks, Fireblocks, Bloomberg
                Terminal
              </p>
              <div className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-1">
                <Icon name="lightning" size={16} className="text-yellow-400" />1
                week integration
              </div>
            </div>

            {/* STEP 3 */}
            <div className="text-center">
              <div className="inline-block p-6 rounded-full bg-green-500/20 border-2 border-green-500 mb-6">
                <span className="text-5xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Go Live</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Customers deposit stablecoins and start earning yield
                automatically
              </p>
              <div className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-1">
                <Icon name="lightning" size={16} className="text-yellow-400" />
                Live in 2 weeks total
              </div>
            </div>
          </ThreeColumnGrid>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            What Monolith Delivers
          </h3>
          <FourColumnGrid className="gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6 text-center">
              <Icon
                name="window"
                size={32}
                className="text-blue-400 mx-auto mb-3"
              />
              <h4 className="font-bold text-white mb-2">Portfolio Dashboard</h4>
              <p className="text-sm text-gray-400">
                Real-time tracking of yields and allocations
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6 text-center">
              <Icon
                name="trending"
                size={32}
                className="text-purple-400 mx-auto mb-3"
              />
              <h4 className="font-bold text-white mb-2">
                Performance Analytics
              </h4>
              <p className="text-sm text-gray-400">
                Deep insights into returns and risk metrics
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6 text-center">
              <Icon
                name="shield"
                size={32}
                className="text-amber-400 mx-auto mb-3"
              />
              <h4 className="font-bold text-white mb-2">Risk Monitoring</h4>
              <p className="text-sm text-gray-400">
                24/7 monitoring with automated safeguards
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6 text-center">
              <Icon
                name="clipboard"
                size={32}
                className="text-green-400 mx-auto mb-3"
              />
              <h4 className="font-bold text-white mb-2">
                Compliance Reporting
              </h4>
              <p className="text-sm text-gray-400">
                Automated audit trails and tax reporting
              </p>
            </div>
          </FourColumnGrid>
        </div>

        {/* RISK PROFILE COMPARISON */}
        <div className="max-w-5xl mx-auto mb-16 p-8 bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-blue-500/50 rounded-xl">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            Risk Profile: Monolith DeFi vs TradFi Alternatives
          </h3>
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-blue-500/50">
                  <th className="sticky left-0 bg-gray-900 z-10 text-left py-3 px-4 font-bold text-gray-300">
                    Risk Dimension
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-blue-300">
                    TradFi Money Markets
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-green-300">
                    Monolith Conservative
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Counterparty Risk
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Bank credit risk (opaque balance sheet)
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Smart contract code (audited, transparent)
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Collateralization
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Fractional reserve or unsecured
                  </td>
                  <td className="py-3 px-4 bg-green-500/10 text-white">
                    150%+ over-collateralized lending
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Default/Liquidation
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Discretionary (manual review, delays)
                  </td>
                  <td className="py-3 px-4 bg-green-500/10 text-white">
                    Automated (real-time, no discretion)
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Transparency
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Quarterly reports, balance sheet opacity
                  </td>
                  <td className="py-3 px-4 bg-green-500/10 text-white">
                    Real-time on-chain, every transaction visible
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Insurance Coverage
                  </td>
                  <td className="py-3 px-4 bg-amber-500/10 text-white">
                    FDIC $250K per account
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Nexus Mutual (capped to purchased amount)
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan={3}
                    className="py-4 px-4 bg-blue-500/20 border-t-2 border-blue-500/50 font-semibold italic text-center text-gray-200"
                  >
                    DeFi swaps opaque credit risk for transparent, measurable
                    smart contract risk
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* OPERATIONAL CHARACTERISTICS COMPARISON */}
        <div className="max-w-5xl mx-auto mb-16 p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-2 border-purple-500/50 rounded-xl">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            Operational Characteristics
          </h3>
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-purple-500/50">
                  <th className="sticky left-0 bg-gray-900 z-10 text-left py-3 px-4 font-bold text-gray-300">
                    Characteristic
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-blue-300">
                    TradFi Alternatives
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-green-300">
                    Monolith DeFi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Operating Hours
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    9:30am-4pm M-F (market hours)
                  </td>
                  <td className="py-3 px-4 bg-green-500/10 text-white">
                    24/7/365 global access
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Settlement Speed
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    T+2 settlement, ACH 1-3 days
                  </td>
                  <td className="py-3 px-4 bg-green-500/10 text-white">
                    Instant on-chain, 48-72h to fiat
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Custody Model
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Bank/broker custody (rehypothecation risk)
                  </td>
                  <td className="py-3 px-4 bg-green-500/10 text-white">
                    Non-custodial (you control keys)
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Geographic Access
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Limited by jurisdiction, banking hours
                  </td>
                  <td className="py-3 px-4 bg-green-500/10 text-white">
                    Permissionless, borderless
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan={3}
                    className="py-4 px-4 bg-purple-500/20 border-t-2 border-purple-500/50 font-semibold italic text-center text-gray-200"
                  >
                    DeFi infrastructure enables 24/7 access with superior
                    transparency and control
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* KEY BENEFITS */}
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-blue-500/50 rounded-xl">
          <p className="text-white text-xl font-semibold text-center mb-6">
            Institutions get everything they need. Nothing they don't.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Icon
                name="check"
                size={24}
                className="text-green-400 flex-shrink-0"
              />
              <span>Live in 2 weeks, not 6 months</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon
                name="check"
                size={24}
                className="text-green-400 flex-shrink-0"
              />
              <span>Built-in compliance & security</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon
                name="check"
                size={24}
                className="text-green-400 flex-shrink-0"
              />
              <span>Managed infrastructure & ops</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon
                name="check"
                size={24}
                className="text-green-400 flex-shrink-0"
              />
              <span>Ready-to-deploy, not custom-built</span>
            </div>
          </div>
        </div>

        {/* INFRASTRUCTURE ADVANTAGES */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Infrastructure & Speed Advantages
          </h3>
          <FourColumnGrid className="gap-6">
            {/* TIME TO MARKET */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6 text-center">
              <Icon
                name="lightning"
                size={32}
                className="text-blue-400 mx-auto mb-3"
              />
              <div className="text-3xl font-bold text-blue-300 mb-2">
                2 Weeks
              </div>
              <h4 className="font-bold text-white mb-2">Time to Market</h4>
              <div className="mt-3 text-xs text-gray-500 bg-gray-800/50 rounded p-2">
                vs TradFi: 6-12 months
              </div>
            </div>

            {/* LIQUIDITY WINDOWS */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6 text-center">
              <Icon
                name="trending"
                size={32}
                className="text-purple-400 mx-auto mb-3"
              />
              <div className="text-3xl font-bold text-purple-300 mb-2">
                48-72h
              </div>
              <h4 className="font-bold text-white mb-2">Liquidity Windows</h4>
              <div className="mt-3 text-xs text-gray-500 bg-gray-800/50 rounded p-2">
                vs TradFi: Weeks/months
              </div>
            </div>

            {/* CUSTODY FREEDOM */}
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6 text-center">
              <Icon
                name="lock"
                size={32}
                className="text-amber-400 mx-auto mb-3"
              />
              <div className="text-2xl font-bold text-amber-300 mb-2">
                Non-Custodial
              </div>
              <h4 className="font-bold text-white mb-2">Custody Freedom</h4>
              <div className="mt-3 text-xs text-gray-500 bg-gray-800/50 rounded p-2">
                vs TradFi: Bank custody + rehypothecation
              </div>
            </div>

            {/* MARKET ACCESS */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6 text-center">
              <Icon
                name="globe"
                size={32}
                className="text-green-400 mx-auto mb-3"
              />
              <div className="text-3xl font-bold text-green-300 mb-2">24/7</div>
              <h4 className="font-bold text-white mb-2">Market Access</h4>
              <div className="mt-3 text-xs text-gray-500 bg-gray-800/50 rounded p-2">
                vs TradFi: Business hours + T+2
              </div>
            </div>
          </FourColumnGrid>
        </div>

        {/* YIELD PREMIUM BREAKDOWN */}
        <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl">
          <h3 className="text-xl font-bold text-center mb-4 text-white">
            Yield Premium Breakdown
          </h3>
          <div className="text-center mb-4">
            <div className="text-lg font-mono text-gray-300 space-y-2">
              <div>
                <span className="text-green-400 font-bold">
                  Conservative 5-8%
                </span>{" "}
                =
              </div>
              <div className="text-sm space-y-1 mt-2">
                <div>
                  <span className="text-blue-300">Risk-Free Rate (4%)</span>
                </div>
                <div>
                  +{" "}
                  <span className="text-purple-300">
                    Smart Contract Premium (1-2%)
                  </span>
                </div>
                <div>
                  +{" "}
                  <span className="text-amber-300">
                    No Middleman Cut (0.5-1%)
                  </span>
                </div>
                <div>
                  +{" "}
                  <span className="text-green-300">
                    Market Inefficiency (0.5-1%)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-blue-400 flex-shrink-0">•</span>
              <span>
                <strong className="text-blue-300">Risk-Free Rate:</strong> Fed
                funds baseline
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 flex-shrink-0">•</span>
              <span>
                <strong className="text-purple-300">
                  Smart Contract Premium:
                </strong>{" "}
                Uninsured code risk vs FDIC credit risk
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 flex-shrink-0">•</span>
              <span>
                <strong className="text-amber-300">No Middleman:</strong> Banks
                keep 40% spread; DeFi protocols take 5-10%
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 flex-shrink-0">•</span>
              <span>
                <strong className="text-green-300">Market Inefficiency:</strong>{" "}
                Smaller markets ($50B vs $6T) = arbitrage opportunities
              </span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-green-500/30">
            <p className="text-xs text-gray-400 text-center italic">
              Protocol subsidies may add 1-3% temporary boost
            </p>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
