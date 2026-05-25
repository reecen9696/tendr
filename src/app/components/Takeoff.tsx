import Image from "next/image";
import { CALENDAR_URL } from "./constants";

export default function Takeoff() {
  return (
    <section className="sec s-dark" id="how">
      <div className="wrap">
        <div className="feat">
          <div className="feat-text reveal">
            <h2 className="big">The slow part of the job, handled.</h2>
            <p className="intro">
              A proper takeoff used to mean two or three days at a desk with a
              scale rule. Now it takes a few minutes. Drop your files in and
              tendr gets to work.
            </p>
            <a
              className="btn btn-blue"
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              See it on your drawings
            </a>

            <div className="subblock">
              <div className="sub-h">It reads the plans like an estimator.</div>
              <p>
                Piles, walls, cuts and demo zones. tendr finds them on the
                drawing and counts them up. Count, metres, square metres and
                cubic metres, all sorted.
              </p>
            </div>
            <div className="subblock">
              <div className="sub-h">Every number points back to the drawing.</div>
              <p>
                Tap any line and see exactly where it came from. When a head
                contractor questions a figure six months on, you have the answer
                in seconds.
              </p>
            </div>
            <div className="subblock">
              <div className="sub-h">Your templates, your format.</div>
              <p>
                tendr fills your BOQ and your scope template. The quote that
                comes out looks like the ones your firm already sends.
              </p>
            </div>
          </div>

          <div className="reveal" data-d="1">
            <Image
              src="/hero.png"
              alt="tendr's priced bill of quantities, traced back to the drawings"
              width={1656}
              height={950}
              className="hero-shot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
