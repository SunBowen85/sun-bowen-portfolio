"use client";

import { ArrowUpRight, Download, Mail } from "lucide-react";
import { profileData } from "@/data/profile";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
      <Reveal>
        <div className="studio-panel relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950/52 p-8 text-center shadow-2xl shadow-black/35 backdrop-blur-xl lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(99,102,241,0.14),transparent_34%)]" />
          <div className="noise-texture absolute inset-0 opacity-[0.08]" />
          <div className="relative mx-auto max-w-5xl">
            <p className="mb-6 text-sm uppercase text-cyan-100">
              Open to project, product, and implementation assistant roles
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              {profileData.contact.title}
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {profileData.contact.subtitle}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              {profileData.contact.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className={
                    action.variant === "primary"
                      ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-100 px-6 font-semibold text-slate-950 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-cyan-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                      : "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-6 font-semibold text-white transition duration-300 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                  }
                >
                  {action.label === "Email Me" ? (
                    <Mail aria-hidden="true" size={18} />
                  ) : action.label === "Download Resume" ? (
                    <Download aria-hidden="true" size={18} />
                  ) : (
                    <ArrowUpRight aria-hidden="true" size={18} />
                  )}
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
