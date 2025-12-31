"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";
import Icon from "@/components/Icon";

export default function Slide02_Problem() {
  return (
    <Slide id={2} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-8 md:mb-12 text-center">
          THE PROBLEM
        </Title>
        <div className="mb-6 md:mb-8 text-center px-4">
          <p className="text-gray-300 text-base md:text-lg font-semibold">
            $93B in institutional stablecoins earning 0%
          </p>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
            Not idle by choice—trapped by compliance and technical barriers
          </p>
        </div>
        <Subtitle size="md" className="mb-6 md:mb-8 text-center px-4">
          While safe yields of 5-22% sit untapped
          <span className="block text-base md:text-lg text-gray-400 mt-3">
            Conservative: 5-8% • Balanced: 8-12% • Growth: 12-22%
          </span>
        </Subtitle>

        <div className="max-w-5xl mx-auto mb-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-xl">
          <h3 className="text-lg font-bold text-blue-300 text-center mb-4">
            Market Validation (Institutional Sources)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div className="flex gap-2" style={{ alignItems: "baseline" }}>
              <span className="text-blue-400 flex-shrink-0">•</span>
              <span>
                Total stablecoin market capitalization reached{" "}
                <strong className="text-white">~$300B in Sept 2025</strong>, a
                75% increase YoY. Stablecoins are increasingly used for
                corporate treasury operations and cross-border payments
                <span className="text-xs text-gray-500 block mt-1">
                  Source: Morgan Stanley
                </span>
              </span>
            </div>
            <div className="flex gap-2" style={{ alignItems: "baseline" }}>
              <span className="text-blue-400 flex-shrink-0">•</span>
              <span>
                Institutions deployed approximately{" "}
                <strong className="text-white">
                  $47.3B into stablecoin yield strategies
                </strong>{" "}
                in Q3 2025, with conservative allocators favoring
                over-collateralized lending earning 4.1%-4.7% yields
                <span className="text-xs text-gray-500 block mt-1">
                  Source: Stablecoin Insider
                </span>
              </span>
            </div>
            <div className="flex gap-2" style={{ alignItems: "baseline" }}>
              <span className="text-blue-400 flex-shrink-0">•</span>
              <span>
                Regulatory uncertainty dropped from 85% to 25% and compliance
                issues from 74% to 18% since 2023.{" "}
                <strong className="text-white">
                  75% of firms report customer demand
                </strong>{" "}
                for stablecoin-based products
                <span className="text-xs text-gray-500 block mt-1">
                  Source: Ainvest Report
                </span>
              </span>
            </div>
            <div className="flex gap-2" style={{ alignItems: "baseline" }}>
              <span className="text-blue-400 flex-shrink-0">•</span>
              <span>
                USDC — one of the most regulated stablecoins — had a market cap
                of <strong className="text-white">~$77B in late 2025</strong>{" "}
                and continues to expand across institutional and enterprise
                users
                <span className="text-xs text-gray-500 block mt-1">
                  Source: StableCoin.com / Circle
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-8 md:mb-12 p-4 md:p-6 bg-gradient-to-r from-red-500/10 to-amber-500/10 border border-red-500/30 rounded-xl">
          <p className="text-white text-sm md:text-base text-center">
            <Icon
              name="trending"
              size={20}
              className="inline text-amber-400 mr-2"
            />
            Diff market correlation: When banks paid 0.06% (2020), these
            strategies maintained 4-8%
          </p>
        </div>

        <Subtitle size="md" className="mb-8 text-center px-4">
          Target Segments
        </Subtitle>

        <ThreeColumnGrid className="gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/50 rounded-xl p-8">
            <div className="text-center mb-6">
              <Icon
                name="user"
                size={40}
                className="text-red-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-bold">Corporate Treasurers</h3>
            </div>
            <div className="mb-6 p-4 bg-red-900/30 rounded-lg text-center">
              <div className="text-4xl font-bold text-red-300">$5-50M</div>
              <div className="text-sm text-gray-400 mt-1">Idle Stablecoins</div>
            </div>
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              No in-house DeFi expertise or infrastructure to capture available
              yields
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-red-400">✓</span>
                <span>Currently earning 0%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✓</span>
                <span>DeFi infrastructure gap</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✓</span>
                <span>Need compliance layer</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-8">
            <div className="text-center mb-6">
              <Icon
                name="building"
                size={40}
                className="text-amber-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-bold">Regional Banks</h3>
            </div>
            <div className="mb-6 p-4 bg-amber-900/30 rounded-lg text-center">
              <div className="text-4xl font-bold text-amber-300">Piloting</div>
              <div className="text-sm text-gray-400 mt-1">
                Stablecoin Operations
              </div>
            </div>
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              Want to offer yield products but lack in-house crypto and
              compliance capabilities
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>6-12 month build timeline</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>Compliance complexity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>Need white-label solution</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-8">
            <div className="text-center mb-6">
              <Icon
                name="mobile"
                size={40}
                className="text-green-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-bold">Fintech Platforms</h3>
            </div>
            <div className="mb-6 p-4 bg-green-900/30 rounded-lg text-center">
              <div className="text-4xl font-bold text-green-300">6 Months</div>
              <div className="text-sm text-gray-400 mt-1">Build Timeline</div>
            </div>
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              Customers demanding yield products today but can't develop fast
              enough in-house
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Speed to market critical</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Compliance infrastructure needed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Need B2B white-label SDK</span>
              </div>
            </div>
          </div>
        </ThreeColumnGrid>

        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-xl">
          <p className="text-white text-xl font-bold text-center mb-2">
            What These Segments Need
          </p>
          <p className="text-gray-400 text-sm text-center mb-5">
            The solution must deliver:
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-5 w-full max-w-2xl">
              <div className="flex items-center gap-3">
                <Icon
                  name="check"
                  className="text-green-400 flex-shrink-0"
                  size={20}
                />
                <span className="text-base">White-label dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="check"
                  className="text-green-400 flex-shrink-0"
                  size={20}
                />
                <span className="text-base">Compliance-ready</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="check"
                  className="text-green-400 flex-shrink-0"
                  size={20}
                />
                <span className="text-base">Protocol integrations</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon
                  name="check"
                  className="text-green-400 flex-shrink-0"
                  size={20}
                />
                <span className="text-base">Live in 2 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
