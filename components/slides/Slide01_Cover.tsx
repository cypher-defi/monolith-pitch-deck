"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";

export default function Slide01_Cover() {
  return (
    <Slide
      id={1}
      background="bg-gradient-to-br from-black via-zinc-900 to-black"
    >
      <SlideContent className="text-center flex flex-col justify-center items-center min-h-[calc(100dvh-12rem)] py-6 px-4">
        <div className="mb-8 sm:mb-12">
          <div className="logo">
            <div className="logo-line"></div>
            <div className="logo-line"></div>
          </div>
        </div>

        <Title className="mb-4 sm:mb-6 text-blue-400">MONOLITH</Title>
        <Subtitle size="lg" className="mb-6 sm:mb-8">
          Institutional Yield Infrastructure for Stable Assets
        </Subtitle>

        <div className="w-32 sm:w-40 md:w-48 h-0.5 bg-blue-400/30 my-12 sm:my-16"></div>

        <Subtitle
          size="md"
          className="text-slate-300 leading-relaxed max-w-2xl px-4"
        >
          Turn idle stablecoins into predictable returns
          <br />
          <span className="text-base text-slate-400 mt-2 block">
            Institutional-grade security • 5-22% yields
          </span>
        </Subtitle>

        <p className="text-slate-600 mt-12 text-sm sm:text-base">
          Seed Round • December 2025
        </p>
      </SlideContent>
    </Slide>
  );
}
