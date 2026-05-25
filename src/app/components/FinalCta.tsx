import { CALENDAR_URL } from "./constants";

export default function FinalCta() {
  return (
    <section className="sec-tight s-dark">
      <div className="wrap">
        <div className="cta-panel reveal">
          <h2 className="display">Ready. Set. Quote.</h2>
          <p>
            Bring a real set of drawings to a 15-minute call and we will show you
            exactly what tendr sends back. <strong>No setup, nothing to install.</strong>
          </p>
          <a
            className="btn btn-dark"
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
