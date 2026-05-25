import { CALENDAR_URL } from "./constants";

export default function Trades() {
  return (
    <section className="sec s-dark" id="trades">
      <div className="wrap">
        <div className="feat flip">
          <div className="feat-text reveal">
            <h2 className="big">If you quote off drawings, it works for you.</h2>
            <p className="intro">
              tendr started in demolition and concrete cutting, but the job is
              the same in every trade. Read the plans, work out the quantities,
              write the quote.
            </p>
            <a
              className="btn btn-blue"
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>

            <div className="subblock">
              <div className="sub-h">One way of working, every trade.</div>
              <p>
                Piling, shoring, civil, steel and earthworks. Drawings in,
                priced quote out. Same tool, same half-hour job.
              </p>
            </div>
            <div className="subblock">
              <div className="sub-h">Same head contractors, same paperwork.</div>
              <p>
                The tier-1 builders sending you RFQs do not change. tendr reads
                their drawings and fills the BOQ they expect back.
              </p>
            </div>
          </div>
          <div className="panel sage reveal" data-d="1">
            <div className="trades-cloud">
              <span className="tchip lead">Demolition</span>
              <span className="tchip">Concrete cutting &amp; drilling</span>
              <span className="tchip">Piling &amp; foundations</span>
              <span className="tchip">Soil-nail &amp; shoring</span>
              <span className="tchip">Hydro-demolition</span>
              <span className="tchip">Civil works</span>
              <span className="tchip">Structural steel</span>
              <span className="tchip">Earthworks &amp; site prep</span>
              <span className="tchip">Concreting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
