"use client"

import NavControls from "@/components/NavControls"
import usePresentationController from "@/hooks/usePresentationController"
import {
  Slide1Cover,
  Slide2Problem,
  Slide3Solution,
  Slide4HowItWorks,
  Slide4_5ThreeTierVault,
  Slide4_75WhereYields,
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
  Slide20Projections,
  Slide21CrisisComing,
  Slide22CrisisInsurance,
  Slide23ProofOfStrength,
  Slide24PortfolioDiversification
} from "@/components/slides"

export default function Home() {
  const { currentSlide, totalSlides, nextSlide, previousSlide } =
    usePresentationController(27)

  return (
    <main className="presentation">
      {/* Slide Components - All 27 slides */}
      <Slide1Cover />
      <Slide2Problem />
      <Slide3Solution />
      <Slide4HowItWorks />
      <Slide4_5ThreeTierVault />
      <Slide4_75WhereYields />
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
      <Slide21CrisisComing />
      <Slide22CrisisInsurance />
      <Slide23ProofOfStrength />
      <Slide24PortfolioDiversification />

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
