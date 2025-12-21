"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import TwoColumnGrid from "@/components/TwoColumnGrid";

export default function Slide13UseOfFunds() {
  return (
    <Slide id={13} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          USE OF FUNDS
        </Title>

        <TwoColumnGrid>
          <div>
            <div className="text-center mb-10">
              <div className="text-5xl font-bold mb-2">$500K-$1M</div>
              <div className="text-slate-400 text-xl">Seed Raise Target</div>
            </div>

            <Card variant="glass" className="mb-6">
              <CardTitle>Engineering: $300K (50%)</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• 2 Senior Solidity engineers ($200K)</li>
                  <li>• Backend/API engineer ($70K)</li>
                  <li>• DevOps contractor ($30K)</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass" className="mb-6">
              <CardTitle>Security & Audit: $100K (17%)</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• External smart contract audit ($70K)</li>
                  <li>• Security documentation ($15K)</li>
                  <li>• Bug bounty program ($15K)</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardTitle>Operations & Sales: $200K (33%)</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• B2B sales & BD ($80K)</li>
                  <li>• Legal & compliance ($40K)</li>
                  <li>• Infrastructure & hosting ($30K)</li>
                  <li>• Custody partnerships ($20K)</li>
                  <li>• Operating expenses ($30K)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="text-center mb-10">
              <div className="text-slate-400 mb-6">Allocation Breakdown</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
                <span>
                  <strong>60%</strong> Engineering
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
                <span>
                  <strong>17%</strong> Security
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-amber-600 rounded"></div>
                <span>
                  <strong>23%</strong> Operations
                </span>
              </div>
            </div>

            <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
              <p className="text-blue-400 text-lg text-center">
                <strong>18-month runway</strong>
                <br />
                to profitability at $50M TVL
              </p>
            </div>
          </div>
        </TwoColumnGrid>
      </SlideContent>
    </Slide>
  );
}
