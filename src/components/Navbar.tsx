"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = profileData.navItems.map((item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      onClick={() => setIsOpen(false)}
      className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
    >
      {item.label}
    </a>
  ));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition duration-300 ${
          isScrolled || isOpen
            ? "border-white/15 bg-slate-950/72 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl"
            : "border-white/10 bg-slate-950/25"
        }`}
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="flex min-h-11 items-center rounded-full px-2 text-base font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          {profileData.person.name}
        </a>

        <div className="hidden items-center gap-1 lg:flex">{navLinks}</div>

        <a
          href={profileData.person.resumeUrl}
          className="hidden min-h-11 items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20 hover:shadow-lg hover:shadow-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:flex"
        >
          <Download aria-hidden="true" size={16} />
          Download Resume
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-lg border border-white/10 bg-slate-950/90 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">{navLinks}</div>
          <a
            href={profileData.person.resumeUrl}
            className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 text-sm font-semibold text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <Download aria-hidden="true" size={16} />
            Download Resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
