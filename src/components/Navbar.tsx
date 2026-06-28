"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Home, Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";
import {
  getNextNavbarState,
  type NavbarModeState,
} from "@/components/navbarState";

const NAVBAR_SHELL_MS = 420;
const NAVBAR_CONTENT_EXIT_MS = 120;

export function Navbar() {
  const [mode, setMode] = useState<NavbarModeState>({
    isCollapsed: false,
    isExpandedByClick: false,
  });
  const [shell, setShell] = useState<"expanded" | "compact">("expanded");
  const [contentVisible, setContentVisible] = useState(true);
  const [orbVisible, setOrbVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const hasMounted = useRef(false);
  const targetCompact = mode.isCollapsed && !mode.isExpandedByClick;
  const isCompact = shell === "compact";

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);

      setMode((previous) =>
        getNextNavbarState({
          currentScrollY,
          lastScrollY: lastScrollY.current,
          previous,
        }),
      );

      if (currentScrollY - lastScrollY.current > 2) {
        setIsOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = Math.max(window.scrollY, 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const timers: number[] = [];
    const schedule = (callback: () => void, delay: number) => {
      timers.push(window.setTimeout(callback, delay));
    };

    if (targetCompact) {
      schedule(() => {
        setIsOpen(false);
        setContentVisible(false);
        setOrbVisible(false);
      }, 0);
      schedule(() => {
        setShell("compact");
      }, NAVBAR_CONTENT_EXIT_MS);
      schedule(() => {
        setOrbVisible(true);
      }, NAVBAR_CONTENT_EXIT_MS + NAVBAR_SHELL_MS);
    } else {
      schedule(() => {
        setShell("expanded");
        setOrbVisible(false);
        setContentVisible(false);
      }, 0);
      schedule(() => {
        setContentVisible(true);
      }, NAVBAR_SHELL_MS);
    }

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [targetCompact]);

  const navLinks = profileData.navItems.map((item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      onClick={() => {
        setIsOpen(false);
        setMode((previous) => ({ ...previous, isExpandedByClick: false }));
      }}
      className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
    >
      {item.label}
    </a>
  ));

  return (
    <header
      className={`fixed top-3 z-50 translate-x-0 transition-[left,width,top] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[left,width] ${
        isCompact
          ? "left-4 w-12 translate-x-0 sm:left-6"
          : "left-[max(1rem,calc((100vw-80rem)/2))] w-[min(calc(100vw-2rem),80rem)] sm:left-[max(1.5rem,calc((100vw-80rem)/2))] sm:w-[min(calc(100vw-3rem),80rem)]"
      }`}
    >
      <nav
        className={`relative flex items-center justify-center overflow-hidden border backdrop-blur-2xl transition-[width,height,border-radius,background-color,box-shadow] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[width,height,border-radius] ${
          isCompact
            ? "h-12 w-12 rounded-full border-cyan-100/20 bg-slate-950/80 p-0 shadow-2xl shadow-black/50"
            : "h-14 w-full rounded-full border-white/15 bg-slate-950/55 px-2 py-2 shadow-2xl shadow-cyan-950/25 sm:px-3"
        }`}
        aria-label="Primary navigation"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.13),rgba(255,255,255,0.035)),radial-gradient(circle_at_22%_0%,rgba(125,211,252,0.14),transparent_38%)]" />

        <button
          type="button"
          onClick={() =>
            setMode({ isCollapsed: true, isExpandedByClick: true })
          }
          className={`absolute inset-0 flex min-h-12 min-w-12 cursor-pointer items-center justify-center rounded-full text-cyan-100 transition-[opacity,transform,background-color,color] duration-200 hover:bg-cyan-200/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
            isCompact && orbVisible
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-75 opacity-0"
          }`}
          aria-label="Expand navigation"
          aria-expanded={false}
          tabIndex={isCompact && orbVisible ? 0 : -1}
        >
          <Menu aria-hidden="true" size={21} />
        </button>

        <div
          className={`relative flex w-full items-center justify-between gap-2 transition-[opacity,transform] duration-200 ease-out ${
            !isCompact && contentVisible
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-1 opacity-0"
          }`}
          aria-hidden={isCompact || !contentVisible}
        >
          <a
            href="#top"
            className="relative flex min-h-10 shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/35 hover:bg-cyan-200/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:px-4"
            aria-label="Back to top"
          >
            <Home aria-hidden="true" size={16} />
            <span className="whitespace-nowrap">
              {profileData.person.name}
            </span>
          </a>

          <div className="relative hidden min-w-0 items-center gap-1 lg:flex">
            {navLinks}
          </div>

          <div className="relative flex shrink-0 items-center gap-2">
            <a
              href={profileData.person.resumeUrl}
              className="hidden min-h-10 shrink-0 whitespace-nowrap items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-300/20 hover:shadow-lg hover:shadow-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:flex"
            >
              <Download aria-hidden="true" size={16} />
              Download Resume
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="flex min-h-10 min-w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:hidden"
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && !isCompact && contentVisible ? (
        <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/90 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl lg:hidden">
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
