import Image from "next/image";

// Thin credibility band under the hero. These are recognisable marks from the
// Australian construction tendering ecosystem — the platforms and bodies the
// tenders tendr prices come through. NOTE: these are NOT "customers"; the caption
// must not imply they use or endorse tendr. `invert` puts white-on-transparent
// logos on a dark plate so they read.
const LOGOS: { src: string; alt: string; w: number; h: number; invert?: boolean }[] = [
  { src: "/logos/austender.png", alt: "AusTender", w: 1226, h: 386 },
  { src: "/logos/australian-government.png", alt: "Australian Government", w: 400, h: 209 },
  { src: "/logos/estimateone.png", alt: "EstimateOne", w: 402, h: 433, invert: true },
  { src: "/logos/icn.png", alt: "Industry Capability Network", w: 1683, h: 475 },
];

export default function LogoStrip() {
  return (
    <section className="sec-tight s-cream">
      <div className="wrap logostrip reveal">
        <p className="cap">
          Stop chasing tenders. tendr finds them, prices them &amp; drafts the
          submission.
        </p>
        <div className="names">
          {LOGOS.map((logo) => (
            <span className={`logo-card${logo.invert ? " invert" : ""}`} key={logo.src}>
              <Image src={logo.src} alt={logo.alt} width={logo.w} height={logo.h} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
