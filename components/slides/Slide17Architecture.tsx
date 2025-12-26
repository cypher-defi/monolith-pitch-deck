"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import Card from "@/components/Card"
import FourColumnGrid from "@/components/FourColumnGrid"

export default function Slide17Architecture() {
  return (
    <Slide id={20} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-16 text-center'>
          APPENDIX A: B2B WHITE-LABEL ARCHITECTURE
        </Title>
        <Subtitle size='sm' className='mb-8 text-center'>
          Multi-tenant infrastructure enabling asset managers to deploy yield
          products in weeks, not months
        </Subtitle>

        <div className='max-w-5xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-xl mb-8'>
          <h3 className='text-xl font-bold text-blue-300 mb-3'>
            Strategic Pivot: Infrastructure-as-a-Service for Asset Managers
          </h3>
          <div className='space-y-2 text-gray-300'>
            <p>
              <strong>Model:</strong> White-label SDK enabling funds to offer
              DeFi yield to their clients under their own brand
            </p>
            <p>
              <strong>Revenue:</strong> SaaS licensing ($2K-15K/month) +
              implementation fees ($10K-75K) + 0.1% AUM revenue share
            </p>
            <p>
              <strong>Distribution:</strong> One fund with 500 clients = 500
              retail users instantly (vs 12-month individual acquisition)
            </p>
          </div>
        </div>

        <FourColumnGrid className='mb-8 gap-6'>
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6 text-center'>
            <div className='text-5xl font-bold text-blue-400 mb-2'>2 weeks</div>
            <div className='text-gray-300 font-semibold mb-2'>
              Integration Time
            </div>
            <div className='text-xs text-gray-500'>
              vs 6-12 months to build in-house
            </div>
          </div>

          <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6 text-center'>
            <div className='text-5xl font-bold text-green-400 mb-2'>$25K</div>
            <div className='text-gray-300 font-semibold mb-2'>
              Implementation Fee
            </div>
            <div className='text-xs text-gray-500'>
              vs $500K-2M to build from scratch
            </div>
          </div>

          <div className='bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6 text-center'>
            <div className='text-5xl font-bold text-amber-400 mb-2'>85%+</div>
            <div className='text-gray-300 font-semibold mb-2'>
              Gross Margins
            </div>
            <div className='text-xs text-gray-500'>
              Serverless cost structure advantage
            </div>
          </div>

          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6 text-center'>
            <div className='text-5xl font-bold text-purple-400 mb-2'>20x</div>
            <div className='text-gray-300 font-semibold mb-2'>
              Faster Distribution
            </div>
            <div className='text-xs text-gray-500'>
              Leverage fund's existing clients
            </div>
          </div>
        </FourColumnGrid>

        <div className='p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg'>
          <p className='text-blue-300 text-center'>
            <strong>
              B2B white-label model leverages our serverless architecture
              perfectly:
            </strong>{" "}
            Multi-tenancy via DynamoDB partitioning, per-fund cost tracking
            built-in, React Native SDK enables rapid integration, non-custodial
            reduces liability, and serverless cost structure allows 85%+
            margins.
          </p>
        </div>
      </SlideContent>
    </Slide>
  )
}
