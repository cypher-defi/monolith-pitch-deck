"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"
import Icon from "@/components/Icon"

export default function Slide05_ThreeTierVaults() {
  return (
    <Slide
      id={5}
      background='bg-gradient-to-b from-black via-slate-950 to-black'
    >
      <SlideContent>
        <div className='mb-8 md:mb-12'>
          <Title
            size='lg'
            className='mb-3 md:mb-4 text-center px-4 bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent'
          >
            THREE INVESTMENT TIERS
          </Title>
          <Subtitle
            size='md'
            className='text-center px-4 text-sm md:text-base text-gray-300'
          >
            Choose your risk-return profile — from conservative to aggressive
          </Subtitle>
        </div>

        {/* THREE VAULT TIERS */}
        <ThreeColumnGrid className='gap-4 md:gap-6 mb-8 md:mb-12 px-4'>
          {/* CONSERVATIVE VAULT */}
          <div className='group bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 hover:border-blue-400 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1'>
            <div className='text-center mb-4 md:mb-5'>
              <div className='inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-500/20 rounded-full mb-3 group-hover:bg-blue-500/30 transition-colors'>
                <Icon
                  name='shield'
                  size={40}
                  className='text-blue-400 group-hover:scale-110 transition-transform'
                />
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-white'>
                Conservative
              </h3>
              <div className='mt-2 p-3 bg-gradient-to-br from-blue-900/40 to-blue-900/20 rounded-xl border border-blue-500/30'>
                <div className='text-3xl md:text-4xl font-bold text-blue-300 mb-1'>
                  5-8%
                </div>
                <div className='text-xs font-medium text-blue-400 uppercase tracking-wide'>
                  Net Yield
                </div>
              </div>
            </div>

            <div className='mb-4 md:mb-5'>
              <div className='space-y-2 text-xs md:text-sm text-gray-200'>
                <div className='flex items-start gap-2 p-2 rounded-lg hover:bg-blue-500/10 transition-colors'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0 font-bold'>
                    ✓
                  </span>
                  <span className='leading-relaxed'>
                    <strong className='text-white'>Zero leverage</strong>,
                    proven platforms only
                  </span>
                </div>
                <div className='flex items-start gap-2 p-2 rounded-lg hover:bg-blue-500/10 transition-colors'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0 font-bold'>
                    ✓
                  </span>
                  <span className='leading-relaxed'>
                    <strong className='text-white'>48h liquidity</strong> (vs
                    weeks for bonds)
                  </span>
                </div>
                <div className='flex items-start gap-2 p-2 rounded-lg hover:bg-blue-500/10 transition-colors'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0 font-bold'>
                    ✓
                  </span>
                  <span className='leading-relaxed'>
                    All loans backed (like secured lending)
                  </span>
                </div>
              </div>
            </div>

            <div className='p-3 md:p-4 bg-gradient-to-br from-blue-900/40 to-blue-900/20 rounded-xl text-center border-2 border-blue-500/30'>
              <div className='text-xs font-bold text-blue-300 uppercase tracking-wide mb-1'>
                Ideal For:
              </div>
              <div className='text-xs md:text-sm text-gray-300 font-medium leading-snug'>
                Corporate treasuries, banks
              </div>
            </div>
          </div>

          {/* BALANCED VAULT */}
          <div className='group bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-purple-500/5 border-2 border-purple-500/50 hover:border-purple-400 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1'>
            <div className='text-center mb-4 md:mb-5'>
              <div className='inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-purple-500/20 rounded-full mb-3 group-hover:bg-purple-500/30 transition-colors'>
                <Icon
                  name='trending'
                  size={40}
                  className='text-purple-400 group-hover:scale-110 transition-transform'
                />
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-white'>
                Balanced Vault
              </h3>
              <div className='mt-2 p-3 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-xl border border-purple-500/30'>
                <div className='text-3xl md:text-4xl font-bold text-purple-300 mb-1'>
                  8-12%
                </div>
                <div className='text-xs font-medium text-purple-400 uppercase tracking-wide'>
                  Net Yield
                </div>
              </div>
              <div className='mt-3 bg-gray-800/70 rounded-lg p-3 border-2 border-gray-700/50'>
                <div className='text-xs text-gray-300 text-center font-medium'>
                  <span className='text-white font-bold'>vs TradFi:</span> HY
                  Bonds 6-8% | CLOs 7-10%
                </div>
                <div className='text-xs text-purple-300 text-center mt-1.5 font-semibold flex items-center justify-center gap-1'>
                  <Icon
                    name='lightning'
                    size={12}
                    className='text-purple-300'
                  />
                  Better liquidity + transparency
                </div>
              </div>
            </div>

            <div className='mb-5 md:mb-6'>
              <h4 className='text-sm md:text-base font-bold text-purple-300 mb-3 uppercase tracking-wide'>
                Key Characteristics:
              </h4>
              <div className='space-y-2 text-xs md:text-sm text-gray-200'>
                <div className='flex items-start gap-2 p-2 rounded-lg hover:bg-purple-500/10 transition-colors'>
                  <span className='text-purple-400 mt-0.5 flex-shrink-0 font-bold'>
                    ✓
                  </span>
                  <span className='leading-relaxed'>
                    Max <strong className='text-white'>1.5x leverage</strong>{" "}
                    with automatic risk reduction
                  </span>
                </div>
                <div className='flex items-start gap-2 p-2 rounded-lg hover:bg-purple-500/10 transition-colors'>
                  <span className='text-purple-400 mt-0.5 flex-shrink-0 font-bold'>
                    ✓
                  </span>
                  <span className='leading-relaxed'>
                    <strong className='text-white'>Morpho, Curve, Aave</strong>{" "}
                    diversification
                  </span>
                </div>
                <div className='flex items-start gap-2 p-2 rounded-lg hover:bg-purple-500/10 transition-colors'>
                  <span className='text-purple-400 mt-0.5 flex-shrink-0 font-bold'>
                    ✓
                  </span>
                  <span className='leading-relaxed'>
                    <strong className='text-white'>72h liquidity</strong>,
                    weekly rebalancing
                  </span>
                </div>
                <div className='flex items-start gap-2 p-2 rounded-lg hover:bg-purple-500/10 transition-colors'>
                  <span className='text-purple-400 mt-0.5 flex-shrink-0 font-bold'>
                    ✓
                  </span>
                  <span className='leading-relaxed'>
                    <strong className='text-white'>
                      Collateral ratio monitoring
                    </strong>{" "}
                    + automatic exits
                  </span>
                </div>
              </div>
            </div>

            <div className='p-3 md:p-4 bg-gradient-to-br from-purple-900/40 to-purple-900/20 rounded-xl text-center border-2 border-purple-500/30'>
              <div className='text-xs font-bold text-purple-300 uppercase tracking-wide mb-1'>
                Ideal For:
              </div>
              <div className='text-xs md:text-sm text-gray-300 font-medium leading-snug'>
                Fintech platforms, crypto funds, growth treasurers
              </div>
            </div>
          </div>

          {/* AGGRESSIVE VAULT */}
          <div className='group bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-amber-500/5 border-2 border-amber-500/50 hover:border-amber-400 rounded-2xl p-4 md:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1'>
            <div className='text-center mb-4 md:mb-5'>
              <div className='inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-amber-500/20 rounded-full mb-3 group-hover:bg-amber-500/30 transition-colors'>
                <Icon
                  name='lightning'
                  size={40}
                  className='text-amber-400 group-hover:scale-110 transition-transform'
                />
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-white'>
                Aggressive Vault
              </h3>
              <div className='mt-2 p-3 bg-gradient-to-br from-amber-900/40 to-amber-900/20 rounded-xl border border-amber-500/30'>
                <div className='text-3xl md:text-4xl font-bold text-amber-300 mb-1'>
                  12-22%
                </div>
                <div className='text-xs font-medium text-amber-400 uppercase tracking-wide'>
                  Net Yield
                </div>
              </div>
              <div className='mt-3 bg-gray-800/70 rounded-lg p-2 border border-gray-700/50'>
                <div className='text-xs text-gray-300 text-center font-medium'>
                  <span className='text-white font-bold'>vs TradFi:</span>{" "}
                  Private Credit 9-15%
                </div>
                <div className='text-xs text-amber-300 text-center mt-1 font-semibold flex items-center justify-center gap-1'>
                  <Icon name='unlock' size={12} className='text-amber-300' />
                  No 3-5 year lock-ups required
                </div>
              </div>
            </div>

            <div className='mb-4 md:mb-5'>
              <h4 className='text-sm md:text-base font-bold text-amber-300 mb-2 md:mb-3 uppercase tracking-wide'>
                Key Characteristics:
              </h4>
              <div className='space-y-2 text-xs md:text-sm text-gray-200'>
                <div className='flex items-start gap-2 p-2 rounded-lg hover:bg-amber-500/10 transition-colors'>
                  <span className='text-amber-400 mt-0.5 flex-shrink-0 font-bold'>
                    ✓
                  </span>
                  <span className='leading-relaxed'>
                    Max <strong className='text-white'>2x leverage</strong> with
                    automatic risk reduction
                  </span>
                </div>
                <div className='flex items-start gap-2 p-2 rounded-lg hover:bg-amber-500/10 transition-colors'>
                  <span className='text-amber-400 mt-0.5 flex-shrink-0 font-bold'>
                    ✓
                  </span>
                  <span className='leading-relaxed'>
                    <strong className='text-white'>Morpho, Curve</strong>{" "}
                    (yield-enhanced), Convex strategies
                  </span>
                </div>
                <div className='flex items-start gap-2 p-2 rounded-lg hover:bg-amber-500/10 transition-colors'>
                  <span className='text-amber-400 mt-0.5 flex-shrink-0 font-bold'>
                    ✓
                  </span>
                  <span className='leading-relaxed'>
                    <strong className='text-white'>5-7 day liquidity</strong>,
                    active monitoring
                  </span>
                </div>
                <div className='flex items-start gap-2 p-2 rounded-lg hover:bg-amber-500/10 transition-colors'>
                  <span className='text-amber-400 mt-0.5 flex-shrink-0 font-bold'>
                    ✓
                  </span>
                  <span className='leading-relaxed'>
                    <strong className='text-white'>Position size caps</strong> +
                    emergency stop mechanisms
                  </span>
                </div>
              </div>
            </div>

            <div className='p-3 md:p-4 bg-gradient-to-br from-amber-900/40 to-amber-900/20 rounded-xl text-center border-2 border-amber-500/30'>
              <div className='text-xs font-bold text-amber-300 uppercase tracking-wide mb-1'>
                Ideal For:
              </div>
              <div className='text-xs md:text-sm text-gray-300 font-medium leading-snug'>
                Crypto hedge funds, family offices, DeFi treasuries
              </div>
            </div>
          </div>
        </ThreeColumnGrid>

        {/* HOW LEVERAGE WORKS - SIMPLE EXAMPLE */}
        <div className='max-w-6xl mx-auto mb-8 md:mb-10 px-4'>
          <div className='bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-purple-900/30 border-2 border-purple-500/40 rounded-2xl p-6 md:p-8 shadow-2xl'>
            <div className='text-center mb-6'>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-2'>
                How Leverage Works (Simple Example)
              </h3>
              <p className='text-sm md:text-base text-purple-300 italic'>
                No DeFi knowledge required
              </p>
            </div>

            <div className='bg-purple-900/40 border border-purple-500/30 rounded-xl p-4 md:p-5 mb-6'>
              <p className='text-sm md:text-base text-gray-200 text-center leading-relaxed'>
                <strong className='text-white'>Objective:</strong> Increase
                yield by scaling exposure to stable, on-chain yield —{" "}
                <strong className='text-purple-300'>
                  not by speculating on asset prices
                </strong>
                .
              </p>
            </div>

            <h4 className='text-lg md:text-xl font-bold text-purple-300 mb-4 text-center'>
              Step-by-Step Example — Balanced Tier
            </h4>

            <div className='space-y-4 mb-6'>
              {/* Step 1 */}
              <div className='bg-slate-900/50 border border-purple-500/30 rounded-xl p-4'>
                <div className='flex items-start gap-3'>
                  <div className='flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center'>
                    <span className='text-purple-300 font-bold'>1</span>
                  </div>
                  <div>
                    <h5 className='text-base font-bold text-white mb-1'>
                      Investor Deposit
                    </h5>
                    <p className='text-sm text-gray-300'>
                      An investor allocates{" "}
                      <strong className='text-white'>
                        $100,000 (stablecoins)
                      </strong>{" "}
                      into the Monolith Balanced Vault.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className='bg-slate-900/50 border border-purple-500/30 rounded-xl p-4'>
                <div className='flex items-start gap-3'>
                  <div className='flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center'>
                    <span className='text-purple-300 font-bold'>2</span>
                  </div>
                  <div className='flex-1'>
                    <h5 className='text-base font-bold text-white mb-2'>
                      Base Deployment (No Leverage Yet)
                    </h5>
                    <p className='text-sm text-gray-300 mb-2'>
                      Capital is deployed into{" "}
                      <strong className='text-white'>
                        institutional-grade DeFi yield sources
                      </strong>{" "}
                      (e.g. lending markets, stable liquidity strategies).
                    </p>
                    <div className='flex gap-4 text-xs md:text-sm'>
                      <div className='text-gray-400'>
                        Base yield:{" "}
                        <span className='text-purple-300 font-semibold'>
                          ~7%
                        </span>
                      </div>
                      <div className='text-gray-400'>
                        Annual yield:{" "}
                        <span className='text-green-400 font-semibold'>
                          $7,000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className='bg-slate-900/50 border border-purple-500/30 rounded-xl p-4'>
                <div className='flex items-start gap-3'>
                  <div className='flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center'>
                    <span className='text-purple-300 font-bold'>3</span>
                  </div>
                  <div className='flex-1'>
                    <h5 className='text-base font-bold text-white mb-2'>
                      Controlled Borrow (Leverage)
                    </h5>
                    <p className='text-sm text-gray-300 mb-2'>
                      Using the deployed capital as collateral, the vault{" "}
                      <strong className='text-white'>
                        borrows $50,000 in stablecoins
                      </strong>
                      .
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 text-xs md:text-sm'>
                      <div className='text-gray-400'>
                        Total exposure:{" "}
                        <span className='text-purple-300 font-semibold'>
                          $150,000 (~1.5×)
                        </span>
                      </div>
                      <div className='text-gray-400'>
                        Borrow cost:{" "}
                        <span className='text-red-400 font-semibold'>
                          ~4% → $2,000/year
                        </span>
                      </div>
                      <div className='text-gray-400'>
                        Leverage:{" "}
                        <span className='text-purple-300 font-semibold'>
                          capped by strict LTV limits
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className='bg-slate-900/50 border border-purple-500/30 rounded-xl p-4'>
                <div className='flex items-start gap-3'>
                  <div className='flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center'>
                    <span className='text-purple-300 font-bold'>4</span>
                  </div>
                  <div className='flex-1'>
                    <h5 className='text-base font-bold text-white mb-2'>
                      Redeploy Borrowed Capital
                    </h5>
                    <p className='text-sm text-gray-300 mb-2'>
                      The borrowed stablecoins are deployed into the{" "}
                      <strong className='text-white'>
                        same type of yield-generating strategies
                      </strong>
                      .
                    </p>
                    <div className='text-xs md:text-sm text-gray-400'>
                      Yield on borrowed capital:{" "}
                      <span className='text-green-400 font-semibold'>
                        ~7% → $3,500/year
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 - Net Outcome */}
              <div className='bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/40 rounded-xl p-4'>
                <div className='flex items-start gap-3'>
                  <div className='flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center'>
                    <span className='text-green-300 font-bold'>5</span>
                  </div>
                  <div className='flex-1'>
                    <h5 className='text-base font-bold text-white mb-3'>
                      Net Outcome
                    </h5>
                    <div className='space-y-2 text-xs md:text-sm mb-3'>
                      <div className='flex justify-between items-center'>
                        <span className='text-gray-300'>
                          Yield on original capital
                        </span>
                        <span className='text-green-400 font-semibold'>
                          +$7,000
                        </span>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-gray-300'>
                          Yield on borrowed capital
                        </span>
                        <span className='text-green-400 font-semibold'>
                          +$3,500
                        </span>
                      </div>
                      <div className='flex justify-between items-center'>
                        <span className='text-gray-300'>Borrowing cost</span>
                        <span className='text-red-400 font-semibold'>
                          −$2,000
                        </span>
                      </div>
                      <div className='border-t border-green-500/30 pt-2 flex justify-between items-center'>
                        <span className='text-white font-bold'>
                          Net annual yield
                        </span>
                        <span className='text-green-300 font-bold text-base'>
                          +$8,500
                        </span>
                      </div>
                    </div>
                    <div className='bg-green-900/40 border border-green-500/30 rounded-lg p-2 text-center'>
                      <span className='text-sm text-green-300 font-semibold'>
                        Effective yield: ~8.5% vs ~7% without leverage
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What Leverage IS and IS NOT */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
              <div className='bg-blue-900/30 border border-blue-500/30 rounded-xl p-4'>
                <h5 className='text-base font-bold text-blue-300 mb-3 flex items-center gap-2'>
                  <Icon name='check' size={18} className='text-blue-400' />
                  Leverage IS:
                </h5>
                <ul className='space-y-2 text-xs md:text-sm text-gray-300'>
                  <li className='flex items-start gap-2'>
                    <span className='text-blue-400 mt-0.5'>•</span>
                    <span>
                      Borrowing{" "}
                      <strong className='text-white'>stablecoins</strong>{" "}
                      against collateral
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-blue-400 mt-0.5'>•</span>
                    <span>
                      Scaling exposure to{" "}
                      <strong className='text-white'>
                        predictable yield spreads
                      </strong>
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-blue-400 mt-0.5'>•</span>
                    <span>
                      Actively monitored and capped by risk parameters
                    </span>
                  </li>
                </ul>
              </div>

              <div className='bg-red-900/30 border border-red-500/30 rounded-xl p-4'>
                <h5 className='text-base font-bold text-red-300 mb-3 flex items-center gap-2'>
                  <Icon name='x' size={18} className='text-red-400' />
                  Leverage IS NOT:
                </h5>
                <ul className='space-y-2 text-xs md:text-sm text-gray-300'>
                  <li className='flex items-start gap-2'>
                    <span className='text-red-400 mt-0.5'>•</span>
                    <span>Speculating on token prices</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-red-400 mt-0.5'>•</span>
                    <span>Using perpetuals or directional trading</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-red-400 mt-0.5'>•</span>
                    <span>Unlimited or recursive leverage</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Risks */}
            <div className='bg-amber-900/30 border border-amber-500/30 rounded-xl p-4 mb-6'>
              <h5 className='text-base font-bold text-amber-300 mb-3'>
                Key Risks Introduced by Leverage
              </h5>
              <div className='space-y-3 text-xs md:text-sm'>
                <div>
                  <div className='text-amber-400 font-semibold mb-1'>
                    Borrow cost risk
                  </div>
                  <div className='text-gray-300 mb-1'>
                    Stablecoin funding rates may rise
                  </div>
                  <div className='text-gray-400 text-xs'>
                    → Continuous monitoring, rebalancing, deleveraging if
                    spreads compress
                  </div>
                </div>
                <div>
                  <div className='text-amber-400 font-semibold mb-1'>
                    Effective collateral risk
                  </div>
                  <div className='text-gray-300 mb-1'>
                    Collateral requirements or haircuts may increase under
                    stress
                  </div>
                  <div className='text-gray-400 text-xs'>
                    → Conservative LTVs, diversified collateral,
                    auto-deleveraging triggers
                  </div>
                  <div className='text-gray-500 text-[10px] italic mt-1'>
                    Even when collateral is stablecoin-denominated, effective
                    collateral value may change due to protocol haircuts,
                    liquidity stress, or stablecoin risk.
                  </div>
                </div>
                <div>
                  <div className='text-amber-400 font-semibold mb-1'>
                    Liquidity risk
                  </div>
                  <div className='text-gray-300 mb-1'>
                    Capital may not be immediately withdrawable during stress
                    events
                  </div>
                  <div className='text-gray-400 text-xs'>
                    → Tier-specific liquidity windows and exit buffers
                  </div>
                </div>
              </div>
            </div>

            {/* How This Differs Across Tiers */}
            <div className='bg-slate-900/50 border border-slate-500/30 rounded-xl p-4 mb-4'>
              <h5 className='text-base font-bold text-white mb-3 text-center'>
                How This Differs Across Tiers
              </h5>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm'>
                <div className='text-center'>
                  <div className='text-blue-400 font-bold mb-1'>
                    Conservative (5–8%)
                  </div>
                  <div className='text-gray-400'>
                    No leverage. Capital preservation-focused. Same-day to short-term liquidity under normal market conditions.
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-purple-400 font-bold mb-1'>
                    Balanced (8–12%)
                  </div>
                  <div className='text-gray-400'>
                    Moderate leverage (up to ~1.5×). Yield enhancement with
                    strict risk controls. Periodic liquidity under normal conditions.
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-amber-400 font-bold mb-1'>
                    Aggressive (12–22%)
                  </div>
                  <div className='text-gray-400'>
                    Higher leverage (up to ~2×). Maximum yield, higher
                    sensitivity. Longer liquidity windows acceptable.
                  </div>
                </div>
              </div>

              {/* Liquidity Footnote */}
              <div className='mt-4 pt-3 border-t border-slate-500/30'>
                <p className='text-[10px] text-gray-400 italic text-center'>
                  *Liquidity timelines depend on market conditions. Under stress, withdrawal windows may extend across all tiers.
                </p>
              </div>
            </div>

            {/* One-Line Summary */}
            <div className='bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 border-2 border-purple-500/40 rounded-xl p-4'>
              <p className='text-sm md:text-base text-center text-gray-200 leading-relaxed'>
                "Monolith uses controlled stablecoin leverage to scale exposure
                to on-chain yield strategies, increasing returns while managing
                risk through strict caps, monitoring, and tier-specific
                controls."
              </p>
            </div>
          </div>
        </div>

        {/* HOW WE MANAGE RISK & SET PARAMETERS */}
        <div className='max-w-6xl mx-auto mb-8 md:mb-10 px-4'>
          <div className='bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 border-2 border-slate-500/50 rounded-2xl p-5 md:p-8 shadow-2xl'>
            <div className='flex items-center justify-center gap-3 mb-5 md:mb-6'>
              <div className='w-1 h-8 bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 rounded-full'></div>
              <h3 className='text-lg md:text-2xl font-bold text-center text-white'>
                How We Manage Risk & Curate Strategies
              </h3>
              <div className='w-1 h-8 bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 rounded-full'></div>
            </div>

            <div className='bg-gradient-to-r from-blue-900/40 via-blue-800/40 to-blue-900/40 border-2 border-blue-500/40 rounded-xl p-4 md:p-5 mb-5 shadow-lg'>
              <div className='text-center text-sm md:text-lg text-blue-200 font-bold mb-2 leading-snug flex items-center justify-center gap-2'>
                <Icon
                  name='bulb'
                  size={20}
                  className='text-blue-200 flex-shrink-0'
                />
                "Automation ≠ discretion. Humans set risk boundaries, bots
                execute within them."
              </div>
              <div className='text-center text-xs md:text-sm text-gray-300 leading-snug'>
                Like:{" "}
                <span className='text-blue-300 font-semibold'>
                  Execution algos in equities
                </span>{" "}
                |{" "}
                <span className='text-blue-300 font-semibold'>
                  Prime brokerage collateral optimization
                </span>{" "}
                |{" "}
                <span className='text-blue-300 font-semibold'>
                  Treasury cash management
                </span>
              </div>
            </div>

            <div className='text-center text-xs md:text-sm text-gray-300 mb-5 italic leading-snug px-4 py-2 bg-slate-700/30 rounded-lg border border-slate-600/30 flex items-center justify-center gap-2'>
              <Icon
                name='settings'
                size={16}
                className='text-gray-300 flex-shrink-0'
              />
              Parameters set once; execution is mechanical, monitored 24/7,
              rules-based automation.
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 text-xs md:text-sm mb-6'>
              {/* Conservative */}
              <div className='bg-gradient-to-br from-blue-900/30 to-blue-900/10 border-2 border-blue-500/40 rounded-xl p-4 hover:border-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20'>
                <div className='font-bold text-blue-300 mb-3 text-sm md:text-base flex items-center gap-2'>
                  <span className='w-2 h-2 bg-blue-400 rounded-full'></span>
                  Conservative Parameters
                </div>
                <div className='space-y-2 text-gray-200'>
                  <div className='flex items-start gap-2'>
                    <span className='text-blue-400'>•</span>
                    <span>No leverage</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-blue-400'>•</span>
                    <span>Top stablecoins only</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-blue-400'>•</span>
                    <span>Emergency exits + insurance</span>
                  </div>
                  <div className='text-blue-300 font-bold mt-3 pt-3 border-t border-blue-500/30 text-center'>
                    → Bots rebalance within limits
                  </div>
                </div>
              </div>

              {/* Balanced */}
              <div className='bg-gradient-to-br from-purple-900/30 to-purple-900/10 border-2 border-purple-500/40 rounded-xl p-4 hover:border-purple-400 transition-all hover:shadow-lg hover:shadow-purple-500/20'>
                <div className='font-bold text-purple-300 mb-3 text-sm md:text-base flex items-center gap-2'>
                  <span className='w-2 h-2 bg-purple-400 rounded-full'></span>
                  Balanced Parameters
                </div>
                <div className='space-y-2 text-gray-200'>
                  <div className='flex items-start gap-2'>
                    <span className='text-purple-400'>•</span>
                    <span>Max 1.5× leverage</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-purple-400'>•</span>
                    <span>Stablecoin pools only (USD-pegged assets)</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-purple-400'>•</span>
                    <span>Collateral ratio monitoring</span>
                  </div>
                  <div className='text-purple-300 font-bold mt-3 pt-3 border-t border-purple-500/30 text-center'>
                    → Automatic risk reduction if thresholds hit
                  </div>
                </div>
              </div>

              {/* Aggressive */}
              <div className='bg-gradient-to-br from-amber-900/30 to-amber-900/10 border-2 border-amber-500/40 rounded-xl p-4 hover:border-amber-400 transition-all hover:shadow-lg hover:shadow-amber-500/20'>
                <div className='font-bold text-amber-300 mb-3 text-sm md:text-base flex items-center gap-2'>
                  <span className='w-2 h-2 bg-amber-400 rounded-full'></span>
                  Aggressive Parameters
                </div>
                <div className='space-y-2 text-gray-200'>
                  <div className='flex items-start gap-2'>
                    <span className='text-amber-400'>•</span>
                    <span>Max 2× leverage (below protocol max)</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-amber-400'>•</span>
                    <span>Position size & time caps</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-amber-400'>•</span>
                    <span>Emergency stops + automatic exit rules</span>
                  </div>
                  <div className='text-amber-300 font-bold mt-3 pt-3 border-t border-amber-500/30 text-center'>
                    → Bots execute strict rules
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-5 p-4 bg-gradient-to-r from-slate-700/40 via-slate-600/40 to-slate-700/40 rounded-xl border-2 border-slate-500/40'>
              <div className='text-xs md:text-sm text-gray-200 text-center leading-snug'>
                <strong className='text-white'>Parameters from:</strong>{" "}
                Protocol docs (max loan-to-value ratios) + historical stress
                (2020-2022) + on-chain liquidation data
                <br />
                <span className='text-green-400 font-semibold'>
                  → Conservative by design, not alpha-seeking
                </span>
              </div>
            </div>

            {/* WHAT BOTS ACTUALLY DO */}
            <div className='mt-6 border-t-2 border-slate-600/50 pt-6'>
              <h4 className='text-sm md:text-lg font-bold text-center mb-4 text-slate-200 flex items-center justify-center gap-2'>
                What Bots Optimize (Capital Allocation, Not Strategy)
              </h4>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm'>
                {/* Example 1 */}
                <div className='bg-gradient-to-br from-green-900/30 to-green-900/10 border-2 border-green-500/40 rounded-xl p-3 md:p-4 hover:border-green-400 transition-all hover:shadow-lg hover:shadow-green-500/20'>
                  <div className='font-bold text-green-400 mb-2 flex items-center gap-2'>
                    <Icon
                      name='chart'
                      size={18}
                      className='text-green-400 flex-shrink-0'
                    />
                    Example: Lending Optimization
                  </div>
                  <div className='text-gray-200 space-y-1.5'>
                    <div>
                      <strong className='text-white'>Observes:</strong> Aave
                      4.2%, Compound 4.8%
                    </div>
                    <div>
                      <strong className='text-white'>Action:</strong> Rebalance
                      to Compound
                    </div>
                    <div className='text-green-300 font-semibold pt-2 border-t border-green-500/30 mt-2'>
                      → Same asset, same risk, zero new exposure
                    </div>
                  </div>
                </div>

                {/* Example 2 */}
                <div className='bg-gradient-to-br from-purple-900/30 to-purple-900/10 border-2 border-purple-500/40 rounded-xl p-3 md:p-4 hover:border-purple-400 transition-all hover:shadow-lg hover:shadow-purple-500/20'>
                  <div className='font-bold text-purple-400 mb-2 flex items-center gap-2'>
                    <Icon
                      name='scale'
                      size={18}
                      className='text-purple-400 flex-shrink-0'
                    />
                    Example: Leverage Adjustment
                  </div>
                  <div className='text-gray-200 space-y-1.5'>
                    <div>
                      <strong className='text-white'>Observes:</strong>{" "}
                      Collateral ratio approaching minimum
                    </div>
                    <div>
                      <strong className='text-white'>Action:</strong> Reduce
                      1.5× → 1.3×, move to unlevered
                    </div>
                    <div className='text-purple-300 font-semibold pt-2 border-t border-purple-500/30 mt-2'>
                      → Bot reduces risk automatically
                    </div>
                  </div>
                </div>

                {/* Example 3 */}
                <div className='bg-gradient-to-br from-amber-900/30 to-amber-900/10 border-2 border-amber-500/40 rounded-xl p-3 md:p-4 hover:border-amber-400 transition-all hover:shadow-lg hover:shadow-amber-500/20'>
                  <div className='font-bold text-amber-400 mb-2 flex items-center gap-2'>
                    <Icon
                      name='logout'
                      size={18}
                      className='text-amber-400 flex-shrink-0'
                    />
                    Example: Pool Exit Trigger
                  </div>
                  <div className='text-gray-200 space-y-1.5'>
                    <div>
                      <strong className='text-white'>Observes:</strong>{" "}
                      Stablecoin price deviation beyond tolerance
                    </div>
                    <div>
                      <strong className='text-white'>Action:</strong> Exit pool,
                      return to direct lending
                    </div>
                    <div className='text-amber-300 font-semibold pt-2 border-t border-amber-500/30 mt-2'>
                      → Pool participation is optional, not core
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-4 text-center text-xs md:text-sm text-slate-300 italic bg-red-900/20 border-2 border-red-500/30 rounded-lg p-3'>
                <strong className='text-red-400'>Bots cannot:</strong> add
                leverage • introduce new assets • enter new protocols • change
                strategy type
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className='max-w-6xl mx-auto p-5 md:p-8 bg-gradient-to-r from-green-500/15 via-blue-500/15 to-purple-500/15 border-2 border-green-500/50 rounded-2xl shadow-xl mx-4'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <Icon name='shield' size={24} className='text-green-400' />
            <h4 className='text-base md:text-xl font-bold text-white'>
              All Vaults Include
            </h4>
            <Icon name='shield' size={24} className='text-green-400' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mb-5'>
            <div className='bg-green-900/30 border border-green-500/40 rounded-lg p-3 text-center'>
              <div className='text-green-400 font-bold text-xs md:text-sm mb-1'>
                Non-custodial
              </div>
              <div className='text-gray-400 text-[10px] md:text-xs'>
                Your keys, your funds
              </div>
            </div>
            <div className='bg-blue-900/30 border border-blue-500/40 rounded-lg p-3 text-center'>
              <div className='text-blue-400 font-bold text-xs md:text-sm mb-1'>
                Nexus Mutual
              </div>
              <div className='text-gray-400 text-[10px] md:text-xs'>
                Protocol coverage (capped)
              </div>
            </div>
            <div className='bg-purple-900/30 border border-purple-500/40 rounded-lg p-3 text-center'>
              <div className='text-purple-400 font-bold text-xs md:text-sm mb-1'>
                24/7 Monitoring
              </div>
              <div className='text-gray-400 text-[10px] md:text-xs'>
                Real-time oversight
              </div>
            </div>
            <div className='bg-amber-900/30 border border-amber-500/40 rounded-lg p-3 text-center'>
              <div className='text-amber-400 font-bold text-xs md:text-sm mb-1'>
                Quarterly Audits
              </div>
              <div className='text-gray-400 text-[10px] md:text-xs'>
                Security reviews
              </div>
            </div>
          </div>
          <div className='bg-blue-900/30 border-2 border-blue-500/40 rounded-xl p-4 mb-3'>
            <p className='text-center text-xs md:text-sm text-blue-300 font-bold leading-snug flex items-center justify-center gap-2'>
              <Icon
                name='bulb'
                size={16}
                className='text-blue-300 flex-shrink-0'
              />
              Conservative tier is the core institutional allocation. Balanced
              and Aggressive tiers are optional, client-mandated strategies.
            </p>
          </div>
          <p className='text-center text-[10px] md:text-xs text-gray-400 italic leading-snug flex items-center justify-center gap-1'>
            <Icon
              name='document'
              size={12}
              className='text-gray-400 flex-shrink-0'
            />
            Detailed protocol allocations and waterfall strategies available in
            Appendix
          </p>
        </div>
      </SlideContent>
    </Slide>
  )
}
