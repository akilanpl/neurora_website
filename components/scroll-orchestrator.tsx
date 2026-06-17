"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollOrchestrator() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-story]").forEach((section) => {
        gsap.fromTo(section, { opacity: 0.86, y: 40 }, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 82%", end: "bottom 20%", toggleActions: "play none none reverse" } });
      });
      gsap.utils.toArray<HTMLElement>("[data-product-zoom]").forEach((panel) => {
        gsap.to(panel, { scale: 1.035, ease: "none", scrollTrigger: { trigger: panel, start: "top bottom", end: "bottom top", scrub: true } });
      });
    });
    return () => ctx.revert();
  }, []);

  return null;
}
