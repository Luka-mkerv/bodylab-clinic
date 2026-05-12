"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { hero, about } from "@/content/siteContent";
import BodyLineSVG from "@/components/ui/BodyLineSVG";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden bg-brand-cream">
      {/* Background image - right side */}
      <div className="absolute inset-0 md:left-1/2 left-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent z-10" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.image})` }}
        />
      </div>

      {/* Decorative body line */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block z-10">
        <BodyLineSVG width={120} height={320} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 w-full py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="divider-line" />
            <span className="section-label">{t(hero.badge)}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.15}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-text-dark mb-5 whitespace-pre-line"
          >
            {t(hero.headline)}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="text-[15px] md:text-base text-text-mid leading-relaxed max-w-lg mb-8 font-light"
          >
            {t(hero.subtext)}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.45}
            className="flex flex-wrap gap-3 mb-14 md:mb-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-purple text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-brand-purple-light transition-all duration-300 hover:gap-3 tracking-wide"
            >
              {t(hero.cta.primary)}
              <ArrowRight size={15} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-brand-purple/30 text-brand-purple text-sm font-semibold px-7 py-3.5 rounded-full hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 tracking-wide"
            >
              {t(hero.cta.secondary)}
            </a>
          </motion.div>

          {/* Unified Philosophy & Stats Section */}
          <div className="border-t border-brand-purple/10 pt-10 md:pt-12">
            {/* Philosophy Statement */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.55}
              className="mb-8 md:mb-10 max-w-lg"
            >
              <p className="text-[13px] font-medium text-brand-purple tracking-wide uppercase mb-3">
                {t(about.sectionLabel)}
              </p>
              <p className="text-[15px] text-text-mid leading-relaxed font-light">
                {t(about.body)}
              </p>
            </motion.div>

            {/* Trust Stats - Inline */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.65}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {about.stats.map((stat, idx) => (
                <div key={stat.value} className="flex flex-col">
                  <div className="font-display text-3xl md:text-4xl font-light text-brand-purple mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-soft font-medium tracking-wide">
                    {t(stat.label)}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-brand-purple/40" />
      </motion.div>
    </section>
  );
}
