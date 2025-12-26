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
        <Title size='lg' className='mb-12 text-center'>
          THREE-TIER VAULT STRATEGY
        </Title>
        <Subtitle size='md' className='mb-16 text-center'>
          Institutional clients choose risk-return profile based on treasury objectives
        </Subtitle>

        {/* THREE VAULT TIERS */}
        <ThreeColumnGrid className='gap-8 mb-12'>
          {/* CONSERVATIVE VAULT */}
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8'>
            <div className='text-center mb-6'>
              <Icon
                name='shield'
                size={40}
                className='text-blue-400 mx-auto mb-3'
              />
              <h3 className='text-2xl font-bold'>Conservative Vault</h3>
              <div className='mt-3 p-3 bg-blue-900/30 rounded-lg'>
                <div className='text-3xl font-bold text-blue-300'>5-8%</div>
                <div className='text-sm text-gray-400'>Net Yield</div>
              </div>
            </div>

            <div className='mb-6'>
              <h4 className='text-lg font-bold text-blue-300 mb-3'>Target:</h4>
              <p className='text-gray-300 text-sm leading-relaxed'>
                Capital preservation + predictable yield
              </p>
            </div>

            <div className='mb-6'>
              <h4 className='text-lg font-bold text-blue-300 mb-3'>Strategy:</h4>
              <div className='space-y-2 text-sm text-gray-300'>
                <div>• Aave V3 USDC Lending (40%): 5.0% APY</div>
                <div>• Morpho USDC Vaults (40%): 6-8% APY</div>
                <div>• Curve 3Pool LP (20%): 2-4% APY</div>
              </div>
            </div>

            <div className='mb-6'>
              <h4 className='text-lg font-bold text-blue-300 mb-3'>Risk Management:</h4>
              <div className='space-y-2 text-sm text-gray-300'>
                <div className='flex items-start gap-2'>
                  <span className='text-blue-400 mt-1'>✓</span>
                  <span>Zero leverage</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-blue-400 mt-1'>✓</span>
                  <span>Battle-tested protocols only (Aave: $40B TVL, 5+ years zero failures)</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-blue-400 mt-1'>✓</span>
                  <span>48-hour liquidity guarantee</span>
                </div>
              </div>
            </div>

            <div className='p-4 bg-blue-900/30 rounded-lg text-center border border-blue-700/50'>
              <div className='text-sm font-semibold text-blue-300'>Ideal For:</div>
              <div className='text-xs text-gray-400 mt-1'>Corporate treasurers, regional banks, conservative family offices</div>
            </div>
          </div>

          {/* BALANCED VAULT */}
          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-8'>
            <div className='text-center mb-6'>
              <Icon
                name='trending'
                size={40}
                className='text-purple-400 mx-auto mb-3'
              />
              <h3 className='text-2xl font-bold'>Balanced Vault</h3>
              <div className='mt-3 p-3 bg-purple-900/30 rounded-lg'>
                <div className='text-3xl font-bold text-purple-300'>8-12%</div>
                <div className='text-sm text-gray-400'>Net Yield</div>
              </div>
            </div>

            <div className='mb-6'>
              <h4 className='text-lg font-bold text-purple-300 mb-3'>Target:</h4>
              <p className='text-gray-300 text-sm leading-relaxed'>
                Attractive yields with institutional-grade risk management
              </p>
            </div>

            <div className='mb-6'>
              <h4 className='text-lg font-bold text-purple-300 mb-3'>Strategy:</h4>
              <div className='space-y-2 text-sm text-gray-300'>
                <div>• Morpho Max Yield Vault (50%): 10.8% APY (Coinbase-integrated)</div>
                <div>• Curve Stablecoin LPs + CRV (30%): 8-11% APY</div>
                <div>• Aave V3 Efficiency Mode (20%): 7-9% APY</div>
              </div>
            </div>

            <div className='mb-6'>
              <h4 className='text-lg font-bold text-purple-300 mb-3'>Risk Management:</h4>
              <div className='space-y-2 text-sm text-gray-300'>
                <div className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-1'>✓</span>
                  <span>Selective leverage (max 1.5x)</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-1'>✓</span>
                  <span>Protocol diversification across 3 platforms</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-1'>✓</span>
                  <span>Weekly rebalancing optimization</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-1'>✓</span>
                  <span>72-hour liquidity target</span>
                </div>
              </div>
            </div>

            <div className='p-4 bg-purple-900/30 rounded-lg text-center border border-purple-700/50'>
              <div className='text-sm font-semibold text-purple-300'>Ideal For:</div>
              <div className='text-xs text-gray-400 mt-1'>Fintech platforms, crypto-native funds, growth-oriented treasurers</div>
            </div>
          </div>

          {/* AGGRESSIVE VAULT */}
          <div className='bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-8'>
            <div className='text-center mb-6'>
              <Icon
                name='lightning'
                size={40}
                className='text-amber-400 mx-auto mb-3'
              />
              <h3 className='text-2xl font-bold'>Aggressive Vault</h3>
              <div className='mt-3 p-3 bg-amber-900/30 rounded-lg'>
                <div className='text-3xl font-bold text-amber-300'>12-22%</div>
                <div className='text-sm text-gray-400'>Net Yield</div>
              </div>
            </div>

            <div className='mb-6'>
              <h4 className='text-lg font-bold text-amber-300 mb-3'>Target:</h4>
              <p className='text-gray-300 text-sm leading-relaxed'>
                Maximum yield for sophisticated DeFi-native institutions
              </p>
            </div>

            <div className='mb-6'>
              <h4 className='text-lg font-bold text-amber-300 mb-3'>Strategy:</h4>
              <div className='space-y-2 text-sm text-gray-300'>
                <div>• Leveraged Morpho Strategies (40%): 15-18% APY</div>
                <div>• Curve CRV-Boosted Pools (35%): 15-32% APY (iUSD/USDC: 38%, USDC/USDU: 32.9%)</div>
                <div>• Convex Yield Optimization (25%): 20-30% APY</div>
              </div>
            </div>

            <div className='mb-6'>
              <h4 className='text-lg font-bold text-amber-300 mb-3'>Risk Management:</h4>
              <div className='space-y-2 text-sm text-gray-300'>
                <div className='flex items-start gap-2'>
                  <span className='text-amber-400 mt-1'>✓</span>
                  <span>Maximum leverage: 2x with automated deleveraging</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-amber-400 mt-1'>✓</span>
                  <span>Active liquidation threshold monitoring</span>
                </div>
                <div className='flex items-start gap-2'>
                  <span className='text-amber-400 mt-1'>✓</span>
                  <span>5-7 day liquidity (higher risk = longer redemption)</span>
                </div>
              </div>
            </div>

            <div className='p-4 bg-amber-900/30 rounded-lg text-center border border-amber-700/50'>
              <div className='text-sm font-semibold text-amber-300'>Ideal For:</div>
              <div className='text-xs text-gray-400 mt-1'>Crypto hedge funds, sophisticated family offices, DeFi-native treasuries</div>
            </div>
          </div>
        </ThreeColumnGrid>

        {/* FOOTER NOTE */}
        <div className='max-w-6xl mx-auto p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl'>
          <p className='text-center text-gray-300 text-sm'>
            <span className='font-bold text-green-400'>All vaults:</span> Non-custodial + InsurAce protocol coverage + 24/7 monitoring + Quarterly audits
          </p>
        </div>
      </SlideContent>
    </Slide>
  )
}
