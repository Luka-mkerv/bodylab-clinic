"use client";

import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { founder } from "@/content/siteContent";
import BodyLineSVG from "@/components/ui/BodyLineSVG";

export default function FounderSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-24 py-24 md:py-32 bg-brand-warm relative overflow-hidden"
    >
      {/* Right-side body line accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none">
        <BodyLineSVG width={80} height={280} color="#8B6FA8" />
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 md:px-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left — image */}
          <div className="relative order-2 md:order-1">
            {/* Lavender offset frame */}
            <div className="absolute -inset-3 md:-inset-5 rounded-3xl bg-brand-purple-pale/40 -z-0" />
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
              {/* Bottom credential badge */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-white/90 text-xs font-medium tracking-widest uppercase">
                  {t(founder.credentials)}
                </p>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="divider-line" />
              <span className="section-label">{t(founder.sectionLabel)}</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-light text-text-dark mb-2 leading-tight">
              {founder.name}
            </h2>
            <p className="text-sm text-brand-purple font-medium tracking-wide mb-8">
              {t(founder.title)}
            </p>

            {/* Quote */}
            <blockquote className="relative mb-8 pl-6 border-l-2 border-brand-purple/30">
              <span className="font-display text-xl md:text-2xl italic font-light text-text-mid leading-relaxed">
                &ldquo;{t(founder.quote)}&rdquo;
              </span>
            </blockquote>

            <p className="text-[14px] md:text-[15px] text-text-mid leading-relaxed font-light mb-10">
              {t(founder.bio)}
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-3">
              {[
                { en: "Certified MD", ka: "სერტ. ექიმი" },
                { en: "5+ Years Practice", ka: "5+ წლის გამოცდ." },
                { en: "500+ Clients", ka: "500+ კლიენტი" },
              ].map((badge) => (
                <span
                  key={badge.en}
                  className="inline-block text-xs font-semibold tracking-wide text-brand-purple bg-brand-purple/8 border border-brand-purple/15 px-4 py-2 rounded-full"
                >
                  {t(badge)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
