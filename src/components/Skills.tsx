"use client";

import {
  ArrowRight,
  Bot,
  Check,
  ClipboardCheck,
  FolderKanban,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WordsPullUpMultiStyle } from "@/components/PrismaText";

const featureVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

const featureCards = [
  {
    number: "01",
    title: "Project Coordination.",
    icon: ClipboardCheck,
    checks: ["会议纪要与任务跟进", "跨部门沟通同步", "项目文档与汇报材料"],
  },
  {
    number: "02",
    title: "Product Understanding.",
    icon: FolderKanban,
    checks: ["需求理解与功能拆解", "用户体验意识", "Jira / Project 协作流"],
  },
  {
    number: "03",
    title: "Vibe Coding.",
    icon: Bot,
    checks: ["AI 辅助需求拆解", "Next.js / TypeScript 原型", "GitHub 项目沉淀"],
  },
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-black px-4 py-24 sm:px-6 md:py-32"
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div ref={ref} className="relative mx-auto max-w-7xl">
        <WordsPullUpMultiStyle
          className="mx-auto max-w-5xl text-center text-xl font-normal leading-tight sm:text-2xl md:text-3xl lg:text-4xl"
          segments={[
            {
              text: "Studio-grade workflows for reliable delivery.",
              className: "text-[#E1E0CC]",
            },
            {
              text: "Built for project rhythm. Powered by technical context.",
              className: "text-gray-500",
            },
          ]}
        />

        <div className="mt-16 grid gap-3 sm:gap-2 md:grid-cols-2 md:gap-2 lg:h-[480px] lg:grid-cols-4 lg:gap-1">
          <motion.article
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-[#212121] lg:min-h-0"
          >
            <video
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              src={featureVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-[12rem] text-2xl leading-tight text-[#E1E0CC]">
              Your delivery canvas.
            </p>
          </motion.article>

          {featureCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : undefined}
                transition={{
                  duration: 0.72,
                  delay: 0.15 * (index + 1),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex min-h-[360px] flex-col justify-between rounded-[1.75rem] bg-[#212121] p-6 sm:p-7 lg:min-h-0"
              >
                <div>
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon aria-hidden="true" size={20} />
                    </div>
                    <span className="text-xs text-gray-500">{card.number}</span>
                  </div>

                  <h3 className="max-w-[12rem] text-2xl leading-tight text-[#E1E0CC]">
                    {card.title}
                  </h3>

                  <div className="mt-8 space-y-4">
                    {card.checks.map((check) => (
                      <div key={check} className="flex items-start gap-3">
                        <Check
                          aria-hidden="true"
                          size={16}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        <p className="text-sm leading-6 text-gray-400">{check}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#top"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-primary/80 transition hover:text-primary"
                >
                  Learn more
                  <ArrowRight
                    aria-hidden="true"
                    size={16}
                    className="-rotate-45"
                  />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
