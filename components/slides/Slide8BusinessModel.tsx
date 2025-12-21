"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";
import FourColumnGrid from "@/components/FourColumnGrid";

export default function Slide8BusinessModel() {
  return (
    <Slide id={8} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          BUSINESS MODEL: INSTITUTIONAL B2B
        </Title>

        <ThreeColumnGrid className="mb-12 gap-8">
          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-6">Management Fee</h3>
            <div className="mb-6 p-4 bg-green-900/30 rounded-lg">
              <div className="text-5xl font-bold text-green-300 mb-2">
                1.0-1.5%
              </div>
              <div className="text-sm text-gray-400">Annual on AUM</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-6">Implementation</h3>
            <div className="mb-6 p-4 bg-blue-900/30 rounded-lg">
              <div className="text-5xl font-bold text-blue-300 mb-2">
                $25-75K
              </div>
              <div className="text-sm text-gray-400">One-Time Setup</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-6">White-Label SDK</h3>
            <div className="mb-6 p-4 bg-amber-900/30 rounded-lg">
              <div className="text-5xl font-bold text-amber-300 mb-2">
                $2-15K
              </div>
              <div className="text-sm text-gray-400">Monthly SaaS</div>
            </div>
          </div>
        </ThreeColumnGrid>

        {/* Timeline */}
        <div className="relative mb-12">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"></div>

          <FourColumnGrid className="relative">
            {/* Month 6-9 */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-black mb-4 relative z-10"></div>
              <Card variant="glass" className="w-full">
                <CardTitle className="text-center">Month 6-9</CardTitle>
                <CardContent className="text-center">
                  1st Institution
                  <br />
                  $20M AUM
                </CardContent>
                <div className="text-3xl font-bold text-blue-400 mt-4 text-center">
                  $200K ARR
                </div>
              </Card>
            </div>

            {/* Year 1 */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-purple-500 border-4 border-black mb-4 relative z-10"></div>
              <Card variant="glass" className="w-full">
                <CardTitle className="text-center">Year 1</CardTitle>
                <CardContent className="text-center">
                  3 Institutions
                  <br />
                  $100M AUM
                </CardContent>
                <div className="text-3xl font-bold text-purple-400 mt-4 text-center">
                  $1M ARR
                </div>
              </Card>
            </div>

            {/* Year 2 */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-indigo-500 border-4 border-black mb-4 relative z-10"></div>
              <Card variant="glass" className="w-full">
                <CardTitle className="text-center">Year 2</CardTitle>
                <CardContent className="text-center">
                  8-10 Partners
                  <br />
                  $500M AUM
                </CardContent>
                <div className="text-3xl font-bold text-indigo-400 mt-4 text-center">
                  $5M ARR
                </div>
              </Card>
            </div>

            {/* Year 3 */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-black mb-4 relative z-10"></div>
              <Card variant="glass" className="w-full">
                <CardTitle className="text-center">Year 3</CardTitle>
                <CardContent className="text-center">
                  15-20 Partners
                  <br />
                  $1.5B AUM
                </CardContent>
                <div className="text-3xl font-bold text-green-400 mt-4 text-center">
                  $15M ARR
                </div>
              </Card>
            </div>
          </FourColumnGrid>
        </div>

        <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
          <p className="text-blue-300 text-lg text-center">
            Each institutional partner = $100K-$1M+ ARR • &lt;5% churn (vs
            30-50% retail) • Series A ready at Year 2
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
