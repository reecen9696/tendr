import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import LandingFx from "../components/LandingFx";
import CtaButtons from "../components/CtaButtons";
import ViewTracker from "../components/ViewTracker";
import { DEMO_URL, SAMPLE_REPORT_URL } from "../components/constants";

export const metadata: Metadata = {
  title: "A real tender, priced in tendr — sample",
  description:
    "One real RFQ: the scope, the takeoff and the methodology, exactly as tendr produced them. Read the real report.",
};

export default function SamplePage() {
  const demoLive = DEMO_URL.trim().length > 0;
  // Until the live interactive demo (DEMO_URL) ships, show the real example report PDF.
  const openSrc = demoLive ? DEMO_URL : SAMPLE_REPORT_URL;
  // PDF open params: hide the viewer's thumbnail sidebar (navpanes/pagemode) and fit the page width.
  const embedSrc = demoLive
    ? DEMO_URL
    : `${SAMPLE_REPORT_URL}#toolbar=1&navpanes=0&pagemode=none&view=FitH`;
  const barLabel = demoLive ? DEMO_URL : "Rail Bridge Footing Works — Scope Report (sample)";
  const openLabel = demoLive ? "Open the live sample tender ↗" : "Open the full report ↗";

  return (
    <>
      <SiteHeader />
      <ViewTracker event="view_sample" />

      <section className="sec s-dark">
        <div className="wrap page-head reveal">
          <h1 className="big">This is a real tender, priced in tendr.</h1>
          <p className="lead">
            {demoLive
              ? "One real RFQ. The drawings, the takeoff, the priced BOQ — exactly what tendr produced. Click any line and it shows you the spot on the drawing the number came from. Have a poke around."
              : "One real RFQ — a rail-bridge footing job. The scope, the takeoff and the methodology, exactly the report tendr produced, ready for an estimator to check and send. Have a read."}
          </p>
        </div>
      </section>

      <section className="sec s-cream">
        <div className="wrap">
          {/* Desktop: the report (or live demo) in a framed embed */}
          <div className="demo-frame demo-desktop reveal">
            <div className="demo-bar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="url">{barLabel}</span>
              <a className="full" href={openSrc} target="_blank" rel="noopener noreferrer">
                Open full screen ↗
              </a>
            </div>
            <iframe
              className="demo-iframe"
              src={embedSrc}
              title={
                demoLive
                  ? "tendr sample tender — live, read-only product demo"
                  : "tendr sample report — Rail Bridge Footing Works scope report"
              }
              loading="lazy"
            />
          </div>

          {/* Mobile: don't cram the embed — open in a new tab instead */}
          <div className="demo-mobile reveal">
            <div className="demo-preview" role="img" aria-label="The tendr sample scope report for a rail-bridge footing job">
              <span>Rail Bridge Footing Works</span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>
                Scope report — the real document tendr produced
              </span>
            </div>
            <a
              className="btn btn-blue"
              href={openSrc}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
            >
              {openLabel}
            </a>
          </div>

          <div className="demo-steps reveal">
            <span>The RFQ went in</span>
            <span className="arrow">→</span>
            <span>tendr did the takeoff and priced it</span>
            <span className="arrow">→</span>
            <span>an estimator reviews and signs off</span>
          </div>

          <div className="pricing-center reveal" style={{ marginTop: 40 }}>
            <CtaButtons location="sample" tone="light" align="center" />
          </div>
        </div>
      </section>

      <SiteFooter />
      <LandingFx />
    </>
  );
}
