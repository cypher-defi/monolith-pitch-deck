"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import Card from "@/components/Card"
import CardTitle from "@/components/CardTitle"
import CardContent from "@/components/CardContent"
import Icon from "@/components/Icon"

export default function Slide10Founders() {
  return (
    <Slide id={13} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-16 text-center'>
          THE FOUNDERS: Built Different
        </Title>

        <Subtitle size='md' className='mb-12 text-center'>
          Enterprise infrastructure + DeFi protocol expertise
        </Subtitle>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          {/* Antonio */}
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8'>
            <div className='flex items-center gap-4 mb-6'>
              <Icon
                name='user'
                size={48}
                className='text-blue-400 flex-shrink-0'
              />
              <div>
                <h3 className='text-2xl font-bold'>Antonio Rapozo</h3>
                <div className='text-blue-300'>Technical Co-Founder</div>
              </div>
            </div>

            <h4 className='font-bold text-lg mb-4 text-blue-300'>
              Enterprise Infrastructure Expert
            </h4>

            <ul className='space-y-2 text-sm text-gray-300 mb-6'>
              <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                <span className='text-blue-400 flex-shrink-0'>
                  ✓
                </span>
                <span>AWS Solutions Architect Professional</span>
              </li>

              <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                <span className='text-blue-400 flex-shrink-0'>
                  ✓
                </span>
                <span>4+ years: 15+ State DOTs, $500M+ systems</span>
              </li>

              <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                <span className='text-blue-400 flex-shrink-0'>
                  ✓
                </span>
                <span>Federal compliance expertise</span>
              </li>
            </ul>

            <p className='italic text-blue-200 text-sm border-t border-blue-500/30 pt-4'>
              "We understand what institutions need to trust a platform with
              real capital."
            </p>
          </div>

          {/* Enrique */}
          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-8'>
            <div className='flex items-center gap-4 mb-6'>
              <Icon
                name='user'
                size={48}
                className='text-purple-400 flex-shrink-0'
              />
              <div>
                <h3 className='text-2xl font-bold'>Enrique Ibarra</h3>
                <div className='text-purple-300'>Protocol Co-Founder</div>
              </div>
            </div>

            <h4 className='font-bold text-lg mb-4 text-purple-300'>
              DeFi Protocol Expert
            </h4>

            <ul className='space-y-2 text-sm text-gray-300 mb-6'>
              <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                <span className='text-purple-400 flex-shrink-0'>
                  ✓
                </span>
                <span>3+ years Solidity development</span>
              </li>

              <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                <span className='text-purple-400 flex-shrink-0'>
                  ✓
                </span>
                <span>Built 10+ DeFi protocols & integrations</span>
              </li>

              <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                <span className='text-purple-400 flex-shrink-0'>
                  ✓
                </span>
                <span>Aave / Morpho / Curve mainnet experience</span>
              </li>
            </ul>

            <p className='italic text-purple-200 text-sm border-t border-purple-500/30 pt-4'>
              "We've built this infrastructure multiple times. We know the
              complexity."
            </p>
          </div>
        </div>

        <div className='max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-xl mb-8'>
          <p className='text-center italic text-gray-200 text-lg'>
            "We're technical enough to build production smart contracts. We're
            experienced enough to sell to enterprises. Most teams have one or
            the other. We have both."
          </p>
        </div>

        <div className='p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg text-center'>
          <p className='text-blue-300 font-medium'>
            Enterprise + DeFi = unfair advantage.
          </p>
        </div>
      </SlideContent>
    </Slide>
  )
}
