"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import FourColumnGrid from "@/components/FourColumnGrid";
import Icon from "@/components/Icon";

export default function Slide13_WhyNow() {
  return (
    <Slide id={12} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-12 text-center">
          APPENDIX B: WHY NOW?
        </Title>

        <div className="max-w-4xl mx-auto mb-12 p-6 bg-gradient-to-r from-amber-500/10 to-red-500/10 border-2 border-amber-500/50 rounded-xl">
          <h3 className="text-2xl font-bold text-center mb-4 text-amber-300">
            Economic uncertainty creates demand for defensive yield
          </h3>
          <p className="text-gray-300 text-center mb-6">
            We are entering a prolonged period of higher interest rate
            volatility, fragile banking confidence, and increased institutional
            cash buffers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-4">
            <div>
              <Icon
                name="lock"
                size={28}
                className="text-amber-400 mx-auto mb-2"
              />
              <div className="text-sm text-gray-300 font-semibold">
                Capital preservation
              </div>
            </div>
            <div>
              <Icon
                name="dollar"
                size={28}
                className="text-amber-400 mx-auto mb-2"
              />
              <div className="text-sm text-gray-300 font-semibold">
                Predictable income
              </div>
            </div>
            <div>
              <Icon
                name="droplet"
                size={28}
                className="text-amber-400 mx-auto mb-2"
              />
              <div className="text-sm text-gray-300 font-semibold">
                Liquidity
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-amber-500/30">
            <p className="text-lg text-amber-300 font-bold text-center">
              Stablecoin yield becomes a hedge - a low-volatility income layer
              when traditional markets fail.
            </p>
            <p className="text-sm text-gray-400 text-center mt-2">
              Monolith is built for this environment.
            </p>
          </div>
        </div>

        <FourColumnGrid className="gap-6">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6">
            <div className="text-center mb-4">
              <Icon
                name="shield"
                size={40}
                className="text-purple-400 mx-auto mb-3"
              />
              <h4 className="font-bold text-lg">Regulatory Clarity</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>GENIUS Act passed July 2025</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>Clear stablecoin framework</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>MiCA in EU operational</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 mt-0.5">✓</span>
                <span>High institutional confidence</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6">
            <div className="text-center mb-4">
              <Icon
                name="building"
                size={40}
                className="text-blue-400 mx-auto mb-3"
              />
              <h4 className="font-bold text-lg">Institutional Adoption</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>Circle (USDC) publicly traded</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>$5B valuation (June 2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>Corporate treasuries exploring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">✓</span>
                <span>Family offices entering DeFi</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6">
            <div className="text-center mb-4">
              <Icon
                name="server"
                size={40}
                className="text-amber-400 mx-auto mb-3"
              />
              <h4 className="font-bold text-lg">Infrastructure Maturity</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Aave: $40B TVL, battle-tested</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Morpho: Coinbase partnership</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Ondo: $1.4B in RWAs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">✓</span>
                <span>Security standards proven</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6">
            <div className="text-center mb-4">
              <Icon
                name="trending"
                size={40}
                className="text-green-400 mx-auto mb-3"
              />
              <h4 className="font-bold text-lg">Market Momentum</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>50% YoY growth sustained</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>$310B → $465B (2026)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>RWA tokenization validated</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>Perfect timing for aggregators</span>
              </li>
            </ul>
          </div>
        </FourColumnGrid>

        <div className="mt-12 p-6 bg-green-500/10 border-2 border-green-500/50 rounded-lg">
          <p className="text-green-300 text-lg text-center font-medium">
            The Perfect Storm: Regulatory clarity + Institutional interest +
            Mature infrastructure + Market growth
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
