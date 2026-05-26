import CtaButtons from "./CtaButtons";

// Home section 11 (#pricing). No published tiers — first tender free, then we talk
// through a plan that fits. Matches the /pricing page wording.
export default function Pricing() {
  return (
    <section className="sec s-cream" id="pricing">
      <div className="wrap pricing-cta reveal">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Pricing
        </span>
        <h2 className="big">Your first tender is free.</h2>
        <p className="pricing-lead">
          Send a real RFQ, we&apos;ll price it and draft the full submission — no
          card, no commitment. See what tendr does on your own job, then we&apos;ll
          talk through a plan that fits your business.
        </p>
        <div className="pricing-center" style={{ marginTop: 28 }}>
          <CtaButtons location="pricing" tone="light" align="center" />
        </div>
      </div>
    </section>
  );
}
