"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import TwoColumnGrid from "@/components/TwoColumnGrid";

export default function Slide10Founders() {
  return (
    <Slide id={10} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          THE FOUNDERS
        </Title>
        <Subtitle size="md" className="mb-12 text-center">
          Complementary technical founders with production-grade delivery
          experience
        </Subtitle>

        <TwoColumnGrid className="mb-8">
          <Card variant="glass">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600 mr-4">
                A
              </div>
              <div>
                <div className="text-2xl font-bold text-[#60a5fa]">
                  Antonio Rapozo
                </div>
                <div className="text-slate-400">
                  Co-Founder & Chief Technology Officer
                </div>
              </div>
            </div>

            <CardTitle>Enterprise Infrastructure Expert</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-left mb-4">
                <li>
                  • <strong>4+ years</strong> building mission-critical
                  government systems
                </li>
                <li>
                  • <strong>15+ State DOTs served:</strong> Bridge inspection &
                  asset management platforms processing $500M+ annual
                  infrastructure spending
                </li>
                <li>
                  • <strong>1,000+ daily users:</strong> Production apps meeting
                  federal compliance (FHWA, NBIS, AASHTO)
                </li>
                <li>
                  • <strong>Cloud architecture:</strong> AWS Solutions Architect
                  (2x certified), building scalable serverless systems
                </li>
                <li>
                  • <strong>AI/LLM integration:</strong> Building MemoryKit,
                  open-source .NET library for LLM applications
                </li>
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
              <strong>Why Antonio:</strong> Proven track record shipping
              production systems that handle institutional-scale operations.
              Brings enterprise architecture expertise, regulatory compliance
              knowledge, and experience operating systems where downtime isn't
              an option.
            </div>
          </Card>

          <Card variant="glass">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600 mr-4">
                E
              </div>
              <div>
                <div className="text-2xl font-bold text-[#60a5fa]">
                  Enrique Ibarra
                </div>
                <div className="text-slate-400">
                  Co-Founder & Chief Protocol Officer
                </div>
              </div>
            </div>

            <CardTitle>DeFi Protocol Engineer</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-left mb-4">
                <li>
                  • <strong>3+ years</strong> of Solidity development experience
                </li>
                <li>
                  • <strong>Built 10+ DeFi protocols</strong> as technical
                  demonstrations: savings vaults, yield aggregators, CDP
                  stablecoins, flash loan infrastructure, AMMs
                </li>
                <li>
                  • <strong>Production-ready code:</strong> Comprehensive
                  testing (100+ tests), gas optimization, security patterns,
                  mainnet deployments
                </li>
                <li>
                  • <strong>Deep protocol expertise:</strong> Integrated Aave,
                  Morpho, Curve, Ondo, Uniswap in working prototypes
                </li>
                <li>
                  • <strong>Cross-chain:</strong> Ethereum (Foundry) + Solana
                  (Rust/Anchor)
                </li>
              </ul>
            </CardContent>

            <CardTitle>Technical Portfolio</CardTitle>
            <CardContent>
              <ul className="space-y-2 text-left">
                <li>
                  • <strong>VaultForge:</strong> Multi-tier ERC-4626 savings
                  protocol
                </li>
                <li>
                  • <strong>Meridian Finance:</strong> Yield aggregator with
                  auto-rebalancing
                </li>
                <li>
                  • <strong>CollateralCoin:</strong> CDP stablecoin
                  (MakerDAO-style)
                </li>
                <li>
                  • <strong>ArbWave:</strong> Flash loan arbitrage
                  infrastructure
                </li>
                <li>
                  • <strong>Mostro:</strong> Solana token launchpad (current)
                </li>
              </ul>
            </CardContent>

            <div className="mt-4 p-4 bg-slate-100 rounded-lg text-slate-700 text-sm">
              <strong>Why Enrique:</strong> Deep technical knowledge of DeFi
              protocols, smart contract architecture, and security. Has built
              the exact type of vault system Monolith needs—understands the
              complexities, gas optimization, and risk management required.
            </div>
          </Card>
        </TwoColumnGrid>

        <Card variant="glass" className="mb-8">
          <CardTitle>Why We're the Right Team</CardTitle>
          <CardContent>
            We're building Monolith because we've seen both sides: Enrique has
            spent years deep in DeFi protocol architecture, understanding what
            it takes to build secure, efficient smart contracts. Antonio has
            built enterprise-grade systems that institutions actually use and
            trust with hundreds of millions.
            <br />
            <br />
            <strong>The gap we identified:</strong> Institutional treasuries
            want DeFi yields but can't navigate the complexity. Most
            "aggregators" are built by pure DeFi natives who don't understand
            enterprise requirements, or by enterprise teams who don't understand
            protocol-level DeFi.
            <br />
            <br />
            <strong>Our advantage:</strong> Enrique brings deep smart contract
            expertise and knows how to integrate protocols safely. Antonio
            brings production operations experience and understands what
            institutions need to trust a platform with real capital. Together,
            we're building the institutional-grade DeFi infrastructure that
            bridges both worlds.
          </CardContent>
        </Card>

        <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
          <p className="text-blue-300 text-lg text-center font-medium">
            <strong>Complementary skills:</strong> DeFi protocol engineer +
            Enterprise architect = The technical foundation to build
            institutional-grade infrastructure that scales.
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
