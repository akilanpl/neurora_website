"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1], delay }}>{children}</motion.div>;
}

export function PathologyVisual({ hero = false }: { hero?: boolean }) {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(useTransform(scrollYProgress, [0, .25], [1, 1.08]), { stiffness: 80, damping: 24 });
  const hue = useTransform(scrollYProgress, [0, .25], [0, 55]);
  const filter = useTransform(hue, v => `hue-rotate(${v}deg)`);
  return <motion.div style={hero ? { scale, filter } : undefined} className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-white/70 shadow-soft ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,157,214,.45),transparent_18%),radial-gradient(circle_at_70%_25%,rgba(122,122,255,.35),transparent_18%),radial-gradient(circle_at_45%_70%,rgba(100,210,255,.42),transparent_22%),linear-gradient(135deg,#fbf2f7,#eef6ff_45%,#fff)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(255,157,214,.24),transparent_18%),radial-gradient(circle_at_70%_25%,rgba(122,122,255,.25),transparent_18%),radial-gradient(circle_at_45%_70%,rgba(100,210,255,.22),transparent_22%),linear-gradient(135deg,#101016,#07111c_45%,#050505)]" />
    <div className="absolute inset-8 rounded-[2rem] border border-white/50 bg-[linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px)] bg-[size:36px_36px] dark:border-white/10" />
    <motion.div animate={{ x: ["-25%", "125%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute top-0 h-full w-28 bg-gradient-to-r from-transparent via-neurora-cyan/35 to-transparent blur-md" />
    <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/50 bg-white/55 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-black/35">
      <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[.24em] text-black/50 dark:text-white/50"><span>AI overlay</span><span>Research mode</span></div>
      <div className="h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10"><motion.div className="h-full rounded-full bg-neurora-blue" animate={{ width: ["28%", "82%", "54%"] }} transition={{ duration: 4, repeat: Infinity }} /></div>
    </div>
  </motion.div>;
}
