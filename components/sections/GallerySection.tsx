"use client";

import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { gallery } from "@/content/siteContent";

function GalleryImage({
  item,
  className,
  index,
}: {
  item: (typeof gallery.images)[0];
  className?: string;
  index: number;
}) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl bg-brand-purple-pale group cursor-pointer ${className ?? ""}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
        transition: `opacity 0.7s ease ${index * 0.07}s, transform 0.7s ease ${index * 0.07}s`,
      }}
    >
      <img
        src={item.src}
        alt={t(item.alt)}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Alt text on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
        <p className="text-white text-xs font-medium tracking-wide">{t(item.alt)}</p>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const { t } = useLanguage();
  const [img0, img1, img2, img3, img4, img5] = gallery.images;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="mb-14 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="divider-line" />
            <span className="section-label">{t(gallery.sectionLabel)}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-text-dark leading-tight whitespace-pre-line">
            {t(gallery.headline)}
          </h2>
        </div>

        {/* Desktop: asymmetric 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <GalleryImage item={img0} className="h-72" index={0} />
            <GalleryImage item={img3} className="h-52" index={3} />
          </div>
          {/* Column 2 — offset top */}
          <div className="flex flex-col gap-4 mt-8">
            <GalleryImage item={img1} className="h-64" index={1} />
            <GalleryImage item={img4} className="h-60" index={4} />
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <GalleryImage item={img2} className="h-52" index={2} />
            <GalleryImage item={img5} className="h-72" index={5} />
          </div>
        </div>

        {/* Mobile: balanced 2-col grid */}
        <div className="grid md:hidden grid-cols-2 gap-4">
          {gallery.images.map((item, i) => (
            <GalleryImage
              key={item.id}
              item={item}
              className="aspect-[4/5]"
              index={i}
            />
          ))}
        </div>

        {/* CTA beneath */}
        <div className="mt-10 text-center">
          <a
            href={gallery.socialInstagram ?? "https://www.instagram.com/body_lab_georgia"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple hover:text-brand-purple-light transition-colors tracking-wide"
          >
            {t({ en: "See more on Instagram", ka: "მეტი Instagram-ზე" })}
            <span className="w-4 h-px bg-brand-purple inline-block" />
          </a>
        </div>
      </div>
    </section>
  );
}
