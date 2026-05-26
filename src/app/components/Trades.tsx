// All trades tendr services. Chip layout scales cleanly across the full list.
const TRADES = [
  "Demolition",
  "Asbestos removal & demolition",
  "Hydro-demolition",
  "Concrete cutting & drilling",
  "Concreting",
  "Precast concrete",
  "Remedial & concrete repair",
  "Piling & foundations",
  "Soil-nail & shoring",
  "Earthworks & site prep",
  "Civil works",
  "Marine & civil construction",
  "Drainage & stormwater",
  "Asphalt & road surfacing",
  "Structural steel",
  "Steel fixing",
  "Scaffolding & formwork",
  "Façade & cladding",
  "Fire protection",
  "Mechanical services",
  "Commercial plumbing",
  "Electrical",
];

export default function Trades() {
  return (
    <section className="sec s-cream" id="trades">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Trades</span>
          <h2 className="big sec-head">If you quote off drawings, it works for your trade.</h2>
          <p className="sec-lead">
            Demolition through to services — tendr reads the drawings, counts the
            work and prices it from your own rates.
          </p>
        </div>
        <div className="trade-chips reveal" data-d="1">
          {TRADES.map((t) => (
            <span className="trade-chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
