import { profileData } from "@/data/profile";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <div className="lg:pb-10">
            <SectionHeader
              eyebrow={profileData.about.eyebrow}
              title={profileData.about.title}
              description={profileData.about.body}
            />
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {profileData.about.stats.map((stat, index) => (
            <Reveal key={stat.value} delay={index * 0.05}>
              <div className="studio-panel group h-full rounded-[1.25rem] bg-slate-950/45 p-5 backdrop-blur-xl transition duration-300 hover:bg-slate-950/65">
                <p className="text-sm text-slate-500">{stat.label}</p>
                <p className="mt-3 text-xl font-semibold leading-7 text-white">
                  {stat.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
