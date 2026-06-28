"use client";

import { ArrowUpRight, FileDown, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects() {
  const [project, ...supportingProjects] = profileData.projects;

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8 lg:py-40"
    >
      <div className="absolute right-[-10rem] top-20 h-[32rem] w-[32rem] rounded-full bg-indigo-500/[0.08] blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Featured Work"
            title="One project, presented like a product system."
            description="毕业设计不只是功能罗列，而是一条从问卷创建、数据沉淀、统计可视化到结果导出的完整产品链路。"
          />
        </Reveal>

        <Reveal className="mt-14">
          <motion.article
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="studio-panel group relative grid overflow-hidden rounded-[2rem] bg-slate-950/55 shadow-2xl shadow-black/35 backdrop-blur-xl lg:grid-cols-[1.18fr_0.82fr]"
          >
            <div className="relative min-h-[32rem] overflow-hidden border-b border-white/10 bg-[#030712] lg:border-b-0 lg:border-r lg:border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.18),transparent_34%)] transition duration-700 group-hover:scale-105" />
              <div className="noise-texture absolute inset-0 opacity-[0.12]" />
              <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-black/30 p-4 transition duration-500 group-hover:border-cyan-100/25 group-hover:shadow-2xl group-hover:shadow-cyan-950/30">
                <div className="mb-5 flex items-center justify-between text-xs text-slate-400">
                  <span>{project.visualLabel}</span>
                  <span>Spring Boot / Data Viz</span>
                </div>

                <div className="grid h-[21rem] grid-cols-[0.8fr_1.2fr] gap-4">
                  <div className="space-y-3">
                    {["Questionnaire", "Publish", "Responses", "Export"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                        >
                          <div className="mb-3 h-2 w-2 rounded-full bg-cyan-200" />
                          <p className="text-sm text-white">{item}</p>
                          <p className="mt-2 text-xs text-slate-500">
                            module 0{index + 1}
                          </p>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-5">
                    <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(125,211,252,0.08),transparent)] opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="relative mb-8 flex items-center justify-between">
                      <p className="text-sm text-slate-300">Survey Analytics</p>
                      <p className="rounded-full bg-cyan-100/10 px-3 py-1 text-xs text-cyan-100">
                        live preview
                      </p>
                    </div>
                    <div className="relative grid h-52 grid-cols-5 items-end gap-3">
                      {[64, 88, 52, 76, 96].map((height, index) => (
                        <div
                          key={height}
                          className="flex h-full flex-col justify-end"
                        >
                          <div
                            className="rounded-t-xl bg-cyan-100/80 transition duration-500 group-hover:bg-white"
                            style={{ height: `${height}%` }}
                          />
                          <span className="mt-3 text-center text-xs text-slate-500">
                            Q{index + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-6 bottom-6 translate-y-6 rounded-2xl border border-cyan-100/20 bg-slate-950/85 p-4 opacity-0 backdrop-blur transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm leading-6 text-cyan-50">
                    {project.visualCaption}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative p-6 lg:p-9">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-cyan-100">
                <Layers3 aria-hidden="true" size={16} />
                Case Study
              </div>

              <h3 className="text-3xl font-semibold leading-tight text-white lg:text-4xl">
                {project.title}
              </h3>
              <p className="mt-5 leading-8 text-slate-300">
                {project.description}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                  >
                    <p className="text-xs text-slate-500">{metric.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="mt-8 grid gap-3">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-7 text-slate-300"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {project.actions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className={
                      action.variant === "primary"
                        ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                        : "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                    }
                  >
                    {action.variant === "primary" ? (
                      <ArrowUpRight aria-hidden="true" size={16} />
                    ) : (
                      <FileDown aria-hidden="true" size={16} />
                    )}
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        </Reveal>

        {supportingProjects.length > 0 ? (
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {supportingProjects.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <motion.article
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  className="studio-panel group relative min-h-[30rem] overflow-hidden rounded-[2rem] bg-slate-950/55 shadow-2xl shadow-black/25 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(139,92,246,0.13),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_48%)] transition duration-700 group-hover:scale-105" />
                  <div className="noise-texture absolute inset-0 opacity-[0.1]" />
                  <div className="absolute inset-x-6 top-6 h-40 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/35 transition duration-500 group-hover:border-cyan-100/25 group-hover:shadow-2xl group-hover:shadow-cyan-950/25">
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(125,211,252,0.1),transparent)] opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-cyan-100">
                      <Layers3 aria-hidden="true" size={14} />
                      {item.visualLabel}
                    </div>
                    <p className="absolute inset-x-6 bottom-5 translate-y-4 text-sm leading-6 text-slate-300 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.visualCaption}
                    </p>
                  </div>

                  <div className="relative flex min-h-[30rem] flex-col p-6 pt-52 lg:p-8 lg:pt-54">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-100/80">
                        Work 0{index + 2}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                        GitHub Ready
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold leading-tight text-white lg:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {item.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/10 bg-white/[0.035] p-3"
                        >
                          <p className="text-[0.68rem] uppercase tracking-[0.18em] text-slate-500">
                            {metric.label}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                      {item.actions.map((action) => (
                        <a
                          key={action.label}
                          href={action.href}
                          target={action.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            action.href.startsWith("http") ? "noreferrer" : undefined
                          }
                          className={
                            action.variant === "primary"
                              ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cyan-100 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                              : "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                          }
                        >
                          <ArrowUpRight aria-hidden="true" size={16} />
                          {action.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
