"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"
import Icon from "@/components/Icon"

export default function Slide3Solution() {
  return (
    <Slide
      id={11}
      background='bg-gradient-to-br from-black via-blue-950/20 to-black'
    >
      <SlideContent>
        <Title size='lg' className='mb-12 text-center'>
          APPENDIX A: INTRODUCING MONOLITH
        </Title>
        <Subtitle size='md' className='mb-8 text-center text-blue-300'>
          Institutional-grade yield infrastructure
        </Subtitle>

        <div className='max-w-4xl mx-auto mb-12 p-4 bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-lg'>
          <p className='text-center text-gray-300 text-base mb-3'>
            Positioned as a <strong className='text-white'>cash-plus alternative</strong>, bridging traditional treasury instruments and conservative on-chain strategies.
          </p>
          <p className='text-center text-sm text-blue-400 font-semibold'>
            Monolith does not manufacture yield—it standardizes access, risk controls, and reporting across existing on-chain yield sources.
          </p>
        </div>

        <div className='max-w-4xl mx-auto mb-12 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl'>
          <p className='text-white text-lg font-semibold text-center mb-4'>
            Monolith allows institutions to:
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-4'>
            <div className='text-center'>
              <Icon
                name='shield'
                size={28}
                className='text-green-400 mx-auto mb-2'
              />
              <div className='text-sm text-gray-300'>
                Deploy stablecoin reserves into curated DeFi yield strategies
              </div>
            </div>
            <div className='text-center'>
              <Icon
                name='check'
                size={28}
                className='text-green-400 mx-auto mb-2'
              />
              <div className='text-sm text-gray-300'>
                Maintain full custody control, transparent risk exposure,
                enterprise reporting
              </div>
            </div>
            <div className='text-center'>
              <Icon
                name='trending'
                size={28}
                className='text-green-400 mx-auto mb-2'
              />
              <div className='text-sm text-gray-300'>
                Earn 5–22% net yield on idle capital*
              </div>
              <div className='text-xs text-gray-500 mt-1'>
                *Yield depends on vault tier selection:<br/>
                Core (Conservative 5-8%) | Enhanced (Balanced 8-12%) | Opportunistic (Aggressive 12-22%)
              </div>
            </div>
          </div>
          <div className='mt-6 pt-6 border-t border-green-500/30'>
            <div className='grid grid-cols-2 gap-8 max-w-4xl mx-auto'>
              <div className='text-left'>
                <p className='text-sm font-bold text-red-400 mb-3'>Monolith is NOT:</p>
                <ul className='text-xs text-gray-400 space-y-2'>
                  <li>✗ A yield aggregator for retail</li>
                  <li>✗ A DeFi fund</li>
                  <li>✗ A promise of outperformance</li>
                </ul>
              </div>
              <div className='text-left'>
                <p className='text-sm font-bold text-green-400 mb-3'>Monolith IS:</p>
                <ul className='text-xs text-gray-300 space-y-2'>
                  <li>✓ An institutional execution layer</li>
                  <li>✓ A compliance-aware yield infrastructure</li>
                  <li>✓ A bridge between capital allocators and on-chain markets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* THREE CUSTOMER ARCHETYPES */}
        <ThreeColumnGrid className='gap-8 mb-16'>
          {/* CORPORATE TREASURERS */}
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8'>
            <div className='text-center mb-6'>
              <Icon
                name='user'
                size={40}
                className='text-blue-400 mx-auto mb-3'
              />
              <h3 className='text-xl font-bold'>Corporate Treasurers</h3>
            </div>
            <div className='mb-6 p-4 bg-blue-900/30 rounded-lg text-center'>
              <div className='text-4xl font-bold text-blue-300'>5-8%</div>
              <div className='text-sm text-gray-400 mt-1'>NET APY</div>
              <div className='text-xs text-gray-500 mt-1'>(Conservative tier)</div>
            </div>
            <p className='text-gray-300 text-center mb-4 leading-relaxed'>
              Deploy our managed dashboard for their treasury team. Get yield on
              $5-50M in idle stablecoins.
            </p>
            <p className='text-gray-400 text-center text-sm mb-6'>
              Up to 12-22% with Balanced/Aggressive tiers
            </p>
            <div className='space-y-2 text-sm text-gray-400'>
              <div className='flex items-center gap-2'>
                <span className='text-blue-400'>✓</span>
                <span>2 weeks to live</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-blue-400'>✓</span>
                <span>Compliance included</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-blue-400'>✓</span>
                <span>WhatsApp & Email support</span>
              </div>
            </div>
          </div>

          {/* FINTECH PLATFORMS */}
          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-8'>
            <div className='text-center mb-6'>
              <Icon
                name='mobile'
                size={40}
                className='text-purple-400 mx-auto mb-3'
              />
              <h3 className='text-xl font-bold'>Fintech Platforms</h3>
            </div>
            <div className='mb-6 p-4 bg-purple-900/30 rounded-lg text-center'>
              <div className='text-3xl font-bold text-purple-300'>2 Weeks</div>
              <div className='text-sm text-gray-400 mt-1'>TO MARKET</div>
            </div>
            <p className='text-gray-300 text-center mb-4 leading-relaxed'>
              Embed our SDK or white-label dashboard into your app. Offer 5-22% stablecoin yields to customers.*
            </p>
            <p className='text-gray-400 text-center text-xs mb-6'>
              *Yield tier customizable per your client risk profile
            </p>
            <div className='space-y-2 text-sm text-gray-400'>
              <div className='flex items-center gap-2'>
                <span className='text-purple-400'>✓</span>
                <span>Revenue share model</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-purple-400'>✓</span>
                <span>Full compliance suite</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-purple-400'>✓</span>
                <span>24/7 infrastructure ops</span>
              </div>
            </div>
          </div>

          {/* REGIONAL BANKS */}
          <div className='bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-8'>
            <div className='text-center mb-6'>
              <Icon
                name='building'
                size={40}
                className='text-amber-400 mx-auto mb-3'
              />
              <h3 className='text-xl font-bold'>Regional Banks</h3>
            </div>
            <div className='mb-6 p-4 bg-amber-900/30 rounded-lg text-center'>
              <div className='text-3xl font-bold text-amber-300'>
                White Glove
              </div>
              <div className='text-sm text-gray-400 mt-1'>SERVICE</div>
            </div>
            <p className='text-gray-300 text-left mb-4 leading-relaxed'>
              Custom strategies, dedicated account manager, 24/7 monitoring for
              $50M+ portfolios. Yields: 5-22% depending on tier selection.
            </p>
            <div className='space-y-2 text-sm text-gray-400'>
              <div className='flex items-center gap-2'>
                <span className='text-amber-400'>✓</span>
                <span>Custom strategy design</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-amber-400'>✓</span>
                <span>Dedicated account team</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-amber-400'>✓</span>
                <span>24/7 risk monitoring</span>
              </div>
            </div>
          </div>
        </ThreeColumnGrid>

        {/* KEY VALUE PROP */}
        <div className='max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl'>
          <p className='text-white text-xl font-semibold text-center mb-4'>
            ONE PLATFORM. THREE DEPLOYMENT OPTIONS.
          </p>
          <div className='grid grid-cols-3 gap-6 text-center'>
            <div>
              <div className='text-green-400 font-bold mb-2'>
                White-Label Dashboard
              </div>
              <p className='text-sm text-gray-400'>
                Institutions manage their own yield
              </p>
            </div>
            <div>
              <div className='text-green-400 font-bold mb-2'>Mobile SDK</div>
              <p className='text-sm text-gray-400'>
                Embed in your app for users
              </p>
            </div>
            <div>
              <div className='text-green-400 font-bold mb-2'>
                Managed Service
              </div>
              <p className='text-sm text-gray-400'>
                We handle everything for you
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}
