"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Icon from "@/components/Icon"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"

export default function Slide7_5RiskFramework() {
  return (
    <Slide id={6} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-4 md:mb-8 text-center'>
          SAFETY & RISK MANAGEMENT
        </Title>

        <p className='text-gray-300 text-base md:text-xl text-center mb-8 md:mb-12'>
          Three layers of institutional-grade protection
        </p>

        <ThreeColumnGrid className='gap-4 md:gap-8 mb-8 md:mb-12'>
          {/* AUDIT + TESTING */}
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4 md:p-8'>
            <div className='text-center mb-4 md:mb-6'>
              <Icon name='shield' size={48} className='text-blue-400 mx-auto mb-2 md:mb-4' />
              <h3 className='text-lg md:text-2xl font-bold text-blue-300'>
                Audit + Testing
              </h3>
            </div>

            <div className='space-y-2 md:space-y-4 text-xs md:text-sm text-gray-300 mb-4 md:mb-6'>
              <div className='flex gap-2 items-start'>
                <span className='text-blue-400 flex-shrink-0 mt-0.5'>✓</span>
                <span className='leading-tight'><strong className='text-white'>Dual audits:</strong> OpenZeppelin + Hacken</span>
              </div>
              <div className='flex gap-2 items-start'>
                <span className='text-blue-400 flex-shrink-0 mt-0.5'>✓</span>
                <span className='leading-tight'><strong className='text-white'>Bug bounty:</strong> $50K on Immunefi</span>
              </div>
              <div className='flex gap-2 items-start'>
                <span className='text-blue-400 flex-shrink-0 mt-0.5'>✓</span>
                <span className='leading-tight'><strong className='text-white'>Testing:</strong> 100+ unit tests, fuzz & invariant testing</span>
              </div>
              <div className='flex gap-2 items-start'>
                <span className='text-blue-400 flex-shrink-0 mt-0.5'>✓</span>
                <span className='leading-tight'><strong className='text-white'>Monitoring:</strong> Quarterly security reviews</span>
              </div>
            </div>

            <div className='bg-blue-900/30 p-3 md:p-4 rounded-lg border border-blue-500/30'>
              <p className='text-center text-blue-300 font-semibold text-sm md:text-base leading-tight'>
                Catches bugs, validates code quality
              </p>
            </div>
          </div>

          {/* NON-CUSTODIAL ARCHITECTURE */}
          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-4 md:p-8'>
            <div className='text-center mb-4 md:mb-6'>
              <Icon name='lock' size={48} className='text-purple-400 mx-auto mb-2 md:mb-4' />
              <h3 className='text-lg md:text-2xl font-bold text-purple-300'>
                Non-Custodial Architecture
              </h3>
            </div>

            <div className='space-y-2 md:space-y-4 text-xs md:text-sm text-gray-300 mb-4 md:mb-6'>
              <div className='flex gap-2 items-start'>
                <span className='text-purple-400 flex-shrink-0 mt-0.5'>✓</span>
                <span className='leading-tight'><strong className='text-white'>You control:</strong> Vault shares at all times</span>
              </div>
              <div className='flex gap-2 items-start'>
                <span className='text-purple-400 flex-shrink-0 mt-0.5'>✓</span>
                <span className='leading-tight'><strong className='text-white'>Multi-sig:</strong> 3-of-5 governance threshold</span>
              </div>
              <div className='flex gap-2 items-start'>
                <span className='text-purple-400 flex-shrink-0 mt-0.5'>✓</span>
                <span className='leading-tight'><strong className='text-white'>Timelocks:</strong> 48-hour delay on changes</span>
              </div>
              <div className='flex gap-2 items-start'>
                <span className='text-purple-400 flex-shrink-0 mt-0.5'>✓</span>
                <span className='leading-tight'><strong className='text-white'>Emergency pause:</strong> 24/7 Tenderly monitoring</span>
              </div>
            </div>

            <div className='bg-purple-900/30 p-3 md:p-4 rounded-lg border border-purple-500/30'>
              <p className='text-center text-purple-300 font-semibold text-sm md:text-base leading-tight'>
                Eliminates counterparty risk
              </p>
            </div>
          </div>

          {/* INSURANCE BACKING */}
          <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-4 md:p-8'>
            <div className='text-center mb-4 md:mb-6'>
              <Icon name='check' size={48} className='text-green-400 mx-auto mb-2 md:mb-4' />
              <h3 className='text-lg md:text-2xl font-bold text-green-300'>
                Insurance Backing
              </h3>
            </div>

            <div className='space-y-2 md:space-y-4 text-xs md:text-sm text-gray-300 mb-4 md:mb-6'>
              <div className='flex gap-2 items-start'>
                <span className='text-green-400 flex-shrink-0 mt-0.5'>✓</span>
                <span className='leading-tight'><strong className='text-white'>InsurAce coverage:</strong> 100% of vault TVL insured</span>
              </div>
              <div className='flex gap-2 items-start'>
                <span className='text-green-400 flex-shrink-0 mt-0.5'>✓</span>
                <span className='leading-tight'><strong className='text-white'>Covers:</strong> Exploits, protocol failures, depegs</span>
              </div>
              <div className='flex gap-2 items-start'>
                <span className='text-green-400 flex-shrink-0 mt-0.5'>✓</span>
                <span className='leading-tight'><strong className='text-white'>Claims:</strong> 2-3 day processing by third party</span>
              </div>
              <div className='flex gap-2 items-start'>
                <span className='text-green-400 flex-shrink-0 mt-0.5'>✓</span>
                <span className='leading-tight'><strong className='text-white'>Premium:</strong> Included in management fee</span>
              </div>
            </div>

            <div className='bg-green-900/30 p-3 md:p-4 rounded-lg border border-green-500/30'>
              <p className='text-center text-green-300 font-semibold text-sm md:text-base leading-tight'>
                Transfers risk; actual loss protection
              </p>
            </div>
          </div>
        </ThreeColumnGrid>

        <div className='max-w-5xl mx-auto'>
          <div className='bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-blue-500/50 rounded-xl p-4 md:p-8'>
            <h3 className='text-lg md:text-2xl font-bold text-center mb-4 md:mb-6 text-white'>
              = Institutional-Grade Risk Management
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 text-center text-xs md:text-sm text-gray-300'>
              <div>
                <div className='text-blue-400 font-bold text-base md:text-lg mb-1 md:mb-2'>Audits</div>
                <div className='leading-tight'>Catch bugs before deployment</div>
              </div>
              <div>
                <div className='text-purple-400 font-bold text-base md:text-lg mb-1 md:mb-2'>Non-Custodial</div>
                <div className='leading-tight'>Prevent internal misuse</div>
              </div>
              <div>
                <div className='text-green-400 font-bold text-base md:text-lg mb-1 md:mb-2'>Insurance</div>
                <div className='leading-tight'>Cover remaining risks</div>
              </div>
            </div>
            <p className='text-center text-gray-400 text-xs md:text-sm mt-4 md:mt-6 leading-tight'>
              Risk reduction framework designed for CFO approval
            </p>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}
