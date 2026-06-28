# Premium Studio Upgrade Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade the portfolio from a polished resume page into a premium creative studio style homepage.

**Architecture:** Keep the existing single-page Next.js structure and data-driven sections. Add layout metadata to profile data, then make Hero, Skills, Projects, Process, and global background layers more spatial and motion-led without adding heavy runtime dependencies.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, Three.js, Vitest.

---

### Task 1: Layout Metadata

**Files:**
- Modify: `tests/profile.test.ts`
- Modify: `src/types/profile.ts`
- Modify: `src/data/profile.ts`

**Step 1:** Add a failing test requiring Bento spans, project metrics, visual labels, and process anchors.

**Step 2:** Run `npm.cmd test -- tests/profile.test.ts` and confirm it fails because metadata is missing.

**Step 3:** Add the typed metadata to `SkillItem`, `ProjectItem`, and `ProcessItem`.

**Step 4:** Run the same test and confirm it passes.

### Task 2: Premium Visual Components

**Files:**
- Create: `src/components/CursorGlow.tsx`
- Create: `src/components/StudioBackdrop.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Skills.tsx`
- Modify: `src/components/Projects.tsx`
- Modify: `src/components/Process.tsx`
- Modify: `src/components/ParticleBackground.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

**Step 1:** Add global noise, radial glow, fine grid, and cursor-follow glow with mobile/reduced-motion guards.

**Step 2:** Rework Hero with larger editorial typography, kinetic 3D orbital sphere, layered glow, and studio-style visual panel.

**Step 3:** Rework Skills into an asymmetric Bento grid using metadata spans.

**Step 4:** Rework Projects into a large Featured Work card with preview scaling, glow border, and sliding text detail.

**Step 5:** Rework Process as a vertical timeline with animated step numbers and title reveal.

### Task 3: Verification

**Commands:**
- `npm.cmd test -- tests/profile.test.ts`
- `npm.cmd run lint`
- `npm.cmd run build`
- Browser checks at desktop and mobile widths.

**Expected:** Tests, lint, and build exit 0; browser console has no errors; no horizontal overflow; mobile keeps motion lightweight.
