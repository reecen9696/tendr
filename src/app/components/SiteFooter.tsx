import Image from "next/image";
import Link from "next/link";
import { CALENDAR_URL } from "./constants";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <Link href="/" className="logo" aria-label="tendr home">
            <Image
              src="/logo.png"
              alt="tendr"
              width={785}
              height={208}
              className="bar-logo"
            />
          </Link>
          <nav className="foot-links" aria-label="Footer">
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/sample">See a sample tender</Link>
            <Link href="/#faq">FAQ</Link>
            <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
              Book a 20-min call
            </a>
          </nav>
        </div>

        {/* Business details. POSTAL ADDRESS still to be added. */}
        <div className="foot-fine">
          tendr · ABN 63 658 104 815 ·{" "}
          <a href="tel:+61487028339">0487 028 339</a> ·{" "}
          <a href="mailto:snimorak@gmail.com">snimorak@gmail.com</a>
        </div>

        {/* Acknowledgement of Country — confirm final wording. REAL DETAILS REQUIRED */}
        <div className="foot-fine">
          tendr acknowledges the Traditional Custodians of the lands on which we
          work, and pays respect to Elders past and present.
        </div>

        <div className="foot-fine">
          © 2026 tendr · Tender automation for Australian contractors
        </div>
      </div>
    </footer>
  );
}
