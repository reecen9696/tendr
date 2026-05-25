const PLUS = (
  <span className="pm">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
      <path d="M12 5v14M5 12h14" />
    </svg>
  </span>
);

const items: { q: string; a: React.ReactNode }[] = [
  {
    q: "What do I need to give it?",
    a: (
      <>
        Three things: the drawings as a PDF, the scope of works, and your own
        BOQ template. Got addenda or a past quote? Drop those in too and tendr
        uses them.
      </>
    ),
  },
  {
    q: "How long does a tender actually take?",
    a: (
      <>
        The first pass comes back in a few minutes. Once you have checked the
        lines and dropped in your rates, plan on about half an hour start to
        finish, versus two or three days by hand.
      </>
    ),
  },
  {
    q: "Can I trust the numbers?",
    a: (
      <>
        tendr gets the takeoff most of the way there, then you check it, the
        same as you would check any estimator. Every quantity traces back to the
        drawing, and tendr flags the lines worth a second look. Nothing leaves
        without your sign-off.
      </>
    ),
  },
  {
    q: "Do I have to change how my team works?",
    a: (
      <>
        No. It fills your templates, uses your format and puts your logo on the
        proposal. The output looks like the tenders your firm already sends, so
        your team just gets there faster.
      </>
    ),
  },
  {
    q: "Is my data safe?",
    a: (
      <>
        Yes. Your drawings, jobs and pricing are stored securely, kept in
        Australia, and stay yours. Never shared, never sold.
      </>
    ),
  },
  {
    q: "What does it cost?",
    a: (
      <>
        It depends on how many tenders you run. Book a quick call and we will
        walk through your numbers and what makes sense for your firm.
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section className="sec s-cream" id="faq">
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: 46 }} className="reveal">
          <h2 className="big">Questions, sorted.</h2>
        </div>
        <div className="faq reveal" data-d="1">
          {items.map((item) => (
            <div className="faq-item" key={item.q}>
              <button className="faq-q">
                {item.q}
                {PLUS}
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
