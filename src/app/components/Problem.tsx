const QUOTES = [
  "We knock back six out of ten RFQs before we even price them — we just can't get to them.",
  "My estimator's at his desk till 9pm Thursday for a quote due Friday, and we still missed two scope items.",
  "The director's measuring drawings he can't read, because the estimator's flat out.",
];

export default function Problem() {
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
