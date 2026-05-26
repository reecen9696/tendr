"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

// Fires a Vercel Analytics page-view event on mount. Used by /sample and /pricing,
// where outbound CTA clicks (not bounce rate) are the metric that matters.
export default function ViewTracker({ event }: { event: string }) {
  useEffect(() => {
    track(event);
  }, [event]);
  return null;
}
