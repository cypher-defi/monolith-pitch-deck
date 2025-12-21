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

        <div className="bg-blue-500/20 border-4 border-blue-400 rounded-xl p-8 inline-block mb-16">
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

        <Subtitle size="md" className="mb-8">
          Full-Service Platform Includes:
        </Subtitle>

        <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-500">
            <CardTitle className="text-blue-900">
              Dashboard (White-Label)
            </CardTitle>
            <CardContent className="text-blue-800">
              They white-label it as their own branded platform
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-500">
            <CardTitle className="text-purple-900">
              Compliance Tooling
            </CardTitle>
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
  );
}
