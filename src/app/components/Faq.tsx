const PLUS = (
  <span className="pm">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  </span>
);

const items: { q: string; a: React.ReactNode }[] = [
  {
    q: "What if tendr gets the takeoff wrong?",
    a: (
      <>
        Every tender is reviewed by your estimator before it leaves. tendr flags
        anything it&apos;s unsure about and shows where each quantity came from on
        the drawing. You&apos;re never signing off a black box.
      </>
    ),
  },
  {
    q: "Does my rate library leave my business?",
    a: (
      <>
        No. Your rates sit in your account. They&apos;re never pooled with other
        firms, never used to train shared models, never shared. Your rates are
        your margin — they stay yours.
      </>
    ),
  },
  {
    q: "What do I need to give it?",
    a: (
      <>
        The drawings PDF and the RFQ email. Add your BOQ template, the scope and
        any addenda if you have them. tendr uses whatever you send.
      </>
    ),
  },
  {
    q: "What trades does it actually work for?",
    a: (
      <>
        Demolition, concrete cutting, piling, soil-nail and shoring, civil,
        structural steel and earthworks. It doesn&apos;t size rebar or run
        structural calcs — your engineer and estimator still own the engineering
        call.
      </>
    ),
  },
  {
    q: "How long does setup take?",
    // CONFIRM — onboarding line
    a: (
      <>
        Guided by our team, usually about two weeks. Most subbies run their first
        real tender inside that.
      </>
    ),
  },
  {
    q: "Do I still need an estimator?",
    a: (
      <>
        Yes. tendr is built for estimators, not to replace them — it clears the
        slow takeoff so they spend their time on the call that wins the job. And
        if a director can&apos;t read drawings, tendr gets the tender priced — but
        a human still signs it off.
      </>
    ),
  },
  {
    q: "Where is my data stored, and is it safe?",
    a: (
      <>
        In Australia, encrypted. Your drawings, tenders and rates stay yours —
        never sold, never shared, never used to train shared models.
      </>
    ),
  },
  {
    q: "What does it cost?",
    a: (
      <>
        Your first tender is free — send a real RFQ and see the full submission
        tendr produces. From there we&apos;ll talk through a plan that fits your
        business.
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section className="sec s-dark" id="faq">
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: 46 }} className="reveal">
          <h2 className="big">Questions, sorted.</h2>
        </div>
        <div className="faq reveal" data-d="1">
          {items.map((item, i) => (
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
