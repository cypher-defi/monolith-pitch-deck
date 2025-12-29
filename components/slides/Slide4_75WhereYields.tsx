"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"

export default function Slide4_75WhereYields() {
  return (
    <Slide id={4} background='bg-gradient-to-br from-black via-blue-950/20 to-black'>
      <SlideContent>
        <Title size='lg' className='mb-4 md:mb-6 text-center'>
          WHERE DEFI YIELDS COME FROM
        </Title>
        <Subtitle size='md' className='mb-4 md:mb-6 text-center text-sm md:text-base leading-tight'>
          DeFi yields are transparent, measurable risk premiums — not magic. They compensate for smart contract risk, crypto volatility, and regulatory uncertainty.
        </Subtitle>

        {/* YIELD SOURCE TABLE */}
        <div className='max-w-6xl mx-auto mb-6 md:mb-8'>
          <div className='overflow-x-auto'>
            <table className='w-full text-xs md:text-sm border-collapse'>
              <thead>
                <tr className='border-b-2 border-blue-500'>
                  <th className='p-2 md:p-3 text-left text-gray-400 font-bold'>Yield Source</th>
                  <th className='p-2 md:p-3 text-left text-gray-400 font-bold'>Mechanics</th>
                  <th className='p-2 md:p-3 text-left text-gray-400 font-bold'>Stability / Risk</th>
                  <th className='p-2 md:p-3 text-left text-gray-400 font-bold'>Tier Usage</th>
                </tr>
              </thead>
              <tbody className='text-gray-300'>
                <tr className='border-b border-gray-700'>
                  <td className='p-2 md:p-3 text-blue-400 font-semibold'>Borrowing Demand</td>
                  <td className='p-2 md:p-3 text-xs'>Traders borrow USDC/USDT for leverage or arbitrage</td>
                  <td className='p-2 md:p-3 text-xs'>Variable (spikes in volatility), utilization can lock liquidity</td>
                  <td className='p-2 md:p-3 text-xs'><span className='text-green-400 font-semibold'>Core driver all tiers</span>, weighted 70% in Conservative</td>
                </tr>
                <tr className='border-b border-gray-700 bg-gray-900/30'>
                  <td className='p-2 md:p-3 text-purple-400 font-semibold'>Protocol Incentives</td>
                  <td className='p-2 md:p-3 text-xs'>Token distributions (AAVE, CRV, MORPHO)</td>
                  <td className='p-2 md:p-3 text-xs text-amber-400'>Temporary, volatile, dilution risk — can end abruptly</td>
                  <td className='p-2 md:p-3 text-xs'>Limited in Conservative, <span className='text-purple-400'>heavier in Balanced/Aggressive</span></td>
                </tr>
                <tr className='border-b border-gray-700'>
                  <td className='p-2 md:p-3 text-amber-400 font-semibold'>Trading Fees</td>
                  <td className='p-2 md:p-3 text-xs'>Fee revenue from LPs</td>
                  <td className='p-2 md:p-3 text-xs text-green-400'>Most stable, IL risk minimized with stablecoin LPs</td>
                  <td className='p-2 md:p-3 text-xs'>Optional for Balanced/Aggressive, <span className='text-red-400'>excluded</span> from Conservative</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg'>
            <p className='text-xs md:text-sm text-center text-blue-300 leading-tight'>
              <strong>Conservative vault uses mostly sustainable sources</strong> (borrowing + minimal incentives). Balanced/Aggressive may include more incentive token exposure = higher risk/reward.
            </p>
          </div>
        </div>

        {/* THREE YIELD SOURCES - HORIZONTAL CARDS */}
        <div className='space-y-3 mb-6 md:mb-8 max-w-6xl mx-auto'>
          {/* 1. BORROWING DEMAND */}
          <div className='bg-gradient-to-r from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-3 md:p-4'>
            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0'>
                <div className='inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-500/20 border-2 border-blue-500'>
                  <span className='text-xl md:text-2xl font-bold text-blue-400'>1</span>
                </div>
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-baseline gap-2 mb-2'>
                  <h3 className='text-base md:text-lg font-bold'>Borrowing Demand</h3>
                  <span className='text-xs text-gray-400'>(50-70% of yield)</span>
                </div>
                <div className='grid md:grid-cols-2 gap-3'>
                  <div>
                    <div className='text-xs text-gray-300 space-y-1 leading-tight'>
                      <div>• Short cryptocurrencies (borrow USDC, sell BTC, profit when BTC falls)</div>
                      <div>• Leverage long positions • Arbitrage opportunities • Market-making</div>
                    </div>
                  </div>
                  <div>
                    <div className='p-2 bg-blue-900/30 rounded border border-blue-700/50'>
                      <div className='text-xs text-gray-300 leading-tight'>
                        <span className='font-semibold text-blue-400'>Key:</span> Higher crypto volatility = higher yields. <span className='text-blue-300'>Example:</span> March 2020 crash → Aave yields spiked to 8-12%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. PROTOCOL TOKEN INCENTIVES */}
          <div className='bg-gradient-to-r from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-3 md:p-4'>
            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0'>
                <div className='inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-purple-500/20 border-2 border-purple-500'>
                  <span className='text-xl md:text-2xl font-bold text-purple-400'>2</span>
                </div>
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-baseline gap-2 mb-2'>
                  <h3 className='text-base md:text-lg font-bold'>Protocol Token Incentives</h3>
                  <span className='text-xs text-gray-400'>(20-40% of yield)</span>
                </div>
                <div className='grid md:grid-cols-2 gap-3'>
                  <div>
                    <div className='text-xs text-gray-300 space-y-1 leading-tight'>
                      <div>• Aave distributes AAVE tokens to lenders (governance rewards)</div>
                      <div>• Curve distributes CRV • Morpho distributes MORPHO</div>
                    </div>
                  </div>
                  <div>
                    <div className='p-2 bg-purple-900/30 rounded border border-purple-700/50'>
                      <div className='text-xs text-gray-300 leading-tight'>
                        <span className='font-semibold text-purple-400'>Key:</span> INDEPENDENT of Fed rates, but <span className='text-amber-400'>tokens can lose value</span>. <span className='text-purple-300'>Example:</span> 2021 CRV incentives = 8-15% — but CRV fell 90% by 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. TRADING FEES */}
          <div className='bg-gradient-to-r from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-3 md:p-4'>
            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0'>
                <div className='inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-amber-500/20 border-2 border-amber-500'>
                  <span className='text-xl md:text-2xl font-bold text-amber-400'>3</span>
                </div>
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-baseline gap-2 mb-2'>
                  <h3 className='text-base md:text-lg font-bold'>Trading Fees</h3>
                  <span className='text-xs text-gray-400'>(10-30% of yield)</span>
                </div>
                <div className='grid md:grid-cols-2 gap-3'>
                  <div>
                    <div className='text-xs text-gray-300 space-y-1 leading-tight'>
                      <div>• Curve 3Pool generates $47M daily volume</div>
                      <div>• 0.04% fee = $18.8K daily for LPs • 24/7 global markets</div>
                    </div>
                  </div>
                  <div>
                    <div className='p-2 bg-amber-900/30 rounded border border-amber-700/50'>
                      <div className='text-xs text-gray-300 leading-tight'>
                        <span className='font-semibold text-amber-400'>Key:</span> Unlike TradFi (9:30am-4pm ET), DeFi never closes → continuous yield generation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HONEST COMPARISON: DEFI VS TRADFI YIELDS */}
        <div className='max-w-6xl mx-auto mb-6 md:mb-8'>
          <h3 className='text-lg md:text-xl font-bold text-center mb-4 text-white'>
            DeFi vs TradFi Yields: The Honest Picture
          </h3>
          <div className='bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-2 border-slate-600/50 rounded-xl p-4 md:p-6'>
            <div className='overflow-x-auto'>
              <table className='w-full text-xs md:text-sm'>
                <thead>
                  <tr className='border-b-2 border-slate-500'>
                    <th className='text-left py-2 px-2 md:px-3 font-bold text-white'>Market Environment</th>
                    <th className='text-left py-2 px-2 md:px-3 font-bold text-white'>TradFi Yields</th>
                    <th className='text-left py-2 px-2 md:px-3 font-bold text-white'>DeFi Yields</th>
                    <th className='text-left py-2 px-2 md:px-3 font-bold text-white'>Winner & Why</th>
                  </tr>
                </thead>
                <tbody className='text-gray-300'>
                  <tr className='border-b border-slate-600'>
                    <td className='py-2 px-2 md:px-3'>Fed Easing (2020)</td>
                    <td className='py-2 px-2 md:px-3 text-xs text-red-400'>MMAs: 0.06%<br/>Bonds: 1-2%</td>
                    <td className='py-2 px-2 md:px-3 text-green-400 font-semibold'>5-12%</td>
                    <td className='py-2 px-2 md:px-3 text-xs'><span className='text-green-400 font-semibold'>DeFi wins.</span> Crypto bull + leverage demand + protocol incentives</td>
                  </tr>
                  <tr className='border-b border-slate-600 bg-slate-900/50'>
                    <td className='py-2 px-2 md:px-3'>Fed Hiking (2022)</td>
                    <td className='py-2 px-2 md:px-3 text-green-400 text-xs font-semibold'>MMAs: 4-5%<br/>Bonds: 4-6%</td>
                    <td className='py-2 px-2 md:px-3 text-red-400'>2-8% (compressed)</td>
                    <td className='py-2 px-2 md:px-3 text-xs'><span className='text-red-400 font-semibold'>TradFi wins.</span> Crypto winter, liquidity crunch, incentive programs ended</td>
                  </tr>
                  <tr className='border-b border-slate-600'>
                    <td className='py-2 px-2 md:px-3'>Crypto Bull (2021)</td>
                    <td className='py-2 px-2 md:px-3 text-xs text-red-400'>MMAs: 0.1%<br/>Bonds: 1-3%</td>
                    <td className='py-2 px-2 md:px-3 text-green-400 font-semibold'>8-20%</td>
                    <td className='py-2 px-2 md:px-3 text-xs'><span className='text-green-400 font-semibold'>DeFi wins big.</span> Extreme leverage demand + high incentives</td>
                  </tr>
                  <tr>
                    <td className='py-2 px-2 md:px-3'>Stable (2024-25)</td>
                    <td className='py-2 px-2 md:px-3 text-xs'>MMAs: 4.5%<br/>Bonds: 4-6%</td>
                    <td className='py-2 px-2 md:px-3 text-blue-400 font-semibold'>5-10%</td>
                    <td className='py-2 px-2 md:px-3 text-xs'><span className='text-blue-400 font-semibold'>DeFi slight premium.</span> Risk compensation for smart contract + volatility exposure</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='mt-4 pt-4 border-t border-slate-600'>
              <p className='text-center text-sm md:text-base font-bold text-blue-400 mb-2'>
                Takeaway: DeFi offers a different correlation profile, not "always better"
              </p>
              <p className='text-center text-xs md:text-sm text-gray-300 leading-tight'>
                DeFi yields track crypto market conditions (volatility, leverage demand, protocol growth) — not Fed policy. This creates diversification value, but also new risks.
              </p>
            </div>
          </div>
        </div>

        {/* WHY DEFI YIELDS ARE HIGHER */}
        <div className='max-w-6xl mx-auto mb-6 md:mb-8'>
          <h3 className='text-lg md:text-xl font-bold text-center mb-4 text-white'>
            Why DeFi Yields Are Higher (When They Are)
          </h3>
          <div className='bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-4 md:p-6'>
            <p className='text-center text-sm md:text-base text-amber-300 mb-4 leading-tight'>
              DeFi yields compensate for measurable, transparent risks that TradFi doesn't have:
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm'>
              <div className='bg-amber-900/20 border border-amber-700/50 rounded-lg p-3'>
                <div className='font-bold text-amber-400 mb-2'>Smart Contract Risk</div>
                <div className='text-gray-300 leading-tight'>
                  Code bugs, exploits, oracle failures — rare but catastrophic. No FDIC, no bailouts.
                </div>
              </div>
              <div className='bg-amber-900/20 border border-amber-700/50 rounded-lg p-3'>
                <div className='font-bold text-amber-400 mb-2'>Crypto Volatility Exposure</div>
                <div className='text-gray-300 leading-tight'>
                  Even stablecoin lending is exposed to crypto market shocks (depegs, contagion, liquidity crises).
                </div>
              </div>
              <div className='bg-amber-900/20 border border-amber-700/50 rounded-lg p-3'>
                <div className='font-bold text-amber-400 mb-2'>Regulatory Uncertainty</div>
                <div className='text-gray-300 leading-tight'>
                  Protocols can face sudden regulatory action. No established legal framework.
                </div>
              </div>
              <div className='bg-amber-900/20 border border-amber-700/50 rounded-lg p-3'>
                <div className='font-bold text-amber-400 mb-2'>Token Incentive Dilution</div>
                <div className='text-gray-300 leading-tight'>
                  Governance tokens can lose 50-90% of value while you earn them — turning 8% APY into net loss.
                </div>
              </div>
            </div>
            <div className='mt-4 p-3 bg-amber-900/30 rounded-lg border border-amber-700/50'>
              <p className='text-center text-xs md:text-sm text-amber-300 leading-tight'>
                <strong>Bottom line:</strong> DeFi yields are a risk premium. Institutional investors accept these risks for: (1) diversification from TradFi, (2) higher potential returns, (3) full transparency.
              </p>
            </div>
          </div>
        </div>

        {/* WHEN DEFI YIELDS RISE VS FALL */}
        <div className='max-w-6xl mx-auto mb-6 md:mb-8'>
          <h3 className='text-lg md:text-xl font-bold text-center mb-4 text-white'>
            When DeFi Yields Rise vs Fall
          </h3>
          <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-xl p-4 md:p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* YIELDS RISE */}
              <div className='bg-green-900/20 border border-green-500/30 rounded-lg p-4'>
                <h4 className='text-base font-bold text-green-400 mb-3 text-center'>Yields Rise When:</h4>
                <div className='space-y-2 text-xs text-gray-300'>
                  <div className='flex items-start gap-2'>
                    <span className='text-green-400 flex-shrink-0'>↑</span>
                    <span><strong>Volatility spikes:</strong> Traders need leverage, borrow more USDC</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-green-400 flex-shrink-0'>↑</span>
                    <span><strong>Crypto bull markets:</strong> High demand for leverage longs + arbitrage</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-green-400 flex-shrink-0'>↑</span>
                    <span><strong>Liquidity crunches:</strong> Utilization rates hit 90%+, rates spike</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-green-400 flex-shrink-0'>↑</span>
                    <span><strong>New protocol launches:</strong> Incentive programs boost yields temporarily</span>
                  </div>
                </div>
              </div>

              {/* YIELDS FALL */}
              <div className='bg-red-900/20 border border-red-500/30 rounded-lg p-4'>
                <h4 className='text-base font-bold text-red-400 mb-3 text-center'>Yields Fall When:</h4>
                <div className='space-y-2 text-xs text-gray-300'>
                  <div className='flex items-start gap-2'>
                    <span className='text-red-400 flex-shrink-0'>↓</span>
                    <span><strong>Crypto bear markets:</strong> Low volatility = low leverage demand</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-red-400 flex-shrink-0'>↓</span>
                    <span><strong>Incentive programs end:</strong> Token distributions stop or taper off</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-red-400 flex-shrink-0'>↓</span>
                    <span><strong>High TVL compression:</strong> Too much capital chasing same yields</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-red-400 flex-shrink-0'>↓</span>
                    <span><strong>Contagion events:</strong> Protocol hacks, depegs → risk-off, capital flight</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* YIELD SUSTAINABILITY DISCLOSURE */}
        <div className='max-w-6xl mx-auto'>
          <div className='bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-2 border-slate-600/50 rounded-xl p-4 md:p-6'>
            <h3 className='text-base md:text-lg font-bold text-center mb-3 text-white'>
              Yield Sustainability: Our Approach
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 text-xs'>
              <div className='bg-blue-900/20 border border-blue-500/30 rounded-lg p-3'>
                <div className='font-bold text-blue-400 mb-2'>Conservative Vault</div>
                <div className='text-gray-300 space-y-1 leading-tight'>
                  <div>• 70%+ from sustainable borrowing demand</div>
                  <div>• 20% from battle-tested lending protocols</div>
                  <div>• 10% from selective, low-risk incentives</div>
                  <div className='text-blue-400 font-semibold mt-2'>→ Designed to weather bear markets</div>
                </div>
              </div>
              <div className='bg-purple-900/20 border border-purple-500/30 rounded-lg p-3'>
                <div className='font-bold text-purple-400 mb-2'>Balanced Vault</div>
                <div className='text-gray-300 space-y-1 leading-tight'>
                  <div>• 50% borrowing + 30% incentives + 20% LP fees</div>
                  <div>• Selective leverage (max 1.5×)</div>
                  <div>• Auto-deleverage when yields compress</div>
                  <div className='text-purple-400 font-semibold mt-2'>→ Higher upside, more volatility</div>
                </div>
              </div>
              <div className='bg-amber-900/20 border border-amber-500/30 rounded-lg p-3'>
                <div className='font-bold text-amber-400 mb-2'>Aggressive Vault</div>
                <div className='text-gray-300 space-y-1 leading-tight'>
                  <div>• 40% borrowing + 40% incentives + 20% LP</div>
                  <div>• Max leverage 2× (still below protocol max)</div>
                  <div>• Yields can swing 5-25% based on market</div>
                  <div className='text-amber-400 font-semibold mt-2'>→ For DeFi-native risk appetite</div>
                </div>
              </div>
            </div>
            <div className='mt-4 p-3 bg-slate-700/30 rounded-lg border border-slate-500/30'>
              <p className='text-xs text-center text-gray-300 leading-tight'>
                <strong className='text-white'>Transparency commitment:</strong> We report yield composition monthly. If {'>'}30% comes from temporary incentives, we disclose it. Projected ranges reflect 2020-2024 historical data, not best-case scenarios.
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}
