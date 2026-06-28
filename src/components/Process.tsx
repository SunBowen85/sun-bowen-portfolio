"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8 lg:py-40"
    >
      <div className="absolute left-[-12rem] top-1/3 h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.06] blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Process"
            title="A reliable operating cadence, designed for real project delivery."
            description="不是流程图式的装饰，而是从需求理解到复盘沉淀的一套工作节奏。每一步都服务于更清晰的协作与更可控的交付。"
            align="center"
          />
        </Reveal>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div
            className="absolute left-6 top-0 h-full w-px bg-white/10 sm:left-28"
            aria-hidden="true"
          />
          <div
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-200 via-indigo-200/60 to-transparent sm:left-28"
            aria-hidden="true"
          />

          <div className="space-y-10 lg:space-y-14">
            {profileData.process.map((item) => (
              <motion.article
                id={item.anchorId}
                key={item.step}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="group relative grid gap-6 pl-16 sm:grid-cols-[10rem_1fr] sm:pl-0"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-100/25 bg-slate-950 text-sm font-semibold text-cyan-100 shadow-xl shadow-cyan-950/40 sm:static sm:h-16 sm:w-16 sm:text-lg"
                >
                  {item.step}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="studio-panel rounded-[1.5rem] bg-slate-950/45 p-6 backdrop-blur-xl transition duration-300 group-hover:bg-slate-950/60 lg:p-8"
                >
                  <p className="mb-3 font-mono text-xs uppercase text-slate-500">
                    delivery method
                  </p>
                  <h3 className="text-3xl font-semibold text-white lg:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                    {item.description}
                  </p>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
