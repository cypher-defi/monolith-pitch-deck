"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";
import FourColumnGrid from "@/components/FourColumnGrid";

export default function Slide08_InvestmentOpportunity() {
  return (
    <Slide id={8} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-8 text-center">
          INVESTMENT OPPORTUNITY
        </Title>

        {/* THE ASK - 3 BOX HEADER */}
        <ThreeColumnGrid className="mb-10 gap-6">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6 text-center">
            <h3 className="text-blue-300 mb-3 text-xs font-bold uppercase">
              Raise Amount
            </h3>
            <div className="text-4xl font-bold text-blue-300">$1.5-2M</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6 text-center">
            <h3 className="text-purple-300 mb-3 text-xs font-bold uppercase">
              Pre-Money Valuation
            </h3>
            <div className="text-4xl font-bold text-purple-300">$4-5M</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6 text-center">
            <h3 className="text-green-300 mb-3 text-xs font-bold uppercase">
              Runway
            </h3>
            <div className="text-4xl font-bold text-green-300">18 months</div>
            <div className="text-xs text-gray-400 mt-2">
              Profitable at Month 12-15
            </div>
          </div>
        </ThreeColumnGrid>

        {/* BUDGET BREAKDOWN */}
        <h3 className="text-xl font-bold text-center mb-6 text-white">
          How We'll Use the Funds
        </h3>

        <FourColumnGrid className="mb-10 gap-4">
          {/* PRODUCT ENGINEERING */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-4">
            <div className="text-center">
              <h3 className="text-blue-300 mb-2 text-sm font-bold">
                Product Engineering
              </h3>
              <div className="text-3xl font-bold text-blue-300 mb-1">$450K</div>
              <div className="text-blue-400 font-semibold mb-3 text-sm">
                30%
              </div>
              <ul className="text-left text-xs text-gray-300 space-y-1">
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-blue-400 flex-shrink-0">✓</span>
                  <span>Three-tier vault system</span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-blue-400 flex-shrink-0">✓</span>
                  <span>OpenZeppelin + Hacken audits</span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-blue-400 flex-shrink-0">✓</span>
                  <span>Dashboard & white-label API</span>
                </li>
              </ul>
            </div>
          </div>

          {/* COMPLIANCE/LEGAL */}
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-4">
            <div className="text-center">
              <h3 className="text-amber-300 mb-2 text-sm font-bold">
                Compliance/Legal
              </h3>
              <div className="text-3xl font-bold text-amber-300 mb-1">
                $300K
              </div>
              <div className="text-amber-400 font-semibold mb-3 text-sm">
                20%
              </div>
              <ul className="text-left text-xs text-gray-300 space-y-1">
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-amber-400 flex-shrink-0">✓</span>
                  <span>Legal entity & structure</span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-amber-400 flex-shrink-0">✓</span>
                  <span>Regulatory compliance</span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-amber-400 flex-shrink-0">✓</span>
                  <span>InsurAce partnership</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SALES & GTM */}
          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-4">
            <div className="text-center">
              <h3 className="text-green-300 mb-2 text-sm font-bold">
                Sales & GTM
              </h3>
              <div className="text-3xl font-bold text-green-300 mb-1">
                $200K
              </div>
              <div className="text-green-400 font-semibold mb-3 text-sm">
                13%
              </div>
              <ul className="text-left text-xs text-gray-300 space-y-1">
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>B2B sales & biz dev</span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>Pilot customer acquisition</span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-green-400 flex-shrink-0">✓</span>
                  <span>Marketing & conferences</span>
                </li>
              </ul>
            </div>
          </div>

          {/* INFRASTRUCTURE OPS */}
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-4">
            <div className="text-center">
              <h3 className="text-purple-300 mb-2 text-sm font-bold">
                Infrastructure Ops
              </h3>
              <div className="text-3xl font-bold text-purple-300 mb-1">
                $550K
              </div>
              <div className="text-purple-400 font-semibold mb-3 text-sm">
                37%
              </div>
              <ul className="text-left text-xs text-gray-300 space-y-1">
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-purple-400 flex-shrink-0">✓</span>
                  <span>18-month runway to profitability</span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-purple-400 flex-shrink-0">✓</span>
                  <span>Minimal founder salaries</span>
                </li>
                <li className="flex gap-2" style={{ alignItems: "baseline" }}>
                  <span className="text-purple-400 flex-shrink-0">✓</span>
                  <span>Cloud & 24/7 monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </FourColumnGrid>

        {/* SECURITY INFRASTRUCTURE - CONDENSED */}
        <div className="mb-10 max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-4 text-white">
            Enterprise-Grade Security Built In
          </h3>
          <div className="bg-gradient-to-r from-red-500/10 to-amber-500/10 border-2 border-red-500/50 rounded-xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
              <div>
                <span className="text-red-400 font-bold">• Pre-Launch:</span>{" "}
                OpenZeppelin & Hacken audits ($225K), formal verification, bug
                bounty program
              </div>
              <div>
                <span className="text-amber-400 font-bold">• Post-Launch:</span>{" "}
                Annual re-audits, insurance coverage scaling with TVL
              </div>
              <div>
                <span className="text-orange-400 font-bold">
                  • Year 1 Security Budget:
                </span>{" "}
                ~$140K (on $100M AUM)
              </div>
              <div>
                <span className="text-yellow-400 font-bold">
                  • Why This Matters:
                </span>{" "}
                Professional audit infrastructure is what justifies institutions
                choosing us over DIY DeFi
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-3">
              See appendix for detailed security investment breakdown
            </p>
          </div>
        </div>

        {/* INVESTMENT THESIS */}
        <h3 className="text-xl font-bold text-center mb-6 text-white">
          Why Invest Now
        </h3>

        <FourColumnGrid className="mb-10 gap-4">
          <Card variant="glass">
            <CardTitle>Massive TAM, Zero Competition</CardTitle>
            <CardContent>
              $93B in institutional stablecoins earning 0%. No white-label B2B
              infrastructure exists yet. First-mover advantage.
            </CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>Capital Efficient</CardTitle>
            <CardContent>
              Technical founders building in-house. B2B customers generate
              $100K-$2M ARR each with low churn.
            </CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>Clear Path to Profitability</CardTitle>
            <CardContent>
              <strong>Month 12-15:</strong> Profitable with 3 customers, $100M
              AUM, $1.54M ARR.
              <br />
              <strong>Month 18-24:</strong> Series A ready with $3.5-4.6M ARR,
              strong unit economics (87-90% gross margins).
            </CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>Proven Exit Comparables</CardTitle>
            <CardContent>
              Fireblocks ($8B), Anchorage ($3B), Copper ($500M). We're building
              the infrastructure layer for institutional DeFi.
            </CardContent>
          </Card>
        </FourColumnGrid>

        {/* UNIQUE VALUE PROP - GET YOUR MONEY BACK BY USING IT */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-center mb-4 text-white">
            Get Your Investment Back By Using the Infrastructure You Now Own
          </h3>
          <p className="text-gray-300 text-center mb-6 text-sm max-w-4xl mx-auto">
            Investors can deploy stablecoins to Monolith vaults while holding
            equity. Your idle capital starts earning yield
            immediately—potentially recovering your investment through product
            usage alone.
          </p>

          {/* 3 CONSERVATIVE TIER SCENARIOS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-6">
            {/* SCENARIO 1: $20M */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-5">
              <div className="text-center mb-3">
                <div className="text-blue-300 font-bold text-lg">
                  Deploy $20M
                </div>
                <div className="text-xs text-gray-400">
                  Conservative tier (6% avg yield)
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-blue-500/20 pb-2">
                  <span className="text-gray-400">Annual yield:</span>
                  <span className="text-white font-bold">$1.2M/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">
                    $1M investment paid back in:
                  </span>
                  <span className="text-green-400 font-bold text-lg">
                    10 months
                  </span>
                </div>
              </div>
            </div>

            {/* SCENARIO 2: $50M */}
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-5">
              <div className="text-center mb-3">
                <div className="text-purple-300 font-bold text-lg">
                  Deploy $50M
                </div>
                <div className="text-xs text-gray-400">
                  Conservative tier (6% avg yield)
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-purple-500/20 pb-2">
                  <span className="text-gray-400">Annual yield:</span>
                  <span className="text-white font-bold">$3M/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">
                    $1M investment paid back in:
                  </span>
                  <span className="text-green-400 font-bold text-lg">
                    4 months
                  </span>
                </div>
              </div>
            </div>

            {/* SCENARIO 3: $100M */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-2 border-green-500/50 rounded-xl p-5">
              <div className="text-center mb-3">
                <div className="text-green-300 font-bold text-lg">
                  Deploy $100M
                </div>
                <div className="text-xs text-gray-400">
                  Conservative tier (6% avg yield)
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-green-500/20 pb-2">
                  <span className="text-gray-400">Annual yield:</span>
                  <span className="text-white font-bold">$6M/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">
                    $1M investment paid back in:
                  </span>
                  <span className="text-green-400 font-bold text-lg">
                    2 months
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mb-4">
            *Conservative tier scenarios shown. Balanced (10%) and Aggressive
            (17%) tiers accelerate payback significantly. See appendix for
            detailed ROI modeling.
          </p>

          {/* EQUITY RETURNS */}
          <div className="max-w-4xl mx-auto p-5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-xl">
            <p className="text-center text-sm text-gray-300 mb-2">
              <span className="text-blue-300 font-bold">Equity upside:</span> At
              Month 18-20, $3.5-4.6M ARR with SaaS multiples (10-15x) ={" "}
              <span className="text-green-400 font-bold">
                $35-69M valuation
              </span>
            </p>
            <p className="text-center text-lg font-bold text-green-400">
              7-14x return on equity + yield stream from deployed capital = dual
              payoff
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="max-w-4xl mx-auto p-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border-2 border-blue-500/50 rounded-xl">
          <p className="text-center text-xs text-gray-300">
            Capital-efficient: Technical founders building in-house. No external
            hires until Series A. 100% focused on product-market fit.
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
