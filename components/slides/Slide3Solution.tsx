"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";

export default function Slide3Solution() {
  return (
    <Slide
      id={3}
      background="bg-gradient-to-br from-black via-blue-950/20 to-black"
    >
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          INTRODUCING MONOLITH
        </Title>
        <Subtitle size="md" className="mb-12 text-center text-blue-300">
          Managed dashboard platform: Full-service yield infrastructure with
          built-in compliance
        </Subtitle>

        <ThreeColumnGrid>
          <Card variant="primary">
            <CardTitle className="text-center">
              INSTITUTIONAL TREASURY
            </CardTitle>
            <div className="text-center my-6">
              <div className="text-4xl font-bold text-green-500">4.5-5.5%</div>
              <div className="text-4xl font-bold text-green-500">NET APY</div>
            </div>
            <CardContent className="text-center">
              <ul className="space-y-2 list-none">
                <li>• White-label dashboard (2 weeks to launch)</li>
                <li>• Built-in integrations (QuickBooks, Fireblocks)</li>
                <li>• Automated compliance & reporting</li>
                <li>• Conservative DeFi allocation</li>
              </ul>
              <div className="mt-4 pt-4 border-t-2 border-slate-200">
                <strong>For:</strong> Corporate Treasurers & Banks
              </div>
            </CardContent>
          </Card>

          <Card variant="primary">
            <CardTitle className="text-center">FINTECH WHITE-LABEL</CardTitle>
            <div className="text-center my-6">
              <div className="text-4xl font-bold text-blue-600">MANAGED</div>
              <div className="text-4xl font-bold text-blue-600">DASHBOARD</div>
            </div>
            <CardContent className="text-center">
              <ul className="space-y-2 list-none">
                <li>• Ready-to-deploy dashboard (2 weeks)</li>
                <li>• White-label branding (logo, colors, domain)</li>
                <li>• Built-in integrations & compliance</li>
                <li>• Revenue share model (0.5-1%)</li>
              </ul>
              <div className="mt-4 pt-4 border-t-2 border-slate-200">
                <strong>For:</strong> Neobanks & Fintech Platforms
              </div>
            </CardContent>
          </Card>

          <Card variant="secondary">
            <CardTitle className="text-center">MANAGED YIELD OPS</CardTitle>
            <div className="text-center my-6">
              <div className="text-4xl font-bold text-amber-500">FULL</div>
              <div className="text-4xl font-bold text-amber-500">SERVICE</div>
            </div>
            <CardContent className="text-center">
              <ul className="space-y-2 list-none">
                <li>• White-glove onboarding & integration</li>
                <li>• 24/7 monitoring & risk management</li>
                <li>• Custom strategy development</li>
                <li>• Dedicated account manager</li>
              </ul>
              <div className="mt-4 pt-4 border-t-2 border-slate-200">
                <strong>For:</strong> Enterprise Clients ($50M+ AUM)
              </div>
            </CardContent>
          </Card>
        </ThreeColumnGrid>

        <div className="mt-12 p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
          <p className="text-blue-300 text-lg text-center font-medium">
            Managed Platform Infrastructure: We provide the FULL dashboard,
            integrations, and compliance - institutions customize and deploy
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
