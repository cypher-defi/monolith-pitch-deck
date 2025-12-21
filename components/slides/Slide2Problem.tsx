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
        <Subtitle size="md" className="mb-12 text-center">
          $208B+ in institutional stablecoins earning 0% while DeFi offers 4-6%
          yields
        </Subtitle>

        <ThreeColumnGrid>
          <Card variant="glass">
            <div className="text-center mb-5">
              <div className="inline-block p-4 rounded-full bg-red-50 border-2 border-red-500 mb-4">
                <span className="text-3xl font-bold text-red-500">0%</span>
              </div>
            </div>
            <CardTitle className="text-center">Corporate Treasurers</CardTitle>
            <CardContent className="text-center">
              $5-50M in idle USDC/USDT
              <br />
              <br />
              Earning 0% returns
              <br />
              <br />
              No DeFi expertise
            </CardContent>
          </Card>

          <Card variant="glass">
            <div className="text-center mb-5">
              <div className="inline-block p-4 rounded-full bg-amber-50 border-2 border-amber-500 mb-4">
                <Icon name="bank" size={32} className="text-amber-600" />
              </div>
            </div>
            <CardTitle className="text-center">Regional Banks</CardTitle>
            <CardContent className="text-center">
              Piloting stablecoin ops
              <br />
              <br />
              Need compliance-ready yields
              <br />
              <br />
              Can't build DeFi infra
            </CardContent>
          </Card>

          <Card variant="glass">
            <div className="text-center mb-5">
              <div className="inline-block p-4 rounded-full bg-green-50 border-2 border-green-500 mb-4">
                <Icon name="mobile" size={32} className="text-green-600" />
              </div>
            </div>
            <CardTitle className="text-center">Fintech Platforms</CardTitle>
            <CardContent className="text-center">
              Want to offer stablecoin yields
              <br />
              <br />
              Need ready-to-deploy solution
              <br />
              <br />
              Can't afford 6+ months to build
            </CardContent>
          </Card>
        </ThreeColumnGrid>

        <div className="mt-12 p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
          <p className="text-blue-300 text-lg text-center font-medium">
            Institutions need: Ready-to-deploy dashboard + Built-in integrations
            + Full compliance suite + Go live in 2 weeks (not 6 months)
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
