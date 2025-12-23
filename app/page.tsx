"use client"

import NavControls from "@/components/NavControls"
import usePresentationController from "@/hooks/usePresentationController"
import {
  Slide1Cover,
  Slide2Problem,
  Slide3Solution,
  Slide4HowItWorks,
  Slide5Market,
  Slide6WhyNow,
  Slide7Competition,
  Slide7_5RiskFramework,
  Slide8BusinessModel,
  Slide9GoToMarket,
  Slide10Founders,
  Slide11Demo,
  Slide12Roadmap,
  Slide13UseOfFunds,
  Slide14Ask,
  Slide15ThankYou,
  Slide16AppendixDivider,
  Slide17Architecture,
  Slide18Security,
  Slide19Regulatory,
  Slide20Projections
} from "@/components/slides"

export default function Home() {
  const { currentSlide, totalSlides, nextSlide, previousSlide } =
    usePresentationController(20)

  return (
    <main className="presentation">
      {/* Slide Components - All 21 slides */}
      <Slide1Cover />
      <Slide2Problem />
      <Slide3Solution />
      <Slide4HowItWorks />
      <Slide5Market />
      <Slide6WhyNow />
      <Slide7Competition />
      <Slide7_5RiskFramework />
      <Slide8BusinessModel />
      <Slide9GoToMarket />
      <Slide10Founders />
      <Slide11Demo />
      <Slide12Roadmap />
      <Slide13UseOfFunds />
      <Slide14Ask />
      <Slide15ThankYou />
      <Slide16AppendixDivider />
      <Slide17Architecture />
      <Slide18Security />
      <Slide19Regulatory />
      <Slide20Projections />

      {/* Navigation Controls */}
      <NavControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
      />
    </main>
  )
}
