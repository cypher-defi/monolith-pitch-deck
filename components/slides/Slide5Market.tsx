"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";
import FiveColumnGrid from "@/components/FiveColumnGrid";

export default function Slide5Market() {
  return (
    <Slide id={5} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          STABLECOIN MARKET SIZE
        </Title>

        <ThreeColumnGrid className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 border-2 border-blue-500 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 mb-4">$310B</div>
              <CardTitle className="text-center text-slate-700">
                Total Market Size
              </CardTitle>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 via-green-100 to-green-50 border-2 border-green-500 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300">
            <div className="text-center">
              <div className="text-6xl font-bold text-green-600 mb-4">+50%</div>
              <CardTitle className="text-center text-slate-700">
                YoY Growth Rate
              </CardTitle>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 border-2 border-purple-500 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-600 mb-4">
                $1T+
              </div>
              <CardTitle className="text-center text-slate-700">
                Monthly Volume
              </CardTitle>
            </div>
          </Card>
        </ThreeColumnGrid>

        <FiveColumnGrid className="mb-12">
          <Card variant="glass">
            <CardTitle>USDT: $186B (60%)</CardTitle>
            <CardContent>Market leader, widely adopted</CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>USDC: $76B (25%)</CardTitle>
            <CardContent>NYSE-listed, MiCA compliant</CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>USDe: $12B (4%)</CardTitle>
            <CardContent>Synthetic, high-yield</CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>DAI: $5-6B (2%)</CardTitle>
            <CardContent>DAO-governed stablecoin</CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>Others: $30B+ (10%)</CardTitle>
            <CardContent>Emerging + regional stables</CardContent>
          </Card>
        </FiveColumnGrid>

        <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
          <p className="text-blue-300 text-lg text-center">
            <strong>Serviceable Market:</strong> ~$20-30B institutional
            stablecoins (10% of total) seeking yield optimization
            <br />
            <strong>Initial Target (Years 1-3):</strong> $1-2B AUM → $10-20M ARR
            at maturity
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
