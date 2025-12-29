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
  Slide7_75DeFiRiskComparison,
  Slide8BusinessModel,
  Slide9GoToMarket,
  Slide10Founders,
  Slide11Demo,
  Slide12Roadmap,
  Slide13UseOfFunds,
  Slide13_5WhyInvestNow,
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
    usePresentationController(29)

  return (
    <main className="presentation">
      {/* MAIN DECK - 9 slides */}
      <Slide1Cover />
      <Slide2Problem />
      <Slide4_5ThreeTierVault />
      <Slide4_75WhereYields />
      <Slide5Market />
      <Slide7_5RiskFramework />
      <Slide13UseOfFunds />
      <Slide14Ask />
      <Slide15ThankYou />

      {/* APPENDIX - 20 slides */}
      <Slide16AppendixDivider />
      <Slide3Solution />
      <Slide4HowItWorks />
      <Slide6WhyNow />
      <Slide7Competition />
      <Slide7_75DeFiRiskComparison />
      <Slide8BusinessModel />
      <Slide9GoToMarket />
      <Slide10Founders />
      <Slide11Demo />
      <Slide12Roadmap />
      <Slide13_5WhyInvestNow />
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
