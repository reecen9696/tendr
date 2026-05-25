import Image from "next/image";
import { CALENDAR_URL } from "./constants";

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
            Drop in the drawings, the scope and your pricing sheet. tendr does
            the takeoff and writes the quote, so you can put a price on every job
            that lands, not just the ones worth clearing your week for.
          </p>
          <div className="hero-cta reveal" data-d="2">
            <a className="btn btn-blue" href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </div>
        </div>

        <div className="reveal" data-d="1" style={{ position: "relative" }}>
          <div className="hero-chip a">
            <svg viewBox="0 0 24 24" fill="none" stroke="#2f8dff" strokeWidth="2.4">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
            <span>
              <span className="big">14 days</span> saved this month
            </span>
          </div>
          <div className="hero-chip b">
            <svg viewBox="0 0 24 24" fill="none" stroke="#1f9d57" strokeWidth="2.6">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Quote ready to send
          </div>
          <div className="hero-frame">
            <Image
              src="/hero.png"
              alt="tendr reviewing a structural drawing with pile counts and linear cuts"
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
