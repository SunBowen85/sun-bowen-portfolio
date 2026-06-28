# Sun Bowen Portfolio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a polished responsive personal portfolio homepage for 孙博文.

**Architecture:** Use a single Next.js App Router page composed from section components. Keep mutable personal copy in a typed data module. Use client components only where animation or browser state is required.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS v4, Framer Motion, GSAP ScrollTrigger, Three.js via React Three Fiber, Vitest.

---

### Task 1: Content Data

**Files:**
- Create: `src/types/profile.ts`
- Create: `src/data/profile.ts`
- Test: `tests/profile.test.ts`

**Steps:**
1. Write a failing Vitest test that requires all requested sections and CTA links.
2. Run `npm.cmd test -- tests/profile.test.ts` and confirm the data module is missing.
3. Add typed profile data with nav, hero, about, skills, experience, project, process, contact, and footer content.
4. Run `npm.cmd test -- tests/profile.test.ts` and confirm it passes.

### Task 2: UI Components

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/About.tsx`
- Create: `src/components/Skills.tsx`
- Create: `src/components/Experience.tsx`
- Create: `src/components/Projects.tsx`
- Create: `src/components/Process.tsx`
- Create: `src/components/Contact.tsx`
- Create: `src/components/Footer.tsx`
- Create helper components as needed.

**Steps:**
1. Implement data-driven sections and anchors.
2. Add Framer Motion hover and hero entrance animation.
3. Add GSAP scroll reveals through a small `Reveal` helper.
4. Add a lightweight R3F particle background in Hero.

### Task 3: Page Shell And Styles

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

**Steps:**
1. Compose all sections in order.
2. Update metadata and document language.
3. Replace starter styles with dark theme tokens, glow/grid utilities, focus states, and reduced-motion handling.

### Task 4: Verification

**Commands:**
- `npm.cmd test -- tests/profile.test.ts`
- `npm.cmd run lint`
- `npm.cmd run build`

**Expected:** All commands exit 0. If build or lint fails, fix the reported issue and rerun the failing command.
