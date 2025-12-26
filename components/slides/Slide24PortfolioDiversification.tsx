"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import TwoColumnGrid from "@/components/TwoColumnGrid"

export default function Slide24PortfolioDiversification() {
  return (
    <Slide id={27} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-8 text-center'>
          MONOLITH IN A DIVERSIFIED PORTFOLIO
        </Title>
        <Subtitle size='md' className='mb-12 text-center'>
          How Monolith fits alongside traditional allocations
        </Subtitle>

        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
            Typical Institutional Portfolio Mix
          </h2>

          <div className='overflow-x-auto mb-8'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='bg-gray-800 text-white'>
                  <th className='p-3 text-left'>Asset Class</th>
                  <th className='p-3 text-left'>Normal Yield</th>
                  <th className='p-3 text-left'>Crisis Behavior</th>
                  <th className='p-3 text-left'>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-700'>
                  <td className='p-3 font-semibold'>Equities</td>
                  <td className='p-3'>8-12%</td>
                  <td className='p-3 text-red-400'>-30-50% drawdown</td>
                  <td className='p-3'>Growth</td>
                </tr>
                <tr className='border-b border-gray-700'>
                  <td className='p-3 font-semibold'>Corporate Bonds</td>
                  <td className='p-3'>4-6%</td>
                  <td className='p-3 text-orange-400'>Default risk spikes</td>
                  <td className='p-3'>Income</td>
                </tr>
                <tr className='border-b border-gray-700'>
                  <td className='p-3 font-semibold'>Government Bonds</td>
                  <td className='p-3'>3-4%</td>
                  <td className='p-3 text-green-400'>Flight to safety (good)</td>
                  <td className='p-3'>Hedge</td>
                </tr>
                <tr className='border-b border-gray-700'>
                  <td className='p-3 font-semibold'>Gold</td>
                  <td className='p-3'>0% + storage</td>
                  <td className='p-3 text-yellow-400'>Uncertain (±20%)</td>
                  <td className='p-3'>Inflation hedge</td>
                </tr>
                <tr className='border-b border-gray-700'>
                  <td className='p-3 font-semibold'>Cash/MMAs</td>
                  <td className='p-3'>0.5-1% (now)</td>
                  <td className='p-3 text-red-400'>0.10% (crisis)</td>
                  <td className='p-3'>Liquidity</td>
                </tr>
                <tr className='border-b border-gray-700 bg-green-900/20'>
                  <td className='p-3 font-bold text-green-300'>MONOLITH</td>
                  <td className='p-3 font-bold text-green-400'>3-5%</td>
                  <td className='p-3 font-bold text-green-400'>2-4% maintained</td>
                  <td className='p-3 font-bold text-green-400'>Crisis yield + liquidity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
            10% Monolith Allocation in $100M Portfolio
          </h2>
          <p className='text-lg md:text-xl mb-6 text-center text-gray-300'>Crisis Scenario Comparison:</p>

          <TwoColumnGrid className='gap-8 mb-6'>
            <div className='bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/50 rounded-xl p-6'>
              <h3 className='text-xl font-bold mb-4 text-red-300 text-center'>
                Traditional 60/40 + Cash
              </h3>
              <div className='space-y-2 text-sm text-gray-300'>
                <p><span className='font-semibold'>60% Equities:</span> $60M × 8% = $4.8M normal | -30% = -$18M crisis</p>
                <p><span className='font-semibold'>30% Bonds:</span> $30M × 4% = $1.2M normal | $30M × 1% = $300K crisis</p>
                <p><span className='font-semibold'>10% Cash:</span> $10M × 0.5% = $50K normal | $10M × 0.10% = $10K crisis</p>
                <hr className='my-3 border-red-500/30' />
                <p className='font-bold text-base'>Normal: $6.05M income</p>
                <p className='font-bold text-base text-red-400'>Crisis: -$17.7M (net)</p>
              </div>
            </div>

            <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6'>
              <h3 className='text-xl font-bold mb-4 text-green-300 text-center'>
                WITH 10% MONOLITH
              </h3>
              <div className='space-y-2 text-sm text-gray-300'>
                <p><span className='font-semibold'>60% Equities:</span> $60M × 8% = $4.8M normal | -30% = -$18M crisis</p>
                <p><span className='font-semibold'>30% Bonds:</span> $30M × 4% = $1.2M normal | $30M × 1% = $300K crisis</p>
                <p><span className='font-semibold text-green-400'>10% MONOLITH:</span> $10M × 4% = $400K normal | $10M × 3% = $300K crisis</p>
                <hr className='my-3 border-green-500/30' />
                <p className='font-bold text-base text-green-400'>Normal: $6.4M income</p>
                <p className='font-bold text-base text-green-400'>Crisis: -$17.4M (net) | $300K better!</p>
              </div>
            </div>
          </TwoColumnGrid>

          <div className='p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-xl'>
            <p className='text-lg md:text-xl font-semibold text-center text-blue-400'>
              Key insight: Monolith doesn't replace equities or bonds. It replaces the cash/MMA allocation that earns nothing in crises.
            </p>
          </div>
        </div>

        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
            Why Monolith vs Other Crisis-Resilient Allocations
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6'>
              <h4 className='text-lg font-bold mb-4 text-blue-400 text-center'>vs Gold</h4>
              <div className='space-y-2 text-sm text-gray-300'>
                <p><span className='font-semibold'>Normal yield:</span> Gold: 0% + storage (-0.5%) | Monolith: 3-5%</p>
                <p><span className='font-semibold'>Crisis:</span> Gold: Uncertain (±20%) | Monolith: 2-4% maintained</p>
                <p><span className='font-semibold'>Liquidity:</span> Gold: T+2, spread costs | Monolith: 24/7 instant</p>
                <p className='text-green-400 font-semibold mt-3'>✓ Monolith wins: Positive carry + predictable</p>
              </div>
            </div>

            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6'>
              <h4 className='text-lg font-bold mb-4 text-blue-400 text-center'>vs Long Gov Bonds</h4>
              <div className='space-y-2 text-sm text-gray-300'>
                <p><span className='font-semibold'>Normal yield:</span> Bonds: 3-4% | Monolith: 3-5%</p>
                <p><span className='font-semibold'>Crisis:</span> Bonds: Good if rates fall | Monolith: 2-4% always</p>
                <p><span className='font-semibold'>Duration risk:</span> Bonds: Gets crushed if rates spike | Monolith: Zero</p>
                <p className='text-green-400 font-semibold mt-3'>✓ Monolith wins: Similar yield, no duration risk</p>
              </div>
            </div>

            <div className='bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6'>
              <h4 className='text-lg font-bold mb-4 text-blue-400 text-center'>vs Private Credit</h4>
              <div className='space-y-2 text-sm text-gray-300'>
                <p><span className='font-semibold'>Normal yield:</span> Private: 6-10% | Monolith: 3-5%</p>
                <p><span className='font-semibold'>Crisis:</span> Private: Default risk spikes | Monolith: 2-4% maintained</p>
                <p><span className='font-semibold'>Liquidity:</span> Private: Locked 3-7 years | Monolith: Instant</p>
                <p className='text-green-400 font-semibold mt-3'>✓ Monolith wins: Lower yield but zero correlation + instant liquidity</p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-green-500/50 rounded-xl p-8'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
            The Honest Pitch to Institutional Investors
          </h2>

          <blockquote className='text-base text-gray-300 space-y-3'>
            <p>"You already diversify. You don't need us to tell you that.</p>

            <p>What you don't have is a crisis-resilient yield asset that:</p>
            <ul className='list-disc ml-8 space-y-1'>
              <li>Earns 3-5% while you wait for the crisis</li>
              <li>Maintains 2-4% when traditional yields collapse</li>
              <li>Has zero correlation to TradFi (truly diversifying)</li>
              <li>Provides 24/7 liquidity (unlike private credit)</li>
              <li>Has positive carry (unlike gold or options)</li>
            </ul>

            <p>The $20M pilot isn't 'betting on crypto.' It's optimizing the 10% cash allocation that currently earns nothing in a crisis.</p>

            <p className='font-semibold text-green-400'>If we're right, you add $500K-$1M annually to portfolio returns AND have a differentiated story when the next crisis hits.</p>

            <p className='font-semibold text-blue-400'>If we're wrong, you've tested with 4% of AUM in a fully liquid, insured, non-custodial structure and can exit anytime."</p>
          </blockquote>
        </div>
      </SlideContent>
    </Slide>
  )
}
