"use client";

import { useState, useRef, useEffect } from "react";
import { Phone, MapPin, Clock, Instagram, Facebook, Send } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { contact, siteConfig, services } from "@/content/siteContent";
import BodyLineSVG from "@/components/ui/BodyLineSVG";

function InputField({
  label,
  type = "text",
  name,
  id,
  required = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  type?: string;
  name: string;
  id?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const inputId = id ?? name;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId} className="text-[11px] font-semibold uppercase tracking-widest text-text-soft">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full bg-white border border-brand-purple/15 rounded-xl px-4 py-3 text-[14px] text-text-dark placeholder:text-text-muted focus:border-brand-purple transition-colors duration-200 font-light"
      />
    </div>
  );
}

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const hours = siteConfig.hours[lang];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const serviceId = formData.get("service");
    const serviceName = services.items.find((s) => s.id === serviceId)?.title[lang] || "consultation";

    // Simulated submission for V1 placeholder behavior
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      form.reset();
    }, 450);
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-warm relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute left-0 bottom-0 opacity-[0.06] pointer-events-none">
        <BodyLineSVG width={70} height={260} color="#8B6FA8" />
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
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="divider-line" />
            <span className="section-label">{t(contact.sectionLabel)}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="font-display text-4xl md:text-5xl font-light text-text-dark leading-tight whitespace-pre-line">
              {t(contact.headline)}
            </h2>
            <p className="text-[14px] text-text-soft font-light max-w-xs md:text-right">
              {t(contact.subtext)}
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-5 gap-6 md:gap-10">

          {/* Left — Form (wider) */}
          <div className="md:col-span-3 bg-white rounded-3xl p-6 md:p-8 shadow-sm shadow-brand-purple/5\">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8 gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-1">
                  <Send size={20} className="text-brand-purple" />
                </div>
                <h3 className="font-display text-xl font-light text-text-dark">
                  {t({ en: "Thank you!", ka: "გმადლობთ!" })}
                </h3>
                <p className="text-sm text-text-soft font-light max-w-xs">
                  {t({
                    en: "We've received your request and will contact you shortly.",
                    ka: "თქვენი მოთხოვნა მიღებულია. მალე დაგიკავშირდებით.",
                  })}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField
                    label={t({ en: "First Name", ka: "სახელი" })}
                    name="name"
                    id="contact-name"
                    required
                    placeholder={lang === "en" ? "Your first name" : "თქვენი სახელი"}
                    autoComplete="name"
                  />
                  <InputField
                    label={t({ en: "Last Name", ka: "გვარი" })}
                    name="surname"
                    id="contact-surname"
                    required
                    placeholder={lang === "en" ? "Your last name" : "თქვენი გვარი"}
                    autoComplete="family-name"
                  />
                </div>

                <InputField
                  label={t({ en: "Email Address", ka: "ელ. ფოსტა" })}
                  type="email"
                  name="email"
                  id="contact-email"
                  required
                  placeholder={lang === "en" ? "you@example.com" : "you@example.com"}
                  autoComplete="email"
                />

                <InputField
                  label={t({ en: "Phone Number", ka: "ტელეფონის ნომერი" })}
                  type="tel"
                  name="phone"
                  id="contact-phone"
                  required
                  placeholder={lang === "en" ? "+995..." : "+995..."}
                  autoComplete="tel"
                />

                {/* Service select */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-service" className="text-[11px] font-semibold uppercase tracking-widest text-text-soft">
                    {t(contact.form.service)}
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    className="w-full bg-white border border-brand-purple/15 rounded-xl px-4 py-3 text-[14px] text-text-dark focus:border-brand-purple transition-colors duration-200 font-light appearance-none cursor-pointer"
                  >
                    <option value="">{t({ en: "Select a treatment", ka: "აირჩიეთ პროცედურა" })}</option>
                    {services.items.map((s) => (
                      <option key={s.id} value={s.id}>{t(s.title)}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-0.5 w-full bg-brand-purple text-white text-sm font-semibold py-3.5 rounded-full hover:bg-brand-purple-light transition-colors duration-300 tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (lang === "en" ? "Sending..." : "იგზავნება...") : t({ en: "Send Request", ka: "გაგზავნა" })}
                </button>
              </form>
            )}
          </div>

          {/* Right — Info */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <a
                href={siteConfig.phoneHref}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-purple transition-colors duration-300">
                  <Phone size={15} className="text-brand-purple group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-1">
                    {t({ en: "Phone", ka: "ტელეფონი" })}
                  </p>
                  <p className="text-[15px] font-medium text-text-dark">{siteConfig.phone}</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-brand-purple" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-1">
                    {t({ en: "Address", ka: "მისამართი" })}
                  </p>
                  <p className="text-[14px] font-light text-text-dark leading-relaxed">
                    {t(siteConfig.address.full)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={15} className="text-brand-purple" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-2">
                    {t({ en: "Hours", ka: "სამუშაო საათები" })}
                  </p>
                  <div className="flex flex-col gap-1">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-6 text-[13px]">
                        <span className="text-text-soft font-light">{h.day}</span>
                        <span className="text-text-dark font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-brand-purple/10" />

            {/* Social */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-3">
                {t({ en: "Follow Us", ka: "გამოგვყევი" })}
              </p>
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-purple/20 flex items-center justify-center text-brand-purple/60 hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-300"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-purple/20 flex items-center justify-center text-brand-purple/60 hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-300"
                >
                  <Facebook size={15} />
                </a>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-brand-purple/10 flex-1 min-h-[260px] md:min-h-[300px] relative bg-gray-100\">
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ minHeight: 260, border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t({ en: "Body Lab Location", ka: "Body Lab-ის მდებარეობა" })}
              />
              {/* Fallback link */}
              <a
                href={siteConfig.mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/5 transition-colors opacity-0 hover:opacity-100 z-10 pointer-events-none hover:pointer-events-auto"
                title={t({ en: "Open in Google Maps", ka: "გახსენი Google Maps-ში" })}
              >
                <span className="bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-brand-purple">
                  {t({ en: "Open in Google Maps", ka: "გახსენი რუკაში" })}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
