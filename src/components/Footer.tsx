import { profileData } from "@/data/profile";

export function Footer() {
  const emails = [
    profileData.person.email,
    profileData.person.secondaryEmail,
  ].filter((email): email is string => Boolean(email));
  const normalizedPhone = profileData.person.phone.replaceAll(" ", "");

  return (
    <footer className="relative z-20 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">
            {profileData.person.name}
          </p>
          <p className="mt-2">{profileData.person.role}</p>
        </div>

        <div className="grid gap-2 md:text-right">
          {emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="transition hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {email}
            </a>
          ))}
          <a
            href={`tel:${normalizedPhone}`}
            className="transition hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            {profileData.person.phone}
          </a>
          <a
            href={profileData.person.github}
            className="transition hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            target="_blank"
            rel="noreferrer"
          >
            GitHub: SunBowen85
          </a>
          <p>© 2026 Sun Bowen</p>
        </div>
      </div>
    </footer>
  );
}
