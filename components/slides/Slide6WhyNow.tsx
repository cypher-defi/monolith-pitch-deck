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

        <FourColumnGrid>
          <Card variant="glass">
            <div className="text-center mb-4">
              <div className="inline-block p-4 rounded-full bg-purple-50 border-2 border-purple-500 mb-4">
                <Icon name="scroll" size={32} className="text-purple-600" />
              </div>
            </div>
            <CardTitle>Regulatory Clarity</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-left">
                <li>• GENIUS Act passed July 2025</li>
                <li>• Clear stablecoin framework</li>
                <li>• MiCA in EU operational</li>
                <li>• Institutional confidence ↑</li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="glass">
            <div className="text-center mb-4">
              <div className="inline-block p-4 rounded-full bg-indigo-50 border-2 border-indigo-500 mb-4">
                <Icon name="building" size={32} className="text-indigo-600" />
              </div>
            </div>
            <CardTitle>Institutional Adoption</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-left">
                <li>• Circle (USDC) publicly traded</li>
                <li>• $5B valuation (June 2025)</li>
                <li>• Corporate treasuries exploring</li>
                <li>• Family offices entering DeFi</li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="glass">
            <div className="text-center mb-4">
              <div className="inline-block p-4 rounded-full bg-teal-50 border-2 border-teal-500 mb-4">
                <Icon name="chart" size={32} className="text-teal-600" />
              </div>
            </div>
            <CardTitle>Infrastructure Maturity</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-left">
                <li>• Aave: $40B TVL, battle-tested</li>
                <li>• Morpho: Coinbase partnership</li>
                <li>• Ondo: $1.4B in RWAs</li>
                <li>• Security standards proven</li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="glass">
            <div className="text-center mb-4">
              <div className="inline-block p-4 rounded-full bg-green-50 border-2 border-green-500 mb-4">
                <Icon name="trending" size={32} className="text-green-600" />
              </div>
            </div>
            <CardTitle>Market Momentum</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-left">
                <li>• 50% YoY growth sustained</li>
                <li>• $310B → $465B projected (2026)</li>
                <li>• RWA tokenization validated</li>
                <li>• Perfect timing for aggregators</li>
              </ul>
            </CardContent>
          </Card>
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
