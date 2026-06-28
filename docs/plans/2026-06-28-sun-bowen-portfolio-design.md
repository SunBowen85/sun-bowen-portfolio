# Sun Bowen Portfolio Design

## Goal

Build a dark, premium personal recruiting homepage for 孙博文, positioned between software engineering, project execution, and product collaboration.

## Direction

The page uses a creative digital studio tone: large hero typography, restrained black and deep-blue surfaces, cyan and violet glow accents, glass panels, subtle particles, and motion-led section reveals. The site should feel more like a high-end studio homepage than a standard resume template.

## Structure

The homepage is a single responsive scroll page with fixed navigation, Hero, About, Skills, Experience, Projects, Process, Contact, and Footer. All personal content lives in `src/data/profile.ts` with TypeScript types in `src/types/profile.ts`.

## Interaction

Framer Motion handles first-load hero text and hover states. GSAP ScrollTrigger handles section fade-up reveals. React Three Fiber renders a lightweight particle background with a lower particle count on mobile. CSS provides grid, glow, and reduced-motion fallbacks.

## Constraints

Use Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP, and React Three Fiber. Keep the 3D layer light, responsive, accessible, and friendly to reduced-motion users.
