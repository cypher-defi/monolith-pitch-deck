"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"

export default function Slide21CrisisComing() {
  return (
    <Slide id={25} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-8 text-center'>
          THE COMING TREASURY CRISIS
        </Title>
        <Subtitle size='md' className='mb-12 text-center'>
          When rates collapse, institutions lose twice
        </Subtitle>

        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
            What Happens in the Next Crisis?
          </h2>

          <ThreeColumnGrid className='gap-6 mb-8'>
            <div className='bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/50 rounded-xl p-6'>
              <h3 className='text-xl md:text-2xl font-semibold mb-4 text-red-300 text-center'>
                2008 Financial Crisis
              </h3>
              <ul className='space-y-2 text-sm text-gray-300'>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>•</span>
                  <span>Fed cuts to near 0%</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>•</span>
                  <span>Bank savings: 0.10-0.50% APY</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>•</span>
                  <span>Duration: 10+ years (2008-2018)</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>•</span>
                  <span>Corporate treasuries earned effectively ZERO</span>
                </li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-orange-500/20 to-orange-500/5 border-2 border-orange-500/50 rounded-xl p-6'>
              <h3 className='text-xl md:text-2xl font-semibold mb-4 text-orange-300 text-center'>
                2020 COVID Crisis
              </h3>
              <ul className='space-y-2 text-sm text-gray-300'>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-orange-400 flex-shrink-0'>•</span>
                  <span>Fed cuts to near 0%</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-orange-400 flex-shrink-0'>•</span>
                  <span>Bank savings: 0.06-0.10% APY</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-orange-400 flex-shrink-0'>•</span>
                  <span>Duration: 2+ years</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-orange-400 flex-shrink-0'>•</span>
                  <span>Same pattern repeated</span>
                </li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border-2 border-yellow-500/50 rounded-xl p-6'>
              <h3 className='text-xl md:text-2xl font-semibold mb-4 text-yellow-300 text-center'>
                2026-2027? (Next Recession)
              </h3>
              <ul className='space-y-2 text-sm text-gray-300'>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-yellow-400 flex-shrink-0'>•</span>
                  <span>Fed cuts to 0-0.5%</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-yellow-400 flex-shrink-0'>•</span>
                  <span>Bank savings: &lt;0.50% APY</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-yellow-400 flex-shrink-0'>•</span>
                  <span>Duration: Unknown</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 font-bold flex-shrink-0'>•</span>
                  <span className='font-bold text-red-400'>Are you prepared?</span>
                </li>
              </ul>
            </div>
          </ThreeColumnGrid>
        </div>

        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
            The 2020 Anomaly: DeFi Held Strong
          </h2>
          <p className='text-lg md:text-xl mb-6 text-center text-gray-300'>
            While traditional banks paid 0.10%, DeFi protocols maintained yields:
          </p>

          <ThreeColumnGrid className='gap-6 mb-6'>
            <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6 text-center'>
              <p className='text-lg font-semibold mb-2 text-gray-300'>Aave USDC</p>
              <p className='text-3xl md:text-4xl font-bold text-green-400'>4-8%</p>
              <p className='text-sm text-gray-400 mt-2'>sustained throughout crisis</p>
            </div>
            <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6 text-center'>
              <p className='text-lg font-semibold mb-2 text-gray-300'>Compound</p>
              <p className='text-4xl font-bold text-green-400'>4-6%</p>
              <p className='text-sm text-gray-400 mt-2'>sustained throughout crisis</p>
            </div>
            <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6 text-center'>
              <p className='text-lg font-semibold mb-2 text-gray-300'>MakerDAO DSR</p>
              <p className='text-4xl font-bold text-green-400'>3-8%</p>
              <p className='text-sm text-gray-400 mt-2'>sustained throughout crisis</p>
            </div>
          </ThreeColumnGrid>

          <div className='p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl'>
            <p className='text-lg md:text-xl font-bold text-center text-green-400 mb-2'>
              DeFi yields maintained 10-50x premiums throughout the 2020 crisis
            </p>
            <p className='text-center text-gray-400'>
              Why? Utilization-based pricing, not Fed-dependent rates.
            </p>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}
