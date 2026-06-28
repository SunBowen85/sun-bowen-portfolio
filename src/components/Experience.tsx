import { profileData } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Experience() {
  const [experience] = profileData.experience;

  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Experience"
            title="Real project rhythm, documentation, and cross-team sync."
            description="实习经历聚焦项目会议、任务跟进、信息同步和文档沉淀，把项目助理工作放进真实交付场景中理解。"
          />
        </Reveal>

        <Reveal className="mt-14">
          <article className="studio-panel relative overflow-hidden rounded-[1.75rem] bg-slate-950/48 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl lg:p-9">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(34,211,238,0.12),transparent_30%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div>
                <p className="font-mono text-sm text-cyan-100">
                  {experience.period}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-white">
                  {experience.company}
                </h3>
                <p className="mt-3 text-lg text-slate-300">{experience.role}</p>
                <p className="mt-6 leading-8 text-slate-300">
                  {experience.summary}
                </p>
              </div>

              <ul className="grid gap-3">
                {experience.bullets.map((bullet, index) => (
                  <li
                    key={bullet}
                    className="group flex gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-4 text-sm leading-7 text-slate-300 transition duration-300 hover:border-cyan-100/25 hover:bg-white/[0.055]"
                  >
                    <span className="font-mono text-cyan-100">
                      0{index + 1}
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
