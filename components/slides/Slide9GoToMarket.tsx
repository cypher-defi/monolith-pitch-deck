"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import TwoColumnGrid from "@/components/TwoColumnGrid";

export default function Slide9GoToMarket() {
  return (
    <Slide id={9} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          GO-TO-MARKET: INSTITUTIONAL B2B
        </Title>
        <Subtitle size="md" className="mb-12 text-center">
          Direct sales to banks, corporate treasurers, asset/fund managers, and
          fintechs—they bring distribution
        </Subtitle>

        <TwoColumnGrid>
          <Card variant="glass">
            <CardTitle>Phase 1: First Customer (Months 1-6)</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-left">
                <li>
                  <strong>Target:</strong> Corporate treasurers (emerging
                  markets)
                </li>
                <li>
                  <strong>Profile:</strong> $5-50M in idle USDC/USDT
                </li>
                <li>
                  <strong>Strategy:</strong>
                </li>
                <li className="pl-5">
                  → Warm intros through custody partners (Fireblocks, Kingdom
                  Trust)
                </li>
                <li className="pl-5">
                  → Direct outreach to CFOs in Argentina, Nigeria, Brazil
                </li>
                <li className="pl-5">
                  → Pilot program: $5-10M AUM, prove model
                </li>
                <li className="mt-4 pt-4 border-t-2 border-slate-600">
                  <strong className="text-blue-400">
                    Goal: 1 live customer, $20M AUM, $200K ARR
                  </strong>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardTitle>Phase 2: Scale to Banks (Months 6-12)</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-left">
                <li>
                  <strong>Target:</strong> Regional banks piloting stablecoin
                  ops
                </li>
                <li>
                  <strong>Profile:</strong> $10-100M stablecoin reserves
                </li>
                <li>
                  <strong>Strategy:</strong>
                </li>
                <li className="pl-5">→ Leverage case study from Phase 1</li>
                <li className="pl-5">
                  → Target banks with JPMorgan Onyx-style stablecoin pilots
                </li>
                <li className="pl-5">
                  → Compliance-ready pitch: audit trails, insurance, reporting
                </li>
                <li className="mt-4 pt-4 border-t-2 border-slate-600">
                  <strong className="text-blue-400">
                    Goal: 3 institutional partners, $100M AUM, $1M ARR
                  </strong>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardTitle>Phase 3: Fintech Partnerships (Year 2)</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-left">
                <li>
                  <strong>Target:</strong> Neobanks & fintech platforms
                </li>
                <li>
                  <strong>Profile:</strong> Want to offer stablecoin yields to
                  customers
                </li>
                <li>
                  <strong>Strategy:</strong>
                </li>
                <li className="pl-5">
                  → White-label SDK pitch: 2-week integration vs 6-month build
                </li>
                <li className="pl-5">
                  → Target Revolut/N26/Wise-style fintechs adding crypto
                </li>
                <li className="pl-5">
                  → Revenue share model: they keep spread, we handle
                  infrastructure
                </li>
                <li className="mt-4 pt-4 border-t-2 border-slate-600">
                  <strong className="text-blue-400">
                    Goal: 8-10 partners, $500M AUM, $5M ARR
                  </strong>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardTitle>Phase 4: Enterprise Scale (Year 3)</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-left">
                <li>
                  <strong>Target:</strong> Large institutions & mega-fintechs
                </li>
                <li>
                  <strong>Profile:</strong> $100M-1B+ deployment potential
                </li>
                <li>
                  <strong>Strategy:</strong>
                </li>
                <li className="pl-5">
                  → Proven track record: $500M+ managed, 8+ institutions served
                </li>
                <li className="pl-5">
                  → Enterprise features: SLA guarantees, custom strategies,
                  dedicated teams
                </li>
                <li className="pl-5">
                  → Strategic partnerships with major custody providers
                </li>
                <li className="mt-4 pt-4 border-t-2 border-slate-600">
                  <strong className="text-blue-400">
                    Goal: 15-20 partners, $1.5B AUM, $15M ARR
                  </strong>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TwoColumnGrid>

        <div className="mt-8 p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
          <p className="text-blue-300 text-lg text-center">
            <strong>Zero CAC:</strong> Institutions come to us •{" "}
            <strong>Sticky revenue:</strong> &lt;5% churn vs 30-50% retail •{" "}
            <strong>Compound growth:</strong> Each partner grows their deposits
            over time
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
