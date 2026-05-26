import Image from "next/image";

export default function Takeoff() {
  return (
    <section className="sec s-dark">
      <div className="wrap">
        <div className="feat">
          <div className="feat-text reveal">
            <h2 className="big">Drawings in, quantities out.</h2>

            <div className="subblock">
              <div className="sub-h">It reads the drawings like an estimator.</div>
              <p>
                Piles, walls, cuts, demo zones — tendr finds them on the drawing
                and counts them. Number, metres, square metres, cubic metres, all
                sorted.
              </p>
            </div>
            <div className="subblock">
              <div className="sub-h">Priced from your rates, not a database.</div>
              <p>
                tendr prices the takeoff against your own rate library, so the
                number looks like your number — not a generic guess.
              </p>
            </div>
            <div className="subblock">
              <div className="sub-h">Every quantity points back to the drawing.</div>
              <p>
                Tap any line in the BOQ and jump to the exact mark it was measured
                from. When a builder questions a figure six months on, you have the
                answer in seconds.
              </p>
            </div>

            {/* Counter-positioning — keep verbatim. */}
            <p className="doesnt-do">
              tendr doesn&apos;t size your rebar or run structural calcs. It does
              the quantities and the first-pass price. Your engineer and your
              estimator still own the engineering call.
            </p>
          </div>

          <div className="reveal" data-d="1">
            {/* [SCREENSHOT OF REVIEW UI REQUIRED] — "drawings in → quantities out".
                Using existing hero.png (real product UI) until a fresh capture exists. */}
            <div className="hero-frame">
              <Image
                src="/hero.png"
                alt="A structural drawing on the left with detections marked, and the matching priced bill of quantities on the right"
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
