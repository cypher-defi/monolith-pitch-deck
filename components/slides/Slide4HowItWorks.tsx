"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"
import FourColumnGrid from "@/components/FourColumnGrid"
import Icon from "@/components/Icon"

export default function Slide4HowItWorks() {
  return (
    <Slide id={4} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-12 text-center'>
          HOW MONOLITH WORKS
        </Title>
        <Subtitle size='md' className='mb-16 text-center'>
          White-label infrastructure that takes institutions from 0 to live in 2
          weeks
        </Subtitle>

        {/* THREE CORE STEPS */}
        <div className='max-w-5xl mx-auto mb-16'>
          <ThreeColumnGrid className='gap-8'>
            {/* STEP 1 */}
            <div className='text-center'>
              <div className='inline-block p-6 rounded-full bg-blue-500/20 border-2 border-blue-500 mb-6'>
                <span className='text-5xl font-bold text-blue-400'>1</span>
              </div>
              <h3 className='text-2xl font-bold mb-4'>Choose Integration</h3>
              <p className='text-gray-400 text-lg leading-relaxed'>
                White-label dashboard, mobile app, or SDK - deploy to your
                infrastructure or ours
              </p>
              <div className='mt-4 text-sm text-gray-500 flex items-center justify-center gap-1'>
                <Icon name='lightning' size={16} className='text-yellow-400' />1
                day setup
              </div>
            </div>

            {/* STEP 2 */}
            <div className='text-center'>
              <div className='inline-block p-6 rounded-full bg-purple-500/20 border-2 border-purple-500 mb-6'>
                <span className='text-5xl font-bold text-purple-400'>2</span>
              </div>
              <h3 className='text-2xl font-bold mb-4'>Connect & Deploy</h3>
              <p className='text-gray-400 text-lg leading-relaxed'>
                One-click integrations to QuickBooks, Fireblocks, Bloomberg
                Terminal
              </p>
              <div className='mt-4 text-sm text-gray-500 flex items-center justify-center gap-1'>
                <Icon name='lightning' size={16} className='text-yellow-400' />1
                week integration
              </div>
            </div>

            {/* STEP 3 */}
            <div className='text-center'>
              <div className='inline-block p-6 rounded-full bg-green-500/20 border-2 border-green-500 mb-6'>
                <span className='text-5xl font-bold text-green-400'>3</span>
              </div>
              <h3 className='text-2xl font-bold mb-4'>Go Live</h3>
              <p className='text-gray-400 text-lg leading-relaxed'>
                Customers deposit stablecoins and start earning yield
                automatically
              </p>
              <div className='mt-4 text-sm text-gray-500 flex items-center justify-center gap-1'>
                <Icon name='lightning' size={16} className='text-yellow-400' />
                Live in 2 weeks total
              </div>
            </div>
          </ThreeColumnGrid>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className='max-w-5xl mx-auto mb-12'>
          <h3 className='text-2xl font-bold text-center mb-8 text-white'>
            What Monolith Delivers
          </h3>
          <FourColumnGrid className='gap-6'>
            <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6 text-center'>
              <Icon
                name='window'
                size={32}
                className='text-blue-400 mx-auto mb-3'
              />
              <h4 className='font-bold text-white mb-2'>Portfolio Dashboard</h4>
              <p className='text-sm text-gray-400'>
                Real-time tracking of yields and allocations
              </p>
            </div>
            <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6 text-center'>
              <Icon
                name='trending'
                size={32}
                className='text-purple-400 mx-auto mb-3'
              />
              <h4 className='font-bold text-white mb-2'>
                Performance Analytics
              </h4>
              <p className='text-sm text-gray-400'>
                Deep insights into returns and risk metrics
              </p>
            </div>
            <div className='bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6 text-center'>
              <Icon
                name='shield'
                size={32}
                className='text-amber-400 mx-auto mb-3'
              />
              <h4 className='font-bold text-white mb-2'>Risk Monitoring</h4>
              <p className='text-sm text-gray-400'>
                24/7 monitoring with automated safeguards
              </p>
            </div>
            <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6 text-center'>
              <Icon
                name='clipboard'
                size={32}
                className='text-green-400 mx-auto mb-3'
              />
              <h4 className='font-bold text-white mb-2'>
                Compliance Reporting
              </h4>
              <p className='text-sm text-gray-400'>
                Automated audit trails and tax reporting
              </p>
            </div>
          </FourColumnGrid>
        </div>

        {/* KEY BENEFITS */}
        <div className='max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-blue-500/50 rounded-xl'>
          <p className='text-white text-xl font-semibold text-center mb-6'>
            Institutions get everything they need. Nothing they don't.
          </p>
          <div className='grid grid-cols-2 gap-6'>
            <div className='flex items-center gap-3'>
              <Icon
                name='check'
                size={24}
                className='text-green-400 flex-shrink-0'
              />
              <span>Live in 2 weeks, not 6 months</span>
            </div>
            <div className='flex items-center gap-3'>
              <Icon
                name='check'
                size={24}
                className='text-green-400 flex-shrink-0'
              />
              <span>Built-in compliance & security</span>
            </div>
            <div className='flex items-center gap-3'>
              <Icon
                name='check'
                size={24}
                className='text-green-400 flex-shrink-0'
              />
              <span>Managed infrastructure & ops</span>
            </div>
            <div className='flex items-center gap-3'>
              <Icon
                name='check'
                size={24}
                className='text-green-400 flex-shrink-0'
              />
              <span>Ready-to-deploy, not custom-built</span>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}
