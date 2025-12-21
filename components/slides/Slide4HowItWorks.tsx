"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import FourColumnGrid from "@/components/FourColumnGrid";
import Icon from "@/components/Icon";

export default function Slide4HowItWorks() {
  return (
    <Slide id={4} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          HOW MONOLITH WORKS: B2B WHITE-LABEL MODEL
        </Title>
        <Subtitle size="md" className="mb-12 text-center">
          Managed Dashboard Platform: Institutions go live in 2 weeks with our
          full-service infrastructure
        </Subtitle>

        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <div className="bg-slate-100 p-6 rounded-lg flex items-center gap-4">
            <Icon
              name="user"
              size={28}
              className="text-blue-600 flex-shrink-0"
            />
            <p className="text-slate-900">
              <strong>INSTITUTION SIGNS UP</strong> - Treasury manager creates
              account on Monolith platform
            </p>
          </div>
          <div className="text-center">
            <Icon name="arrow-down" size={32} className="text-slate-400" />
          </div>

          <div className="bg-slate-100 p-6 rounded-lg flex items-center gap-4">
            <Icon
              name="mobile"
              size={28}
              className="text-purple-600 flex-shrink-0"
            />
            <p className="text-slate-900">
              <strong>WHITE-LABEL DASHBOARD</strong> - Customize with their
              branding (logo, colors, domain)
            </p>
          </div>
          <div className="text-center">
            <Icon name="arrow-down" size={32} className="text-slate-400" />
          </div>

          <div className="bg-slate-100 p-6 rounded-lg flex items-center gap-4">
            <Icon
              name="link"
              size={28}
              className="text-green-600 flex-shrink-0"
            />
            <p className="text-slate-900">
              <strong>CONNECT INTEGRATIONS</strong> - Link QuickBooks,
              Fireblocks, Bloomberg in one click
            </p>
          </div>
          <div className="text-center">
            <Icon name="arrow-down" size={32} className="text-slate-400" />
          </div>

          <div className="bg-slate-100 p-6 rounded-lg flex items-center gap-4">
            <Icon
              name="database"
              size={28}
              className="text-amber-600 flex-shrink-0"
            />
            <p className="text-slate-900">
              <strong>DEPOSIT CAPITAL</strong> - Transfer stablecoins to vault
              contracts (ERC-4626 standard)
            </p>
          </div>
          <div className="text-center">
            <Icon name="arrow-down" size={32} className="text-slate-400" />
          </div>

          <FourColumnGrid className="mb-4">
            <div className="bg-slate-100 p-4 rounded-lg text-center text-sm text-slate-900">
              <strong>Portfolio</strong>
              <br />
              Dashboard
            </div>
            <div className="bg-slate-100 p-4 rounded-lg text-center text-sm text-slate-900">
              <strong>Performance</strong>
              <br />
              Analytics
            </div>
            <div className="bg-slate-100 p-4 rounded-lg text-center text-sm text-slate-900">
              <strong>Risk</strong>
              <br />
              Monitoring
            </div>
            <div className="bg-slate-100 p-4 rounded-lg text-center text-sm text-slate-900">
              <strong>Compliance</strong>
              <br />
              Reporting
            </div>
          </FourColumnGrid>
          <div className="text-center">
            <Icon name="arrow-down" size={32} className="text-slate-400" />
          </div>

          <div className="bg-green-100 p-6 rounded-lg border-2 border-green-500 flex items-center gap-4">
            <Icon
              name="check"
              size={28}
              className="text-green-600 flex-shrink-0"
            />
            <p className="text-green-900">
              <strong>LIVE IN 2 WEEKS</strong> - Auto-rebalancing, daily
              reports, full compliance tooling
            </p>
          </div>
        </div>

        <FourColumnGrid>
          <Card variant="glass">
            <CardTitle className="text-center">Managed Dashboard</CardTitle>
            <CardContent className="text-center">
              We provide the complete dashboard - they white-label with their
              branding
            </CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle className="text-center">Built-in Integrations</CardTitle>
            <CardContent className="text-center">
              QuickBooks, Fireblocks, Bloomberg - all pre-integrated and ready
              to connect
            </CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle className="text-center">Full Compliance Suite</CardTitle>
            <CardContent className="text-center">
              Audit trails, tax reports, insurance certificates - all automated
            </CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle className="text-center">Fast Time-to-Value</CardTitle>
            <CardContent className="text-center">
              Live in 2 weeks vs 3-6 months building custom integration
            </CardContent>
          </Card>
        </FourColumnGrid>
      </SlideContent>
    </Slide>
  );
}
