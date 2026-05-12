"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Menu, X, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { siteConfig, nav } from "@/content/siteContent";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = nav.links[lang];

  return (
    <>
      {/* Unified Premium Navbar */}
      <header className="sticky top-0 z-50 bg-brand-cream shadow-sm shadow-brand-purple/8 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Desktop Navbar */}
          <div className="hidden md:flex h-16 items-center justify-between gap-8">
            {/* Left: Logo */}
            <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <img src="/logo.png" alt="Body Lab logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-display text-lg font-medium tracking-wide text-text-dark group-hover:text-brand-purple transition-colors">
                Body Lab
              </span>
            </a>

            {/* Center: Navigation Links */}
            <nav className="flex items-center gap-7 flex-1 justify-center">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-text-mid hover:text-brand-purple transition-colors tracking-wide whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Contact Info, Socials, Language, CTA */}
            <div className="flex items-center gap-5 flex-shrink-0">
              {/* Location & Phone */}
              <div className="flex items-center gap-4 text-[12px] text-text-soft pr-4 border-r border-brand-purple/10">
                <span className="flex items-center gap-1.5 hover:text-brand-purple transition-colors cursor-help" title={t(siteConfig.address.full)}>
                  <MapPin size={13} />
                  <span className="hidden lg:inline">Vaja Pshavela, Tbilisi</span>
                </span>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-1.5 hover:text-brand-purple transition-colors font-medium"
                >
                  <Phone size={13} />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-soft hover:text-brand-purple transition-colors"
                  title="Instagram"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-soft hover:text-brand-purple transition-colors"
                  title="Facebook"
                >
                  <Facebook size={15} />
                </a>
              </div>

              {/* Language Switcher */}
              <LanguageSwitcher lang={lang} setLang={setLang} />

              {/* CTA Button */}
              <a
                href="#contact"
                className="text-[12px] font-semibold bg-brand-purple text-white px-4 py-2 rounded-full hover:bg-brand-purple-light transition-colors tracking-wide whitespace-nowrap"
              >
                {t(nav.cta)}
              </a>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="flex md:hidden h-14 items-center justify-between">
            {/* Mobile Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-full overflow-hidden">
                <img src="/logo.png" alt="Body Lab logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-display text-base font-medium text-text-dark">Body Lab</span>
            </a>

            {/* Mobile Right: Language + CTA + Menu */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher lang={lang} setLang={setLang} small />
              <a
                href="#contact"
                className="text-xs font-semibold bg-brand-purple text-white px-3 py-1.5 rounded-full hover:bg-brand-purple-light transition-colors"
              >
                {lang === "en" ? "Book" : "ჩაწერა"}
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-text-dark p-1.5"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed top-14 inset-x-0 z-40 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-purple/10 md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-3 pb-4 border-b border-brand-purple/10">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-text-dark hover:text-brand-purple transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Contact Information */}
              <div className="flex flex-col gap-3">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-sm text-text-dark font-medium hover:text-brand-purple transition-colors"
                >
                  <Phone size={14} />
                  {siteConfig.phone}
                </a>
                <div className="flex items-center gap-2 text-sm text-text-soft">
                  <MapPin size={14} />
                  <span>{t(siteConfig.address.short)}</span>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 pt-1">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-brand-purple/20 flex items-center justify-center text-brand-purple/60 hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-200"
                  >
                    <Instagram size={14} />
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-brand-purple/20 flex items-center justify-center text-brand-purple/60 hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-200"
                  >
                    <Facebook size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LanguageSwitcher({
  lang,
  setLang,
  small = false,
}: {
  lang: string;
  setLang: (l: any) => void;
  small?: boolean;
}) {
  return (
    <div className={`flex items-center gap-1.5 ${small ? "text-[11px]" : "text-xs"} px-2`}>
      <button
        onClick={() => setLang("en")}
        className={`transition-colors font-medium tracking-wide ${
          lang === "en"
            ? "text-brand-purple font-semibold"
            : "text-text-muted hover:text-text-soft"
        }`}
      >
        EN
      </button>
      <span className="text-text-muted/40">|</span>
      <button
        onClick={() => setLang("ka")}
        className={`transition-colors font-medium ${
          lang === "ka"
            ? "text-brand-purple font-semibold"
            : "text-text-muted hover:text-text-soft"
        }`}
      >
        KA
      </button>
    </div>
  );
}
