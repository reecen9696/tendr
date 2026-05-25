import Image from "next/image";
import { CALENDAR_URL } from "./constants";

export default function SiteHeader() {
  return (
    <header>
      <div className="wrap site-bar-inner">
        <a href="#top" aria-label="tendr home">
          <Image
            src="/logo.png"
            alt="tendr"
            width={785}
            height={208}
            priority
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
    </header>
  );
}
