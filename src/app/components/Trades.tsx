import type { ReactNode } from "react";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const TRADES: { name: string; desc: string; icon: ReactNode }[] = [
  {
    name: "Demolition",
    desc: "Strip-out, structural and hazmat scope captured straight off the RFQ. Volumes, plant hours and tip fees priced from your rates.",
    icon: <Icon><path d="M3 21h18" /><path d="M5 21V9l7-5 7 5v12" /><path d="M9 21v-6h6v6" /><path d="M14 4l3 6" /></Icon>,
  },
  {
    name: "Concrete cutting & drilling",
    desc: "Saw cuts, core holes and slab removal measured off the drawings. Priced by the metre, by the hole, by your crew's day rate.",
    icon: <Icon><circle cx="7" cy="17" r="4" /><path d="M10 14 20 4" /><path d="M16 4h4v4" /></Icon>,
  },
  {
    name: "Piling & foundations",
    desc: "CFA, bored and screw pile takeoffs from the drawings. Priced against your rig hours and concrete supply.",
    icon: <Icon><path d="M8 3v18M16 3v18" /><path d="M8 7h8M8 12h8M8 17h8" /></Icon>,
  },
  {
    name: "Soil-nail & shoring",
    desc: "Nail counts, lengths and shotcrete areas off the section drawings, priced from your rates.",
    icon: <Icon><path d="M4 5h16" /><path d="M6 5 4 20M12 5l-1 15M18 5l2 15" /></Icon>,
  },
  {
    name: "Civil works",
    desc: "Bulk earthworks, drainage and pavement quantities lifted from the plans and priced your way.",
    icon: <Icon><path d="M3 18h18" /><path d="M3 18 9 8l4 5 3-4 5 9" /></Icon>,
  },
  {
    name: "Structural steel",
    desc: "Member counts and tonnages off the GA drawings, priced from your fab and erect rates.",
    icon: <Icon><path d="M4 4h16l-8 16z" /><path d="M4 4l8 8 8-8" /></Icon>,
  },
  {
    name: "Earthworks & site prep",
    desc: "Cut, fill and haul volumes from the drawings, priced against your plant rates.",
    icon: <Icon><path d="M3 20h18" /><path d="M3 20l5-7h6l3-4h4" /><circle cx="7" cy="20" r="1.6" /><circle cx="15" cy="20" r="1.6" /></Icon>,
  },
];

export default function Trades() {
  return (
    <section className="sec s-cream" id="trades">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Trades</span>
          <h2 className="big sec-head">If you quote off drawings, it works for your trade.</h2>
        </div>
        <div className="trades-grid">
          {TRADES.map((t, i) => (
            <div className="trade-tile reveal" data-d={i % 3} key={t.name}>
              <div className="ico">{t.icon}</div>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
