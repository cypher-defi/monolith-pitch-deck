"use client"

import Slide from "@/components/Slide"
import SlideContent from "@/components/SlideContent"
import Title from "@/components/Title"
import ThreeColumnGrid from "@/components/ThreeColumnGrid"
import FourColumnGrid from "@/components/FourColumnGrid"

export default function Slide20Projections() {
  return (
    <Slide id={20} background='bg-black'>
      <SlideContent>
        <Title size='lg' className='mb-16 text-center'>
          APPENDIX D: 3-YEAR FINANCIAL PROJECTIONS
        </Title>

        <ThreeColumnGrid className='mb-12 gap-8'>
          {/* YEAR 1 */}
          <div className='bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8'>
            <h3 className='text-blue-300 text-3xl mb-6 text-center font-bold'>
              Year 1
            </h3>

            <div className='space-y-4 text-center'>
              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  AUM Growth
                </p>
                <p className='text-3xl font-bold text-yellow-400'>
                  $20M → $100M
                </p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Revenue
                </p>
                <p className='text-3xl font-bold text-blue-300'>$1.25M</p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Expenses
                </p>
                <p className='text-2xl font-bold text-green-400'>$1.6M</p>
                <div className='text-xs text-gray-400 mt-1'>
                  <div>
                    • Security (Insurance + Audits): $140K (at $100M AUM)
                  </div>
                  <div>• Engineering: $900K</div>
                  <div>• Operations & Infrastructure: $560K</div>
                </div>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>Net</p>
                <p className='text-2xl font-bold text-red-400'>($350K)</p>
                <p className='text-xs text-gray-500'>Seed capital covers gap</p>
                <p className='text-xs text-green-400 font-bold mt-1'>
                  Profitable by Month 12–15
                </p>
              </div>
            </div>
          </div>

          {/* YEAR 2 */}
          <div className='bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-8'>
            <h3 className='text-purple-300 text-3xl mb-6 text-center font-bold'>
              Year 2
            </h3>

            <div className='space-y-4 text-center'>
              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  AUM Growth
                </p>
                <p className='text-3xl font-bold text-yellow-400'>
                  $100M → $300–400M
                </p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Revenue
                </p>
                <p className='text-3xl font-bold text-purple-300'>$3.75–5M</p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Expenses
                </p>
                <p className='text-2xl font-bold text-green-400'>$1.7–2M</p>
                <div className='text-xs text-gray-400 mt-1'>
                  <div>
                    • Security (AUM-scaled): $240–320K (on $300–400M AUM)
                  </div>
                  <div>• Engineering: $1M</div>
                  <div>• Operations & Infrastructure: $460–680K</div>
                </div>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>Net</p>
                <p className='text-2xl font-bold text-green-500'>+$2–3.3M</p>
                <p className='text-xs text-green-400 font-bold'>
                  ✓ 5–6 Customers, Profitable
                </p>
                <p className='text-xs text-gray-500 mt-1'>
                  Series A ready (Month 18–20)
                </p>
              </div>
            </div>
          </div>

          {/* YEAR 3 */}
          <div className='bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-8'>
            <h3 className='text-green-300 text-3xl mb-6 text-center font-bold'>
              Year 3
            </h3>

            <div className='space-y-4 text-center'>
              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  AUM Growth
                </p>
                <p className='text-3xl font-bold text-yellow-400'>
                  $400M → $800M–1B
                </p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Revenue
                </p>
                <p className='text-3xl font-bold text-green-300'>$10–12.5M</p>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>
                  Expenses
                </p>
                <p className='text-2xl font-bold text-green-400'>$3.3–4.3M</p>
                <div className='text-xs text-gray-400 mt-1'>
                  <div>
                    • Security (AUM-scaled): $640–800K (on $800M–1B AUM)
                  </div>
                  <div>• Engineering: $1.5M</div>
                  <div>• Operations & Infrastructure: $1.2–1.8M</div>
                </div>
              </div>

              <div>
                <p className='text-gray-400 text-sm mb-2 font-medium'>Net</p>
                <p className='text-2xl font-bold text-green-500'>+$6–8.7M</p>
                <p className='text-xs text-green-400 font-bold'>
                  ✓ 8–10 Customers, 60–70% margin
                </p>
                <p className='text-xs text-gray-500 mt-1'>Series B ready</p>
              </div>
            </div>
          </div>
        </ThreeColumnGrid>

        <h3 className='text-2xl mb-6 text-blue-400 text-center'>
          Series A Target (Month 15–18)
        </h3>

        <FourColumnGrid className='mb-8'>
          <div className='text-center'>
            <div className='text-slate-400 mb-2 text-sm'>Raise</div>
            <div className='text-4xl font-bold'>$5–8M</div>
          </div>

          <div className='text-center'>
            <div className='text-slate-400 mb-2 text-sm'>Valuation</div>
            <div className='text-4xl font-bold'>$25–35M</div>
            <div className='text-sm text-slate-400'>pre-money</div>
          </div>

          <div className='text-center'>
            <div className='text-slate-400 mb-2 text-sm'>TVL Required</div>
            <div className='text-4xl font-bold'>$50M+</div>
          </div>

          <div className='text-center'>
            <div className='text-slate-400 mb-2 text-sm'>Revenue</div>
            <div className='text-4xl font-bold'>$750K+</div>
            <div className='text-sm text-slate-400'>annual run-rate</div>
          </div>
        </FourColumnGrid>

        <div className='p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg'>
          <p className='text-blue-300 text-lg text-center'>
            Projections assume conservative institutional adoption. Security,
            audit, and insurance costs scale linearly with AUM; monitoring
            infrastructure is embedded in core operating expenses.
          </p>
        </div>
      </SlideContent>
    </Slide>
  )
}
