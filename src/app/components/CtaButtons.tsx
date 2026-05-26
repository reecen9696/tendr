"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import { CALENDAR_URL, SAMPLE_URL } from "./constants";

type Tone = "light" | "dark" | "blue";

// Shared dual-CTA block. Primary (filled) is always visually dominant and fires
// `cta_book_call`; secondary (ghost) fires `cta_sample_tender`. Used everywhere a
// CTA appears so wording, order and tracking never drift.
export default function CtaButtons({
  location,
  tone = "light",
  align = "left",
}: {
  location: string;
  tone?: Tone;
  align?: "left" | "center";
}) {
  // On a blue panel the filled blue button would disappear, so the primary goes dark.
  const primaryClass = tone === "blue" ? "btn btn-dark" : "btn btn-blue";
  const ghostClass = tone === "light" ? "btn btn-ghost" : "btn btn-ghost on-dark";

  return (
    <div className={`cta-group${align === "center" ? " center" : ""}`}>
      <div className="cta-row">
        <a
          className={primaryClass}
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("cta_book_call", { location })}
        >
          Book a 20-min call
        </a>
        <Link
          className={ghostClass}
          href={SAMPLE_URL}
          onClick={() => track("cta_sample_tender", { location })}
        >
          See a sample tender
        </Link>
      </div>
    </div>
  );
}
