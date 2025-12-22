"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import FourColumnGrid from "@/components/FourColumnGrid";
import Icon from "@/components/Icon";

export default function Slide6WhyNow() {
  return (
    <Slide id={6} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          WHY NOW? FOUR TAILWINDS
        </Title>

        <FourColumnGrid className="gap-6">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6">
            <div className="text-center mb-4">
              <Icon
                name="scroll"
                size={40}
                className="text-purple-400 mx-auto mb-3"
              />
              <h4 className="font-bold text-lg">Regulatory Clarity</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>GENIUS Act passed July 2025</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>Clear stablecoin framework</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>MiCA in EU operational</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>Institutional confidence ↑</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6">
            <div className="text-center mb-4">
              <Icon
                name="building"
                size={40}
                className="text-blue-400 mx-auto mb-3"
              />
              <h4 className="font-bold text-lg">Institutional Adoption</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>Circle (USDC) publicly traded</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>$5B valuation (June 2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>Corporate treasuries exploring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>Family offices entering DeFi</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6">
            <div className="text-center mb-4">
              <Icon
                name="chart"
                size={40}
                className="text-amber-400 mx-auto mb-3"
              />
              <h4 className="font-bold text-lg">Infrastructure Maturity</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Aave: $40B TVL, battle-tested</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Morpho: Coinbase partnership</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Ondo: $1.4B in RWAs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Security standards proven</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6">
            <div className="text-center mb-4">
              <Icon
                name="trending"
                size={40}
                className="text-green-400 mx-auto mb-3"
              />
              <h4 className="font-bold text-lg">Market Momentum</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>50% YoY growth sustained</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>$310B → $465B (2026)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>RWA tokenization validated</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>Perfect timing for aggregators</span>
              </li>
            </ul>
          </div>
        </FourColumnGrid>

        <div className="mt-12 p-6 bg-green-500/10 border-2 border-green-500/50 rounded-lg">
          <p className="text-green-300 text-lg text-center font-medium">
            The Perfect Storm: Regulatory clarity + Institutional interest +
            Mature infrastructure + Market growth
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
