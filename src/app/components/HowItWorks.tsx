import { CALENDAR_URL } from "./constants";

export default function HowItWorks() {
  return (
    <section className="sec s-cream">
      <div className="wrap">
        <div className="intro-grid">
          <h2 className="triad display reveal">
            Drop&nbsp;it&nbsp;in.
            <br />
            Check&nbsp;it.
            <br />
            <span className="b">Send&nbsp;it.</span>
          </h2>
          <div className="intro-copy reveal" data-d="1">
            <p>
              Every RFQ is the same grind. Read the drawings, count it all up,
              write the quote.{" "}
              <b>
                tendr does the slow part for you. It reads the plans, counts the
                work, fills your bill of quantities and writes the scope
              </b>
              , all in one place. You give it a check and send it off.
            </p>
            <a
              className="btn btn-blue"
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          </div>
        </div>
        <div className="cards4">
          <div className="fcard reveal" data-d="0">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                />
                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
              </svg>
            </div>
            <h3>Reads your drawings</h3>
            <p>
              Counts the piles, measures the cuts and works out the volumes,
              straight off the PDF.
            </p>
          </div>
          <div className="fcard reveal" data-d="1">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 3.75A1.5 1.5 0 0 0 1.5 5.25v13.5A1.5 1.5 0 0 0 3 20.25h18a1.5 1.5 0 0 0 1.5-1.5V5.25A1.5 1.5 0 0 0 21 3.75H3Zm8.25 4.5V6H3.75v2.25h7.5Zm1.5 0h7.5V6h-7.5v2.25Zm7.5 1.5h-7.5v3h7.5v-3Zm0 4.5h-7.5V18h7.5v-3.75ZM11.25 18v-3.75h-7.5V18h7.5Zm0-5.25v-3h-7.5v3h7.5Z"
                />
              </svg>
            </div>
            <h3>Fills your BOQ</h3>
            <p>
              Every quantity dropped into your own pricing sheet, ready for your
              rates.
            </p>
          </div>
          <div className="fcard reveal" data-d="2">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>
            </div>
            <h3>Writes the scope</h3>
            <p>
              Method, program, risks and exclusions, written up in your format.
            </p>
          </div>
          <div className="fcard reveal" data-d="3">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </div>
            <h3>Builds the proposal</h3>
            <p>
              A tidy, branded quote, ready to check and send to the head
              contractor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
