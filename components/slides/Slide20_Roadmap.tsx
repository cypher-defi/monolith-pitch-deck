"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import FourColumnGrid from "@/components/FourColumnGrid";
import Icon from "@/components/Icon";

export default function Slide20_Roadmap() {
  return (
    <Slide id={18} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          APPENDIX C-5: 12-MONTH ROADMAP
        </Title>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 to-amber-500"></div>

          <div className="space-y-8">
            {/* Month 1 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500 border-4 border-black flex items-center justify-center font-bold text-white relative z-10">
                M1
              </div>
              <Card variant="glass" className="flex-1">
                <CardTitle>Legal & Partnership Foundation</CardTitle>
                <CardContent>
                  <ul className="space-y-1 text-left text-sm">
                    <li>• Legal entity + regulatory consultation</li>
                    <li>• Custody partnership discussions</li>
                    <li>• First customer LOI/term sheet</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Months 2-3 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-500 border-4 border-black flex items-center justify-center font-bold text-white relative z-10">
                M2-3
              </div>
              <Card variant="glass" className="flex-1">
                <CardTitle>Smart Contracts + Core Dashboards</CardTitle>
                <CardContent>
                  <ul className="space-y-1 text-left text-sm">
                    <li>
                      • Three-tier ERC-4626 vault system development
                      (Conservative, Balanced, Aggressive)
                    </li>
                    <li>
                      • Smart contract audits: OpenZeppelin + Hacken (3 vaults)
                    </li>
                    <li>
                      • Portfolio & Performance dashboards with tier selector
                    </li>
                    <li>• White-label customization system</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Month 4 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-500 border-4 border-black flex items-center justify-center font-bold text-white relative z-10">
                M4
              </div>
              <Card variant="glass" className="flex-1">
                <CardTitle>Integrations & Compliance Tools</CardTitle>
                <CardContent>
                  <ul className="space-y-1 text-left text-sm">
                    <li>• QuickBooks & Fireblocks integration</li>
                    <li>• Compliance dashboard & reporting</li>
                    <li>• User management & permissions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Month 5 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-500 border-4 border-black flex items-center justify-center font-bold text-white relative z-10">
                M5
              </div>
              <Card variant="glass" className="flex-1">
                <CardTitle>Advanced Dashboard Features</CardTitle>
                <CardContent>
                  <ul className="space-y-1 text-left text-sm">
                    <li>• Risk monitoring & alerts</li>
                    <li>• Advanced analytics & reporting</li>
                    <li>• Automated report scheduling</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Month 6 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-teal-500 border-4 border-black flex items-center justify-center font-bold text-white relative z-10">
                M6
              </div>
              <Card variant="glass" className="flex-1">
                <CardTitle className="flex items-center gap-2">
                  Pilot Customer Launch
                  <Icon name="rocket" size={20} className="text-blue-400" />
                </CardTitle>
                <CardContent>
                  <ul className="space-y-1 text-left text-sm">
                    <li>• Customer dashboard customization</li>
                    <li>• Mainnet deployment + onboarding</li>
                    <li>
                      • Launch with Conservative tier (Balanced tier M8,
                      Aggressive tier M10)
                    </li>
                    <li>• Go-live with $5-20M AUM</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Months 7-12 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-amber-500 border-4 border-black flex items-center justify-center font-bold text-white relative z-10 text-sm">
                M7-12
              </div>
              <Card variant="glass" className="flex-1">
                <CardTitle>Scale & Series A Prep</CardTitle>
                <CardContent>
                  <ul className="space-y-1 text-left text-sm">
                    <li>• Iterate based on pilot feedback</li>
                    <li>• Onboard 2nd & 3rd customers</li>
                    <li>• Build case studies & refine sales</li>
                    <li>
                      • <strong>Target:</strong> 3 customers, $100M AUM, $1.6M
                      ARR
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Year 1 Milestones */}
        <h3 className="text-2xl mb-8 text-center text-white">
          Year 1 Milestones
        </h3>
        <FourColumnGrid>
          <Card className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 border-2 border-blue-500 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-slate-700 font-medium">
                Institutional Partners
              </div>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 via-green-100 to-green-50 border-2 border-green-500 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">
                $100M
              </div>
              <div className="text-slate-700 font-medium">AUM Managed</div>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 border-2 border-purple-500 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">
                $1.6M
              </div>
              <div className="text-slate-700 font-medium">ARR</div>
            </div>
          </Card>
          <Card className="bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 border-2 border-amber-500 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">
                Profitable
              </div>
              <div className="text-slate-700 font-medium">Month 12-15</div>
            </div>
          </Card>
        </FourColumnGrid>
      </SlideContent>
    </Slide>
  );
}
