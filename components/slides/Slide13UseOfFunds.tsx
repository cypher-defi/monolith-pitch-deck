"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";

export default function Slide13UseOfFunds() {
  return (
    <Slide id={13} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          USE OF FUNDS
        </Title>

        <div className="text-center mb-12">
          <div className="text-6xl font-bold mb-2 text-blue-400">$1-1.5M</div>
          <div className="text-slate-400 text-xl">
            Seed Raise Target • 18-Month Runway to $500K ARR
          </div>
        </div>

        <ThreeColumnGrid className="mb-12 gap-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-blue-300 mb-4 text-lg font-bold">
                Engineering
              </h3>
              <div className="text-5xl font-bold text-blue-300 mb-4">$450K</div>
              <div className="text-blue-400 font-semibold mb-6">45%</div>
              <ul className="text-left text-sm text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Smart contract dev & optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Full-stack dashboard & API</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Cloud infrastructure & DevOps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Development tools & testing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-green-300 mb-4 text-lg font-bold">
                Security & Audit
              </h3>
              <div className="text-5xl font-bold text-green-300 mb-4">
                $200K
              </div>
              <div className="text-green-400 font-semibold mb-6">20%</div>
              <ul className="text-left text-sm text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Smart contract audits (2+ firms)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Security documentation & monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Bug bounty program setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>Custody integrations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-amber-300 mb-4 text-lg font-bold">
                Operations & Sales
              </h3>
              <div className="text-5xl font-bold text-amber-300 mb-4">
                $350K
              </div>
              <div className="text-amber-400 font-semibold mb-6">35%</div>
              <ul className="text-left text-sm text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>B2B sales & business development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Pilot customer acquisition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Legal & compliance setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Infrastructure & operations</span>
                </li>
              </ul>
            </div>
          </div>
        </ThreeColumnGrid>

        <div className="p-8 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg text-center">
          <p className="text-blue-300 text-lg">
            <span className="text-blue-400 font-bold">
              Capital-efficient allocation:
            </span>{" "}
            Technical founders building in-house. No external team hires. 100%
            focused on product-market fit.
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
