import { describe, expect, it } from "vitest";
import { profileData } from "../src/data/profile";

describe("profileData", () => {
  it("contains the required portfolio sections and primary actions", () => {
    expect(profileData.person.name).toBe("孙博文");
    expect(profileData.navItems.map((item) => item.id)).toEqual([
      "about",
      "skills",
      "experience",
      "projects",
      "contact",
    ]);

    expect(profileData.hero.actions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ label: "View My Work", href: "#projects" }),
        expect.objectContaining({ label: "Download Resume", href: "/resume.pdf" }),
      ]),
    );
  });

  it("keeps all requested content groups complete", () => {
    expect(profileData.about.stats).toHaveLength(6);
    expect(profileData.skills).toHaveLength(7);
    expect(profileData.experience).toHaveLength(1);
    expect(profileData.projects).toHaveLength(2);
    expect(profileData.process).toHaveLength(5);
  });

  it("defines premium studio layout metadata for asymmetric sections", () => {
    const skillSpans = profileData.skills.map((skill) => skill.bentoSpan);

    expect(skillSpans).toContain("wide");
    expect(skillSpans).toContain("tall");
    expect(profileData.projects[0].metrics).toHaveLength(3);
    expect(profileData.projects[0].visualLabel).toBe("Featured System");
    expect(profileData.process[0].anchorId).toBe("process-understand");
  });

  it("includes Vibe Coding, GitHub, and the AI-assisted portfolio project", () => {
    expect(profileData.skills.some((skill) => skill.title.includes("Vibe Coding"))).toBe(
      true,
    );
    expect(
      profileData.skills.some((skill) => skill.tags.includes("GitHub")),
    ).toBe(true);
    expect(
      profileData.projects.some((project) =>
        project.title.includes("Vibe Coding"),
      ),
    ).toBe(true);
  });

  it("uses the provided contact details and GitHub profile", () => {
    expect(profileData.person.email).toBe("2918492508@qq.com");
    expect(profileData.person.secondaryEmail).toBe("sunbowen85@gmail.com");
    expect(profileData.person.phone).toBe("17727858310");
    expect(profileData.person.github).toBe("https://github.com/SunBowen85");
    expect(profileData.contact.actions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          label: "Email Me",
          href: "mailto:2918492508@qq.com",
        }),
      ]),
    );
  });
});
