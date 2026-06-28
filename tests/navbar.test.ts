import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getNextNavbarState } from "../src/components/navbarState";

describe("getNextNavbarState", () => {
  it("keeps the navbar expanded at the top of the page", () => {
    expect(
      getNextNavbarState({
        currentScrollY: 0,
        lastScrollY: 96,
        previous: { isCollapsed: true, isExpandedByClick: true },
      }),
    ).toEqual({ isCollapsed: false, isExpandedByClick: false });
  });

  it("collapses on deliberate downward scrolling", () => {
    expect(
      getNextNavbarState({
        currentScrollY: 140,
        lastScrollY: 120,
        previous: { isCollapsed: false, isExpandedByClick: false },
      }),
    ).toEqual({ isCollapsed: true, isExpandedByClick: false });
  });

  it("expands on deliberate upward scrolling", () => {
    expect(
      getNextNavbarState({
        currentScrollY: 80,
        lastScrollY: 120,
        previous: { isCollapsed: true, isExpandedByClick: false },
      }),
    ).toEqual({ isCollapsed: false, isExpandedByClick: false });
  });

  it("preserves click-expanded state during tiny scroll jitter", () => {
    expect(
      getNextNavbarState({
        currentScrollY: 122,
        lastScrollY: 120,
        previous: { isCollapsed: true, isExpandedByClick: true },
      }),
    ).toEqual({ isCollapsed: true, isExpandedByClick: true });
  });

  it("keeps text from wrapping while the glass navbar morphs", () => {
    const source = readFileSync(
      join(process.cwd(), "src/components/Navbar.tsx"),
      "utf8",
    );

    expect(source).toContain("shrink-0 whitespace-nowrap");
    expect(source).toContain("whitespace-nowrap rounded-full px-3 py-2");
  });

  it("renders the name inside a non-wrapping home control", () => {
    const source = readFileSync(
      join(process.cwd(), "src/components/Navbar.tsx"),
      "utf8",
    );

    expect(source).toContain('aria-label="Back to top"');
    expect(source).toContain("profileData.person.name");
    expect(source).toContain('<span className="whitespace-nowrap">');
  });

  it("left-anchors the morphing shell instead of mixing center translate with width changes", () => {
    const source = readFileSync(
      join(process.cwd(), "src/components/Navbar.tsx"),
      "utf8",
    );

    expect(source).not.toContain("-translate-x-1/2");
    expect(source).toContain("left-[max(1rem,calc((100vw-80rem)/2))]");
    expect(source).toContain("w-[min(calc(100vw-2rem),80rem)]");
  });

  it("stages content and orb visibility around the shell animation", () => {
    const source = readFileSync(
      join(process.cwd(), "src/components/Navbar.tsx"),
      "utf8",
    );

    expect(source).toContain("contentVisible");
    expect(source).toContain("orbVisible");
    expect(source).toContain("NAVBAR_CONTENT_EXIT_MS");
  });
});
