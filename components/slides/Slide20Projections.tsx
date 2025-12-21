"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";
import FourColumnGrid from "@/components/FourColumnGrid";

export default function Slide20Projections() {
  return (
    <Slide id={20} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          APPENDIX D: 3-YEAR FINANCIAL PROJECTIONS
        </Title>

        <ThreeColumnGrid className="mb-12">
          <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8 rounded-xl border-2 border-blue-300 shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/60 transition-all duration-300">
            <h3 className="text-blue-600 text-3xl mb-6 text-center font-bold">
              Year 1
            </h3>
            <div className="space-y-4 text-center">
              <div>
                <p className="text-slate-600 text-sm mb-2 font-medium">
                  TVL Growth
                </p>
                <p className="text-3xl font-bold text-yellow-600">$1M → $25M</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-2 font-medium">
                  Revenue
                </p>
                <p className="text-3xl font-bold text-blue-600">$375K</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-2 font-medium">
                  Expenses
                </p>
                <p className="text-2xl font-bold text-green-600">$600K</p>
                <p className="text-xs text-slate-600">(Seed capital)</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-2 font-medium">Net</p>
                <p className="text-2xl font-bold text-red-500">($225K)</p>
                <p className="text-xs text-slate-600">Investment phase</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8 rounded-xl border-2 border-purple-300 shadow-lg shadow-purple-200/50 hover:shadow-xl hover:shadow-purple-300/60 transition-all duration-300">
            <h3 className="text-purple-600 text-3xl mb-6 text-center font-bold">
              Year 2
            </h3>
            <div className="space-y-4 text-center">
              <div>
                <p className="text-slate-600 text-sm mb-2 font-medium">
                  TVL Growth
                </p>
                <p className="text-3xl font-bold text-yellow-600">
                  $25M → $100M
                </p>
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-2 font-medium">
                  Revenue
                </p>
                <p className="text-3xl font-bold text-purple-600">$1.5M</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-2 font-medium">
                  Expenses
                </p>
                <p className="text-2xl font-bold text-green-600">$2M</p>
                <p className="text-xs text-slate-600">(Series A capital)</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-2 font-medium">Net</p>
                <p className="text-2xl font-bold text-red-500">($500K)</p>
                <p className="text-xs text-slate-600">Growth phase</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 via-white to-green-50 p-8 rounded-xl border-2 border-green-400 shadow-lg shadow-green-200/50 hover:shadow-xl hover:shadow-green-300/60 transition-all duration-300">
            <h3 className="text-green-600 text-3xl mb-6 text-center font-bold">
              Year 3
            </h3>
            <div className="space-y-4 text-center">
              <div>
                <p className="text-slate-600 text-sm mb-2 font-medium">
                  TVL Growth
                </p>
                <p className="text-3xl font-bold text-yellow-600">
                  $100M → $500M
                </p>
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-2 font-medium">
                  Revenue
                </p>
                <p className="text-3xl font-bold text-green-600">$7.5M</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-2 font-medium">
                  Expenses
                </p>
                <p className="text-2xl font-bold text-green-600">$3.5M</p>
                <p className="text-xs text-slate-600">(Operating costs)</p>
              </div>
              <div>
                <p className="text-slate-600 text-sm mb-2 font-medium">Net</p>
                <p className="text-2xl font-bold text-green-500">+$4M</p>
                <p className="text-xs text-slate-600">✓ Profitable</p>
              </div>
            </div>
          </div>
        </ThreeColumnGrid>

        <h3 className="text-2xl mb-6 text-blue-400 text-center">
          Series A Target (Month 15-18)
        </h3>
        <FourColumnGrid className="mb-8">
          <div className="text-center">
            <div className="text-slate-400 mb-2 text-sm">Raise</div>
            <div className="text-4xl font-bold">$5-8M</div>
          </div>
          <div className="text-center">
            <div className="text-slate-400 mb-2 text-sm">Valuation</div>
            <div className="text-4xl font-bold">$25-35M</div>
            <div className="text-sm text-slate-400">pre-money</div>
          </div>
          <div className="text-center">
            <div className="text-slate-400 mb-2 text-sm">TVL Required</div>
            <div className="text-4xl font-bold">$50M+</div>
          </div>
          <div className="text-center">
            <div className="text-slate-400 mb-2 text-sm">Revenue</div>
            <div className="text-4xl font-bold">$750K+</div>
            <div className="text-sm text-slate-400">annual run-rate</div>
          </div>
        </FourColumnGrid>

        <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
          <p className="text-blue-300 text-lg text-center">
            Conservative projections based on comparable DeFi protocol growth
            rates and current market conditions
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
