'use client';

import Slide from '@/components/Slide';
import SlideContent from '@/components/SlideContent';
import Title from '@/components/Title';
import Subtitle from '@/components/Subtitle';
import Card from '@/components/Card';
import CardTitle from '@/components/CardTitle';
import CardContent from '@/components/CardContent';
import ThreeColumnGrid from '@/components/ThreeColumnGrid';
import TwoColumnGrid from '@/components/TwoColumnGrid';
import FourColumnGrid from '@/components/FourColumnGrid';
import FiveColumnGrid from '@/components/FiveColumnGrid';
import NavControls from '@/components/NavControls';
import Icon from '@/components/Icon';
import usePresentationController from '@/hooks/usePresentationController';

export default function Home() {
  const { currentSlide, totalSlides, nextSlide, previousSlide } = usePresentationController(20);

  return (
    <main>
      {/* Slide 1: Cover */}
      <Slide id={1} background="bg-gradient-to-br from-black via-zinc-900 to-black">
        <SlideContent className="text-center flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">
          <div className="mb-12">
            <div className="logo">
              <div className="logo-line"></div>
              <div className="logo-line"></div>
            </div>
          </div>

          <Title className="mb-6 text-7xl text-blue-400">
            MONOLITH
          </Title>
          <Subtitle size="lg" className="mb-8">
            Institutional DeFi Infrastructure
          </Subtitle>

          <div className="w-48 h-0.5 bg-blue-400/30 my-16"></div>

          <Subtitle size="md" className="text-slate-300 leading-relaxed">
            B2B2C Yield Infrastructure for Banks & Corporate Treasurers
          </Subtitle>

          <p className="text-slate-600 mt-20 text-lg">
            Seed Round Pitch Deck • December 2025
          </p>
        </SlideContent>
      </Slide>

      {/* Slide 2: The Problem */}
      <Slide id={2} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            THE INSTITUTIONAL STABLECOIN PROBLEM
          </Title>
          <Subtitle size="md" className="mb-12 text-center">
            $208B+ in institutional stablecoins earning 0% while DeFi offers 4-6% yields
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
                $5-50M in idle USDC/USDT<br/><br/>
                Earning 0% returns<br/><br/>
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
                Piloting stablecoin ops<br/><br/>
                Need compliance-ready yields<br/><br/>
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
                Want to offer stablecoin yields<br/><br/>
                Need ready-to-deploy solution<br/><br/>
                Can't afford 6+ months to build
              </CardContent>
            </Card>
          </ThreeColumnGrid>

          <div className="mt-12 p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
            <p className="text-blue-300 text-lg text-center font-medium">
              Institutions need: Ready-to-deploy dashboard + Built-in integrations + Full compliance suite + Go live in 2 weeks (not 6 months)
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 3: The Solution */}
      <Slide id={3} background="bg-gradient-to-br from-black via-blue-950/20 to-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            INTRODUCING MONOLITH
          </Title>
          <Subtitle size="md" className="mb-12 text-center text-blue-300">
            Managed dashboard platform: Full-service yield infrastructure with built-in compliance
          </Subtitle>

          <ThreeColumnGrid>
            <Card variant="primary">
              <CardTitle className="text-center">INSTITUTIONAL TREASURY</CardTitle>
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
              Managed Platform Infrastructure: We provide the FULL dashboard, integrations, and compliance - institutions customize and deploy
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 4: How It Works */}
      <Slide id={4} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            HOW MONOLITH WORKS: B2B WHITE-LABEL MODEL
          </Title>
          <Subtitle size="md" className="mb-12 text-center">
            Managed Dashboard Platform: Institutions go live in 2 weeks with our full-service infrastructure
          </Subtitle>

          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            <div className="bg-slate-100 p-6 rounded-lg flex items-center gap-4">
              <Icon name="user" size={28} className="text-blue-600 flex-shrink-0" />
              <p className="text-slate-900"><strong>INSTITUTION SIGNS UP</strong> - Treasury manager creates account on Monolith platform</p>
            </div>
            <div className="text-center">
              <Icon name="arrow-down" size={32} className="text-slate-400" />
            </div>

            <div className="bg-slate-100 p-6 rounded-lg flex items-center gap-4">
              <Icon name="mobile" size={28} className="text-purple-600 flex-shrink-0" />
              <p className="text-slate-900"><strong>WHITE-LABEL DASHBOARD</strong> - Customize with their branding (logo, colors, domain)</p>
            </div>
            <div className="text-center">
              <Icon name="arrow-down" size={32} className="text-slate-400" />
            </div>

            <div className="bg-slate-100 p-6 rounded-lg flex items-center gap-4">
              <Icon name="link" size={28} className="text-green-600 flex-shrink-0" />
              <p className="text-slate-900"><strong>CONNECT INTEGRATIONS</strong> - Link QuickBooks, Fireblocks, Bloomberg in one click</p>
            </div>
            <div className="text-center">
              <Icon name="arrow-down" size={32} className="text-slate-400" />
            </div>

            <div className="bg-slate-100 p-6 rounded-lg flex items-center gap-4">
              <Icon name="database" size={28} className="text-amber-600 flex-shrink-0" />
              <p className="text-slate-900"><strong>DEPOSIT CAPITAL</strong> - Transfer stablecoins to vault contracts (ERC-4626 standard)</p>
            </div>
            <div className="text-center">
              <Icon name="arrow-down" size={32} className="text-slate-400" />
            </div>

            <FourColumnGrid className="mb-4">
              <div className="bg-slate-100 p-4 rounded-lg text-center text-sm text-slate-900">
                <strong>Portfolio</strong><br/>Dashboard
              </div>
              <div className="bg-slate-100 p-4 rounded-lg text-center text-sm text-slate-900">
                <strong>Performance</strong><br/>Analytics
              </div>
              <div className="bg-slate-100 p-4 rounded-lg text-center text-sm text-slate-900">
                <strong>Risk</strong><br/>Monitoring
              </div>
              <div className="bg-slate-100 p-4 rounded-lg text-center text-sm text-slate-900">
                <strong>Compliance</strong><br/>Reporting
              </div>
            </FourColumnGrid>
            <div className="text-center">
              <Icon name="arrow-down" size={32} className="text-slate-400" />
            </div>

            <div className="bg-green-100 p-6 rounded-lg border-2 border-green-500 flex items-center gap-4">
              <Icon name="check" size={28} className="text-green-600 flex-shrink-0" />
              <p className="text-green-900"><strong>LIVE IN 2 WEEKS</strong> - Auto-rebalancing, daily reports, full compliance tooling</p>
            </div>
          </div>

          <FourColumnGrid>
            <Card variant="glass">
              <CardTitle className="text-center">Managed Dashboard</CardTitle>
              <CardContent className="text-center">
                We provide the complete dashboard - they white-label with their branding
              </CardContent>
            </Card>
            <Card variant="glass">
              <CardTitle className="text-center">Built-in Integrations</CardTitle>
              <CardContent className="text-center">
                QuickBooks, Fireblocks, Bloomberg - all pre-integrated and ready to connect
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

      {/* Slide 5: Market Opportunity */}
      <Slide id={5} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            STABLECOIN MARKET SIZE
          </Title>

          <ThreeColumnGrid className="mb-16">
            <Card className="bg-blue-50 border-2 border-blue-500">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-4">$310B</div>
                <CardTitle className="text-center text-slate-600">Total Market Size</CardTitle>
              </div>
            </Card>
            <Card className="bg-green-50 border-2 border-green-500">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-4">+50%</div>
                <CardTitle className="text-center text-slate-600">YoY Growth Rate</CardTitle>
              </div>
            </Card>
            <Card className="bg-purple-50 border-2 border-purple-500">
              <div className="text-center">
                <div className="text-6xl font-bold text-purple-600 mb-4">$1T+</div>
                <CardTitle className="text-center text-slate-600">Monthly Volume</CardTitle>
              </div>
            </Card>
          </ThreeColumnGrid>

          <FiveColumnGrid className="mb-12">
            <Card variant="glass">
              <CardTitle>USDT: $186B (60%)</CardTitle>
              <CardContent>Market leader, widely adopted</CardContent>
            </Card>
            <Card variant="glass">
              <CardTitle>USDC: $76B (25%)</CardTitle>
              <CardContent>NYSE-listed, MiCA compliant</CardContent>
            </Card>
            <Card variant="glass">
              <CardTitle>USDe: $12B (4%)</CardTitle>
              <CardContent>Synthetic, high-yield</CardContent>
            </Card>
            <Card variant="glass">
              <CardTitle>DAI: $5-6B (2%)</CardTitle>
              <CardContent>DAO-governed stablecoin</CardContent>
            </Card>
            <Card variant="glass">
              <CardTitle>Others: $30B+ (10%)</CardTitle>
              <CardContent>Emerging + regional stables</CardContent>
            </Card>
          </FiveColumnGrid>

          <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
            <p className="text-blue-300 text-lg text-center">
              <strong>Serviceable Market:</strong> ~$20-30B institutional stablecoins (10% of total) seeking yield optimization<br/>
              <strong>Initial Target (Years 1-3):</strong> $1-2B AUM → $10-20M ARR at maturity
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 6: Why Now */}
      <Slide id={6} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            WHY NOW? FOUR TAILWINDS
          </Title>

          <FourColumnGrid>
            <Card variant="glass">
              <div className="text-center mb-4">
                <div className="inline-block p-4 rounded-full bg-purple-50 border-2 border-purple-500 mb-4">
                  <Icon name="scroll" size={32} className="text-purple-600" />
                </div>
              </div>
              <CardTitle>Regulatory Clarity</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• GENIUS Act passed July 2025</li>
                  <li>• Clear stablecoin framework</li>
                  <li>• MiCA in EU operational</li>
                  <li>• Institutional confidence ↑</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <div className="text-center mb-4">
                <div className="inline-block p-4 rounded-full bg-indigo-50 border-2 border-indigo-500 mb-4">
                  <Icon name="building" size={32} className="text-indigo-600" />
                </div>
              </div>
              <CardTitle>Institutional Adoption</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• Circle (USDC) publicly traded</li>
                  <li>• $5B valuation (June 2025)</li>
                  <li>• Corporate treasuries exploring</li>
                  <li>• Family offices entering DeFi</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <div className="text-center mb-4">
                <div className="inline-block p-4 rounded-full bg-teal-50 border-2 border-teal-500 mb-4">
                  <Icon name="chart" size={32} className="text-teal-600" />
                </div>
              </div>
              <CardTitle>Infrastructure Maturity</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• Aave: $40B TVL, battle-tested</li>
                  <li>• Morpho: Coinbase partnership</li>
                  <li>• Ondo: $1.4B in RWAs</li>
                  <li>• Security standards proven</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <div className="text-center mb-4">
                <div className="inline-block p-4 rounded-full bg-green-50 border-2 border-green-500 mb-4">
                  <Icon name="trending" size={32} className="text-green-600" />
                </div>
              </div>
              <CardTitle>Market Momentum</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• 50% YoY growth sustained</li>
                  <li>• $310B → $465B projected (2026)</li>
                  <li>• RWA tokenization validated</li>
                  <li>• Perfect timing for aggregators</li>
                </ul>
              </CardContent>
            </Card>
          </FourColumnGrid>

          <div className="mt-12 p-6 bg-green-500/10 border-2 border-green-500/50 rounded-lg">
            <p className="text-green-300 text-lg text-center font-medium">
              The Perfect Storm: Regulatory clarity + Institutional interest + Mature infrastructure + Market growth
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 7: Competition */}
      <Slide id={7} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            WHY INSTITUTIONS CHOOSE US OVER AAVE
          </Title>

          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr className="border-b-2 border-slate-700">
                  <th className="p-4 text-slate-300">Feature</th>
                  <th className="p-4 text-slate-300">Aave (Protocol)</th>
                  <th className="p-4 text-blue-400">Monolith (Infrastructure)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr>
                  <td className="p-4 font-semibold">Target Customer</td>
                  <td className="p-4">Crypto-native traders</td>
                  <td className="p-4 text-green-400">✓ Corporate treasurers & banks</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Custody Integration</td>
                  <td className="p-4">Self-custody required</td>
                  <td className="p-4 text-green-400">✓ Works with existing custody</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Compliance Reporting</td>
                  <td className="p-4">Manual (on-chain data)</td>
                  <td className="p-4 text-green-400">✓ Automated compliance reports</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Risk Management</td>
                  <td className="p-4">User manages risk</td>
                  <td className="p-4 text-green-400">✓ Professional 24/7 monitoring</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Dashboard & UI</td>
                  <td className="p-4">✗ No interface (protocol only)</td>
                  <td className="p-4 text-green-400">✓ Full managed dashboard platform</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Integrations</td>
                  <td className="p-4">✗ None (build yourself)</td>
                  <td className="p-4 text-green-400">✓ Pre-built (QuickBooks, Fireblocks, etc)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Time to Deploy</td>
                  <td className="p-4">3-6 months (build integration)</td>
                  <td className="p-4 text-green-400">✓ 2 weeks (ready-to-deploy)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Support Model</td>
                  <td className="p-4">Community Discord</td>
                  <td className="p-4 text-green-400">✓ Dedicated account manager</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Insurance</td>
                  <td className="p-4">Optional (user buys)</td>
                  <td className="p-4 text-green-400">✓ Included for institutional tier</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
            <p className="text-blue-300 text-lg text-center font-medium">
              We're not competing on yield—we compete on operational excellence. Aave = best protocol. Monolith = managed dashboard platform with full compliance suite.
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 8: Business Model */}
      <Slide id={8} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            BUSINESS MODEL: INSTITUTIONAL B2B
          </Title>

          <ThreeColumnGrid className="mb-12">
            <Card className="bg-green-50 border-2 border-green-500">
              <CardTitle className="text-center text-green-600">Management Fee</CardTitle>
              <div className="text-center my-4">
                <div className="text-5xl font-bold text-green-600 mb-2">1.0-1.5%</div>
                <div className="text-slate-600">Annual on AUM</div>
              </div>
            </Card>
            <Card className="bg-blue-50 border-2 border-blue-500">
              <CardTitle className="text-center text-blue-600">Implementation</CardTitle>
              <div className="text-center my-4">
                <div className="text-5xl font-bold text-blue-600 mb-2">$25-75K</div>
                <div className="text-slate-600">One-Time Setup</div>
              </div>
            </Card>
            <Card className="bg-amber-50 border-2 border-amber-500">
              <CardTitle className="text-center text-amber-600">White-Label SDK</CardTitle>
              <div className="text-center my-4">
                <div className="text-5xl font-bold text-amber-600 mb-2">$2-15K</div>
                <div className="text-slate-600">Monthly SaaS</div>
              </div>
            </Card>
          </ThreeColumnGrid>

          {/* Timeline */}
          <div className="relative mb-12">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"></div>

            <FourColumnGrid className="relative">
              {/* Month 6-9 */}
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-black mb-4 relative z-10"></div>
                <Card variant="glass" className="w-full">
                  <CardTitle className="text-center">Month 6-9</CardTitle>
                  <CardContent className="text-center">
                    1st Institution<br/>$20M AUM
                  </CardContent>
                  <div className="text-3xl font-bold text-blue-400 mt-4 text-center">$200K ARR</div>
                </Card>
              </div>

              {/* Year 1 */}
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-purple-500 border-4 border-black mb-4 relative z-10"></div>
                <Card variant="glass" className="w-full">
                  <CardTitle className="text-center">Year 1</CardTitle>
                  <CardContent className="text-center">
                    3 Institutions<br/>$100M AUM
                  </CardContent>
                  <div className="text-3xl font-bold text-purple-400 mt-4 text-center">$1M ARR</div>
                </Card>
              </div>

              {/* Year 2 */}
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-indigo-500 border-4 border-black mb-4 relative z-10"></div>
                <Card variant="glass" className="w-full">
                  <CardTitle className="text-center">Year 2</CardTitle>
                  <CardContent className="text-center">
                    8-10 Partners<br/>$500M AUM
                  </CardContent>
                  <div className="text-3xl font-bold text-indigo-400 mt-4 text-center">$5M ARR</div>
                </Card>
              </div>

              {/* Year 3 */}
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-black mb-4 relative z-10"></div>
                <Card variant="glass" className="w-full">
                  <CardTitle className="text-center">Year 3</CardTitle>
                  <CardContent className="text-center">
                    15-20 Partners<br/>$1.5B AUM
                  </CardContent>
                  <div className="text-3xl font-bold text-green-400 mt-4 text-center">$15M ARR</div>
                </Card>
              </div>
            </FourColumnGrid>
          </div>

          <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
            <p className="text-blue-300 text-lg text-center">
              Each institutional partner = $100K-$1M+ ARR • &lt;5% churn (vs 30-50% retail) • Series A ready at Year 2
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 9: Go-to-Market */}
      <Slide id={9} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            GO-TO-MARKET: INSTITUTIONAL B2B
          </Title>
          <Subtitle size="md" className="mb-12 text-center">
            Direct sales to banks, corporate treasurers, asset/fund managers, and fintechs—they bring distribution
          </Subtitle>

          <TwoColumnGrid>
            <Card variant="glass">
              <CardTitle>Phase 1: First Customer (Months 1-6)</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li><strong>Target:</strong> Corporate treasurers (emerging markets)</li>
                  <li><strong>Profile:</strong> $5-50M in idle USDC/USDT</li>
                  <li><strong>Strategy:</strong></li>
                  <li className="pl-5">→ Warm intros through custody partners (Fireblocks, Kingdom Trust)</li>
                  <li className="pl-5">→ Direct outreach to CFOs in Argentina, Nigeria, Brazil</li>
                  <li className="pl-5">→ Pilot program: $5-10M AUM, prove model</li>
                  <li className="mt-4 pt-4 border-t-2 border-slate-600">
                    <strong className="text-blue-400">Goal: 1 live customer, $20M AUM, $200K ARR</strong>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardTitle>Phase 2: Scale to Banks (Months 6-12)</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li><strong>Target:</strong> Regional banks piloting stablecoin ops</li>
                  <li><strong>Profile:</strong> $10-100M stablecoin reserves</li>
                  <li><strong>Strategy:</strong></li>
                  <li className="pl-5">→ Leverage case study from Phase 1</li>
                  <li className="pl-5">→ Target banks with JPMorgan Onyx-style stablecoin pilots</li>
                  <li className="pl-5">→ Compliance-ready pitch: audit trails, insurance, reporting</li>
                  <li className="mt-4 pt-4 border-t-2 border-slate-600">
                    <strong className="text-blue-400">Goal: 3 institutional partners, $100M AUM, $1M ARR</strong>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardTitle>Phase 3: Fintech Partnerships (Year 2)</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li><strong>Target:</strong> Neobanks & fintech platforms</li>
                  <li><strong>Profile:</strong> Want to offer stablecoin yields to customers</li>
                  <li><strong>Strategy:</strong></li>
                  <li className="pl-5">→ White-label SDK pitch: 2-week integration vs 6-month build</li>
                  <li className="pl-5">→ Target Revolut/N26/Wise-style fintechs adding crypto</li>
                  <li className="pl-5">→ Revenue share model: they keep spread, we handle infrastructure</li>
                  <li className="mt-4 pt-4 border-t-2 border-slate-600">
                    <strong className="text-blue-400">Goal: 8-10 partners, $500M AUM, $5M ARR</strong>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardTitle>Phase 4: Enterprise Scale (Year 3)</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li><strong>Target:</strong> Large institutions & mega-fintechs</li>
                  <li><strong>Profile:</strong> $100M-1B+ deployment potential</li>
                  <li><strong>Strategy:</strong></li>
                  <li className="pl-5">→ Proven track record: $500M+ managed, 8+ institutions served</li>
                  <li className="pl-5">→ Enterprise features: SLA guarantees, custom strategies, dedicated teams</li>
                  <li className="pl-5">→ Strategic partnerships with major custody providers</li>
                  <li className="mt-4 pt-4 border-t-2 border-slate-600">
                    <strong className="text-blue-400">Goal: 15-20 partners, $1.5B AUM, $15M ARR</strong>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TwoColumnGrid>

          <div className="mt-8 p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
            <p className="text-blue-300 text-lg text-center">
              <strong>Zero CAC:</strong> Institutions come to us • <strong>Sticky revenue:</strong> &lt;5% churn vs 30-50% retail • <strong>Compound growth:</strong> Each partner grows their deposits over time
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 10: The Founders */}
      <Slide id={10} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            THE FOUNDERS
          </Title>
          <Subtitle size="md" className="mb-12 text-center">
            Complementary technical founders with production-grade delivery experience
          </Subtitle>

          <TwoColumnGrid className="mb-8">
            <Card variant="glass">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600 mr-4">
                  A
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#60a5fa]">Antonio Rapozo</div>
                  <div className="text-slate-400">Co-Founder & Chief Technology Officer</div>
                </div>
              </div>

              <CardTitle>Enterprise Infrastructure Expert</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left mb-4">
                  <li>• <strong>4+ years</strong> building mission-critical government systems</li>
                  <li>• <strong>15+ State DOTs served:</strong> Bridge inspection & asset management platforms processing $500M+ annual infrastructure spending</li>
                  <li>• <strong>1,000+ daily users:</strong> Production apps meeting federal compliance (FHWA, NBIS, AASHTO)</li>
                  <li>• <strong>Cloud architecture:</strong> AWS Solutions Architect (2x certified), building scalable serverless systems</li>
                  <li>• <strong>AI/LLM integration:</strong> Building MemoryKit, open-source .NET library for LLM applications</li>
                </ul>
              </CardContent>

              <CardTitle>Technical Stack</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• Full-stack: Vue.js, React, C#, .NET Core, TypeScript</li>
                  <li>• Cloud: AWS, Azure, serverless architecture</li>
                  <li>• AI: OpenAI API, LangChain, Semantic Kernel</li>
                  <li>• Data: SQL, PostgreSQL, DynamoDB, ETL pipelines</li>
                </ul>
              </CardContent>

              <div className="mt-4 p-4 bg-slate-100 rounded-lg text-slate-700 text-sm">
                <strong>Why Antonio:</strong> Proven track record shipping production systems that handle institutional-scale operations. Brings enterprise architecture expertise, regulatory compliance knowledge, and experience operating systems where downtime isn't an option.
              </div>
            </Card>

            <Card variant="glass">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600 mr-4">
                  E
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#60a5fa]">Enrique Ibarra</div>
                  <div className="text-slate-400">Co-Founder & Chief Protocol Officer</div>
                </div>
              </div>

              <CardTitle>DeFi Protocol Engineer</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left mb-4">
                  <li>• <strong>3+ years</strong> of Solidity development experience</li>
                  <li>• <strong>Built 10+ DeFi protocols</strong> as technical demonstrations: savings vaults, yield aggregators, CDP stablecoins, flash loan infrastructure, AMMs</li>
                  <li>• <strong>Production-ready code:</strong> Comprehensive testing (100+ tests), gas optimization, security patterns, mainnet deployments</li>
                  <li>• <strong>Deep protocol expertise:</strong> Integrated Aave, Morpho, Curve, Ondo, Uniswap in working prototypes</li>
                  <li>• <strong>Cross-chain:</strong> Ethereum (Foundry) + Solana (Rust/Anchor)</li>
                </ul>
              </CardContent>

              <CardTitle>Technical Portfolio</CardTitle>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• <strong>VaultForge:</strong> Multi-tier ERC-4626 savings protocol</li>
                  <li>• <strong>Meridian Finance:</strong> Yield aggregator with auto-rebalancing</li>
                  <li>• <strong>CollateralCoin:</strong> CDP stablecoin (MakerDAO-style)</li>
                  <li>• <strong>ArbWave:</strong> Flash loan arbitrage infrastructure</li>
                  <li>• <strong>Mostro:</strong> Solana token launchpad (current)</li>
                </ul>
              </CardContent>

              <div className="mt-4 p-4 bg-slate-100 rounded-lg text-slate-700 text-sm">
                <strong>Why Enrique:</strong> Deep technical knowledge of DeFi protocols, smart contract architecture, and security. Has built the exact type of vault system Monolith needs—understands the complexities, gas optimization, and risk management required.
              </div>
            </Card>
          </TwoColumnGrid>

          <Card variant="glass" className="mb-8">
            <CardTitle>Why We're the Right Team</CardTitle>
            <CardContent>
              We're building Monolith because we've seen both sides: Enrique has spent years deep in DeFi protocol architecture, understanding what it takes to build secure, efficient smart contracts. Antonio has built enterprise-grade systems that institutions actually use and trust with hundreds of millions.
              <br/><br/>
              <strong>The gap we identified:</strong> Institutional treasuries want DeFi yields but can't navigate the complexity. Most "aggregators" are built by pure DeFi natives who don't understand enterprise requirements, or by enterprise teams who don't understand protocol-level DeFi.
              <br/><br/>
              <strong>Our advantage:</strong> Enrique brings deep smart contract expertise and knows how to integrate protocols safely. Antonio brings production operations experience and understands what institutions need to trust a platform with real capital. Together, we're building the institutional-grade DeFi infrastructure that bridges both worlds.
            </CardContent>
          </Card>

          <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
            <p className="text-blue-300 text-lg text-center font-medium">
              <strong>Complementary skills:</strong> DeFi protocol engineer + Enterprise architect = The technical foundation to build institutional-grade infrastructure that scales.
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 11: Demo */}
      <Slide id={11} background="bg-gradient-to-br from-black via-zinc-900 to-black">
        <SlideContent className="text-center flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">
          <Title size="lg" className="mb-16 text-center">
            MANAGED DASHBOARD PLATFORM
          </Title>

          <Subtitle size="md" className="mb-10 text-center text-slate-300">
            Complete infrastructure - not just an API
          </Subtitle>

          <div className="bg-blue-500/20 border-4 border-blue-400 rounded-xl p-8 inline-block mb-16">
            <p className="text-2xl text-blue-300 mb-2">Dashboard Demo Available At:</p>
            <p className="text-4xl font-bold text-blue-400">
              [Add link here for demo]
            </p>
          </div>

          <Subtitle size="md" className="mb-8">
            Full-Service Platform Includes:
          </Subtitle>

          <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-500">
              <CardTitle className="text-blue-900">Dashboard (White-Label)</CardTitle>
              <CardContent className="text-blue-800">
                They white-label it as their own branded platform
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-500">
              <CardTitle className="text-purple-900">Compliance Tooling</CardTitle>
              <CardContent className="text-purple-800">
                Audit trails, tax reports, insurance
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500">
              <CardTitle className="text-green-900">Integrations</CardTitle>
              <CardContent className="text-green-800">
                QuickBooks, Fireblocks, Bloomberg
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-500">
              <CardTitle className="text-amber-900">User Management</CardTitle>
              <CardContent className="text-amber-800">
                Admins, analysts, viewers
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-500">
              <CardTitle className="text-pink-900">Automated Reporting</CardTitle>
              <CardContent className="text-pink-800">
                Daily, weekly, monthly reports
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-slate-400 flex items-center justify-center gap-2">
            <Icon name="warning" size={20} className="text-yellow-500" />
            <span>Demo Mode • Sepolia Testnet • Not Audited</span>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 12: Roadmap */}
      <Slide id={12} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            12-MONTH ROADMAP
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
                      <li>• ERC-4626 vault development + audit</li>
                      <li>• Portfolio & Performance dashboards</li>
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
                  <CardTitle>Pilot Customer Launch 🚀</CardTitle>
                  <CardContent>
                    <ul className="space-y-1 text-left text-sm">
                      <li>• Customer dashboard customization</li>
                      <li>• Mainnet deployment + onboarding</li>
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
                      <li>• <strong>Target:</strong> 3 customers, $100M AUM, $1M ARR</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Year 1 Milestones */}
          <h3 className="text-2xl mb-8 text-center text-white">Year 1 Milestones</h3>
          <FourColumnGrid>
            <Card className="bg-blue-50 border-2 border-blue-500">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-slate-600">Institutional Partners</div>
              </div>
            </Card>
            <Card className="bg-green-50 border-2 border-green-500">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">$100M</div>
                <div className="text-slate-600">AUM Managed</div>
              </div>
            </Card>
            <Card className="bg-purple-50 border-2 border-purple-500">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">$1M</div>
                <div className="text-slate-600">ARR</div>
              </div>
            </Card>
            <Card className="bg-amber-50 border-2 border-amber-500">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">Series A</div>
                <div className="text-slate-600">Ready</div>
              </div>
            </Card>
          </FourColumnGrid>
        </SlideContent>
      </Slide>

      {/* Slide 13: Use of Funds */}
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
                <div className="w-72 h-72 mx-auto mb-8 relative">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="20" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#2563eb" strokeWidth="20" strokeDasharray="145.5 251.2" strokeDashoffset="0" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray="50.2 251.2" strokeDashoffset="-145.5" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="20" strokeDasharray="55.3 251.2" strokeDashoffset="-195.7" />
                  </svg>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded"></div>
                  <span><strong>58%</strong> Engineering</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-600 rounded"></div>
                  <span><strong>20%</strong> Security</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-amber-600 rounded"></div>
                  <span><strong>22%</strong> Operations</span>
                </div>
              </div>

              <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
                <p className="text-blue-400 text-lg text-center">
                  <strong>18-month runway</strong><br/>
                  to profitability at $50M TVL
                </p>
              </div>
            </div>
          </TwoColumnGrid>
        </SlideContent>
      </Slide>

      {/* Slide 14: The Ask */}
      <Slide id={14} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            THE ASK
          </Title>

          <ThreeColumnGrid className="mb-16">
            <Card className="bg-blue-50 border-2 border-blue-500">
              <div className="text-center">
                <CardTitle className="text-blue-600 mb-4 text-sm sm:text-base">Raise Amount</CardTitle>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">$500K-$1M</div>
              </div>
            </Card>
            <Card className="bg-purple-50 border-2 border-purple-500">
              <div className="text-center">
                <CardTitle className="text-purple-600 mb-4 text-sm sm:text-base">Pre-Money Valuation</CardTitle>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600">$3-4M</div>
              </div>
            </Card>
            <Card className="bg-green-50 border-2 border-green-500">
              <div className="text-center">
                <CardTitle className="text-green-600 mb-4 text-sm sm:text-base">Equity Offered</CardTitle>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600">15-20%</div>
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
                  <td className="p-4"><strong>$3M</strong><br/>(from $150M AUM)</td>
                  <td className="p-4">$0</td>
                  <td className="p-4 text-green-500 font-bold">$150K/year</td>
                  <td className="p-4 text-green-500 font-bold">+$120K net</td>
                  <td className="p-4 text-green-500 font-bold">1.5 months</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-blue-500">Mid-Size Fund</td>
                  <td className="p-4"><strong>$6M</strong><br/>(from $300M AUM)</td>
                  <td className="p-4">$0</td>
                  <td className="p-4 text-blue-500 font-bold">$300K/year</td>
                  <td className="p-4 text-blue-500 font-bold">+$240K net</td>
                  <td className="p-4 text-blue-500 font-bold">1.5 months</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-amber-500">Large Fund</td>
                  <td className="p-4"><strong>$10M</strong><br/>(from $500M AUM)</td>
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
              <CardContent>Not consumer fintech—institutional infrastructure with real revenue</CardContent>
            </Card>
            <Card variant="glass">
              <CardTitle>Fast Customer Payback</CardTitle>
              <CardContent>1.5 months to ROI for funds • Clear value prop: 5% vs 0% on reserves</CardContent>
            </Card>
            <Card variant="glass">
              <CardTitle>Sticky Revenue</CardTitle>
              <CardContent>$100K-$2M ARR per customer • &lt;5% churn vs 30-50% retail</CardContent>
            </Card>
            <Card variant="glass">
              <CardTitle>Fast to Revenue</CardTitle>
              <CardContent>First customer Month 6 • $1M ARR by Year 1</CardContent>
            </Card>
          </FourColumnGrid>

          <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
            <p className="text-blue-300 text-lg text-center">
              <strong>Series A Path:</strong> 3 institutional partners • $100M AUM • $1M ARR → $25-35M valuation (8-12x ARR multiple) in 12-15 months
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 15: Missing slide placeholder - keeping count at 20 */}
      {/* The HTML had slide 14 as "The Ask" but then jumped to slide 16 as "Appendix Divider" */}
      {/* I'll add a transition slide here */}

      <Slide id={15} background="bg-gradient-to-br from-black via-zinc-900 to-black">
        <SlideContent className="text-center flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">
          <Title size="xl" className="mb-10 text-blue-400">
            THANK YOU
          </Title>
          <Subtitle size="lg" className="mb-16">
            Questions & Discussion
          </Subtitle>

          <div className="space-y-6 text-left max-w-2xl">
            <p className="text-xl text-slate-300 flex items-center gap-4">
              <Icon name="email" size={28} className="text-blue-400" />
              Contact: founders@monolith.finance
            </p>
            <p className="text-xl text-slate-300 flex items-center gap-4">
              <Icon name="globe" size={28} className="text-blue-400" />
              Demo: [Add link here]
            </p>
            <p className="text-xl text-slate-300 flex items-center gap-4">
              <Icon name="folder" size={28} className="text-blue-400" />
              Data Room: Available upon request
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 16: Appendix Divider */}
      <Slide id={16} background="bg-gradient-to-br from-black via-zinc-900 to-black">
        <SlideContent className="text-center flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">
          <Title size="xl" className="mb-10 text-blue-400">
            APPENDIX
          </Title>
          <Subtitle size="lg" className="mb-16">
            Additional Technical & Strategic Details
          </Subtitle>

          <div className="grid grid-cols-2 gap-6 max-w-3xl">
            <Card variant="glass">
              <CardTitle>A. Technical Architecture</CardTitle>
              <CardContent>Smart contract design</CardContent>
            </Card>
            <Card variant="glass">
              <CardTitle>B. Security Framework</CardTitle>
              <CardContent>Audit strategy</CardContent>
            </Card>
            <Card variant="glass">
              <CardTitle>C. Regulatory Strategy</CardTitle>
              <CardContent>Jurisdiction options</CardContent>
            </Card>
            <Card variant="glass">
              <CardTitle>D. 3-Year Projections</CardTitle>
              <CardContent>Financial model</CardContent>
            </Card>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 17: Technical Architecture (Appendix A) */}
      <Slide id={17} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            APPENDIX A: B2B WHITE-LABEL ARCHITECTURE
          </Title>
          <Subtitle size="sm" className="mb-8 text-center">
            Multi-tenant infrastructure enabling asset managers to deploy yield products in weeks, not months
          </Subtitle>

          <div className="p-6 bg-blue-100 border-2 border-blue-500 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Strategic Pivot: Infrastructure-as-a-Service for Asset Managers
            </h3>
            <p className="text-blue-900">
              <strong>Model:</strong> White-label SDK enabling funds to offer DeFi yield to their clients under their own brand<br/>
              <strong>Revenue:</strong> SaaS licensing ($2K-15K/month) + implementation fees ($10K-75K) + 0.1% AUM revenue share<br/>
              <strong>Distribution:</strong> One fund with 500 clients = 500 retail users instantly (vs 12-month individual acquisition)
            </p>
          </div>

          <FourColumnGrid className="mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2 weeks</div>
              <div className="text-slate-400 text-sm">Integration Time</div>
              <div className="text-xs text-slate-500 mt-1">vs 6-12 months to build in-house</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$25K</div>
              <div className="text-slate-400 text-sm">Implementation Fee</div>
              <div className="text-xs text-slate-500 mt-1">vs $500K-2M to build from scratch</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%+</div>
              <div className="text-slate-400 text-sm">Gross Margins</div>
              <div className="text-xs text-slate-500 mt-1">Serverless cost structure advantage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20x</div>
              <div className="text-slate-400 text-sm">Faster Distribution</div>
              <div className="text-xs text-slate-500 mt-1">Leverage fund's existing clients</div>
            </div>
          </FourColumnGrid>

          <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
            <p className="text-blue-300 text-center">
              <strong>B2B white-label model leverages our serverless architecture perfectly:</strong> Multi-tenancy via DynamoDB partitioning, per-fund cost tracking built-in, React Native SDK enables rapid integration, non-custodial reduces liability, and serverless cost structure allows 85%+ margins.
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 18: Security Framework (Appendix B) */}
      <Slide id={18} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            APPENDIX B: SECURITY FRAMEWORK
          </Title>
          <Subtitle size="sm" className="mb-8 text-center">
            Non-custodial architecture + multi-layer security approach
          </Subtitle>

          <div className="p-6 bg-green-100 border-2 border-green-500 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-green-900 mb-3">
              ✓ FULLY NON-CUSTODIAL: YOUR VAULT, YOUR FUNDS
            </h3>
            <p className="text-green-900 leading-relaxed">
              You deposit stablecoins and receive vault shares (ERC-4626). The vault contract is the sole custodian of your assets. Monolith never touches your funds—we only orchestrate vault rebalancing across audited protocols (Aave, Morpho, Curve). Your vault autonomously reallocates capital to optimize yields. You can withdraw anytime without permission.
            </p>
          </div>

          <TwoColumnGrid>
            <div>
              <h3 className="text-2xl mb-6 text-blue-400">Pre-Launch Security</h3>

              <Card variant="glass" className="mb-4">
                <CardTitle>Comprehensive Testing</CardTitle>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>• 100+ unit tests (Foundry)</li>
                    <li>• Fuzz testing on all entry points</li>
                    <li>• Invariant testing for vault accounting</li>
                    <li>• Coverage &gt;95% on critical paths</li>
                    <li>• Mainnet fork testing with real data</li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="glass">
                <CardTitle>Professional Audit</CardTitle>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>• Internal security review (2 weeks)</li>
                    <li>• External audit by tier-1 firm</li>
                    <li>• Options: OpenZeppelin, Trail of Bits, Consensys Diligence</li>
                    <li>• Public code review period</li>
                    <li>• $50K bug bounty on Immunefi</li>
                    <li>• <strong>Timeline:</strong> 10-12 weeks total</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-blue-400">Post-Launch Security</h3>

              <Card variant="glass" className="mb-4">
                <CardTitle>Operational Security</CardTitle>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>• 24/7 monitoring via Tenderly + custom alerts</li>
                    <li>• Multi-sig governance: 3-of-5 threshold</li>
                    <li>• 48-hour timelocks on parameter changes</li>
                    <li>• Emergency pause (governance-controlled)</li>
                    <li>• Vault autonomy: Rebalancing via smart contract logic</li>
                    <li>• Quarterly security reviews</li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="glass" className="mb-4">
                <CardTitle>Insurance & Risk Management</CardTitle>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>• Nexus Mutual coverage for Conservative Vault</li>
                    <li>• Protocol-owned insurance fund (1% of fees)</li>
                    <li>• Gradual coverage expansion to all vaults</li>
                    <li>• Smart contract risk disclosures</li>
                    <li>• Annual third-party security audits</li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="glass">
                <CardTitle>User Protection</CardTitle>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>• Withdrawal limits (first 7 days post-launch)</li>
                    <li>• Rate limiting on large transactions</li>
                    <li>• Transparent on-chain accounting</li>
                    <li>• Emergency withdrawal always available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TwoColumnGrid>

          <div className="mt-8 p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
            <p className="text-blue-300 text-center">
              <strong>Security-first approach:</strong> Non-custodial by design (vault is custodian), autonomous rebalancing (no intermediation), professionally audited, continuously monitored, and insured. Your keys, your shares, your vault, your control.
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 19: Regulatory Strategy (Appendix C) */}
      <Slide id={19} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            APPENDIX C: REGULATORY STRATEGY
          </Title>
          <Subtitle size="sm" className="mb-12 text-center">
            Jurisdiction Options Under Consideration
          </Subtitle>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-slate-700">
                  <th className="p-4">Jurisdiction</th>
                  <th className="p-4">Tax Treatment</th>
                  <th className="p-4">Crypto Friendly</th>
                  <th className="p-4">Setup Cost</th>
                  <th className="p-4">Compliance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr>
                  <td className="p-4 font-semibold">Cayman Islands</td>
                  <td className="p-4">Tax-neutral</td>
                  <td className="p-4 text-green-400">High</td>
                  <td className="p-4">$25-40K</td>
                  <td className="p-4">Moderate</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">BVI</td>
                  <td className="p-4">Tax-neutral</td>
                  <td className="p-4 text-green-400">High</td>
                  <td className="p-4">$15-30K</td>
                  <td className="p-4">Low-Moderate</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Singapore</td>
                  <td className="p-4">Moderate tax</td>
                  <td className="p-4 text-green-400">High</td>
                  <td className="p-4">$15-25K</td>
                  <td className="p-4">High</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Switzerland</td>
                  <td className="p-4">Moderate tax</td>
                  <td className="p-4 text-green-400">High</td>
                  <td className="p-4">$30-50K</td>
                  <td className="p-4">High</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Delaware C-Corp</td>
                  <td className="p-4">US taxes</td>
                  <td className="p-4">Moderate</td>
                  <td className="p-4">$5-10K</td>
                  <td className="p-4">High</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Wyoming LLC</td>
                  <td className="p-4">Pass-through</td>
                  <td className="p-4 text-green-400">High</td>
                  <td className="p-4">$2-5K</td>
                  <td className="p-4">Low</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
            <p className="text-blue-300 text-lg text-center">
              We welcome investor input on optimal structure based on investor base and target markets
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Slide 20: 3-Year Projections (Appendix D) */}
      <Slide id={20} background="bg-black">
        <SlideContent>
          <Title size="lg" className="mb-16 text-center">
            APPENDIX D: 3-YEAR FINANCIAL PROJECTIONS
          </Title>

          <ThreeColumnGrid className="mb-12">
            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-blue-600 text-3xl mb-6 text-center">Year 1</h3>
              <div className="space-y-4 text-center">
                <div>
                  <p className="text-slate-600 text-sm mb-2">TVL Growth</p>
                  <p className="text-3xl font-bold text-yellow-600">$1M → $25M</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm mb-2">Revenue</p>
                  <p className="text-3xl font-bold text-blue-600">$375K</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm mb-2">Expenses</p>
                  <p className="text-2xl font-bold text-green-600">$600K</p>
                  <p className="text-xs text-slate-600">(Seed capital)</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm mb-2">Net</p>
                  <p className="text-2xl font-bold text-red-500">($225K)</p>
                  <p className="text-xs text-slate-600">Investment phase</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-blue-600 text-3xl mb-6 text-center">Year 2</h3>
              <div className="space-y-4 text-center">
                <div>
                  <p className="text-slate-600 text-sm mb-2">TVL Growth</p>
                  <p className="text-3xl font-bold text-yellow-600">$25M → $100M</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm mb-2">Revenue</p>
                  <p className="text-3xl font-bold text-blue-600">$1.5M</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm mb-2">Expenses</p>
                  <p className="text-2xl font-bold text-green-600">$2M</p>
                  <p className="text-xs text-slate-600">(Series A capital)</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm mb-2">Net</p>
                  <p className="text-2xl font-bold text-red-500">($500K)</p>
                  <p className="text-xs text-slate-600">Growth phase</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200">
              <h3 className="text-blue-600 text-3xl mb-6 text-center">Year 3</h3>
              <div className="space-y-4 text-center">
                <div>
                  <p className="text-slate-600 text-sm mb-2">TVL Growth</p>
                  <p className="text-3xl font-bold text-yellow-600">$100M → $500M</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm mb-2">Revenue</p>
                  <p className="text-3xl font-bold text-blue-600">$7.5M</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm mb-2">Expenses</p>
                  <p className="text-2xl font-bold text-green-600">$3.5M</p>
                  <p className="text-xs text-slate-600">(Operating costs)</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm mb-2">Net</p>
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
              Conservative projections based on comparable DeFi protocol growth rates and current market conditions
            </p>
          </div>
        </SlideContent>
      </Slide>

      {/* Navigation Controls */}
      <NavControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
      />
    </main>
  );
}
