"use client";

import dynamic from "next/dynamic";
import { ArrowDownRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

const heroLines = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-dvh overflow-hidden px-4 pt-28 sm:px-6 lg:px-8"
    >
      <ParticleBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_26%,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_82%_32%,rgba(99,102,241,0.16),transparent_34%)]" />
      <div className="bg-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="noise-texture absolute inset-0 opacity-[0.08]" />
      <div className="slow-pan absolute left-[-18%] top-16 h-[34rem] w-[34rem] rounded-full bg-cyan-400/[0.10] blur-3xl" />
      <div className="slow-pan animation-delay-2000 absolute right-[-16%] top-24 h-[38rem] w-[38rem] rounded-full bg-indigo-500/[0.12] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background via-background/60 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 py-16 lg:min-h-[calc(100dvh-7rem)] lg:grid-cols-[1.12fr_0.88fr] lg:py-20">
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.11,
                delayChildren: 0.08,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.div
            variants={heroLines}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-cyan-100 shadow-lg shadow-cyan-950/20 backdrop-blur"
          >
            <Sparkles aria-hidden="true" size={16} className="text-cyan-200" />
            {profileData.hero.eyebrow}
          </motion.div>

          <motion.p
            variants={heroLines}
            transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 max-w-2xl text-sm uppercase text-slate-400"
          >
            Software logic / project rhythm / product delivery
          </motion.p>

          <motion.h1
            variants={heroLines}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl"
          >
            {profileData.hero.title}
          </motion.h1>

          <motion.p
            variants={heroLines}
            transition={{ duration: 0.84, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-3xl text-xl font-medium leading-9 text-cyan-100 sm:text-2xl"
          >
            {profileData.hero.subtitle}
          </motion.p>

          <motion.div
            variants={heroLines}
            transition={{ duration: 0.84, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 grid max-w-4xl gap-6 border-l border-white/10 pl-5 lg:grid-cols-[1fr_auto]"
          >
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {profileData.hero.description}
            </p>
            <div className="hidden min-w-44 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm text-slate-300 backdrop-blur lg:block">
              <p className="text-cyan-100">Available for</p>
              <p className="mt-2">Project / Product Assistant</p>
            </div>
          </motion.div>

          <motion.div
            variants={heroLines}
            transition={{ duration: 0.84, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            {profileData.hero.actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={
                  action.variant === "primary"
                    ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-100 px-6 font-semibold text-slate-950 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-cyan-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                    : "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-6 font-semibold text-white backdrop-blur transition duration-300 hover:border-cyan-200/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-950/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                }
              >
                {action.variant === "primary" ? (
                  <ArrowDownRight aria-hidden="true" size={18} />
                ) : (
                  <Download aria-hidden="true" size={18} />
                )}
                {action.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden w-full min-w-0 max-w-md xl:max-w-lg lg:block"
          aria-hidden="true"
        >
          <div className="absolute -inset-12 rounded-full border border-cyan-200/[0.08]" />
          <div className="absolute inset-4 rounded-full border border-indigo-200/[0.08]" />
          <div className="studio-panel relative overflow-hidden rounded-[1.75rem] bg-slate-950/45 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(125,211,252,0.16),transparent_28%),radial-gradient(circle_at_22%_80%,rgba(99,102,241,0.16),transparent_32%)]" />
            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">
                  project-control.os
                </span>
                <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                  signal stable
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-3 text-3xl font-semibold text-white">PM</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                  <p className="text-sm text-slate-400">Method</p>
                  <p className="mt-3 text-3xl font-semibold text-white">PMP</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 rounded-2xl border border-white/10 bg-black/25 p-5">
                {["Understand", "Coordinate", "Deliver"].map(
                  (label, index) => (
                    <div key={label}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-slate-200">{label}</span>
                        <span className="text-cyan-100">{86 + index * 4}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10">
                        <div
                          className="h-1.5 rounded-full bg-cyan-100"
                          style={{ width: `${74 + index * 8}%` }}
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {["Jira", "Spring", "Docs"].map((label) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-4 text-sm text-cyan-50"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase text-slate-500 lg:flex">
        <span className="h-px w-12 bg-white/15" />
        Scroll to explore
        <span className="h-px w-12 bg-white/15" />
      </div>
    </section>
  );
}
