"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"
import Icon from "@/components/Icon"

export default function Slide4_5ThreeTierVault() {
  return (
    <Slide id={5} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-6 md:mb-12 text-center'>
          THREE-TIER VAULT STRATEGY
        </Title>
        <Subtitle size='md' className='mb-8 md:mb-16 text-center'>
          Institutional clients choose risk-return profile based on treasury objectives
        </Subtitle>

        {/* THREE VAULT TIERS */}
        <ThreeColumnGrid className='gap-4 md:gap-8 mb-8 md:mb-12'>
          {/* CONSERVATIVE VAULT */}
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4 md:p-8'>
            <div className='text-center mb-4 md:mb-6'>
              <Icon
                name='shield'
                size={40}
                className='text-blue-400 mx-auto mb-2 md:mb-3'
              />
              <h3 className='text-xl md:text-2xl font-bold'>Conservative Vault</h3>
              <div className='mt-2 md:mt-3 p-2 md:p-3 bg-blue-900/30 rounded-lg'>
                <div className='text-2xl md:text-3xl font-bold text-blue-300'>5-8%</div>
                <div className='text-xs md:text-sm text-gray-400'>Net Yield</div>
              </div>
            </div>

            <div className='mb-4 md:mb-6'>
              <h4 className='text-sm md:text-base font-bold text-blue-300 mb-2 md:mb-3'>Key Characteristics:</h4>
              <div className='space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-300'>
                <div className='flex items-start gap-2'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Capital preservation + predictable yield</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Zero leverage, battle-tested protocols only</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Aave V3, Morpho, Curve diversification</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-blue-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>48-hour liquidity guarantee</span>
                </div>
              </div>
            </div>

            <div className='p-3 md:p-4 bg-blue-900/30 rounded-lg text-center border border-blue-700/50'>
              <div className='text-xs md:text-sm font-semibold text-blue-300'>Ideal For:</div>
              <div className='text-xs text-gray-400 mt-1 leading-tight'>Corporate treasurers, regional banks, conservative family offices</div>
            </div>
          </div>

          {/* BALANCED VAULT */}
          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-4 md:p-8'>
            <div className='text-center mb-4 md:mb-6'>
              <Icon
                name='trending'
                size={40}
                className='text-purple-400 mx-auto mb-2 md:mb-3'
              />
              <h3 className='text-xl md:text-2xl font-bold'>Balanced Vault</h3>
              <div className='mt-2 md:mt-3 p-2 md:p-3 bg-purple-900/30 rounded-lg'>
                <div className='text-2xl md:text-3xl font-bold text-purple-300'>8-12%</div>
                <div className='text-xs md:text-sm text-gray-400'>Net Yield</div>
              </div>
            </div>

            <div className='mb-4 md:mb-6'>
              <h4 className='text-sm md:text-base font-bold text-purple-300 mb-2 md:mb-3'>Key Characteristics:</h4>
              <div className='space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-300'>
                <div className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Attractive yields with institutional risk controls</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Selective leverage (max 1.5x)</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Morpho, Curve, Aave diversification</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>72-hour liquidity, weekly rebalancing</span>
                </div>
              </div>
            </div>

            <div className='p-3 md:p-4 bg-purple-900/30 rounded-lg text-center border border-purple-700/50'>
              <div className='text-xs md:text-sm font-semibold text-purple-300'>Ideal For:</div>
              <div className='text-xs text-gray-400 mt-1 leading-tight'>Fintech platforms, crypto funds, growth treasurers</div>
            </div>
          </div>

          {/* AGGRESSIVE VAULT */}
          <div className='bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-4 md:p-8'>
            <div className='text-center mb-4 md:mb-6'>
              <Icon
                name='lightning'
                size={40}
                className='text-amber-400 mx-auto mb-2 md:mb-3'
              />
              <h3 className='text-xl md:text-2xl font-bold'>Aggressive Vault</h3>
              <div className='mt-2 md:mt-3 p-2 md:p-3 bg-amber-900/30 rounded-lg'>
                <div className='text-2xl md:text-3xl font-bold text-amber-300'>12-22%</div>
                <div className='text-xs md:text-sm text-gray-400'>Net Yield</div>
              </div>
            </div>

            <div className='mb-4 md:mb-6'>
              <h4 className='text-sm md:text-base font-bold text-amber-300 mb-2 md:mb-3'>Key Characteristics:</h4>
              <div className='space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-300'>
                <div className='flex items-start gap-2'>
                  <span className='text-amber-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Maximum yield for DeFi-native institutions</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-amber-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Maximum leverage: 2x with auto-deleveraging</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-amber-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>Morpho, Curve CRV-boosted, Convex</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-amber-400 mt-0.5 flex-shrink-0'>✓</span>
                  <span className='leading-tight'>5-7 day liquidity, active monitoring</span>
                </div>
              </div>
            </div>

            <div className='p-3 md:p-4 bg-amber-900/30 rounded-lg text-center border border-amber-700/50'>
              <div className='text-xs md:text-sm font-semibold text-amber-300'>Ideal For:</div>
              <div className='text-xs text-gray-400 mt-1 leading-tight'>Crypto hedge funds, family offices, DeFi treasuries</div>
            </div>
          </div>
        </ThreeColumnGrid>

        {/* HOW WE MANAGE RISK & SET PARAMETERS */}
        <div className='max-w-6xl mx-auto mb-6 md:mb-8'>
          <div className='bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-2 border-slate-600/50 rounded-xl p-4 md:p-6'>
            <h3 className='text-base md:text-lg font-bold text-center mb-3 md:mb-4 text-white'>
              How We Manage Risk & Curate Strategies
            </h3>

            <div className='bg-blue-900/30 border border-blue-500/30 rounded-lg p-3 md:p-4 mb-4'>
              <div className='text-center text-sm md:text-base text-blue-300 font-bold mb-2 leading-tight'>
                "Automation does not mean discretion. Our bots don't decide risk — humans set the risk boundaries, and bots operate strictly inside them."
              </div>
              <div className='text-center text-xs text-gray-400 leading-tight'>
                Like execution algos in equities • Collateral optimization in prime brokerage • Treasury cash management within policy
              </div>
            </div>

            <div className='text-center text-xs md:text-sm text-gray-300 mb-4 italic leading-tight'>
              Parameters are set once; outcomes are mechanical, monitored continuously, and respond via rules-based automation.
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-xs'>
              {/* Conservative */}
              <div className='bg-blue-900/20 border border-blue-500/30 rounded-lg p-3'>
                <div className='font-bold text-blue-300 mb-2'>Conservative Parameters</div>
                <div className='space-y-1 text-gray-300'>
                  <div>• No leverage</div>
                  <div>• Top stablecoins only</div>
                  <div>• Emergency exits + insurance</div>
                  <div className='text-blue-400 font-semibold mt-2'>→ Bots rebalance within limits</div>
                </div>
              </div>

              {/* Balanced */}
              <div className='bg-purple-900/20 border border-purple-500/30 rounded-lg p-3'>
                <div className='font-bold text-purple-300 mb-2'>Balanced Parameters</div>
                <div className='space-y-1 text-gray-300'>
                  <div>• Max 1.5× leverage</div>
                  <div>• Stable LP only</div>
                  <div>• Health factor monitoring</div>
                  <div className='text-purple-400 font-semibold mt-2'>→ Auto-deleverage if thresholds hit</div>
                </div>
              </div>

              {/* Aggressive */}
              <div className='bg-amber-900/20 border border-amber-500/30 rounded-lg p-3'>
                <div className='font-bold text-amber-300 mb-2'>Aggressive Parameters</div>
                <div className='space-y-1 text-gray-300'>
                  <div>• Max 2× leverage (below protocol max)</div>
                  <div>• Position size & time caps</div>
                  <div>• Kill switches + exit logic</div>
                  <div className='text-amber-400 font-semibold mt-2'>→ Bots execute strict rules</div>
                </div>
              </div>
            </div>

            <div className='mt-4 p-3 bg-slate-700/30 rounded-lg border border-slate-500/30'>
              <div className='text-xs text-gray-300 text-center leading-tight'>
                <strong className='text-white'>Parameter derivation:</strong> Protocol docs (max LTVs) + historical stress events (2020, 2021, 2022) + on-chain liquidation data + oracle delays
                <br/>
                <span className='text-green-400 font-semibold'>→ Engineering conservatism, not alpha-seeking</span>
              </div>
            </div>

            {/* WHAT BOTS ACTUALLY DO */}
            <div className='mt-4 border-t border-slate-600 pt-4'>
              <h4 className='text-sm font-bold text-center mb-3 text-slate-300'>What Bots Optimize (Capital Allocation, Not Strategy)</h4>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-3 text-[10px] md:text-xs'>
                {/* Example 1 */}
                <div className='bg-green-900/20 border border-green-500/30 rounded p-2'>
                  <div className='font-bold text-green-400 mb-1'>Example: Lending Optimization</div>
                  <div className='text-gray-300 space-y-1'>
                    <div><strong>Observes:</strong> Aave 4.2%, Compound 4.8%</div>
                    <div><strong>Action:</strong> Rebalance to Compound</div>
                    <div className='text-green-400 font-semibold'>→ Same asset, same risk, zero new exposure</div>
                  </div>
                </div>

                {/* Example 2 */}
                <div className='bg-purple-900/20 border border-purple-500/30 rounded p-2'>
                  <div className='font-bold text-purple-400 mb-1'>Example: Leverage Adjustment</div>
                  <div className='text-gray-300 space-y-1'>
                    <div><strong>Observes:</strong> Health factor approaching floor</div>
                    <div><strong>Action:</strong> Reduce 1.5× → 1.3×, move to unlevered</div>
                    <div className='text-purple-400 font-semibold'>→ Bot reduces risk automatically</div>
                  </div>
                </div>

                {/* Example 3 */}
                <div className='bg-amber-900/20 border border-amber-500/30 rounded p-2'>
                  <div className='font-bold text-amber-400 mb-1'>Example: LP Exit Trigger</div>
                  <div className='text-gray-300 space-y-1'>
                    <div><strong>Observes:</strong> Peg deviation beyond tolerance</div>
                    <div><strong>Action:</strong> Exit LP, return to lending</div>
                    <div className='text-amber-400 font-semibold'>→ LP is optional, not core</div>
                  </div>
                </div>
              </div>

              <div className='mt-3 text-center text-xs text-slate-400 italic'>
                Bots cannot: add leverage • introduce new assets • enter new protocols • change strategy type
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className='max-w-6xl mx-auto p-4 md:p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl'>
          <p className='text-center text-gray-300 text-xs md:text-sm mb-2 md:mb-3 leading-tight'>
            <span className='font-bold text-green-400'>All vaults:</span> Non-custodial + InsurAce protocol coverage + 24/7 monitoring + Quarterly audits
          </p>
          <p className='text-center text-xs text-blue-400 font-semibold mb-1 md:mb-2 leading-tight'>
            Conservative tier is the core institutional allocation. Balanced and Aggressive tiers are optional, client-mandated strategies.
          </p>
          <p className='text-center text-[10px] md:text-xs text-gray-500 italic leading-tight'>
            Detailed protocol allocations and waterfall strategies available in Appendix
          </p>
        </div>
      </SlideContent>
    </Slide>
  )
}
