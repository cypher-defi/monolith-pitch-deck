"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";

export default function Slide26_CashRunway() {
  return (
    <Slide id={24} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-8 text-center">
          APPENDIX D-5: CASH RUNWAY & PROFITABILITY MILESTONES
        </Title>

        <p className="text-gray-300 text-center mb-10 max-w-4xl mx-auto">
          We manage our capital efficiently against three key metrics
        </p>

        {/* THREE KEY METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {/* METRIC 1: CASH RUNWAY */}
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-amber-300 mb-4 text-center">
              Metric 1: Cash Runway
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Seed Capital:</span>
                <span className="text-white font-bold">$1.5-2M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Monthly Burn (early):</span>
                <span className="text-white font-bold">~$66K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Cash Runway:</span>
                <span className="text-white font-bold">20-24 months</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-amber-500/30">
              <p className="text-xs text-amber-300 text-center leading-tight">
                Sufficient runway to reach operating breakeven without follow-on funding
              </p>
            </div>
          </div>

          {/* METRIC 2: OPERATING BREAKEVEN */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-300 mb-4 text-center">
              Metric 2: Operating Breakeven
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Target AUM:</span>
                <span className="text-white font-bold">$60-80M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Expected Timeline:</span>
                <span className="text-white font-bold">~Month 12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Monthly Revenue:</span>
                <span className="text-white font-bold">~$75-100K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Monthly OpEx:</span>
                <span className="text-white font-bold">~$70-85K</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-500/30">
              <p className="text-xs text-blue-300 text-center leading-tight">
                Monthly revenue covers monthly operating costs
              </p>
            </div>
          </div>

          {/* METRIC 3: SERIES A READINESS */}
          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-300 mb-4 text-center">
              Metric 3: Series A Readiness
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Target AUM:</span>
                <span className="text-white font-bold">$150M+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Expected Timeline:</span>
                <span className="text-white font-bold">Month 18-20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Monthly Revenue:</span>
                <span className="text-white font-bold">$187K+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Monthly Operating Profit:</span>
                <span className="text-white font-bold">$100K+</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-green-500/30">
              <p className="text-xs text-green-300 text-center leading-tight">
                Clear, scalable unit economics story
              </p>
            </div>
          </div>
        </div>

        {/* PATH TO EACH MILESTONE */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            Path to Each Milestone
          </h3>

          <div className="space-y-6 max-w-6xl mx-auto">
            {/* MONTHS 1-6 */}
            <div className="bg-gradient-to-r from-red-500/10 to-red-500/5 border-l-4 border-red-500 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-red-300 mb-2">
                    Months 1-6: Product Launch & Pilot
                  </h4>
                  <p className="text-xs text-gray-400">
                    Complete product build, land first customer pilot
                  </p>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">AUM:</span>
                    <span className="text-white">$10M (one pilot)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Revenue:</span>
                    <span className="text-white">~$2.6K/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monthly burn:</span>
                    <span className="text-white">~$66K</span>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">Cumulative Cash Burned</div>
                    <div className="text-2xl font-bold text-red-300">~$394K</div>
                  </div>
                </div>
              </div>
            </div>

            {/* MONTHS 7-12 */}
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-500/5 border-l-4 border-amber-500 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-amber-300 mb-2">
                    Months 7-12: Early Traction & Scaling
                  </h4>
                  <p className="text-xs text-gray-400">
                    Add 2nd and 3rd customers, support customer growth
                  </p>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">AUM:</span>
                    <span className="text-white">$60M (3 customers)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Revenue:</span>
                    <span className="text-white">~$75K/month avg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monthly burn:</span>
                    <span className="text-white">~$70K/month</span>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">Cumulative Cash Burned</div>
                    <div className="text-2xl font-bold text-amber-300">~$676K</div>
                    <div className="text-xs text-green-400 mt-1 font-semibold">
                      Near breakeven by Month 12 ✓
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MONTHS 13-18 */}
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 border-l-4 border-blue-500 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-blue-300 mb-2">
                    Months 13-18: Operating Profitability
                  </h4>
                  <p className="text-xs text-gray-400">
                    Optimize customer onboarding, grow customer AUM
                  </p>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">AUM:</span>
                    <span className="text-white">$80-120M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Revenue:</span>
                    <span className="text-white">$100-150K/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monthly profit:</span>
                    <span className="text-green-400 font-bold">$20-65K/month</span>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">Status</div>
                    <div className="text-lg font-bold text-blue-300">Operating Profit ✓</div>
                    <div className="text-xs text-blue-400 mt-1">
                      Series A metrics becoming clear
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MONTHS 19-24 */}
            <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 border-l-4 border-green-500 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-lg font-bold text-green-300 mb-2">
                    Months 19-24: Growth & Series A Raise
                  </h4>
                  <p className="text-xs text-gray-400">
                    Prepare for Series A, add 4th-5th customer, optimize scaling
                  </p>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">AUM:</span>
                    <span className="text-white">$150-200M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Revenue:</span>
                    <span className="text-white">$187-300K/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monthly operating profit:</span>
                    <span className="text-green-400 font-bold">$100-200K/month</span>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">Series A Readiness</div>
                    <div className="text-lg font-bold text-green-300">Strong Unit Economics ✓</div>
                    <div className="text-xs text-green-400 mt-1">
                      2-3 anchor customers proven
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* THE REALITY CHECK */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 border-2 border-purple-500/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">
              The Reality Check
            </h3>
            <p className="text-center text-gray-300 mb-6">
              Our financial model is realistic because:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex gap-3">
                <span className="text-purple-400 text-lg flex-shrink-0">✓</span>
                <div>
                  <strong className="text-purple-300">We're B2B enterprise, not high-volume retail</strong>
                  <p className="text-gray-400 text-xs mt-1">We need 3-5 large customers, not 100 small ones</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-400 text-lg flex-shrink-0">✓</span>
                <div>
                  <strong className="text-blue-300">Customer AUM grows after acquisition</strong>
                  <p className="text-gray-400 text-xs mt-1">First customer often grows from $20M to $50M+ over 12-18 months</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-green-400 text-lg flex-shrink-0">✓</span>
                <div>
                  <strong className="text-green-300">Sales spend scales with progress</strong>
                  <p className="text-gray-400 text-xs mt-1">We invest $8K early (founder-led), then scale as we prove traction</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-400 text-lg flex-shrink-0">✓</span>
                <div>
                  <strong className="text-amber-300">Operating leverage improves significantly</strong>
                  <p className="text-gray-400 text-xs mt-1">Fixed platform costs divided across more AUM = better margins</p>
                </div>
              </div>
              <div className="flex gap-3 md:col-span-2">
                <span className="text-red-400 text-lg flex-shrink-0">✓</span>
                <div>
                  <strong className="text-red-300">Series A happens when unit economics prove, not on a calendar</strong>
                  <p className="text-gray-400 text-xs mt-1">We're not rushing; we're optimizing for long-term success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
