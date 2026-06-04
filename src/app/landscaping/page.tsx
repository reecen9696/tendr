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
  title: "tendr - Your estimators price tenders in 5 minutes, not 5 days",
  description:
    "AI takeoff and tender pricing for Australian landscapers. Give your estimator a tool that measures the areas, counts the plant schedule and prices the job from your own rates - so the takeoff that took 5 days takes 5 minutes, and they price ten times the tenders.",
};

export default function LandscapingPage() {
  return (
    <>
      <SiteHeader />
      <ViewTracker event="view_landscaping" />
      {/* Landscaping variant of the homepage. Shared sections (LogoStrip, Pricing)
          carry identical copy and are reused; the rest are landscaping-specific. */}
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
