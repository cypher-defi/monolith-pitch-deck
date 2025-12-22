"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import Icon from "@/components/Icon"

export default function Slide15ThankYou() {
  return (
    <Slide
      id={15}
      background='bg-gradient-to-br from-black via-zinc-900 to-black'
    >
      <SlideContent className='text-center flex flex-col justify-center items-center min-h-[calc(100vh-180px)]'>
        <Title size='xl' className='mb-10 text-blue-400'>
          THANK YOU
        </Title>
        <Subtitle size='lg' className='mb-16'>
          Questions & Discussion
        </Subtitle>

        <div className='space-y-8 max-w-3xl w-full px-4'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-gradient-to-r from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl'>
            <Icon
              name='email'
              size={32}
              className='text-blue-400 flex-shrink-0'
            />
            <div>
              <p className='text-sm text-gray-400'>Email</p>
              <p className='text-xl text-white font-semibold break-words'>
                founders@monolith.finance
              </p>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-gradient-to-r from-purple-500/10 to-purple-500/5 border-2 border-purple-500/50 rounded-xl'>
            <Icon
              name='globe'
              size={32}
              className='text-purple-400 flex-shrink-0'
            />
            <div>
              <p className='text-sm text-gray-400'>Demo</p>
              <a
                href='https://monolith-dashboard-beta.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xl text-purple-400 hover:text-purple-300 transition-colors underline break-all font-semibold'
              >
                monolith-dashboard-beta.vercel.app
              </a>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-gradient-to-r from-green-500/10 to-green-500/5 border-2 border-green-500/50 rounded-xl'>
            <Icon
              name='folder'
              size={32}
              className='text-green-400 flex-shrink-0'
            />
            <div>
              <p className='text-sm text-gray-400'>Data Room</p>
              <p className='text-xl text-white font-semibold'>
                Available upon request
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}
