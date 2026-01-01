"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";
import Icon from "@/components/Icon";

export default function Slide04_Solution() {
  return (
    <Slide
      id={4}
      background="bg-gradient-to-br from-black via-blue-950/20 to-black"
    >
      <SlideContent>
        <Title size="lg" className="mb-8 md:mb-12 text-center px-4">
          INTRODUCING MONOLITH
        </Title>
        <Subtitle
          size="md"
          className="mb-6 md:mb-8 text-center text-blue-300 px-4"
        >
          Institutional yield infrastructure
        </Subtitle>

        <div className="max-w-4xl mx-auto mb-8 md:mb-12 p-4 md:p-6 bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-lg">
          <p className="text-center text-gray-300 text-sm md:text-base mb-3">
            A <strong className="text-white">cash-plus alternative</strong> for
            institutional treasuries
          </p>
          <p className="text-center text-xs md:text-sm text-blue-400 font-semibold">
            We don't create yields—we provide secure, compliant access to
            existing opportunities
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-8 md:mb-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <Icon
                name="shield"
                size={28}
                className="text-green-400 mx-auto mb-2"
              />
              <div className="text-sm text-gray-300 leading-tight">
                Deploy stablecoins into vetted strategies
              </div>
            </div>
            <div className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <Icon
                name="check"
                size={28}
                className="text-green-400 mx-auto mb-2"
              />
              <div className="text-sm text-gray-300 leading-tight">
                Keep full control with transparent risk
              </div>
            </div>
            <div className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <Icon
                name="trending"
                size={28}
                className="text-green-400 mx-auto mb-2"
              />
              <div className="text-sm text-gray-300 leading-tight">
                Earn 5–22% on idle capital
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Choose your risk tier
              </div>
            </div>
          </div>
        </div>

        {/* WHERE DEFI YIELDS COME FROM */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-4 text-white">
            Where DeFi Yields Come From
          </h3>
          <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
            Real economic activity, not speculation—yields exist with or without
            token incentives
          </p>
          <ThreeColumnGrid className="gap-6">
            {/* BORROWER INTEREST */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6">
              <div className="text-center mb-4">
                <Icon
                  name="dollar"
                  size={32}
                  className="text-blue-400 mx-auto mb-3"
                />
                <div className="inline-block px-3 py-1 bg-green-500/20 rounded-full">
                  <span className="text-xs font-semibold text-green-400">
                    CORE YIELD
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-white mb-3 text-center">
                Borrower Interest
              </h4>
              <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                Traders & institutions paying to leverage positions without
                selling assets
              </p>
              <div className="text-xs text-gray-400 bg-blue-900/20 rounded p-3 mb-3">
                <strong className="text-blue-300">TradFi Equivalent:</strong>{" "}
                Prime brokerage margin lending (8-12%)
              </div>
              <div className="text-xs text-gray-300 bg-gray-800/50 rounded p-2">
                Currently generates 4-7% on stablecoins in over-collateralized
                protocols
              </div>
            </div>

            {/* TRADING FEES */}
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6">
              <div className="text-center mb-4">
                <Icon
                  name="trending"
                  size={32}
                  className="text-amber-400 mx-auto mb-3"
                />
                <div className="inline-block px-3 py-1 bg-green-500/20 rounded-full">
                  <span className="text-xs font-semibold text-green-400">
                    CORE YIELD
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-white mb-3 text-center">
                Liquidity Provider Fees
              </h4>
              <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                Earning spreads by providing liquidity for stablecoin swaps
                (USDC↔USDT↔DAI)
              </p>
              <div className="text-xs text-gray-400 bg-amber-900/20 rounded p-3 mb-3">
                <strong className="text-amber-300">TradFi Equivalent:</strong>{" "}
                Market maker spreads (Citadel, Jump, etc.)
              </div>
              <div className="text-xs text-gray-300 bg-gray-800/50 rounded p-2">
                Low-risk stablecoin pairs generate 1-3% from trading volume
                alone
              </div>
            </div>

            {/* PROTOCOL INCENTIVES */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6">
              <div className="text-center mb-4">
                <Icon
                  name="trending"
                  size={32}
                  className="text-purple-400 mx-auto mb-3"
                />
                <div className="inline-block px-3 py-1 bg-amber-500/20 rounded-full">
                  <span className="text-xs font-semibold text-amber-400">
                    BONUS YIELD
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-white mb-3 text-center">
                Protocol Incentives (Optional)
              </h4>
              <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                Token rewards from protocols competing for liquidity—the cherry
                on top
              </p>
              <div className="text-xs text-gray-400 bg-purple-900/20 rounded p-3 mb-3">
                <strong className="text-purple-300">TradFi Equivalent:</strong>{" "}
                Bank signup bonuses & promotional APYs
              </div>
              <div className="text-xs text-gray-300 bg-gray-800/50 rounded p-2">
                Adds 1-5% temporarily, but not the foundation of our strategy
              </div>
            </div>
          </ThreeColumnGrid>

          <div className="mt-8 max-w-3xl mx-auto p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl">
            <p className="text-center text-white font-semibold mb-2">
              Conservative vaults target 5-8% from core yields alone
            </p>
            <p className="text-center text-sm text-gray-400">
              Protocol incentives are upside, not the business model—yields
              remain attractive even when they expire
            </p>
          </div>
        </div>

        {/* CONSERVATIVE VAULT VS TRADFI COMPARISON */}
        <div className="max-w-5xl mx-auto mb-16 p-8 bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-blue-500/50 rounded-xl">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            Conservative Vault vs Traditional Money Markets
          </h3>
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-blue-500/50">
                  <th className="sticky left-0 bg-gray-900 z-10 text-left py-3 px-4 font-bold text-gray-300">
                    Dimension
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
                    Yield
                  </td>
                  <td className="py-3 px-4 text-gray-300">4.5%</td>
                  <td className="py-3 px-4 bg-green-500/10 text-white font-semibold">
                    5-8%
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Risk Type
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Credit risk + FDIC ($250K limit)
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Smart contract + Nexus Mutual (capped)
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Transparency
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Quarterly bank reports
                  </td>
                  <td className="py-3 px-4 bg-green-500/10 text-white">
                    Real-time on-chain data
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Liquidity
                  </td>
                  <td className="py-3 px-4 bg-amber-500/10 text-white">
                    Same-day ACH
                  </td>
                  <td className="py-3 px-4 text-gray-300">48-72 hours</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Custody
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    Bank custody (rehypothecation risk)
                  </td>
                  <td className="py-3 px-4 bg-green-500/10 text-white">
                    Non-custodial (you hold keys)
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="sticky left-0 bg-gray-900 z-10 py-3 px-4 font-semibold text-gray-200">
                    Operating Hours
                  </td>
                  <td className="py-3 px-4 text-gray-300">9:30am-4pm M-F</td>
                  <td className="py-3 px-4 bg-green-500/10 text-white">
                    24/7/365 global
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan={3}
                    className="py-4 px-4 bg-blue-500/20 border-t-2 border-blue-500/50 font-semibold italic text-center text-gray-200"
                  >
                    The 0.5-3.5% yield premium compensates for swapping credit
                    risk to smart contract risk
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* THREE CUSTOMER ARCHETYPES */}
        <div className="max-w-5xl mx-auto mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Three Segment Models
          </h3>
          <p className="text-gray-400 text-base md:text-lg">
            Same infrastructure, different use options
          </p>
        </div>

        <ThreeColumnGrid className="gap-8 mb-16">
          {/* CORPORATE TREASURERS */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8">
            <div className="text-center mb-6">
              <Icon
                name="user"
                size={40}
                className="text-blue-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-bold">Corporate Treasurers</h3>
              <div className="text-xs text-gray-400 mt-2">
                Direct to Enterprise
              </div>
            </div>
            <div className="mb-6 p-4 bg-blue-900/30 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-300">5-8%</div>
              <div className="text-sm text-gray-400 mt-1">NET APY</div>
              <div className="text-xs text-gray-500 mt-1">
                (Conservative • 8-12% Balanced • 12-22% Growth)
              </div>
            </div>
            <p className="text-white text-center mb-3 font-semibold leading-relaxed">
              Turn idle treasury into yield-generating assets
            </p>
            <p className="text-gray-400 text-center text-sm mb-4">
              White-label dashboard • Real-time reporting • Full custody control
            </p>
            <div className="mt-4 bg-gray-800/50 rounded p-3 border border-gray-700">
              <div className="text-xs text-gray-400 text-center">
                <span className="text-white font-semibold">Value:</span> $5-50M
                earning 5-8%
              </div>
              <div className="text-xs text-blue-300 text-center mt-1">
                = $250K-$4M annually vs 0% today
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-400 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>Go live in 2 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>Compliance & reporting built-in</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>Dedicated support team</span>
              </div>
            </div>
          </div>

          {/* FINTECH PLATFORMS */}
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-8">
            <div className="text-center mb-6">
              <Icon
                name="mobile"
                size={40}
                className="text-purple-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-bold">Fintech Platforms</h3>
              <div className="text-xs text-gray-400 mt-2">B2B Partnership</div>
            </div>
            <div className="mb-6 p-4 bg-purple-900/30 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-300">2 Weeks</div>
              <div className="text-sm text-gray-400 mt-1">TO LAUNCH</div>
              <div className="text-xs text-gray-500 mt-1">
                (vs 12-36 months building in-house)
              </div>
            </div>
            <p className="text-white text-center mb-3 font-semibold leading-relaxed">
              Add yield products without the infrastructure
            </p>
            <p className="text-gray-400 text-center text-sm mb-4">
              SDK integration • API • White-label UI • Multi-tenant ready
            </p>
            <div className="mt-4 bg-gray-800/50 rounded p-3 border border-gray-700">
              <div className="text-xs text-gray-400 text-center">
                <span className="text-white font-semibold">Savings:</span>{" "}
                $500K+ dev costs avoided
              </div>
              <div className="text-xs text-purple-300 text-center mt-1">
                + new revenue stream from day one
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-400 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                <span>Revenue share: earn on customer AUM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                <span>Compliance & KYC handled</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                <span>White-label everything</span>
              </div>
            </div>
          </div>

          {/* REGIONAL BANKS */}
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-8">
            <div className="text-center mb-6">
              <Icon
                name="building"
                size={40}
                className="text-amber-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-bold">Regional Banks</h3>
              <div className="text-xs text-gray-400 mt-2">
                Enterprise Service
              </div>
            </div>
            <div className="mb-6 p-4 bg-amber-900/30 rounded-lg text-center">
              <div className="text-3xl font-bold text-amber-300">$50M+</div>
              <div className="text-sm text-gray-400 mt-1">WHITE GLOVE</div>
              <div className="text-xs text-gray-500 mt-1">
                (Custom strategies & dedicated team)
              </div>
            </div>
            <p className="text-white text-center mb-3 font-semibold leading-relaxed">
              Offer stablecoin yields to your customers
            </p>
            <p className="text-gray-400 text-center text-sm mb-4">
              Complete backend • Your branding • Regulatory support
            </p>
            <div className="mt-4 bg-gray-800/50 rounded p-3 border border-gray-700">
              <div className="text-xs text-gray-400 text-center">
                <span className="text-white font-semibold">Value:</span> Launch
                in weeks, not years
              </div>
              <div className="text-xs text-amber-300 text-center mt-1">
                No crypto infrastructure build required
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-400 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>Bespoke risk tier configurations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>Dedicated account managers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>24/7 monitoring & reporting</span>
              </div>
            </div>
          </div>
        </ThreeColumnGrid>

        {/* THE HONEST TRADE-OFF */}
        <div className="max-w-5xl mx-auto mb-16 p-8 bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-blue-500/50 rounded-xl">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            The Honest Trade-Off
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WHAT YOU SACRIFICE */}
            <div className="bg-red-500/5 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-400 mb-4 text-center">
                What You Sacrifice
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon
                    name="x"
                    size={20}
                    className="text-red-400 flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-gray-300">
                    FDIC Insurance ($250K limit)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="x"
                    size={20}
                    className="text-red-400 flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-gray-300">
                    Century-old infrastructure
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="x"
                    size={20}
                    className="text-red-400 flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-gray-300">
                    Same-day withdrawal
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="x"
                    size={20}
                    className="text-red-400 flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-gray-300">
                    Established regulations
                  </div>
                </div>
              </div>
            </div>

            {/* WHAT YOU GAIN */}
            <div className="bg-green-500/5 rounded-lg p-6">
              <h4 className="text-lg font-bold text-green-400 mb-4 text-center">
                What You Gain
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon
                    name="check"
                    size={20}
                    className="text-green-400 flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-gray-300">
                    0.5-3.5% yield premium
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="check"
                    size={20}
                    className="text-green-400 flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-gray-300">
                    Real-time transparency
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="check"
                    size={20}
                    className="text-green-400 flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-gray-300">
                    No middleman taking 40% cut
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="check"
                    size={20}
                    className="text-green-400 flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-gray-300">
                    24/7/365 global markets
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="check"
                    size={20}
                    className="text-green-400 flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm text-gray-300">
                    Diversification from bonds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KEY VALUE PROP */}
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl">
          <p className="text-white text-xl font-semibold text-center mb-4">
            ONE PLATFORM. THREE USE OPTIONS.
          </p>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-green-400 font-bold mb-2">
                White-Label Dashboard
              </div>
              <p className="text-sm text-gray-400">
                Institutions manage their own yield
              </p>
            </div>
            <div>
              <div className="text-green-400 font-bold mb-2">Mobile SDK</div>
              <p className="text-sm text-gray-400">
                Embed in their own app for users
              </p>
            </div>
            <div>
              <div className="text-green-400 font-bold mb-2">
                Managed Service
              </div>
              <p className="text-sm text-gray-400">
                We handle everything for you
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
