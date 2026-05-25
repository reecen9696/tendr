import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Takeoff from "./components/Takeoff";
import Testimonial from "./components/Testimonial";
import Trades from "./components/Trades";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import SiteFooter from "./components/SiteFooter";
import LandingFx from "./components/LandingFx";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <a id="top" />
      <Hero />
      <HowItWorks />
      <Takeoff />
      <Testimonial />
      <Trades />
      <Faq />
      <FinalCta />
      <SiteFooter />
      <LandingFx />
    </>
  );
}
