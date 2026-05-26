# BUILD PROMPT — tendr landing page rebuild (fresh, complete)

You are a coding agent working in the **gotender** repo. This single prompt is the complete spec — you do not need any other document.

Two parts of work:
- **Part A — the landing site.** Rebuild the Next.js marketing site: new structure, new copy, visible pricing, two CTAs, trust signals, analytics. This is the bulk of the job.
- **Part B — the product demo mode.** Three small changes to the `aiestimator` product so the landing site's `/sample` page can embed the real product review UI as a public, read-only demo.

Build Part A in full. Part B can be handed to whoever owns the `aiestimator` backend — but `/sample` must be built so it works the moment Part B ships, and degrades gracefully (static fallback) until then.

---

## STEP 0 — CONFIRM THE WORKSPACE FIRST

The `aiestimator` product directory was recently moved inside the gotender repo, so this is now a monorepo containing **two separate applications**:

1. **The landing site** — a Next.js (App Router, TypeScript) app. Components in `src/app/components/`, styles in `src/app/globals.css`, a `CALENDAR_URL` constant in `src/app/components/constants.ts`. Existing components: `SiteHeader`, `Hero`, `HowItWorks`, `Takeoff`, `Testimonial`, `Trades`, `Faq`, `FinalCta`, `SiteFooter`, `LandingFx`.
2. **The product** — in an `aiestimator/` subdirectory: a FastAPI backend (`src/api.py`) plus a React/Vite frontend (`frontend/`), deployed as one app. Password-protected.

**Before writing any code:** `ls` the repo and confirm the actual paths — where the Next.js app root is, where `aiestimator/` sits, and where the product's React frontend is. The exact nesting may differ from the assumption above; map it, then proceed.

**Do NOT merge the two apps.** The FastAPI/Vite product stays a separate application. The landing site embeds the product's demo via an iframe (see Part B). Do not port the product into Next.js.

---

## VOICE & COPY RULES — APPLY TO EVERY LINE OF THE LANDING SITE

The audience is Australian construction people — subcontractor directors and estimators. They distrust hype, tech-marketing fluff, and overclaimed AI. Plain, concrete, specific copy wins.

**Reading level:** plain English a tradie director reads in one pass — roughly grade 6–8. Short sentences. Nothing the reader must re-read.

**The three tests** — every headline and key line must pass all three:
1. Can the reader **picture** it? (Concrete image beats abstraction.)
2. Can it be **proven or disproven**? (A specific claim beats a vibe.)
3. Could **only tendr** say it? (If a competitor could paste the line onto their own site, rewrite it.)

**Use this vocabulary** (it is what the industry actually says): subbie / subcontractor, tender, quote, price the job, "the number", quote due, RFQ, scope of works, methodology, BOQ, takeoff, rate library, head contractor, builder, Tier 1 / Tier 2 builder, addendum, clarification, on time and on budget, SWMS, WHS.

**Never use:** "bid" as the main noun (use *tender* / *quote*); "GC" (use *head contractor* / *builder*); the fluff words — revolutionary, game-changing, transform, supercharge, unleash, AI-powered, next-gen, world-class, cutting-edge, seamless, robust, holistic, end-to-end, "the future of [x]". Do not call the product a "solution".

**How to describe the AI — important.** Never call tendr an "AI estimator" or "AI assistant". It is **"AI takeoff and tender pricing, reviewed and signed off by your estimator."** The AI does the slow takeoff and first-pass price; a named human (the estimator) owns the final number. This human-in-the-loop point must appear in the **Hero, How it works, the Trust block, and the FAQ**.

**Counter-positioning builds trust.** Where the copy below voluntarily states what tendr does NOT do (doesn't size rebar, doesn't run structural calcs, isn't for firms under 15 tenders/year) — keep those lines verbatim. They are deliberate and make the rest believable.

**Specificity over summary.** Numbers, trades, units, named things. Never "saves you time" when you can say "a tender priced in 30 minutes, not three days".

**Customer quotes stay raw.** Do not polish testimonials into marketing prose ("game-changer", "revolutionised"). Plain and slightly blunt reads as real.

---

## DESIGN SYSTEM — CONSTRAINTS

- Keep the existing brand and look: dark `--ink` sections, `--cream` alternating sections, blue accent, existing CSS variables and fonts, and the `LandingFx` scroll-reveal (`reveal` / `data-d` pattern). Reuse and extend `globals.css` tokens — do not replace the design system or restyle the brand.
- Next.js App Router + TypeScript. Keep `next/image`.
- `npm run build` must pass with no TypeScript errors.
- Mobile-responsive. At 390px width, the hero headline, both CTAs, and one trust signal must be visible above the fold.
- Accessible: semantic heading order, real `alt` text on every image, keyboard-operable FAQ accordion.

---

## CTA RULES — APPLY EVERYWHERE A CTA APPEARS

- **Primary CTA** (filled blue button): `Book a 20-min call` → `CALENDAR_URL`.
- **Secondary CTA** (outline/ghost button): `See a sample tender` → `/sample`.
- Every CTA block shows **both**. Primary is always visually dominant. Never add a third competing primary action.
- Add two constants alongside `CALENDAR_URL` in `constants.ts`: `SAMPLE_URL = "/sample"` and `DEMO_URL` (the product demo's public URL — placeholder string until Part B is deployed; mark `// SET WHEN DEMO IS LIVE`).
- Under every primary CTA that has room for a sub-line, add reassurance microcopy: `You'll talk to an estimator, not a salesperson. No card, nothing to install.`
- *(Owner note: post-launch, A/B test promoting `See a sample tender` to primary — construction buyers convert better on low-commitment "see it work" CTAs. Launch with Book-a-call as primary.)*

---

## SITE MAP & NAVIGATION

The landing site has **exactly three routes**. Everything else is a section that scrolls within Home.

| Route | File | What it is |
|---|---|---|
| `/` | `src/app/page.tsx` | Home — the full landing page, 14 sections |
| `/sample` | `src/app/sample/page.tsx` | Live sample tender — embeds the real product demo |
| `/pricing` | `src/app/pricing/page.tsx` | Full pricing page |

**Navbar — identical on all three pages** (shared `SiteHeader`):
- Logo → `/`
- `How it works` → `/#how-it-works`
- `Pricing` → `/pricing` *(the page — NOT the `#pricing` home anchor)*
- `FAQ` → `/#faq`
- `Book a 20-min call` (button) → `CALENDAR_URL`

Navbar anchor links MUST be root-relative with the hash (`/#how-it-works`) so they work from `/sample` and `/pricing` too.

`/sample` is **deliberately NOT in the navbar** — it is reached only through `See a sample tender` CTA buttons. The footer MAY link to it.

**Footer — shared, on all three pages.** Footer links: `How it works` (`/#how-it-works`), `Pricing` (`/pricing`), `See a sample tender` (`/sample`), `FAQ` (`/#faq`), `Book a 20-min call` (`CALENDAR_URL`).

**Pricing — ONE component, TWO contexts.** Build one shared `PricingTiers` component (two tier cards). Used inline as a summary on Home (section 11) and again on the `/pricing` page. Do not build the tiers twice; do not let the numbers drift.

**Two separate FAQ blocks — do not merge.** The main FAQ (8 questions) is a Home section at `#faq`. `/pricing` has its own short billing-only FAQ.

---

# PART A — THE LANDING SITE

## PAGE 1 — HOME (route `/`, file `src/app/page.tsx`)

All 14 items below are **sections on the Home route** — none is a separate page. They render top-to-bottom in this order. Sections 5, 11 and 12 carry anchor IDs (`#how-it-works`, `#pricing`, `#faq`).

Order: **Header → Hero → Trades strip → Problem → How it works → Takeoff → Case study → Testimonial → Trades → Trust → Pricing → FAQ → Final CTA → Footer.**

### 1. Header — shared `SiteHeader`
Nav and exact targets as in Site Map. Anchor links root-relative (`/#...`).

### 2. Hero
- **H1:** `Price a tender in 30 minutes, not three days.`
- **Subhead:** `AI takeoff and tender pricing, built for Australian subcontractors. Forward in the RFQ email and the drawings — tendr prices the job from your own rates and drafts the methodology, ready for your estimator to review and sign off.`
- **CTAs:** primary + secondary, with reassurance microcopy beneath.
- **Micro-trust line** (small, below CTAs): `Built for demolition, concrete cutting, piling, soil-nail, civil, structural steel and earthworks subbies.`
- **Visual:** a real screenshot of the product's review UI — a drawing page with detections overlaid and takeoff lines beside it. Australian drawing conventions. Keep the existing floating chips. No stock photography. `[SCREENSHOT OF REVIEW UI REQUIRED]`.

### 3. Trades strip — `LogoStrip` component
A thin credibility band under the hero. Configurable logo array. Use **customer logos** of small-to-mid Australian subcontractors — `[CUSTOMER LOGOS — REAL DATA REQUIRED]`. If no logo assets exist, render firm names as styled text, not fake images.
- Caption: `Used by Australian demolition, civil, piling, concrete cutting, structural steel and earthworks subcontractors.`
- Do NOT put Tier 1 head-contractor logos here unless they are genuine customers.

### 4. Problem — new component `Problem.tsx`
Three first-person quote-style callouts in the blunt voice of a real estimator/director, then a one-line summary. Keep the whole section to ~100 words.
- **H2:** `Every RFQ you can't price is a job you'll never win.`
- **Three callouts:**
  - `"We knock back six out of ten RFQs before we even price them — we just can't get to them."`
  - `"My estimator's at his desk till 9pm Thursday for a quote due Friday, and we still missed two scope items."`
  - `"The director's measuring drawings he can't read, because the estimator's flat out."`
- **Summary line:** `Thirty to fifty tenders a year. One estimator. Spreadsheets that should have been retired a decade ago.`

### 5. How it works — `id="how-it-works"`, rework existing `HowItWorks`
Three numbered steps, verb-led, each with a small screenshot. Step 3 is the most important line on the page — do not soften it.
1. **Forward the RFQ.** Send the head contractor's email and the drawings PDF to your tendr inbox. tendr picks up the scope, the quote-due date and the builder from the email.
2. **tendr does the takeoff, prices it, drafts the methodology.** Quantities come straight off the drawings. Pricing uses your own rate library — not a generic database. You get a priced BOQ and a methodology draft in your format.
3. **Your estimator reviews and signs off.** Nothing leaves your business until a human checks the numbers and the methodology. You send the quote to the builder yourself.

### 6. Takeoff — rework existing `Takeoff`
Three sub-blocks, an accuracy callout, and a "what it doesn't do" line.
- **It reads the drawings like an estimator.** Piles, walls, cuts, demo zones — tendr finds them on the drawing and counts them. Number, metres, square metres, cubic metres, all sorted.
- **Priced from your rates, not a database.** tendr prices the takeoff against your own rate library, so the number looks like your number — not a generic guess.
- **Every quantity points back to the drawing.** Tap any line in the BOQ and jump to the exact mark it was measured from. When a builder questions a figure six months on, you have the answer in seconds.
- **Accuracy callout:** `[REAL FIGURE REQUIRED — e.g. "Quantities match our estimators' manual takeoffs within X% on the trades we've validated." If no figure is measured yet, use the process claim: "Every takeoff is checked against a real subcontractor's manual measurement before it ships."]` Mark `// REAL FIGURE REQUIRED`.
- **What tendr doesn't do** (keep verbatim): `tendr doesn't size your rebar or run structural calcs. It does the quantities and the first-pass price. Your engineer and your estimator still own the engineering call.`
Add a "drawings in → quantities out" product visual.

### 7. Case study — new component `CaseStudy.tsx`
The headline proof: a named firm, a named person, three concrete numbers. **Lead with capacity (tenders priced), not win-rate** — do not claim a win-rate jump unless the data is clean. All values are PLACEHOLDERS — mark each `// REAL DATA REQUIRED`, do not invent.
- Quote: `[REAL CUSTOMER QUOTE — plain subbie voice, not marketing prose]`
- Attribution: `[NAME], [ROLE] at [FIRM] — [TRADE], [STATE]` + `[PHOTO]`
- Stat row (3 stats, before → after): `Hours per tender [18 -> 1.5]` · `Tenders priced last quarter [+12]` · `[METRIC -> METRIC]`

### 8. Testimonial — keep existing `Testimonial`
A short, in-voice pull-quote below the case study. Keep the real Lawrence Yeo quote already in the repo. Do not polish it.

### 9. Trades — rework existing `Trades`
A grid, one tile per trade, each with an icon and a one-line description in correct trade vocabulary. Use exactly these:
- **Demolition** — Strip-out, structural and hazmat scope captured straight off the RFQ. Volumes, plant hours and tip fees priced from your rates.
- **Concrete cutting & drilling** — Saw cuts, core holes and slab removal measured off the drawings. Priced by the metre, by the hole, by your crew's day rate.
- **Piling & foundations** — CFA, bored and screw pile takeoffs from the drawings. Priced against your rig hours and concrete supply.
- **Soil-nail & shoring** — Nail counts, lengths and shotcrete areas off the section drawings, priced from your rates.
- **Civil works** — Bulk earthworks, drainage and pavement quantities lifted from the plans and priced your way.
- **Structural steel** — Member counts and tonnages off the GA drawings, priced from your fab and erect rates.
- **Earthworks & site prep** — Cut, fill and haul volumes from the drawings, priced against your plant rates.

### 10. Trust — new component `Trust.tsx`
Five blocks. Plain, declarative, no marketing language.
- **Your rates never leave your business.** Your rate library sits in your account. It is never pooled with other firms, never used to train shared models, never shared. Your rates are your margin — they stay yours.
- **Your data is hosted in Australia.** Drawings, tenders and rates are stored in Australia and encrypted. `[NAME PROVIDER / REGION — REAL DATA REQUIRED]`. `[SECURITY POSTURE — state SOC 2 / ISO 27001 status honestly, even if "in progress" — REAL DATA REQUIRED]`.
- **A human signs off every tender.** tendr never sends a quote to a builder on its own. The AI does the slow 90%; your estimator owns the number that goes out.
- **Every number traces back to the drawing.** A full audit trail for tier-1 dispute review — every quantity links to the page and location it was measured from.
- **Built by people who know the work.** `[FOUNDER NAME] — [SHORT CONSTRUCTION-CREDENTIAL LINE]` + `[FOUNDER PHOTO]`. Mark `// REAL DATA REQUIRED`.

### 11. Pricing — `id="pricing"`, renders the shared `PricingTiers` component
An inline summary of the two tiers. Show pricing — do not hide it. Prices are PLACEHOLDERS — mark `// SET REAL PRICE`.
- **Two tiers only.** Name them plainly — NOT Bronze/Silver/Gold, NOT Starter/Pro/Enterprise. Example names `Core` and `Unlimited` (owner may rename):
  - **Core — `$[X]/month`** — for firms quoting a handful of tenders a month. Up to `[N]` tenders, BOQ + methodology export, your templates, one estimator seat.
  - **Unlimited — `$[X]/month`** (mark "Most subbies are on this") — unlimited tenders, rate-library import, methodology library, multiple seats, priority support.
- Each tier has a one-line `Not in this plan:` note (counter-positioning — keep it).
- One line under the tiers: `Bigger outfit or multiple estimating teams? Talk to us.`
- **Honesty microcopy** (keep verbatim): `Most subbies running 30–50 tenders a year are on Unlimited. Doing under 15 tenders a year? You probably don't need tendr yet — tell us and we'll say so.`
- **Risk-reversal box:** `Your first tender is free. Send us a real RFQ and we'll price it — you see the result before you decide anything.`
- A `See full plan comparison →` link to `/pricing`.
- Both CTAs under the tiers.

### 12. FAQ — `id="faq"`, rework existing `Faq`
Keep the accordion. Answers plain, 1–3 sentences, no marketing prose. Use exactly these eight, in order:
1. **What if tendr gets the takeoff wrong?** — Every tender is reviewed by your estimator before it leaves. tendr flags anything it's unsure about and shows where each quantity came from on the drawing. You're never signing off a black box.
2. **Does my rate library leave my business?** — No. Your rates sit in your account. They're never pooled with other firms, never used to train shared models, never shared. Your rates are your margin — they stay yours.
3. **What do I need to give it?** — The drawings PDF and the RFQ email. Add your BOQ template, the scope and any addenda if you have them. tendr uses whatever you send.
4. **What trades does it actually work for?** — Demolition, concrete cutting, piling, soil-nail and shoring, civil, structural steel and earthworks. It doesn't size rebar or run structural calcs — your engineer and estimator still own the engineering call.
5. **How long does setup take?** — `[ONBOARDING LINE — e.g. "Guided by our team, usually about two weeks. Most subbies run their first real tender inside that."]` Mark `// CONFIRM`.
6. **Do I still need an estimator?** — Yes. tendr is built for estimators, not to replace them — it clears the slow takeoff so they spend their time on the call that wins the job. And if a director can't read drawings, tendr gets the tender priced — but a human still signs it off.
7. **Where is my data stored, and is it safe?** — In Australia, encrypted. Your drawings, tenders and rates stay yours — never sold, never shared, never used to train shared models. `[SECURITY POSTURE — REAL DATA REQUIRED]`.
8. **What does it cost?** — Plans start at `$[X]/month` — see the Pricing section above. Your first tender is free, so you see the output before you commit. **(Do NOT answer this with "book a call".)**

### 13. Final CTA — keep existing `FinalCta`
- **H2:** `Ready. Set. Quote.`
- **Body:** `Bring a real set of drawings to a 20-minute call and we'll show you exactly what tendr sends back. You'll talk to an estimator, not a salesperson. Nothing to install.`
- Both CTAs.

### 14. Footer — shared `SiteFooter`
Keep logo + copyright. Add:
- Footer nav link list: `How it works` (`/#how-it-works`) · `Pricing` (`/pricing`) · `See a sample tender` (`/sample`) · `FAQ` (`/#faq`) · `Book a 20-min call` (`CALENDAR_URL`).
- Business details — Australian construction expects these; hiding them reads as evasive: `[COMPANY NAME]` · `[ABN]` · `[POSTAL ADDRESS]` · `[AUSTRALIAN PHONE NUMBER]` · `[SUPPORT EMAIL]`. Mark `// REAL DETAILS REQUIRED`.
- A short Acknowledgement of Country line.
- A `Download our capability statement` link → `[CAPABILITY STATEMENT PDF]`. Mark `// ASSET REQUIRED`.

---

## PAGE 2 — SAMPLE (route `/sample`, file `src/app/sample/page.tsx`)

A standalone page — the destination for every `See a sample tender` CTA. Not in the navbar. Reuse shared `SiteHeader` and `SiteFooter`.

This page's centrepiece is the **live, real product** — the `aiestimator` review UI running in a public, read-only demo (see Part B), pre-loaded with one real tender. It is not screenshots and not a hand-built mock.

- **H1:** `This is a real tender, priced in tendr.`
- **Intro:** `One real RFQ. The drawings, the takeoff, the priced BOQ — exactly what tendr produced. Click any line and it shows you the spot on the drawing the number came from. Have a poke around.`
- **The embed:**
  - **Desktop:** an `<iframe>` of `DEMO_URL` inside a styled "browser frame" container — large, prominent, the main event on the page. Include an `Open full screen ↗` link that opens `DEMO_URL` in a new tab.
  - **Mobile (≤ ~768px):** do NOT cram the iframe. Show a tappable preview image of the review UI plus an `Open the live sample tender ↗` button to `DEMO_URL` in a new tab.
  - Build it so that if `DEMO_URL` is still the placeholder, the page falls back to the static preview image + a short "live sample coming soon" note instead of a broken iframe. `[PREVIEW IMAGE OF REVIEW UI REQUIRED]`.
- **Below the embed:** a short 3-step caption strip — `The RFQ went in → tendr did the takeoff and priced it → an estimator reviews and signs off` — so the visitor understands what they're looking at.
- End with both CTAs.

## PAGE 3 — PRICING (route `/pricing`, file `src/app/pricing/page.tsx`)

A standalone page — the target of the navbar `Pricing` link. Reuse shared `SiteHeader` and `SiteFooter`. Home section 11 shows a summary of the same tiers and links here.
- Render the **same shared `PricingTiers` component** used on Home (same two tiers, same prices — one source of truth), followed by a feature-comparison table.
- The `Bigger outfit or multiple estimating teams? Talk to us.` line and the honesty microcopy.
- The "first tender free" risk-reversal box.
- A short **pricing FAQ** — separate from and shorter than the Home FAQ, billing-specific only: *How is it billed? Can I change plans? What counts as a tender? Is there a setup fee?* — plain-English answers; mark figure-dependent answers `// CONFIRM`.
- Both CTAs.

---

# PART B — PRODUCT DEMO MODE (`aiestimator`)

So `/sample` can embed the real review UI, the `aiestimator` product needs a public, read-only demo. This is product-side work (FastAPI backend + React frontend) and can be handed to whoever owns that app. Three changes:

1. **Public, read-only access to one demo project.** The whole product is currently behind `AUSTRAL_PASSWORD` + bearer-token auth middleware. Add a carve-out so the demo project (the Tallarook sample project) and its **read** endpoints — `GET /api/projects/{id}`, `/pages/{n}.png`, `/detections`, `/takeoff` — are reachable **without a token**. Everything else stays authenticated. The product's React frontend needs a matching read-only demo route/mode that loads the demo project directly with no login screen.
2. **Disable mutation in demo mode.** `POST /api/lines/{id}/decision` must not write to the shared review database for demo (unauthenticated) traffic. Either reject it for demo sessions, or make demo decisions ephemeral/in-memory per session so a visitor clicking around cannot alter real review state. No upload in demo mode.
3. **Allow embedding.** Set the demo responses' `Content-Security-Policy` `frame-ancestors` directive to permit the landing site's domain, so the `/sample` iframe is not blocked. Do not use a blanket `X-Frame-Options: DENY`.

Once deployed, set `DEMO_URL` in the landing site's `constants.ts` to the demo's public URL.

**Owner gate before the demo goes public — anonymisation.** The Tallarook sample contains real party names (head contractor, project, sender, and other firms). Publishing a real customer's tender, drawings and pricing publicly is commercially sensitive. Get the customer's sign-off and scrub head-contractor / project / personal identifiers before the demo is exposed. This is a hard pre-publish gate, not polish.

---

# ANALYTICS

Add Vercel Analytics custom events to the landing site (bounce rate is meaningless on a one-pager — outbound CTA clicks are the real metric).
- `import { track } from '@vercel/analytics'` (add the dependency if absent).
- `track('cta_book_call', { location })` on every primary CTA — `location` is the section (`hero`, `pricing`, `final`, `header`, …).
- `track('cta_sample_tender', { location })` on every secondary CTA.
- `track('view_sample')` on `/sample` mount; `track('view_pricing')` on `/pricing` mount.

---

# ACCEPTANCE CRITERIA

- [ ] Workspace structure confirmed by `ls` before any code was written; the two apps were kept separate.
- [ ] `npm run build` passes for the landing site; no TypeScript errors.
- [ ] Exactly three landing routes exist: `/`, `/sample`, `/pricing`. No Home section was turned into its own page.
- [ ] Home renders all 14 sections in the specified order.
- [ ] Navbar (all pages) has exactly: `How it works` → `/#how-it-works`, `Pricing` → `/pricing`, `FAQ` → `/#faq`, `Book a 20-min call` button. `/sample` is NOT in the navbar.
- [ ] Navbar anchor links work from `/sample` and `/pricing` (root-relative `/#...`).
- [ ] `#how-it-works`, `#pricing`, `#faq` anchor IDs exist on Home.
- [ ] `PricingTiers` is one shared component used by both Home section 11 and `/pricing` — two tiers, prices not duplicated across files.
- [ ] Every CTA block has both buttons; primary visually dominant; primary → `CALENDAR_URL`, secondary → `/sample`; reassurance microcopy present under the primary.
- [ ] Pricing is visible on Home and `/pricing`. The "What does it cost?" FAQ gives a number, not "book a call".
- [ ] `/sample` embeds `DEMO_URL` in a framed iframe on desktop, falls back to a preview image + new-tab link on mobile, and degrades gracefully to the static preview if `DEMO_URL` is still the placeholder.
- [ ] Hero H1, both CTAs, and one trust signal are above the fold at 390px width.
- [ ] Copy follows the Voice & Copy Rules: no banned fluff words; no "bid"/"GC"; tendr is never called an "AI estimator"; the human-in-the-loop line appears in Hero, How it works, Trust and FAQ; reading level is plain.
- [ ] FAQ accordion is keyboard-operable; heading order semantic; all images have alt text.
- [ ] Existing scroll-reveal animation works on all new sections.
- [ ] CTA analytics events fire with a `location` value.
- [ ] Every invented-data spot is a clearly bracketed placeholder with a `// REAL DATA REQUIRED` (or similar) comment — no fabricated customer names, logos, prices, stats, accuracy figures, or security claims.

# DO NOT

- Do not merge the `aiestimator` product into the Next.js app — they stay two separate apps in one repo.
- Do not redesign the brand, colours, or fonts — extend the existing system only.
- Do not use the banned fluff words, or "bid"/"GC", or call tendr a "solution" or an "AI estimator".
- Do not invent customer names, logos, result numbers, prices, accuracy figures, or security claims — use marked placeholders.
- Do not hide pricing or deflect cost questions to "book a call".
- Do not remove or soften the human-in-the-loop messaging or the "what tendr doesn't do" lines — they are deliberate and load-bearing.
- Do not polish customer quotes into marketing prose.
- Do not put Tier 1 head-contractor logos in the trades strip unless they are genuine customers.
- Do not build `/sample` as static screenshots or a hand-built mock — it embeds the real product demo (with a static image only as the graceful fallback).
- Do not use generic stock construction photography — use real product UI/screenshots (or marked placeholders).
- Do not add a third pricing tier or a third competing primary CTA.

---

# PLACEHOLDERS THE OWNER MUST FILL

Before launch, replace everything bracketed:
- **Review UI screenshots** — hero visual, How-it-works step images, Takeoff visual, and the `/sample` mobile/fallback preview image.
- **Customer logos** for the trades strip.
- **Case study** — quote, name, role, firm, trade, state, photo, and three before→after stats.
- **Takeoff accuracy figure** (or keep the process claim).
- **Founder** — name, construction-credential line, photo.
- **Data hosting** — provider/region — and **security posture** (SOC 2 / ISO 27001 status, stated honestly).
- **Pricing** — tier names, monthly prices, tender limits.
- **Onboarding/setup line** in FAQ 5.
- **Footer business details** — company name, ABN, postal address, Australian phone, support email — plus the Acknowledgement of Country wording and the capability-statement PDF.
- **`DEMO_URL`** — set once the Part B demo is deployed.
- **Tallarook demo anonymisation** — customer sign-off and scrubbing of head-contractor/project/personal identifiers before the demo is made public.
