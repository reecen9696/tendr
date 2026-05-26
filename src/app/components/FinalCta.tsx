import CtaButtons from "./CtaButtons";

export default function FinalCta() {
  return (
    <section className="sec-tight s-cream">
      <div className="wrap">
        <div className="cta-panel reveal">
          <h2 className="display">Ready. Set. Quote.</h2>
          <p>
            Bring a real set of drawings to a 20-minute call and we&apos;ll show
            you exactly what tendr sends back. You&apos;ll talk to an estimator,
            not a salesperson. Nothing to install.
          </p>
          <CtaButtons location="final" tone="blue" align="center" />
        </div>
      </div>
    </section>
  );
}
