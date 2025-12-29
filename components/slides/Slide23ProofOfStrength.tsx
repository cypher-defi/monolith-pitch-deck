"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import Subtitle from "@/components/Subtitle"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"

export default function Slide23ProofOfStrength() {
  return (
    <Slide id={28} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-8 text-center'>
          APPENDIX E-3: PROTOCOL RESILIENCE - BATTLE-TESTED INFRASTRUCTURE
        </Title>
        <Subtitle size='md' className='mb-12 text-center'>
          Empirical evidence of protocol stability through multiple market cycles
        </Subtitle>

        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
            Aave: Battle-Tested Through Multiple Market Cycles
          </h2>

          <ThreeColumnGrid className='gap-6 mb-8'>
            <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6'>
              <h3 className='text-xl font-bold mb-3 text-blue-300 text-center'>
                March 2020 (COVID Crash)
              </h3>
              <ul className='space-y-2 text-sm text-gray-300'>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-blue-400 flex-shrink-0'>•</span>
                  <span><span className='font-semibold'>ETH price:</span> $90 → $3,500</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-blue-400 flex-shrink-0'>•</span>
                  <span><span className='font-semibold'>Liquidations:</span> $26M in 24 hours</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span><span className='font-semibold'>Stability:</span> 100% uptime, zero losses</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span><span className='font-semibold text-green-400'>USDC yield:</span> 4-8% (during crypto bull cycle)</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-blue-400 flex-shrink-0'>•</span>
                  <span><span className='font-semibold'>TVL:</span> $500M → $20B post-crisis</span>
                </li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6'>
              <h3 className='text-xl font-bold mb-3 text-purple-300 text-center'>
                May 2022 (Terra/LUNA Collapse)
              </h3>
              <ul className='space-y-2 text-sm text-gray-300'>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>•</span>
                  <span><span className='font-semibold'>Market cap loss:</span> $60B evaporated</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>•</span>
                  <span><span className='font-semibold'>Contagion:</span> Celsius, 3AC, Voyager failed</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span><span className='font-semibold text-green-400'>Aave response:</span> Zero losses</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span><span className='font-semibold text-green-400'>Yield:</span> 3-6% maintained (CeFi froze)</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-purple-400 flex-shrink-0'>•</span>
                  <span><span className='font-semibold'>TVL:</span> Stable $10B+ (CeFi lost 80%)</span>
                </li>
              </ul>
            </div>

            <div className='bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/50 rounded-xl p-6'>
              <h3 className='text-xl font-bold mb-3 text-red-300 text-center'>
                Nov 2022 (FTX Collapse)
              </h3>
              <ul className='space-y-2 text-sm text-gray-300'>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>•</span>
                  <span><span className='font-semibold'>Systemic shock:</span> $32B bankruptcy</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>•</span>
                  <span><span className='font-semibold'>Industry panic:</span> Mass withdrawals</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span><span className='font-semibold text-green-400'>Aave stability:</span> Zero downtime</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-green-400 flex-shrink-0'>✓</span>
                  <span><span className='font-semibold text-green-400'>USDC yield:</span> 4-6% maintained</span>
                </li>
                <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                  <span className='text-red-400 flex-shrink-0'>•</span>
                  <span><span className='font-semibold'>Exchanges:</span> Halted withdrawals</span>
                </li>
              </ul>
            </div>
          </ThreeColumnGrid>

          <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6 text-center'>
            <h4 className='text-xl md:text-2xl font-bold mb-3 text-green-300'>Current Stats (Dec 2025)</h4>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300'>
              <div><span className='font-semibold text-green-400'>TVL:</span> $40B+ (largest DeFi protocol)</div>
              <div><span className='font-semibold text-green-400'>Uptime:</span> 99.99% since 2020</div>
              <div><span className='font-semibold text-green-400'>Exploits:</span> Zero on core protocol</div>
              <div><span className='font-semibold text-green-400'>Years live:</span> 5+ without major incident</div>
            </div>
          </div>
        </div>

        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>
            The Data: DeFi Protocols vs Traditional Institutions
          </h2>

          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-sm'>
              <thead>
                <tr className='bg-gray-800 text-white'>
                  <th className='p-3 text-left'>Institution Type</th>
                  <th className='p-3 text-left'>Failures (2020-2024)</th>
                  <th className='p-3 text-left'>Assets Lost</th>
                  <th className='p-3 text-left'>Recovery Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-700 bg-red-900/20'>
                  <td className='p-3 font-semibold text-red-300'>Major Banks</td>
                  <td className='p-3'>3 (SVB, Signature, Credit Suisse)</td>
                  <td className='p-3 text-red-400'>$500B+</td>
                  <td className='p-3'>Months-years</td>
                </tr>
                <tr className='border-b border-gray-700 bg-orange-900/20'>
                  <td className='p-3 font-semibold text-orange-300'>CeFi (Celsius, FTX, Voyager)</td>
                  <td className='p-3'>10+</td>
                  <td className='p-3 text-red-400'>$50B+</td>
                  <td className='p-3'>Bankruptcy, zero recovery</td>
                </tr>
                <tr className='border-b border-gray-700 bg-green-900/20'>
                  <td className='p-3 font-bold text-green-300'>DeFi Protocols (Aave, Curve, etc)</td>
                  <td className='p-3 font-bold text-green-400'>0 core failures</td>
                  <td className='p-3 font-bold text-green-400'>$0 core protocol losses</td>
                  <td className='p-3 font-bold text-green-400'>N/A (no downtime)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl'>
            <p className='text-xl md:text-2xl font-bold text-center text-green-400 mb-4'>
              Battle-tested DeFi protocols have maintained uptime and solvency through multiple market cycles.
            </p>
            <h3 className='text-lg md:text-xl font-bold mb-4 text-center'>Why DeFi Protocol Resilience?</h3>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300'>
              <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                <span className='text-green-400 flex-shrink-0'>✓</span>
                <span><span className='font-semibold'>Transparency:</span> All transactions on-chain, real-time auditing</span>
              </li>
              <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                <span className='text-green-400 flex-shrink-0'>✓</span>
                <span><span className='font-semibold'>Non-custodial:</span> No Alameda-style misappropriation possible</span>
              </li>
              <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                <span className='text-green-400 flex-shrink-0'>✓</span>
                <span><span className='font-semibold'>Immutable code:</span> Predictable execution</span>
              </li>
              <li className='flex gap-2' style={{alignItems: 'baseline'}}>
                <span className='text-green-400 flex-shrink-0'>✓</span>
                <span><span className='font-semibold'>Collateralization:</span> All loans overcollateralized 110-150%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-blue-500/50 rounded-xl p-8'>
          <blockquote className='text-lg md:text-2xl italic text-center text-gray-300 border-l-4 border-green-500 pl-6'>
            "Diversification across 5 battle-tested protocols with 5+ year track records, insurance backing, and different correlation to traditional markets."
            <br />
            <br />
            <span className='text-green-400 font-bold not-italic'>Different risk profile, different return drivers - complementary to traditional allocations.</span>
          </blockquote>
        </div>
      </SlideContent>
    </Slide>
  )
}
