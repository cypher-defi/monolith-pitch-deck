"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";

export default function Slide1Cover() {
  return (
    <Slide
      id={1}
      background="bg-gradient-to-br from-black via-zinc-900 to-black"
    >
      <SlideContent className="text-center flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">
        <div className="mb-12">
          <div className="logo">
            <div className="logo-line"></div>
            <div className="logo-line"></div>
          </div>
        </div>

        <Title className="mb-6 text-7xl text-blue-400">MONOLITH</Title>
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
  );
}
