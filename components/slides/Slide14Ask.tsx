"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";
import FourColumnGrid from "@/components/FourColumnGrid";

export default function Slide14Ask() {
  return (
    <Slide id={14} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          THE ASK
        </Title>

        <ThreeColumnGrid className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 border-2 border-blue-500 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <CardTitle className="text-blue-600 mb-4 text-sm sm:text-base font-bold">
                Raise Amount
              </CardTitle>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
                $500K-$1M
              </div>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 border-2 border-purple-500 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <CardTitle className="text-purple-600 mb-4 text-sm sm:text-base font-bold">
                Pre-Money Valuation
              </CardTitle>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600">
                $3-4M
              </div>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 via-green-100 to-green-50 border-2 border-green-500 shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <CardTitle className="text-green-600 mb-4 text-sm sm:text-base font-bold">
                Equity Offered
              </CardTitle>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600">
                15-20%
              </div>
            </div>
          </Card>
        </ThreeColumnGrid>

        <h3 className="text-2xl mb-8 text-center text-white">
          Investor Payback Scenario: Fund Allocating 2% to Stablecoins
        </h3>

        <div className="overflow-x-auto mb-12">
          <table className="comparison-table">
            <thead>
              <tr className="border-b-2 border-slate-700">
                <th className="p-4">Fund Size</th>
                <th className="p-4">2% Allocation</th>
                <th className="p-4">Current Yield (0%)</th>
                <th className="p-4">With Monolith (5% net)</th>
                <th className="p-4">Annual Gain</th>
                <th className="p-4">Payback (vs 1% fee)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              <tr>
                <td className="p-4 font-semibold text-green-500">Small Fund</td>
                <td className="p-4">
                  <strong>$3M</strong>
                  <br />
                  (from $150M AUM)
                </td>
                <td className="p-4">$0</td>
                <td className="p-4 text-green-500 font-bold">$150K/year</td>
                <td className="p-4 text-green-500 font-bold">+$120K net</td>
                <td className="p-4 text-green-500 font-bold">1.5 months</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-blue-500">
                  Mid-Size Fund
                </td>
                <td className="p-4">
                  <strong>$6M</strong>
                  <br />
                  (from $300M AUM)
                </td>
                <td className="p-4">$0</td>
                <td className="p-4 text-blue-500 font-bold">$300K/year</td>
                <td className="p-4 text-blue-500 font-bold">+$240K net</td>
                <td className="p-4 text-blue-500 font-bold">1.5 months</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-amber-500">Large Fund</td>
                <td className="p-4">
                  <strong>$10M</strong>
                  <br />
                  (from $500M AUM)
                </td>
                <td className="p-4">$0</td>
                <td className="p-4 text-amber-500 font-bold">$500K/year</td>
                <td className="p-4 text-amber-500 font-bold">+$400K net</td>
                <td className="p-4 text-amber-500 font-bold">1.5 months</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl mb-8 text-center">Why Invest in Monolith?</h3>

        <FourColumnGrid className="mb-8">
          <Card variant="glass">
            <CardTitle>B2B Infrastructure Play</CardTitle>
            <CardContent>
              Not consumer fintech—institutional infrastructure with real
              revenue
            </CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>Fast Customer Payback</CardTitle>
            <CardContent>
              1.5 months to ROI for funds • Clear value prop: 5% vs 0% on
              reserves
            </CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>Sticky Revenue</CardTitle>
            <CardContent>
              $100K-$2M ARR per customer • &lt;5% churn vs 30-50% retail
            </CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>Fast to Revenue</CardTitle>
            <CardContent>
              First customer Month 6 • $1M ARR by Year 1
            </CardContent>
          </Card>
        </FourColumnGrid>

        <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
          <p className="text-blue-300 text-lg text-center">
            <strong>Series A Path:</strong> 3 institutional partners • $100M AUM
            • $1M ARR → $25-35M valuation (8-12x ARR multiple) in 12-15 months
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
