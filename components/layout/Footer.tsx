import Image from "next/image";
import Link from "next/link";
import { socialIcons } from "@/components/ui/icons";
import { getPartners, getSiteSettings, getRegionalSemifinals } from "@/lib/content";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";

export async function Footer() {
  const [settings, partners, regionalSemifinals] = await Promise.all([
    getSiteSettings(),
    getPartners(),
    getRegionalSemifinals(),
  ]);
  const worldwide = partners.filter((p) => p.type === "worldwide");

  // הוסף שותפים מחצאי הגמר, מסנן כפילויות (בסניטי וגם בחצאי גמר)
  const sanityPartnerNames = new Set(worldwide.map((p) => p.name));
  const seenRegionalNames = new Set<string>();
  const regionalPartners = [];

  for (const entry of regionalSemifinals) {
    for (const partner of entry.partners) {
      if (!sanityPartnerNames.has(partner.name) && !seenRegionalNames.has(partner.name)) {
        seenRegionalNames.add(partner.name);
        regionalPartners.push({
          name: partner.name,
          logo: partner.logo || "",
          url: undefined,
        });
      }
    }
  }

  const allPartners = [...worldwide, ...regionalPartners];
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/gesawards-white.png"
            alt={settings.siteName}
            width={180}
            height={59}
            className="h-11 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {settings.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            {settings.social.map((s) => {
              const Icon = socialIcons[s.platform];
              return (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
            Explore
          </h2>
          <ul className="mt-4 space-y-3">
            {settings.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">
            Get involved
          </h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={settings.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                Apply your startup
              </a>
            </li>
            <li>
              <a
                href={settings.poweredByUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                Powered by MindCET
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} Global EdTech Startup Awards. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
