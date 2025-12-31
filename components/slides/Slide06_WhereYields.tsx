"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";

export default function Slide4_75WhereYields() {
  return (
    <Slide
      id={6}
      background="bg-gradient-to-br from-black via-blue-950/20 to-black"
    >
      <SlideContent>
        <Title size="lg" className="mb-4 md:mb-6 text-center">
          WHERE DEFI YIELDS COME FROM
        </Title>
        <Subtitle
          size="md"
          className="mb-4 md:mb-6 text-center text-sm md:text-base leading-tight"
        >
          Transparent, measurable risk premiums compensating for smart contract
          risk, crypto volatility, and regulatory uncertainty
        </Subtitle>

        {/* YIELD SOURCE TABLE */}
        <div className="max-w-6xl mx-auto mb-6 md:mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-blue-500">
                  <th className="p-2 md:p-3 text-left text-gray-400 font-bold">
                    Yield Source
                  </th>
                  <th className="p-2 md:p-3 text-left text-gray-400 font-bold">
                    Mechanics
                  </th>
                  <th className="p-2 md:p-3 text-left text-gray-400 font-bold">
                    Stability / Risk
                  </th>
                  <th className="p-2 md:p-3 text-left text-gray-400 font-bold">
                    Tier Usage
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700">
                  <td className="p-2 md:p-3 text-blue-400 font-semibold">
                    Borrowing Demand
                  </td>
                  <td className="p-2 md:p-3 text-xs">
                    Traders borrow USDC/USDT for leverage or arbitrage
                  </td>
                  <td className="p-2 md:p-3 text-xs">
                    Variable (spikes in volatility), high demand can temporarily
                    reduce available liquidity
                  </td>
                  <td className="p-2 md:p-3 text-xs">
                    <span className="text-green-400 font-semibold">
                      Core driver all tiers
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-700 bg-gray-900/30">
                  <td className="p-2 md:p-3 text-purple-400 font-semibold">
                    Protocol Incentives
                  </td>
                  <td className="p-2 md:p-3 text-xs">
                    Token distributions (AAVE, CRV, MORPHO)
                  </td>
                  <td className="p-2 md:p-3 text-xs text-amber-400">
                    Temporary, volatile, dilution risk — can end abruptly
                  </td>
                  <td className="p-2 md:p-3 text-xs">
                    <span className="text-purple-400">
                      heavier in Balanced/Aggressive
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-2 md:p-3 text-amber-400 font-semibold">
                    Trading Fees
                  </td>
                  <td className="p-2 md:p-3 text-xs">
                    Fee revenue from providing liquidity to trading pools
                  </td>
                  <td className="p-2 md:p-3 text-xs text-green-400">
                    Most stable, price risk minimized with stablecoin pools (all
                    assets ~$1)
                  </td>
                  <td className="p-2 md:p-3 text-xs">
                    Optional for Balanced/Aggressive,{" "}
                    <span className="text-red-400">excluded</span> from
                    Conservative
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
            <p className="text-xs md:text-sm text-center text-blue-300 leading-tight">
              <strong>Conservative vault:</strong> Sustainable sources.
              Balanced/Aggressive add incentive exposure = higher risk/reward.
            </p>
          </div>
        </div>

        {/* THREE YIELD SOURCES - HORIZONTAL CARDS */}
        <div className="space-y-3 mb-6 md:mb-8 max-w-6xl mx-auto">
          {/* 1. BORROWING DEMAND */}
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-3 md:p-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-500/20 border-2 border-blue-500">
                  <span className="text-xl md:text-2xl font-bold text-blue-400">
                    1
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-base md:text-lg font-bold">
                    Borrowing Demand
                  </h3>
                  <span className="text-xs text-gray-400">
                    (50-70% of yield)
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-gray-300 space-y-1 leading-tight">
                      <div>
                        • Short cryptocurrencies (borrow USDC, sell BTC, profit
                        when BTC falls)
                      </div>
                      <div>
                        • Leverage long positions • Arbitrage opportunities •
                        Market-making
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-2 bg-blue-900/30 rounded border border-blue-700/50">
                      <div className="text-xs text-gray-300 leading-tight">
                        <span className="font-semibold text-blue-400">
                          Key:
                        </span>{" "}
                        Higher volatility = higher yields. March 2020: Aave
                        8-12%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. PROTOCOL TOKEN INCENTIVES */}
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-3 md:p-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-purple-500/20 border-2 border-purple-500">
                  <span className="text-xl md:text-2xl font-bold text-purple-400">
                    2
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-base md:text-lg font-bold">
                    Protocol Token Incentives
                  </h3>
                  <span className="text-xs text-gray-400">
                    (avg 20-40% contribution)
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-gray-300 space-y-1 leading-tight">
                      <div>
                        • Aave distributes AAVE tokens to lenders (governance
                        rewards)
                      </div>
                      <div>
                        • Curve distributes CRV • Morpho distributes MORPHO
                      </div>
                      <div className="text-purple-400 font-semibold mt-2">
                        • Supplemental boost to base borrowing yields
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-2 bg-purple-900/30 rounded border border-purple-700/50">
                      <div className="text-xs text-gray-300 leading-tight">
                        <span className="font-semibold text-purple-400">
                          Key:
                        </span>{" "}
                        Even without incentives, core borrowing yields (50-70%)
                        still exceed TradFi.{" "}
                        <span className="text-amber-400">
                          Protocol tokens have dilution risk.
                        </span>{" "}
                        2021 CRV: 8-15% yield, but token fell 90%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. TRADING FEES */}
          <div className="bg-gradient-to-r from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-3 md:p-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-500/20 border-2 border-amber-500">
                  <span className="text-xl md:text-2xl font-bold text-amber-400">
                    3
                  </span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-base md:text-lg font-bold">
                    Trading Fees
                  </h3>
                  <span className="text-xs text-gray-400">
                    (10-30% of yield)
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <div className="text-xs text-gray-300 space-y-1 leading-tight">
                      <div>• Curve 3Pool generates $47M daily volume</div>
                      <div>
                        • 0.04% fee = $18.8K daily for liquidity providers •
                        24/7 global markets
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-2 bg-amber-900/30 rounded border border-amber-700/50">
                      <div className="text-xs text-gray-300 leading-tight">
                        <span className="font-semibold text-amber-400">
                          Key:
                        </span>{" "}
                        Unlike TradFi (9:30am-4pm ET), DeFi never closes →
                        continuous yield generation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HONEST COMPARISON: DEFI VS TRADFI YIELDS */}
        <div className="max-w-6xl mx-auto mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-bold text-center mb-4 text-white">
            DeFi vs TradFi Yields: The Honest Picture
          </h3>
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-2 border-slate-600/50 rounded-xl p-4 md:p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-500">
                    <th className="text-left py-2 px-2 md:px-3 font-bold text-white">
                      Market Environment
                    </th>
                    <th className="text-left py-2 px-2 md:px-3 font-bold text-white">
                      TradFi Yields
                    </th>
                    <th className="text-left py-2 px-2 md:px-3 font-bold text-white">
                      DeFi Yields
                    </th>
                    <th className="text-left py-2 px-2 md:px-3 font-bold text-white">
                      Winner & Why
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-slate-600">
                    <td className="py-2 px-2 md:px-3">Fed Easing (2020)</td>
                    <td className="py-2 px-2 md:px-3 text-xs text-red-400">
                      MMAs: 0.06%
                      <br />
                      Bonds: 1-2%
                    </td>
                    <td className="py-2 px-2 md:px-3 text-green-400 font-semibold">
                      5-12%
                    </td>
                    <td className="py-2 px-2 md:px-3 text-xs">
                      <span className="text-green-400 font-semibold">
                        DeFi wins.
                      </span>{" "}
                      Crypto bull + leverage demand
                    </td>
                  </tr>
                  <tr className="border-b border-slate-600 bg-slate-900/50">
                    <td className="py-2 px-2 md:px-3">Fed Hiking (2022)</td>
                    <td className="py-2 px-2 md:px-3 text-green-400 text-xs font-semibold">
                      MMAs: 4-5%
                      <br />
                      Bonds: 4-6%
                    </td>
                    <td className="py-2 px-2 md:px-3 text-red-400">2-8%</td>
                    <td className="py-2 px-2 md:px-3 text-xs">
                      <span className="text-red-400 font-semibold">
                        TradFi wins.
                      </span>{" "}
                      Crypto winter, liquidity crunch
                    </td>
                  </tr>
                  <tr className="border-b border-slate-600">
                    <td className="py-2 px-2 md:px-3">Crypto Bull (2021)</td>
                    <td className="py-2 px-2 md:px-3 text-xs text-red-400">
                      MMAs: 0.1%
                      <br />
                      Bonds: 1-3%
                    </td>
                    <td className="py-2 px-2 md:px-3 text-green-400 font-semibold">
                      8-20%
                    </td>
                    <td className="py-2 px-2 md:px-3 text-xs">
                      <span className="text-green-400 font-semibold">
                        DeFi wins big.
                      </span>{" "}
                      Extreme leverage demand
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 md:px-3">Stable (2024-25)</td>
                    <td className="py-2 px-2 md:px-3 text-xs">
                      MMAs: 4.5%
                      <br />
                      Bonds: 4-6%
                    </td>
                    <td className="py-2 px-2 md:px-3 text-blue-400 font-semibold">
                      5-10%
                    </td>
                    <td className="py-2 px-2 md:px-3 text-xs">
                      <span className="text-blue-400 font-semibold">
                        DeFi premium.
                      </span>{" "}
                      Smart contract risk compensation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-600">
              <p className="text-center text-sm md:text-base font-bold text-blue-400 mb-2">
                DeFi offers different correlation, not "always better"
              </p>
              <p className="text-center text-xs md:text-sm text-gray-300 leading-tight">
                DeFi tracks crypto conditions (volatility, leverage, protocol
                growth) — not Fed policy. Creates diversification + new risks.
              </p>
            </div>
          </div>
        </div>

        {/* WHY DEFI YIELDS ARE HIGHER */}
        <div className="max-w-6xl mx-auto mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-bold text-center mb-4 text-white">
            Why DeFi Yields Are Higher (When They Are)
          </h3>
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-4 md:p-6">
            <p className="text-center text-sm md:text-base text-amber-300 mb-4 leading-tight">
              DeFi yields compensate for measurable risks TradFi doesn't have:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-3">
                <div className="font-bold text-amber-400 mb-2">
                  Smart Contract Risk
                </div>
                <div className="text-gray-300 leading-tight">
                  Code bugs, exploits, oracle failures. No FDIC, no bailouts.
                </div>
              </div>
              <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-3">
                <div className="font-bold text-amber-400 mb-2">
                  Crypto Volatility
                </div>
                <div className="text-gray-300 leading-tight">
                  Stablecoin lending exposed to market shocks (price deviations
                  from $1, contagion, liquidity crises).
                </div>
              </div>
              <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-3">
                <div className="font-bold text-amber-400 mb-2">
                  Regulatory Uncertainty
                </div>
                <div className="text-gray-300 leading-tight">
                  Sudden regulatory action possible. No established legal
                  framework.{" "}
                  <span className="text-blue-400 italic">
                    (see Appendix: Why Now - regulatory clarity emerging)
                  </span>
                </div>
              </div>
              <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-3">
                <div className="font-bold text-amber-400 mb-2">
                  Protocol Token Dilution
                </div>
                <div className="text-gray-300 leading-tight">
                  Governance tokens (AAVE, CRV, MORPHO) can lose 50-90% value —
                  turning 8% APY into net loss.{" "}
                  <span className="text-blue-400 italic">
                    Note: This applies to protocol tokens used as incentives,
                    not to stablecoins which maintain $1 peg.
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-amber-900/30 rounded-lg border border-amber-700/50">
              <p className="text-center text-xs md:text-sm text-amber-300 leading-tight">
                <strong>Bottom line:</strong> DeFi yields = risk premium.
                Institutions accept for: (1) TradFi diversification, (2) higher
                returns, (3) full transparency.
              </p>
            </div>
          </div>
        </div>

        {/* WHEN DEFI YIELDS RISE VS FALL */}
        <div className="max-w-6xl mx-auto mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-bold text-center mb-4 text-white">
            When DeFi Yields Rise vs Fall
          </h3>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-xl p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* YIELDS RISE */}
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-base font-bold text-green-400 mb-3 text-center">
                  Yields Rise When:
                </h4>
                <div className="space-y-2 text-xs text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">↑</span>
                    <span>
                      <strong>Volatility spikes:</strong> Traders need leverage,
                      borrow more USDC
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">↑</span>
                    <span>
                      <strong>Crypto bull markets:</strong> High demand for
                      leverage longs + arbitrage
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">↑</span>
                    <span>
                      <strong>Liquidity crunches:</strong> When &gt;90% of
                      available funds are borrowed, rates spike (supply/demand)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">↑</span>
                    <span>
                      <strong>New protocol launches:</strong> Incentive programs
                      boost yields temporarily
                    </span>
                  </div>
                </div>
              </div>

              {/* YIELDS FALL */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <h4 className="text-base font-bold text-red-400 mb-3 text-center">
                  Yields Can Fall When:
                </h4>
                <div className="space-y-2 text-xs text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">↓</span>
                    <span>
                      <strong>Lower volatility periods:</strong> Reduced
                      leverage demand in calmer market conditions
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">↓</span>
                    <span>
                      <strong>Incentive programs end:</strong> Token
                      distributions stop or taper off
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">↓</span>
                    <span>
                      <strong>Capital oversupply:</strong> Too much capital
                      chasing same yields (drives rates down)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 flex-shrink-0">↓</span>
                    <span>
                      <strong>Market shocks:</strong> Protocol hacks, stablecoin
                      failures → risk aversion, capital withdrawal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* YIELD SUSTAINABILITY DISCLOSURE */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-2 border-green-500/70 rounded-xl p-4 md:p-6 shadow-2xl">
            <h3 className="text-lg md:text-2xl font-bold text-center mb-4 text-white">
              Yield Sustainability: Our Approach
            </h3>
            <div className="mb-5 p-4 bg-green-900/30 border-2 border-green-500/50 rounded-lg">
              <p className="text-sm md:text-base text-center text-green-300 font-semibold leading-relaxed">
                Our multi-tier strategy systematically addresses each identified
                risk through diversification, protocol selection, and dynamic
                allocation — transforming theoretical concerns into managed
                exposures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 text-xs">
              <div className="bg-blue-900/20 border-2 border-blue-500/50 rounded-lg p-4">
                <div className="font-bold text-blue-400 mb-3 text-base">
                  Conservative Vault
                </div>
                <div className="text-gray-300 space-y-2 leading-tight">
                  <div>
                    • <strong>70%+</strong> from sustainable borrowing demand
                  </div>
                  <div>
                    • <strong>20%</strong> from battle-tested lending protocols
                    (Aave, Compound)
                  </div>
                  <div>
                    • <strong>10%</strong> from selective, low-risk incentives
                  </div>
                  <div className="pt-2 mt-2 border-t border-blue-500/30">
                    <span className="text-blue-400 font-bold">
                      Risk Mitigation:
                    </span>
                  </div>
                  <div>→ Zero leverage = no liquidation risk</div>
                  <div>→ Borrowing demand persists across cycles</div>
                  <div>
                    → Multi-protocol diversification limits smart contract
                    exposure
                  </div>
                  <div className="text-blue-300 font-semibold mt-3 pt-2 border-t border-blue-500/30">
                    Result: Designed to maintain yields even in adverse
                    conditions
                  </div>
                </div>
              </div>
              <div className="bg-purple-900/20 border-2 border-purple-500/50 rounded-lg p-4">
                <div className="font-bold text-purple-400 mb-3 text-base">
                  Balanced Vault
                </div>
                <div className="text-gray-300 space-y-2 leading-tight">
                  <div>
                    • <strong>50%</strong> borrowing + <strong>30%</strong>{" "}
                    incentives + <strong>20%</strong> trading fees
                  </div>
                  <div>• Selective leverage (max 1.5×)</div>
                  <div>• Automatic risk reduction when yields drop</div>
                  <div className="pt-2 mt-2 border-t border-purple-500/30">
                    <span className="text-purple-400 font-bold">
                      Risk Mitigation:
                    </span>
                  </div>
                  <div>→ Moderate leverage with wide safety margins</div>
                  <div>→ Incentive exposure capped at 30%</div>
                  <div>→ Dynamic rebalancing reduces risk automatically</div>
                  <div>
                    → Stablecoin pool trading minimizes impermanent loss
                  </div>
                  <div className="text-purple-300 font-semibold mt-3 pt-2 border-t border-purple-500/30">
                    Result: Enhanced returns with managed downside
                  </div>
                </div>
              </div>
              <div className="bg-amber-900/20 border-2 border-amber-500/50 rounded-lg p-4">
                <div className="font-bold text-amber-400 mb-3 text-base">
                  Aggressive Vault
                </div>
                <div className="text-gray-300 space-y-2 leading-tight">
                  <div>
                    • <strong>40%</strong> borrowing + <strong>40%</strong>{" "}
                    incentives + <strong>20%</strong> trading fees
                  </div>
                  <div>• Max leverage 2× (still below protocol max)</div>
                  <div>• Yields can swing 5-25% based on market</div>
                  <div className="pt-2 mt-2 border-t border-amber-500/30">
                    <span className="text-amber-400 font-bold">
                      Risk Mitigation:
                    </span>
                  </div>
                  <div>→ Leverage limited to 2× vs. protocol max of 10×</div>
                  <div>→ Maintains 40% core borrowing foundation</div>
                  <div>→ Conservative within DeFi-native standards</div>
                  <div>→ Active monitoring and rebalancing</div>
                  <div className="text-amber-300 font-semibold mt-3 pt-2 border-t border-amber-500/30">
                    Result: Maximizes opportunity while staying disciplined
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4 text-xs">
              <div className="bg-green-900/20 border border-green-500/40 rounded-lg p-3">
                <div className="font-bold text-green-400 mb-2">
                  Smart Contract Risk
                </div>
                <div className="text-gray-300 leading-tight">
                  <strong>Addressed:</strong> Multi-protocol diversification, 5+
                  year track records, $10B+ TVL protocols only
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-500/40 rounded-lg p-3">
                <div className="font-bold text-green-400 mb-2">
                  Token Dilution
                </div>
                <div className="text-gray-300 leading-tight">
                  <strong>Addressed:</strong> Conservative vault limits exposure
                  to 10%, yields remain positive even if incentives disappear
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-500/40 rounded-lg p-3">
                <div className="font-bold text-green-400 mb-2">
                  Regulatory Risk
                </div>
                <div className="text-gray-300 leading-tight">
                  <strong>Addressed:</strong> Stablecoin-only, compliance-ready
                  infrastructure, regulatory tailwinds emerging (see Why Now)
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-500/40 rounded-lg p-3">
                <div className="font-bold text-green-400 mb-2">
                  Crypto Volatility
                </div>
                <div className="text-gray-300 leading-tight">
                  <strong>Addressed:</strong> Stablecoin lending only, no
                  directional crypto exposure, volatility increases yields
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-green-900/40 to-blue-900/40 rounded-lg border-2 border-green-500/50">
              <p className="text-xs md:text-sm text-center text-white leading-relaxed">
                <strong className="text-green-400 text-base">
                  Full Transparency:
                </strong>{" "}
                Monthly yield composition reports show exact source breakdown.
                When {">"}30% comes from incentives, it's disclosed prominently.
                Historical ranges reflect 2020-2024 real data across complete
                market cycles, not cherry-picked best-case scenarios.{" "}
                <strong className="text-blue-400">
                  Compare this structured approach to traditional DeFi's ad-hoc
                  yield chasing.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
