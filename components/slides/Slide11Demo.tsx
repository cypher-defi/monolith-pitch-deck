"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";
import Icon from "@/components/Icon";

export default function Slide11Demo() {
  return (
    <Slide
      id={11}
      background="bg-gradient-to-br from-black via-zinc-900 to-black"
    >
      <SlideContent className="text-center flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">
        <Title size="lg" className="mb-16 text-center">
          MANAGED DASHBOARD PLATFORM
        </Title>

        <Subtitle size="md" className="mb-10 text-center text-slate-300">
          Complete infrastructure - not just an API
        </Subtitle>

        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/50 rounded-xl p-8 inline-block mb-16">
          <p className="text-2xl text-blue-300 mb-2">
            Dashboard Demo Available At:
          </p>
          <a
            href="https://monolith-dashboard-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl font-bold text-blue-400 hover:text-blue-300 transition-colors underline"
          >
            monolith-dashboard-beta.vercel.app
          </a>
        </div>

        <Subtitle size="md" className="mb-12">
          Full-Service Platform Includes:
        </Subtitle>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-2 border-blue-500/50 rounded-xl p-6">
            <Icon name="chart" size={32} className="text-blue-400 mb-3" />
            <h4 className="font-bold text-white mb-2">White-Label Dashboard</h4>
            <p className="text-sm text-gray-400">
              Branded as their own platform
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/50 rounded-xl p-6">
            <Icon name="document" size={32} className="text-purple-400 mb-3" />
            <h4 className="font-bold text-white mb-2">Compliance Tooling</h4>
            <p className="text-sm text-gray-400">
              Audit trails, tax reports, insurance
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-2 border-green-500/50 rounded-xl p-6">
            <Icon name="link" size={32} className="text-green-400 mb-3" />
            <h4 className="font-bold text-white mb-2">
              Pre-built Integrations
            </h4>
            <p className="text-sm text-gray-400">
              QuickBooks, Fireblocks, Bloomberg
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-2 border-amber-500/50 rounded-xl p-6">
            <Icon name="user" size={32} className="text-amber-400 mb-3" />
            <h4 className="font-bold text-white mb-2">User Management</h4>
            <p className="text-sm text-gray-400">
              Admins, analysts, viewers with role control
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 border-2 border-pink-500/50 rounded-xl p-6">
            <Icon name="trending" size={32} className="text-pink-400 mb-3" />
            <h4 className="font-bold text-white mb-2">Automated Reporting</h4>
            <p className="text-sm text-gray-400">
              Daily, weekly, monthly exports
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-500/20 to-teal-500/5 border-2 border-teal-500/50 rounded-xl p-6">
            <Icon name="trending" size={32} className="text-teal-400 mb-3" />
            <h4 className="font-bold text-white mb-2">Performance Analytics</h4>
            <p className="text-sm text-gray-400">
              Deep insights & risk metrics
            </p>
          </div>
        </div>

        <div className="mt-16 text-slate-400 flex items-center justify-center gap-2">
          <Icon name="warning" size={20} className="text-yellow-500" />
          <span>Demo Mode • Sepolia Testnet • Not Audited</span>
        </div>
      </SlideContent>
    </Slide>
  );
}
