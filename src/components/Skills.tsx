"use client";

import {
  BarChart3,
  Blocks,
  Bot,
  ClipboardCheck,
  FileText,
  FolderKanban,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { BentoSpan, IconKey } from "@/types/profile";

const skillIcons: Record<IconKey, LucideIcon> = {
  coordination: ClipboardCheck,
  product: Blocks,
  technical: FolderKanban,
  tools: Wrench,
  docs: FileText,
  visualization: BarChart3,
  vibe: Bot,
};

const bentoClasses: Record<BentoSpan, string> = {
  large: "md:col-span-2 md:row-span-2 min-h-[22rem]",
  wide: "md:col-span-2 min-h-[15rem]",
  tall: "md:row-span-2 min-h-[22rem]",
  compact: "min-h-[15rem]",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8 lg:py-36"
    >
      <div className="absolute left-1/2 top-28 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Capabilities"
            title="A modular system for project rhythm, product clarity, and technical context."
            description="能力不再作为平均分布的简历条目，而是像工作室能力矩阵一样呈现优先级、协作场景和交付价值。"
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid auto-rows-[minmax(15rem,auto)] gap-4 md:grid-cols-4 lg:gap-5">
          {profileData.skills.map((skill, index) => {
            const Icon = skillIcons[skill.icon];

            return (
              <Reveal
                key={skill.title}
                delay={index * 0.04}
                className={bentoClasses[skill.bentoSpan]}
              >
                <motion.article
                  whileHover={{
                    y: -8,
                    rotateX: 1.5,
                    rotateY: -1.5,
                    scale: 1.01,
                  }}
                  transition={{ type: "spring", stiffness: 240, damping: 24 }}
                  className="studio-panel group relative flex h-full overflow-hidden rounded-[1.5rem] bg-slate-950/48 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(125,211,252,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent)] opacity-80 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-cyan-200/10 transition duration-500 group-hover:scale-125 group-hover:border-cyan-100/20" />
                  <div className="relative flex h-full w-full flex-col">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-100/[0.08] text-cyan-100">
                        <Icon aria-hidden="true" size={22} />
                      </div>
                      <span className="font-mono text-xs text-slate-500">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-auto">
                      <h3 className="text-2xl font-semibold text-white">
                        {skill.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                        {skill.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
