"use client";

import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { siteConfig, nav, footer } from "@/content/siteContent";
import BodyLineSVG from "@/components/ui/BodyLineSVG";

export default function Footer() {
  const { t } = useLanguage();
  const links = nav.links["en"]; // footer always shows EN slugs; labels from t()
  const navLinks = nav.links;

  return (
    <footer className="bg-text-dark text-white relative overflow-hidden">
      {/* Subtle decorative line */}
      <div className="absolute right-8 top-0 bottom-0 opacity-[0.05] pointer-events-none flex items-center">
        <BodyLineSVG width={60} height={240} color="#E8DFF0" />
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                <img src="/logo.png" alt="Body Lab logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-display text-xl font-medium tracking-wide text-white">
                Body Lab
              </span>
            </div>

            <p className="text-[13px] text-white/40 font-light mb-6 tracking-wide">
              {t(footer.tagline)}
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2.5 text-[13px] text-white/60 hover:text-white/90 transition-colors font-light"
              >
                <Phone size={12} className="text-brand-purple-light flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <p className="flex items-center gap-2.5 text-[13px] text-white/60 font-light">
                <MapPin size={12} className="text-brand-purple-light flex-shrink-0" />
                {t(siteConfig.address.short)}
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-300"
              >
                <Instagram size={14} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-300"
              >
                <Facebook size={14} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-5">
              {t({ en: "Navigation", ka: "ნავიგაცია" })}
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks["en"].map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/60 hover:text-white transition-colors font-light"
                  >
                    {t({ en: navLinks.en[i].label, ka: navLinks.ka[i].label })}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-5">
              {t({ en: "Hours", ka: "სამუშაო საათები" })}
            </p>
            <div className="flex flex-col gap-2.5">
              {siteConfig.hours["en"].map((h, i) => {
                const kaH = siteConfig.hours["ka"][i];
                return (
                  <div key={h.day} className="flex flex-col gap-0.5">
                    <span className="text-[11px] text-white/40 font-light">
                      {t({ en: h.day, ka: kaH.day })}
                    </span>
                    <span className="text-[13px] text-white/70 font-medium">
                      {t({ en: h.time, ka: kaH.time })}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-8 inline-block text-xs font-semibold bg-brand-purple text-white px-5 py-2.5 rounded-full hover:bg-brand-purple-light transition-colors tracking-wide"
            >
              {t(nav.cta)}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/25 font-light">
            {t(footer.copyright)}
          </p>
          <p className="text-[11px] text-white/20 font-light">
            {t({ en: "Designed & built with care", ka: "შექმნილია სიყვარულით" })}
          </p>
        </div>
      </div>
    </footer>
  );
}
