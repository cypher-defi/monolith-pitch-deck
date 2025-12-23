"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import Icon from "@/components/Icon"

export default function Slide16AppendixDivider() {
  return (
    <Slide
      id={16}
      background='bg-gradient-to-br from-black via-zinc-900 to-black'
    >
      <SlideContent className='text-center flex flex-col justify-center items-center min-h-[calc(100vh-180px)]'>
        <Title size='xl' className='mb-10 text-blue-400'>
          APPENDIX
        </Title>
        <Subtitle size='lg' className='mb-16'>
          Additional Technical & Strategic Details
        </Subtitle>

        <div className='grid grid-cols-2 gap-6 max-w-3xl'>
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6 text-center'>
            <Icon
              name='code'
              size={40}
              className='text-blue-400 mx-auto mb-3'
            />
            <h3 className='font-bold text-white mb-2'>
              A. Technical Architecture
            </h3>
            <p className='text-sm text-gray-400'>
              Smart contract design & deployment
            </p>
          </div>

          <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6 text-center'>
            <Icon
              name='shield'
              size={40}
              className='text-green-400 mx-auto mb-3'
            />
            <h3 className='font-bold text-white mb-2'>B. Security Framework</h3>
            <p className='text-sm text-gray-400'>
              Audit & risk management strategy
            </p>
          </div>

          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6 text-center'>
            <Icon
              name='document'
              size={40}
              className='text-purple-400 mx-auto mb-3'
            />
            <h3 className='font-bold text-white mb-2'>
              C. Regulatory Strategy
            </h3>
            <p className='text-sm text-gray-400'>
              Jurisdiction & compliance options
            </p>
          </div>

          <div className='bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6 text-center'>
            <Icon
              name='chart'
              size={40}
              className='text-amber-400 mx-auto mb-3'
            />
            <h3 className='font-bold text-white mb-2'>D. 3-Year Projections</h3>
            <p className='text-sm text-gray-400'>Financial model & scenarios</p>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}
