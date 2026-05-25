"use client";

import { useEffect } from "react";

// Ports the mockup's vanilla-JS behaviours: scroll-reveal animations and the
// FAQ accordion.
export default function LandingFx() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const faqHandlers: { btn: Element; fn: () => void }[] = [];
    document.querySelectorAll<HTMLButtonElement>(".faq-q").forEach((q) => {
      const fn = () => {
        const item = q.parentElement;
        if (!item) return;
        const a = item.querySelector<HTMLElement>(".faq-a");
        const open = item.classList.contains("open");
        document.querySelectorAll<HTMLElement>(".faq-item.open").forEach((i) => {
          i.classList.remove("open");
          const ans = i.querySelector<HTMLElement>(".faq-a");
          if (ans) ans.style.maxHeight = "";
        });
        if (!open && a) {
          item.classList.add("open");
          a.style.maxHeight = `${a.scrollHeight}px`;
        }
      };
      q.addEventListener("click", fn);
      faqHandlers.push({ btn: q, fn });
    });

    return () => {
      io.disconnect();
      faqHandlers.forEach(({ btn, fn }) => btn.removeEventListener("click", fn));
    };
  }, []);

  return null;
}
