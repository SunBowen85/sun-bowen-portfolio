"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { WordsPullUp } from "@/components/PrismaText";

const heroVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#skills" },
  { label: "Work", href: "#skills" },
  { label: "Resume", href: profileData.person.resumeUrl },
  { label: "Contact", href: `mailto:${profileData.person.email}` },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen overflow-hidden bg-black p-4 md:p-6"
    >
      <div className="relative h-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 z-[1] opacity-70 mix-blend-overlay" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/30 via-transparent to-black/65" />

        <nav
          className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8"
          aria-label="Primary navigation"
        >
          <div className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[10px] text-[#E1E0CC]/80 transition-colors hover:text-[#E1E0CC] sm:text-xs md:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8 md:p-10 lg:p-12">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-4 text-[10px] uppercase tracking-[0.38em] text-[#DEDBC8]/60 sm:text-xs">
                Software engineering / PMP / Product & project assistant
              </p>
              <WordsPullUp
                text="Sun Bowen"
                showAsterisk
                className="font-prisma text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.86, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4"
            >
              <p className="max-w-xl text-xs leading-[1.35] text-primary/70 sm:text-sm md:text-base">
                我希望把技术理解、项目管理方法和产品思维结合起来，参与从需求分析、项目推进到交付落地的全过程。
              </p>

              <motion.a
                href="#skills"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.86,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
              >
                View capabilities
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-primary transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight aria-hidden="true" size={18} />
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
