import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="sec s-dark">
      <div className="wrap">
        <div className="quote-grid">
          <div className="reveal">
            <Image
              src="/lawrence.png"
              alt="Lawrence"
              width={1086}
              height={1448}
              className="q-media"
            />
          </div>
          <div className="reveal" data-d="1">
            <div className="q-mark">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36.4 15L33.5 20C35.7 20 37.5833 20.7833 39.15 22.35C40.7167 23.9167 41.5 25.8 41.5 28C41.5 30.2 40.7167 32.0833 39.15 33.65C37.5833 35.2167 35.7 36 33.5 36C31.3 36 29.4167 35.2167 27.85 33.65C26.2833 32.0833 25.5 30.2 25.5 28C25.5 27.2333 25.5917 26.525 25.775 25.875C25.9583 25.225 26.2333 24.6 26.6 24L32.95 13C33.1167 12.7 33.35 12.4583 33.65 12.275C33.95 12.0917 34.2833 12 34.65 12C35.4167 12 35.9917 12.3333 36.375 13C36.7583 13.6667 36.7667 14.3333 36.4 15ZM18.4 15L15.5 20C17.7 20 19.5833 20.7833 21.15 22.35C22.7167 23.9167 23.5 25.8 23.5 28C23.5 30.2 22.7167 32.0833 21.15 33.65C19.5833 35.2167 17.7 36 15.5 36C13.3 36 11.4167 35.2167 9.85 33.65C8.28333 32.0833 7.5 30.2 7.5 28C7.5 27.2333 7.59166 26.525 7.775 25.875C7.95833 25.225 8.23333 24.6 8.6 24L14.95 13C15.1167 12.7 15.35 12.4583 15.65 12.275C15.95 12.0917 16.2833 12 16.65 12C17.4167 12 17.9917 12.3333 18.375 13C18.7583 13.6667 18.7667 14.3333 18.4 15Z"
                  fill="#2f8dff"
                />
              </svg>
            </div>
            <p className="q-text">
              We used to knock back half the RFQs that came in because there was
              no time to price them. Now we put a number on the lot, and that is
              the difference between a quiet month and a full book.
            </p>
            <p className="q-name">Lawrence</p>
            <p className="q-role">Victorian demolition &amp; cutting contractor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
