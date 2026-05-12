// ============================================================
// BODY LAB — Centralized Site Content
// Edit all text, images, links, and data here.
// ============================================================

export type Language = "en" | "ka";

export const siteConfig = {
  name: "Body Lab",
  tagline: {
    en: "Aesthetic Clinic",
    ka: "ესთეტიკური კლინიკა",
  },
  phone: "+995 555 24 77 42",
  phoneHref: "tel:+995555247742",
  address: {
    short: {
      en: "Vaja Pshavela Ave",
      ka: "ვაჟა-ფშაველა გამზ.",
    },
    full: {
      en: "Vaja Pshavela Ave, Tavkhelidze St. #1, Tbilisi, Georgia",
      ka: "ვაჟა-ფშაველა გამზ., თავხელიძის ქ. #1, თბილისი, საქართველო",
    },
  },
  hours: {
    en: [
      { day: "Monday", time: "Closed" },
      { day: "Tuesday – Sunday", time: "10:00 – 20:00" },
    ],
    ka: [
      { day: "ორშაბათი", time: "დახურულია" },
      { day: "სამშაბათი – კვირა", time: "10:00 – 20:00" },
    ],
  },
  social: {
    instagram: "https://www.instagram.com/body_lab_georgia",
    facebook: "https://www.facebook.com/BodyLabGeorgia",
    tiktok: "https://tiktok.com/@bodylab.ge",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=41.722849,44.732711&z=16&output=embed",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=41.722849,44.732711",
};

export const nav = {
  links: {
    en: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    ka: [
      { label: "ჩვენს შესახებ", href: "#about" },
      { label: "სერვისები", href: "#services" },
      { label: "გალერეა", href: "#gallery" },
      { label: "კონტაქტი", href: "#contact" },
    ],
  },
  cta: {
    en: "Book Consultation",
    ka: "ჩაწერა კონსულტაციაზე",
  },
};

export const hero = {
  badge: {
    en: "Aesthetic Clinic · Tbilisi",
    ka: "ესთეტიკური კლინიკა · თბილისი",
  },
  headline: {
    en: "Where Science\nMeets Beauty",
    ka: "სადაც მეცნიერება\nხვდება სილამაზეს",
  },
  subtext: {
    en: "Personalized aesthetic treatments in a calm, clinical environment. Trusted by hundreds of clients across Tbilisi.",
    ka: "ინდივიდუალური ესთეტიკური პროცედურები სიმშვიდისა და პროფესიონალიზმის გარემოში.",
  },
  cta: {
    primary: {
      en: "Book Consultation",
      ka: "კონსულტაციაზე ჩაწერა",
    },
    secondary: {
      en: "View Services",
      ka: "სერვისები",
    },
  },
  image: "/Hero.png",
};

export const about = {
  sectionLabel: {
    en: "Our Philosophy",
    ka: "ჩვენი ფილოსოფია",
  },
  headline: {
    en: "Refined Aesthetics,\nReal Results",
    ka: "დახვეწილი ესთეტიკა,\nრეალური შედეგები",
  },
  body: {
    en: "Body Lab was founded on a single belief: that aesthetic medicine should feel as elevated as it looks. Every treatment is carefully designed around your individual goals — never generic, always intentional.",
    ka: "Body Lab-ში სილამაზე და მეცნიერება განუყოფელია. ჩვენ არ ვცვლით ადამიანს — ჩვენ ვხვეწთ დეტალებს, რათა მივიღოთ შედეგი, რომელიც არის ბუნებრივი, ზუსტი და უზადო.",
  },
  stats: [
    { value: "500+", label: { en: "Happy Clients", ka: "კმაყოფილი კლიენტი" } },
    { value: "5+", label: { en: "Years Experience", ka: "წლის გამოცდილება" } },
    { value: "200+", label: { en: "Treatments", ka: "პროცედურა" } },
  ],
};

export const services = {
  sectionLabel: {
    en: "Our Treatments",
    ka: "ჩვენი პროცედურები",
  },
  headline: {
    en: "What We Offer",
    ka: "რას გთავაზობთ",
  },
  items: [
    {
      id: "lip-fillers",
      title: { en: "Injectable Cosmetology", ka: "ინექციური კოსმეტოლოგია" },
      subtitle: {
        en: "Facial contouring and rejuvenation using advanced, medical-grade techniques",
        ka: "სახის კონტურების კორექცია და გაახალგაზრდავება უსაფრთხო, წამყვანი მეთოდებით",
      },
      image: "/injection.jpg",
    },
    {
      id: "skin-treatments",
      title: { en: "Lip Fillers", ka: "ტუჩის ფილერები" },
      subtitle: {
        en: "Enhancing shape and volume to highlight your unique features",
        ka: "ფორმისა და მოცულობის კორექცია ინდივიდუალური ნაკვთების ხაზგასასმელად",
      },
      image: "/lipp.jpg",
    },
    {
      id: "laser",
      title: { en: "Laser Procedures", ka: "დიოდური ეპილაცია" },
      subtitle: {
        en: "Advanced diode technology for smooth skin with long-lasting, painless results",
        ka: "გლუვი კანი უახლესი თაობის აპარატურით — სწრაფი და უმტკივნეულო შედეგი",
      },
      image: "/laser.jpg",
    },
    {
      id: "body-contouring",
      title: { en: "Body Contouring", ka: "სხეულის კორექცია" },
      subtitle: {
        en: "Anti-cellulite massage and pressotherapy for sculpting and detoxifying the body",
        ka: "ანტიცელულიტური მასაჟები და პრესოთერაპია სხეულის სრულყოფილი ფორმებისთვის",
      },
      image: "/massg.jpg",
    },
    {
      id: "facial-aesthetics",
      title: { en: "Facial Aesthetics", ka: "სახის ესთეტიკა" },
      subtitle: {
        en: "Botox, anti-aging, and sculpting for a naturally refreshed look",
        ka: "ბოტოქსი, ანტი-დაბერება და სახის კონტურირება ბუნებრივი სიახლის შეგრძნებისთვის",
      },
      image: "/Faceaesth.jpg",
    },
    {
      id: "iv-therapy",
      title: { en: "Body Therapy & Relax Massage", ka: "სხეულის სარელაქსაციო თერაპია" },
      subtitle: {
        en: "A sanctuary of peace and relaxation designed to restore your body’s tone and provide a complete escape",
        ka: "სიმშვიდისა და რელაქსაციის გარემო სხეულის ტონუსის აღსადგენად და სრულყოფილი განტვირთვისთვის",
      },
      image: "/relax.jpg",
    },
  ],
};

export const founder = {
  sectionLabel: {
    en: "Meet the Doctor",
    ka: "ექიმი",
  },
  name: "Dr. Tea Totosashvili",
  title: {
    en: "Founder & Lead Aesthetic Physician",
    ka: "დამფუძნებელი და მთავარი ესთეტიკური ექიმი",
  },
  credentials: {
    en: "MD · Certified Aesthetic Medicine Specialist",
    ka: "MD · სერტიფიცირებული ესთეტიკური მედიცინის სპეციალისტი",
  },
  bio: {
    en: "With over 7 years of specialized training in aesthetic medicine, Dr. Tea Totosashvili founded Body Lab with a clear vision: to offer world-class treatments in an intimate, personalized setting. Every client receives her direct care and attention.",
    ka: "7 წელზე მეტი სპეციალიზებული გამოცდილებით, ექიმმა თეა თოთოსაშვილმა დააარსა Body Lab მკაფიო ხედვით: მსოფლიო დონის პროცედურები ინტიმურ, პერსონალიზებულ გარემოში.",
  },
  image: "/CEO.png",
  quote: {
    en: "My goal isn’t to change you, but to reveal the most refined version of your natural beauty.",
    ka: "ჩემი მიზანია არა თქვენი შეცვლა, არამედ თქვენი ბუნებრივი სილამაზის საუკეთესო ვერსიის წარმოჩენა.",
  },
};

export const gallery = {
  sectionLabel: {
    en: "Our Space",
    ka: "ჩვენი სივრცე",
  },
  headline: {
    en: "The Body Lab\nExperience",
    ka: "Body Lab\nგამოცდილება",
  },
  socialInstagram: "https://www.instagram.com/body_lab_georgia",
  
  images: [
    {
      id: 1,
      src: "/22.jpg",
      alt: { en: "Clinic reception", ka: "კლინიკის მიმღები" },
    },
    {
      id: 2,
      src: "/22.jpg",
      alt: { en: "Treatment room", ka: "პროცედურათა ოთახი" },
    },
    {
      id: 3,
      src: "/22.jpg",
      alt: { en: "Aesthetic treatment", ka: "ესთეტიკური პროცედურა" },
    },
    {
      id: 4,
      src: "/22.jpg",
      alt: { en: "Clinic atmosphere", ka: "კლინიკის ატმოსფერო" },
    },
    {
      id: 5,
      src: "/22.jpg",
      alt: { en: "Premium products", ka: "პრემიუმ პროდუქცია" },
    },
    {
      id: 6,
      src: "/22.png",
      alt: { en: "Client consultation", ka: "კლიენტის კონსულტაცია" },
    },
  ],
};

export const contact = {
  sectionLabel: {
    en: "Get in Touch",
    ka: "კონტაქტი",
  },
  headline: {
    en: "Book Your\nConsultation",
    ka: "ჩაიწერეთ\nკონსულტაციაზე",
  },
  subtext: {
    en: "Take the first step. We'll respond within a few hours.",
    ka: "გადადგით პირველი ნაბიჯი. ჩვენ გიპასუხებთ რამდენიმე საათში.",
  },
  form: {
    name: { en: "Full Name", ka: "სახელი და გვარი" },
    phone: { en: "Phone Number", ka: "ტელეფონის ნომერი" },
    service: { en: "Interested In", ka: "მაინტერესებს" },
    message: { en: "Message (optional)", ka: "შეტყობინება (სურვილისამებრ)" },
    submit: { en: "Send Request", ka: "გაგზავნა" },
  },
};

export const footer = {
  tagline: {
    en: "Aesthetic Medicine · Tbilisi, Georgia",
    ka: "ესთეტიკური მედიცინა · თბილისი, საქართველო",
  },
  copyright: {
    en: "© 2024 Body Lab. All rights reserved.",
    ka: "© 2024 Body Lab. ყველა უფლება დაცულია.",
  },
};
