import Image from "next/image";
import type { ReactNode } from "react";

// --- Step 1: a fake RFQ email (built in UI, anonymised) ---
function EmailMock() {
  return (
    <div className="email-mock">
      <div className="em-head">
        <Image
          src="/sam.png"
          alt="Sam Doyle"
          width={486}
          height={574}
          className="em-avatar"
        />
        <div className="em-meta">
          <div className="em-from">
            Sam Doyle <span>· tenders@meridian-build.com.au</span>
          </div>
        </div>
      </div>
      <p className="em-body">
        Morning — can you price the attached scope for the secant pile demolition
        and hydroblasting? Pricing due COB Friday.
      </p>
      <div className="em-attach">
        <span className="em-label">2 attachments</span>
        <div className="em-files">
          <span className="em-file">
            <span className="ic pdf">PDF</span> Drawings.pdf
          </span>
          <span className="em-file">
            <span className="ic xls">XLS</span> BOQ-secant-piles.xlsx
          </span>
        </div>
      </div>
    </div>
  );
}

// --- Step 2: the real drawing, calmed down, with clean detection boxes ---
const PILE_BOXES = [13, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83]; // even row of pile detections
function DrawingMock() {
  return (
    <div className="drawing-mock">
      <div className="dm-inner">
        <Image
          src="/design.png"
          alt="A rail-bridge general-arrangement drawing with tendr detecting and counting each bored pile"
          fill
          sizes="(max-width: 960px) 90vw, 400px"
          className="dm-img"
        />
        <div className="dm-wash" />
        <div className="dm-overlay">
          <span className="dm-band" />
          {PILE_BOXES.map((left, i) => (
            <span className="dm-box" key={i} style={{ left: `${left}%` }} />
          ))}
          <span className="dm-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3" />
              <path d="M7 12h10" />
            </svg>
            24 bored piles
          </span>
        </div>
      </div>
    </div>
  );
}

// --- Step 3: a minimal, signed-off report (built in UI, fake firm) ---
function ReportMock() {
  return (
    <div className="report-mock">
      <div className="rm-top">
        <div className="rm-logo">
          <span className="mark">N</span> Northline Civil
        </div>
        <span className="rm-page">p. 1</span>
      </div>
      <div className="rm-title">Tender — Secant Pile Works</div>
      <div className="rm-sub">Priced BOQ + methodology · Rev A</div>
      <div className="rm-rows">
        <div className="rm-row">
          <span className="rm-cell" style={{ width: "52%" }} />
          <span className="rm-val" />
        </div>
        <div className="rm-row">
          <span className="rm-cell" style={{ width: "44%" }} />
          <span className="rm-val" />
        </div>
        <div className="rm-row">
          <span className="rm-cell" style={{ width: "58%" }} />
          <span className="rm-val" />
        </div>
      </div>
      <div className="rm-signoff">
        <span className="tick">✓</span> Reviewed &amp; signed off — K. Barker,
        Estimator
      </div>
    </div>
  );
}

const STEPS: { title: string; body: string; art: ReactNode }[] = [
  {
    title: "Forward the RFQ.",
    body: "Send the head contractor's email and the drawings PDF to your tendr inbox. tendr picks up the scope, the quote-due date and the builder from the email.",
    art: <EmailMock />,
  },
  {
    title: "tendr does the takeoff, prices it, drafts the methodology.",
    body: "Quantities come straight off the drawings. Pricing uses your own rate library — not a generic database. You get a priced BOQ and a methodology draft in your format.",
    art: <DrawingMock />,
  },
  {
    title: "Your estimator reviews and signs off.",
    body: "Nothing leaves your business until a human checks the numbers and the methodology. You send the quote to the builder yourself.",
    art: <ReportMock />,
  },
];

export default function HowItWorks() {
  return (
    <section className="sec s-cream" id="how-it-works">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">How it works</span>
          <h2 className="big sec-head">Three steps, and a human signs the number.</h2>
        </div>
        <div className="steps">
          {STEPS.map((step, i) => (
            <div className="step reveal" data-d={i} key={i}>
              <div className="step-shot">{step.art}</div>
              <div className="num">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
