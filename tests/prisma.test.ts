import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const read = (path: string) =>
  readFileSync(join(process.cwd(), path), "utf8");

describe("Prisma local redesign", () => {
  it("uses the Prisma cinematic hero video and warm cream system", () => {
    expect(read("src/components/Hero.tsx")).toContain(
      "hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4",
    );
    expect(read("src/app/globals.css")).toContain("#E1E0CC");
    expect(read("src/app/globals.css")).toContain(".noise-overlay");
    expect(read("src/app/globals.css")).toContain(".bg-noise");
  });

  it("keeps the local homepage focused on Prisma's hero, about, and features flow", () => {
    const page = read("src/app/page.tsx");

    expect(page).toContain("<Hero />");
    expect(page).toContain("<About />");
    expect(page).toContain("<Skills />");
    expect(page).not.toContain("<Experience />");
    expect(page).not.toContain("<Projects />");
    expect(page).not.toContain("<Process />");
  });
});
