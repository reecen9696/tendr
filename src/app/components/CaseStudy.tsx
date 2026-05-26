import Image from "next/image";

// NOTE: quote is a placeholder draft to be confirmed with the customer. // CONFIRM QUOTE
const QUOTE =
  "My estimator used to spend three days on one tender. Now he gets through the week's lot and still has time to chase the ones worth winning. We're quoting more, and we're winning more.";
const NAME = "Spiro";
const ROLE = "Owner, Spyro Construction Pty Ltd — Victoria";

const STATS: { label: string; value: string }[] = [
  { label: "Tenders priced last month", value: "23" },
  { label: "Tenders won", value: "4" },
];

export default function CaseStudy() {
  return (
    <section className="sec s-cream">
      <div className="wrap case">
        <div className="reveal">
          <span className="eyebrow">Case study</span>
        </div>
        <blockquote className="case-quote reveal" data-d="1">
          “{QUOTE}”
        </blockquote>
        <div className="case-attr reveal" data-d="1">
          <Image
            src="/spiro.webp"
            alt={`${NAME}, ${ROLE}`}
            width={500}
            height={673}
            className="case-photo"
          />
          <span>
            <span className="who">{NAME}</span>
            <br />
            <span className="role">{ROLE}</span>
          </span>
        </div>
        <div className="case-stats">
          {STATS.map((s) => (
            <div className="case-stat reveal" key={s.label}>
              <div className="l">{s.label}</div>
              <div className="v">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
