"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ScrollTextReveal,
  WordsPullUpMultiStyle,
} from "@/components/PrismaText";

const aboutText =
  "我是一名软件工程专业应届生，具备基础开发思维，同时系统学习过项目管理知识并通过 PMP。相比只做普通执行，我更希望成为能理解需求、同步信息、推动协作、辅助交付的人。通过实习、毕业设计和 Vibe Coding 项目，我正在把技术理解、文档表达、跨部门沟通与 AI 协作开发整合成自己的工作方法。";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 pb-10 pt-32 md:pb-14 md:pt-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div
        ref={ref}
        className="relative mx-auto max-w-6xl rounded-[2rem] bg-[#101010] px-6 py-20 text-center sm:px-10 md:px-16 md:py-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6 }}
          className="text-[10px] uppercase tracking-[0.35em] text-primary sm:text-xs"
        >
          Visual profile
        </motion.p>

        <WordsPullUpMultiStyle
          className="mx-auto mt-8 max-w-4xl text-3xl leading-[0.95] text-[#E1E0CC] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
          segments={[
            { text: "I am Sun Bowen,", className: "font-normal" },
            {
              text: "a software engineering graduate.",
              className: "font-prisma italic",
            },
            {
              text: "I connect project rhythm, product clarity, and technical context.",
              className: "font-normal",
            },
          ]}
        />

        <ScrollTextReveal text={aboutText} />
      </div>
    </section>
  );
}
