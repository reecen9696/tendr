import Image from "next/image";
import { CALENDAR_URL } from "./constants";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap site-bar-inner">
        <a href="#top" aria-label="tendr home">
          <Image
            src="/logo.png"
            alt="tendr"
            width={785}
            height={208}
            className="bar-logo"
          />
        </a>
        <a
          className="bar-cta"
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </div>
      <div className="wrap">
        <div className="foot-fine">
          © 2026 tendr · Tender automation for Australian contractors
        </div>
      </div>
    </footer>
  );
}
