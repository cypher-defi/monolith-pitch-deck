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

export default function Slide2Problem() {
  return (
    <Slide id={2} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          THE INSTITUTIONAL STABLECOIN PROBLEM
        </Title>
        <div className="mb-8 text-center">
          <p className="text-gray-400 text-base">
            Stablecoins = Digital dollars (USDC, USDT) used by institutions for
            instant settlements
          </p>
        </div>
        <Subtitle size="md" className="mb-12 text-center">
          Institutions are leaving $4.6B+ in annual yield on the table
          <span className="block text-xl text-gray-400 mt-2">
            $93B in institutional stablecoins earning 0% • DeFi offers 4-6% APY
            safely
          </span>
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
          <p className="text-white text-lg font-semibold text-center mb-5">
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
