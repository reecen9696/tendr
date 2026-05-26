import type { ReactNode } from "react";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function Trust() {
  return (
    <section className="sec s-dark">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Trust</span>
          <h2 className="big sec-head">Your rates, your data, your sign-off.</h2>
        </div>
        <div className="trust-grid">
          <div className="trust-card reveal" data-d="0">
            <div className="ico"><Icon><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></Icon></div>
            <h3>Your rates never leave your business.</h3>
            <p>
              Your rate library sits in your account. It is never pooled with
              other firms, never used to train shared models, never shared. Your
              rates are your margin — they stay yours.
            </p>
          </div>

          <div className="trust-card reveal" data-d="1">
            <div className="ico"><Icon><path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6z" /></Icon></div>
            <h3>Your data is hosted in Australia.</h3>
            <p>
              Drawings, tenders and rates are stored in Australia and encrypted.
            </p>
          </div>

          <div className="trust-card reveal" data-d="2">
            <div className="ico"><Icon><path d="M20 6 9 17l-5-5" /></Icon></div>
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
