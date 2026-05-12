"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { services } from "@/content/siteContent";

function ServiceCard({
  item,
  index,
}: {
  item: (typeof services.items)[0];
  index: number;
}) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl bg-white"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s`,
      }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={t(item.title)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Index number */}
        <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center">
          <span className="text-[10px] font-semibold text-brand-purple tracking-wide">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="p-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-medium text-text-dark mb-1.5">
            {t(item.title)}
          </h3>
          <p className="text-[13px] text-text-soft leading-relaxed font-light">
            {t(item.subtitle)}
          </p>
        </div>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-purple/20 flex items-center justify-center text-brand-purple/40 group-hover:bg-brand-purple group-hover:border-brand-purple group-hover:text-white transition-all duration-300 mt-0.5">
          <ArrowUpRight size={14} />
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="divider-line" />
              <span className="section-label">{t(services.sectionLabel)}</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-text-dark leading-tight">
              {t(services.headline)}
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start md:self-auto text-sm font-semibold text-brand-purple border border-brand-purple/30 px-6 py-3 rounded-full hover:bg-brand-purple hover:text-white transition-all duration-300 tracking-wide whitespace-nowrap"
          >
            {t({ en: "Book a Treatment", ka: "პროცედურის ჩაწერა" })}
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.items.map((item, i) => (
            <ServiceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
