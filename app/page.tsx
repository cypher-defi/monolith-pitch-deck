"use client";

import NavControls from "@/components/NavControls";
import usePresentationController from "@/hooks/usePresentationController";
import {
  Slide01_Cover,
  Slide02_Problem,
  Slide03_Market,
  Slide04_Solution,
  Slide05_ThreeTierVaults,
  Slide06_WhereYields,
  Slide07_Risk,
  Slide08_InvestmentOpportunity,
  Slide10_AppendixDivider,
  Slide11_HowItWorks,
  Slide12_WhyNow,
  Slide13_Competition,
  Slide14_DeFiRiskComparison,
  Slide15_BusinessModel,
  Slide16_GoToMarket,
  Slide17_Founders,
  Slide18_Demo,
  Slide19_Roadmap,
  Slide20_WhyInvestNow,
  Slide21_Architecture,
  Slide22_Security,
  Slide23_Regulatory,
  Slide24_Projections,
  Slide25_CashRunway,
  Slide26_CrisisComing,
  Slide27_CrisisInsurance,
  Slide28_ProofOfStrength,
  Slide29_PortfolioDiversification,
  Slide30_InvestorYieldScenarios,
  Slide31_InstitutionalInsurance,
  Slide32_InstitutionalInsuranceFAQ,
} from "@/components/slides";

export default function Home() {
  const { currentSlide, totalSlides, nextSlide, previousSlide } =
    usePresentationController(32);

  return (
    <main className="presentation">
      {/* MAIN DECK - 8 slides */}
      <Slide01_Cover />
      <Slide02_Problem />
      <Slide03_Market />
      <Slide04_Solution />
      <Slide05_ThreeTierVaults />
      <Slide06_WhereYields />
      <Slide07_Risk />
      <Slide08_InvestmentOpportunity />

      {/* APPENDIX - 20 slides */}
      <Slide10_AppendixDivider />
      <Slide11_HowItWorks />
      <Slide12_WhyNow />
      <Slide13_Competition />
      <Slide14_DeFiRiskComparison />
      <Slide15_BusinessModel />
      <Slide16_GoToMarket />
      <Slide17_Founders />
      <Slide18_Demo />
      <Slide19_Roadmap />
      <Slide20_WhyInvestNow />
      <Slide21_Architecture />
      <Slide22_Security />
      <Slide23_Regulatory />
      <Slide24_Projections />
      <Slide25_CashRunway />
      <Slide26_CrisisComing />
      <Slide27_CrisisInsurance />
      <Slide28_ProofOfStrength />
      <Slide29_PortfolioDiversification />
      <Slide30_InvestorYieldScenarios />
      <Slide31_InstitutionalInsurance />
      <Slide32_InstitutionalInsuranceFAQ />

      {/* Navigation Controls */}
      <NavControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
      />
    </main>
  );
}
