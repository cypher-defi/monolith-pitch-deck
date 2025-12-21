"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import ThreeColumnGrid from "@/components/ThreeColumnGrid";
import Icon from "@/components/Icon";

export default function Slide3Solution() {
  return (
    <Slide
      id={3}
      background="bg-gradient-to-br from-black via-blue-950/20 to-black"
    >
      <SlideContent>
        <Title size="lg" className="mb-12 text-center">
          INTRODUCING MONOLITH
        </Title>
        <Subtitle size="md" className="mb-16 text-center text-blue-300">
          The managed platform that turns idle stablecoins into revenue
        </Subtitle>

        {/* THREE CUSTOMER ARCHETYPES */}
        <ThreeColumnGrid className="gap-8 mb-16">
          {/* CORPORATE TREASURERS */}
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-8">
            <div className="text-center mb-6">
              <Icon
                name="user"
                size={40}
                className="text-blue-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-bold">Corporate Treasurers</h3>
            </div>
            <div className="mb-6 p-4 bg-blue-900/30 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-300">4.5-5.5%</div>
              <div className="text-sm text-gray-400 mt-1">NET APY</div>
            </div>
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              Deploy our managed dashboard for their treasury team. Get yield on
              $5-50M in idle stablecoins.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>2 weeks to live</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>Compliance included</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span>WhatsApp & Email support</span>
              </div>
            </div>
          </div>

          {/* FINTECH PLATFORMS */}
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-8">
            <div className="text-center mb-6">
              <Icon
                name="mobile"
                size={40}
                className="text-purple-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-bold">Fintech Platforms</h3>
            </div>
            <div className="mb-6 p-4 bg-purple-900/30 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-300">2 Weeks</div>
              <div className="text-sm text-gray-400 mt-1">TO MARKET</div>
            </div>
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              Embed our SDK or white-label dashboard into your app. Offer
              stablecoin yields to customers.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                <span>Revenue share model</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                <span>Full compliance suite</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                <span>24/7 infrastructure ops</span>
              </div>
            </div>
          </div>

          {/* ENTERPRISE CLIENTS */}
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-8">
            <div className="text-center mb-6">
              <Icon
                name="building"
                size={40}
                className="text-amber-400 mx-auto mb-3"
              />
              <h3 className="text-xl font-bold">Enterprise Clients</h3>
            </div>
            <div className="mb-6 p-4 bg-amber-900/30 rounded-lg text-center">
              <div className="text-3xl font-bold text-amber-300">
                White Glove
              </div>
              <div className="text-sm text-gray-400 mt-1">SERVICE</div>
            </div>
            <p className="text-gray-300 text-center mb-6 leading-relaxed">
              Custom strategies, dedicated account manager, 24/7 monitoring for
              $50M+ portfolios.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>Custom strategy design</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>Dedicated account team</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                <span>24/7 risk monitoring</span>
              </div>
            </div>
          </div>
        </ThreeColumnGrid>

        {/* KEY VALUE PROP */}
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/50 rounded-xl">
          <p className="text-white text-xl font-semibold text-center mb-4">
            ONE PLATFORM. THREE DEPLOYMENT OPTIONS.
          </p>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-green-400 font-bold mb-2">
                White-Label Dashboard
              </div>
              <p className="text-sm text-gray-400">
                Institutions manage their own yield
              </p>
            </div>
            <div>
              <div className="text-green-400 font-bold mb-2">Mobile SDK</div>
              <p className="text-sm text-gray-400">
                Embed in your app for users
              </p>
            </div>
            <div>
              <div className="text-green-400 font-bold mb-2">
                Managed Service
              </div>
              <p className="text-sm text-gray-400">
                We handle everything for you
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
