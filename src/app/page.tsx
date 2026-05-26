import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Takeoff from "./components/Takeoff";
import CaseStudy from "./components/CaseStudy";
import Testimonial from "./components/Testimonial";
import Trades from "./components/Trades";
import Trust from "./components/Trust";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import SiteFooter from "./components/SiteFooter";
import LandingFx from "./components/LandingFx";

export default function Home() {
  return (
    <>
      <SiteHeader />
      {/* 14 sections, top to bottom (3 carry anchor IDs: #how-it-works, #pricing, #faq) */}
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
