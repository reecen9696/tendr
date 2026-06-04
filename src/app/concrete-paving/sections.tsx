import Image from "next/image";
import type { ReactNode } from "react";
import CtaButtons from "../components/CtaButtons";

// Concrete-paving-targeted variants of the homepage sections. Copy diverges; markup,
// classNames and shared behaviours (reveal, FAQ accordion via LandingFx) are kept
// identical to the home components so styling and interactions match exactly.

// --- Hero ---
export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1 className="display reveal">
            Price a concrete paving tender in <span className="u">30 minutes</span>
            , not three days.
          </h1>
          <p className="lead reveal" data-d="1">
            AI takeoff and tender pricing, built for Australian concrete paving
            contractors. Forward in the RFQ email and the plans - tendr measures
            the pavement areas, works out the volumes and prices the job from your
            own rates, ready for your estimator to review and sign off.
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
          {/* [SCREENSHOT OF REVIEW UI REQUIRED] — using existing hero.png until a
              paving review-UI capture exists: a pavement setout plan with slab areas
              and joint runs measured and the priced takeoff lines beside it. */}
          <div className="hero-frame">
            <Image
              src="/hero.png"
              alt="tendr's review screen: a pavement setout plan with slab areas and joint runs measured and the priced takeoff lines beside it"
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

// --- Problem ---
const QUOTES = [
  "We knock back six out of ten RFQs before we even price them - we just can't get to them.",
  "My estimator's at his desk till 9pm Thursday taking off slab areas for a quote due Friday, and we still missed two scope items.",
  "The owner's measuring car park areas off a plan he barely has time to read, because the estimator's flat out.",
];

export function Problem() {
  return (
    <section className="sec s-dark">
      <div className="wrap">
        <h2 className="big reveal">
          Every RFQ you can&apos;t price is a job you&apos;ll never win.
        </h2>
        <div className="problem-quotes">
          {QUOTES.map((q, i) => (
            <blockquote className="pquote reveal" data-d={i} key={i}>
              “{q}”
            </blockquote>
          ))}
        </div>
        <p className="problem-sum reveal" data-d="1">
          Thirty to fifty tenders a year. One estimator. Spreadsheets that should
          have been retired a decade ago.
        </p>
      </div>
    </section>
  );
}

// --- How it works ---
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
        Morning - can you price the attached scope for the car park and footpath
        paving package? Pricing due COB Friday.
      </p>
      <div className="em-attach">
        <span className="em-label">2 attachments</span>
        <div className="em-files">
          <span className="em-file">
            <span className="ic pdf">PDF</span> Pavement-plans.pdf
          </span>
          <span className="em-file">
            <span className="ic xls">XLS</span> BOQ-paving.xlsx
          </span>
        </div>
      </div>
    </div>
  );
}

const PLAN_BOXES = [13, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83]; // even row of area detections
function DrawingMock() {
  return (
    <div className="drawing-mock">
      <div className="dm-inner">
        <Image
          src="/design.png"
          alt="A pavement setout plan with tendr measuring each slab area, kerb run and joint line"
          fill
          sizes="(max-width: 960px) 90vw, 400px"
          className="dm-img"
        />
        <div className="dm-wash" />
        <div className="dm-overlay">
          <span className="dm-band" />
          {PLAN_BOXES.map((left, i) => (
            <span className="dm-box" key={i} style={{ left: `${left}%` }} />
          ))}
          <span className="dm-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3" />
              <path d="M7 12h10" />
            </svg>
            1,240 m² pavement
          </span>
        </div>
      </div>
    </div>
  );
}

function ReportMock() {
  return (
    <div className="report-mock">
      <div className="rm-top">
        <div className="rm-logo">
          <span className="mark">N</span> Northline Paving
        </div>
        <span className="rm-page">p. 1</span>
      </div>
      <div className="rm-title">Tender - Car Park &amp; Footpath Paving</div>
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
        <span className="tick">✓</span> Reviewed &amp; signed off - K. Barker,
        Estimator
      </div>
    </div>
  );
}

const STEPS: { title: string; body: string; art: ReactNode }[] = [
  {
    title: "Forward the RFQ.",
    body: "Send the head contractor's email and the plans PDF to your tendr inbox. tendr picks up the scope, the quote-due date and the builder from the email.",
    art: <EmailMock />,
  },
  {
    title: "tendr does the takeoff, prices it, drafts the methodology.",
    body: "Quantities come straight off the plans. Pricing uses your own rate library - not a generic database. You get a priced BOQ and a methodology draft in your format.",
    art: <DrawingMock />,
  },
  {
    title: "Your estimator reviews and signs off.",
    body: "Nothing leaves your business until a human checks the numbers and the methodology. You send the quote to the builder yourself.",
    art: <ReportMock />,
  },
];

export function HowItWorks() {
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

// --- Takeoff ---
export function Takeoff() {
  return (
    <section className="sec s-dark">
      <div className="wrap">
        <div className="feat">
          <div className="feat-text reveal">
            <h2 className="big">Drawings in, quantities out.</h2>

            <div className="subblock">
              <div className="sub-h">It reads the plans like an estimator.</div>
              <p>
                Slabs, pavements, kerb and channel, edge restraints, joints, saw
                cuts, mesh and base prep - tendr finds them on the plan and
                measures them. Square metres, lineal metres, cubic metres, all
                sorted by thickness and finish.
              </p>
            </div>
            <div className="subblock">
              <div className="sub-h">Priced from your rates, not a database.</div>
              <p>
                tendr prices the takeoff against your own rate library, so the
                number looks like your number - not a generic guess.
              </p>
            </div>
            <div className="subblock">
              <div className="sub-h">Every quantity points back to the plan.</div>
              <p>
                Tap any line in the BOQ and jump to the exact area or run it was
                measured from. When a builder questions a figure six months on,
                you have the answer in seconds.
              </p>
            </div>

            <p className="doesnt-do">
              tendr doesn&apos;t design the pavement or set the mix. It does the
              quantities and the first-pass price. Your engineer and your
              estimator still own the design call.
            </p>
          </div>

          <div className="reveal" data-d="1">
            {/* [SCREENSHOT OF REVIEW UI REQUIRED] — "plans in → quantities out".
                Using existing hero.png until a fresh paving capture exists. */}
            <div className="hero-frame">
              <Image
                src="/hero.png"
                alt="A pavement plan on the left with areas and joint runs marked, and the matching priced bill of quantities on the right"
                width={1656}
                height={950}
                className="hero-shot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Case study ---
// NOTE: quote is a placeholder draft to be confirmed with the customer. // CONFIRM QUOTE
const CASE_QUOTE =
  "My estimator used to spend three days on one tender. Now he gets through the week's lot and still has time to chase the ones worth winning. We're quoting more, and we're winning more.";
const CASE_NAME = "Spiro";
const CASE_ROLE = "Owner, Spyro Paving Pty Ltd - Victoria";

const CASE_STATS: { label: string; value: string }[] = [
  { label: "Tenders priced last month", value: "23" },
  { label: "Tenders won", value: "4" },
];

export function CaseStudy() {
  return (
    <section className="sec s-cream">
      <div className="wrap case">
        <div className="reveal">
          <span className="eyebrow">Case study</span>
        </div>
        <blockquote className="case-quote reveal" data-d="1">
          “{CASE_QUOTE}”
        </blockquote>
        <div className="case-attr reveal" data-d="1">
          <Image
            src="/spiro.webp"
            alt={`${CASE_NAME}, ${CASE_ROLE}`}
            width={500}
            height={673}
            className="case-photo"
          />
          <span>
            <span className="who">{CASE_NAME}</span>
            <br />
            <span className="role">{CASE_ROLE}</span>
          </span>
        </div>
        <div className="case-stats">
          {CASE_STATS.map((s) => (
            <div className="case-stat reveal" key={s.label}>
              <div className="l">{s.label}</div>
              <div className="v">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Testimonial ---
export function Testimonial() {
  return (
    <section className="sec s-dark">
      <div className="wrap">
        <div className="quote-grid">
          <div className="reveal">
            <Image
              src="/lawrence.png"
              alt="Lawrence"
              width={1086}
              height={1448}
              className="q-media"
            />
          </div>
          <div className="reveal" data-d="1">
            <div className="q-mark">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36.4 15L33.5 20C35.7 20 37.5833 20.7833 39.15 22.35C40.7167 23.9167 41.5 25.8 41.5 28C41.5 30.2 40.7167 32.0833 39.15 33.65C37.5833 35.2167 35.7 36 33.5 36C31.3 36 29.4167 35.2167 27.85 33.65C26.2833 32.0833 25.5 30.2 25.5 28C25.5 27.2333 25.5917 26.525 25.775 25.875C25.9583 25.225 26.2333 24.6 26.6 24L32.95 13C33.1167 12.7 33.35 12.4583 33.65 12.275C33.95 12.0917 34.2833 12 34.65 12C35.4167 12 35.9917 12.3333 36.375 13C36.7583 13.6667 36.7667 14.3333 36.4 15ZM18.4 15L15.5 20C17.7 20 19.5833 20.7833 21.15 22.35C22.7167 23.9167 23.5 25.8 23.5 28C23.5 30.2 22.7167 32.0833 21.15 33.65C19.5833 35.2167 17.7 36 15.5 36C13.3 36 11.4167 35.2167 9.85 33.65C8.28333 32.0833 7.5 30.2 7.5 28C7.5 27.2333 7.59166 26.525 7.775 25.875C7.95833 25.225 8.23333 24.6 8.6 24L14.95 13C15.1167 12.7 15.35 12.4583 15.65 12.275C15.95 12.0917 16.2833 12 16.65 12C17.4167 12 17.9917 12.3333 18.375 13C18.7583 13.6667 18.7667 14.3333 18.4 15Z"
                  fill="#2f8dff"
                />
              </svg>
            </div>
            <p className="q-text">
              We used to knock back half the RFQs that came in because there was
              no time to take off the areas and work out the volumes. Now we put a
              number on the lot, and that is the difference between a quiet month
              and a full book.
            </p>
            <p className="q-name">Lawrence</p>
            <p className="q-role">Victorian concrete paving contractor</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Trades ---
const TRADES = [
  "Concrete paving",
  "Car parks & hardstands",
  "Driveways & crossovers",
  "Footpaths & shared paths",
  "Industrial slabs",
  "Slab on ground",
  "Kerb & channel",
  "Exposed aggregate",
  "Coloured & stencilled concrete",
  "Broom & trowel finish",
  "Saw cutting & jointing",
  "Steel mesh & reinforcement",
  "Formwork",
  "Base & sub-base prep",
  "Earthworks & site prep",
  "Drainage & stormwater",
  "Block & segmental paving",
  "Streetscape & public realm",
  "Council & parks",
  "Civil pavements",
];

export function Trades() {
  return (
    <section className="sec s-cream" id="trades">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Trades</span>
          <h2 className="big sec-head">If you quote off plans, it works for your trade.</h2>
          <p className="sec-lead">
            Flatwork through to civil pavements - tendr reads the plans, measures
            the work and prices it from your own rates.
          </p>
        </div>
        <div className="trade-chips reveal" data-d="1">
          {TRADES.map((t) => (
            <span className="trade-chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Trust ---
function TrustIcon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export function Trust() {
  return (
    <section className="sec s-dark">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Trust</span>
          <h2 className="big sec-head">Your rates, your data, your sign-off.</h2>
        </div>
        <div className="trust-grid">
          <div className="trust-card reveal" data-d="0">
            <div className="ico"><TrustIcon><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></TrustIcon></div>
            <h3>Your rates never leave your business.</h3>
            <p>
              Your rate library sits in your account. It is never pooled with
              other firms, never used to train shared models, never shared. Your
              rates are your margin - they stay yours.
            </p>
          </div>

          <div className="trust-card reveal" data-d="1">
            <div className="ico"><TrustIcon><path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6z" /></TrustIcon></div>
            <h3>Your data is hosted in Australia.</h3>
            <p>
              Plans, tenders and rates are stored in Australia and encrypted.
            </p>
          </div>

          <div className="trust-card reveal" data-d="2">
            <div className="ico"><TrustIcon><path d="M20 6 9 17l-5-5" /></TrustIcon></div>
            <h3>A human signs off every tender.</h3>
            <p>
              tendr never sends a quote to a builder on its own. The AI does the
              slow 90%; your estimator owns the number that goes out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- FAQ ---
const PLUS = (
  <span className="pm">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  </span>
);

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: "What if tendr gets the takeoff wrong?",
    a: (
      <>
        Every tender is reviewed by your estimator before it leaves. tendr flags
        anything it&apos;s unsure about and shows where each quantity came from on
        the plan. You&apos;re never signing off a black box.
      </>
    ),
  },
  {
    q: "Does my rate library leave my business?",
    a: (
      <>
        No. Your rates sit in your account. They&apos;re never pooled with other
        firms, never used to train shared models, never shared. Your rates are
        your margin - they stay yours.
      </>
    ),
  },
  {
    q: "What do I need to give it?",
    a: (
      <>
        The plans PDF and the RFQ email. Add your BOQ template, the scope and any
        addenda if you have them. tendr uses whatever you send.
      </>
    ),
  },
  {
    q: "What paving work does it actually handle?",
    a: (
      <>
        Slabs, pavements, kerb and channel, edge restraints, joints, saw cutting,
        mesh and base prep, across area, length and volume. It doesn&apos;t design
        the pavement or set the mix - your engineer and estimator still own the
        design call.
      </>
    ),
  },
  {
    q: "How long does setup take?",
    // CONFIRM — onboarding line
    a: (
      <>
        Guided by our team, usually about two weeks. Most paving contractors run
        their first real tender inside that.
      </>
    ),
  },
  {
    q: "Do I still need an estimator?",
    a: (
      <>
        Yes. tendr is built for estimators, not to replace them - it clears the
        slow takeoff so they spend their time on the call that wins the job. And
        if the owner is flat out, tendr gets the tender priced - but a human still
        signs it off.
      </>
    ),
  },
  {
    q: "Where is my data stored, and is it safe?",
    a: (
      <>
        In Australia, encrypted. Your plans, tenders and rates stay yours - never
        sold, never shared, never used to train shared models.
      </>
    ),
  },
  {
    q: "What does it cost?",
    a: (
      <>
        Your first tender is free - send a real RFQ and see the full submission
        tendr produces. From there we&apos;ll talk through a plan that fits your
        business.
      </>
    ),
  },
];

export function Faq() {
  return (
    <section className="sec s-dark" id="faq">
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: 46 }} className="reveal">
          <h2 className="big">Questions, sorted.</h2>
        </div>
        <div className="faq reveal" data-d="1">
          {FAQ_ITEMS.map((item, i) => (
            <div className="faq-item" key={item.q}>
              <button
                className="faq-q"
                aria-expanded="false"
                aria-controls={`faq-a-${i}`}
              >
                {item.q}
                {PLUS}
              </button>
              <div className="faq-a" id={`faq-a-${i}`} role="region">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Final CTA ---
export function FinalCta() {
  return (
    <section className="sec-tight s-cream">
      <div className="wrap">
        <div className="cta-panel reveal">
          <h2 className="display">Ready. Set. Quote.</h2>
          <p>
            Bring a real set of plans to a 20-minute call and we&apos;ll show you
            exactly what tendr sends back. You&apos;ll talk to an estimator, not a
            salesperson. Nothing to install.
          </p>
          <CtaButtons location="final" tone="blue" align="center" />
        </div>
      </div>
    </section>
  );
}
