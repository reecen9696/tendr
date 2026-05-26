import Image from "next/image";
import CtaButtons from "./CtaButtons";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1 className="display reveal">
            Price a tender in <span className="u">30 minutes</span>, not three
            days.
          </h1>
          <p className="lead reveal" data-d="1">
            AI takeoff and tender pricing, built for Australian subcontractors.
            Forward in the RFQ email and the drawings — tendr prices the job from
            your own rates and drafts the methodology, ready for your estimator
            to review and sign off.
          </p>
          <div className="reveal" data-d="2">
            <CtaButtons location="hero" tone="dark" />
          </div>
        </div>

        <div className="reveal" data-d="1" style={{ position: "relative" }}>
          <div className="hero-chip a">
            <svg viewBox="0 0 24 24" fill="none" stroke="#1f9d57" strokeWidth="2.6">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>
              <span style={{ fontWeight: 900 }}>32 tenders</span> submitted
            </span>
          </div>
          <div className="hero-chip b">
            <svg viewBox="0 0 24 24" fill="none" stroke="#2f8dff" strokeWidth="2.4">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
            <span>
              <span className="big">14 days</span> saved this month
            </span>
          </div>
          {/* [SCREENSHOT OF REVIEW UI REQUIRED] — using existing hero.png (real
              product UI). Swap for a current review-UI capture: a drawing page with
              detections overlaid and the takeoff lines beside it. */}
          <div className="hero-frame">
            <Image
              src="/hero.png"
              alt="tendr's review screen: a structural drawing with pile detections overlaid and the priced takeoff lines beside it"
              width={1656}
              height={950}
              priority
              className="hero-shot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
