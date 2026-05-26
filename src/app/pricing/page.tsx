import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import LandingFx from "../components/LandingFx";
import CtaButtons from "../components/CtaButtons";
import ViewTracker from "../components/ViewTracker";

export const metadata: Metadata = {
  title: "Pricing — tendr",
  description:
    "Your first tender is free. Send a real RFQ, we'll price it and draft the full submission, then we'll talk through a plan that fits your business.",
};

const POINTS = [
  "Priced from your own rate library",
  "Methodology drafted in your format",
  "A human signs off before anything is sent",
  "No card, no lock-in",
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <ViewTracker event="view_pricing" />

      <section className="sec s-cream">
        <div className="wrap pricing-cta reveal">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Pricing
          </span>
          <h1 className="big">Your first tender is free.</h1>
          <p className="pricing-lead">
            Send a real RFQ, we&apos;ll price it and draft the full submission — no
            card, no commitment. See what tendr does on your own job, then
            we&apos;ll talk through a plan that fits your business.
          </p>

          <ul className="pricing-points">
            {POINTS.map((p) => (
              <li key={p}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {p}
              </li>
            ))}
          </ul>

          <div className="pricing-center" style={{ marginTop: 30 }}>
            <CtaButtons location="pricing_page" tone="light" align="center" />
          </div>
        </div>
      </section>

      <SiteFooter />
      <LandingFx />
    </>
  );
}
