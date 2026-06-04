import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import LogoStrip from "../components/LogoStrip";
import Pricing from "../components/Pricing";
import SiteFooter from "../components/SiteFooter";
import LandingFx from "../components/LandingFx";
import ViewTracker from "../components/ViewTracker";
import {
  Hero,
  Problem,
  HowItWorks,
  Takeoff,
  CaseStudy,
  Testimonial,
  Trades,
  Trust,
  Faq,
  FinalCta,
} from "./sections";

export const metadata: Metadata = {
  title: "tendr - Price a concrete paving tender in 30 minutes, not three days",
  description:
    "AI takeoff and tender pricing for Australian concrete paving contractors. Forward in the RFQ and plans; tendr measures the areas, works out the volumes and prices the job from your own rates, ready for your estimator to review and sign off.",
};

export default function ConcretePavingPage() {
  return (
    <>
      <SiteHeader />
      <ViewTracker event="view_concrete_paving" />
      {/* Concrete-paving variant of the homepage. Shared sections (LogoStrip, Pricing)
          carry identical copy and are reused; the rest are paving-specific. */}
      <Hero />
      <LogoStrip />
      <Problem />
      <HowItWorks />
      <Takeoff />
      <CaseStudy />
      <Testimonial />
      <Trades />
      <Trust />
      <Pricing />
      <Faq />
      <FinalCta />
      <SiteFooter />
      <LandingFx />
    </>
  );
}
