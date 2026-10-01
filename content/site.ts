export type ServiceContent = {
  id: string;
  number: string;
  title: string;
  description: string;
  /** Image-derived pastel atmosphere — unique per card */
  atmosphere: string;
  /** Subtle top scrim — darkened tint of the card atmosphere for copy readability */
  readabilityScrim: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    objectPosition?: string;
  };
};

export type ServiceIconName =
  | "corporate-events"
  | "conferences-exhibitions"
  | "team-building"
  | "product-launches"
  | "gala-dinner"
  | "end-to-end";

export type EditorialStatement = {
  id: string;
  lead: string;
  body: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    objectPosition?: string;
    scale?: number;
    transformOrigin?: string;
  };
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
};

export type FeaturedProjectContent = {
  id: string;
  category: string;
  title: string;
  opening: string;
  story: string;
  /** Selected Work card cover — not shown in the popup gallery */
  cover: ImageAsset;
  /** Popup gallery — up to 8 project photographs, separate from cover */
  gallery: ImageAsset[];
  /** Preserve editorial collage composition on the card without cropping */
  coverFit?: "contain" | "cover";
  href?: string;
};

export type AboutEditorialNote = {
  id: string;
  title: string;
  body: string;
};

export type AboutEditorialPoint = {
  id: string;
  title: string;
  lead: string;
  body: string;
};

export type AboutContent = {
  eyebrow: string;
  headline: string;
  supporting: string;
  notes: readonly AboutEditorialNote[];
  points: readonly AboutEditorialPoint[];
  closing: {
    lead: string;
    body: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type NumberStat = {
  id: string;
  value: string;
  label: string;
  supporting: string;
  accent: "blue" | "purple" | "red";
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    objectPosition: string;
  };
};

export type CtaContent = {
  headline: string;
  body: string;
  whatsapp: {
    lead: string;
    label: string;
  };
  form: {
    nameLabel: string;
    companyLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    eventLabel: string;
    submitLabel: string;
  };
};

export type ContactContent = {
  email: {
    label: string;
    href: string;
  };
  phone: {
    label: string;
    href: string;
  };
  whatsapp: {
    label: string;
    href: string;
  };
};

export type NavLink = {
  label: string;
  href: string;
};

export type FooterContent = {
  instagram: {
    label: string;
    href: string;
  };
  copyright: string;
};

export const siteContent = {
  contact: {
    email: {
      label: "hello@dpnxevent.com",
      href: "mailto:hello@dpnxevent.com",
    },
    phone: {
      label: "+62 811 997 776",
      href: "tel:+62811997776",
    },
    whatsapp: {
      label: "+62 811 997 776",
      href: "https://wa.me/62811997776",
    },
  } satisfies ContactContent,
  hero: {
    title: {
      line1: "Your Idea,",
      line2: "Our Expertise.",
    },
    body: "We Got You.",
    ctas: {
      primary: {
        label: "Let's Talk",
      },
    },
    image: {
      src: "/images/hero-dpnx-event-production.jpg",
      alt: "DPNX event production",
      width: 1672,
      height: 941,
    },
  },
  services: {
    eyebrow: "WHAT WE DO",
    title: "What we do",
    description: "Events across every scale and format.",
    items: [
      {
        id: "corporate-events",
        number: "01",
        title: "Corporate Events",
        atmosphere: "",
        readabilityScrim: "",
        description: "Your company. Your way.",
        image: {
          src: "/images/page-2-corporate-events-08.png",
          alt: "Corporate gala dinner with stage presentation and seated audience in a ballroom",
          width: 681,
          height: 1024,
        },
      },
      {
        id: "team-building",
        number: "02",
        title: "Team Building & Outbound",
        atmosphere: "",
        readabilityScrim: "",
        description: "Work hard. Play harder.",
        image: {
          src: "/images/page-2-team-building-outbound-final.png",
          alt: "Corporate team in a huddle during an outdoor team building event",
          width: 681,
          height: 1024,
        },
      },
      {
        id: "corporate-trips",
        number: "03",
        title: "Incentive Trips",
        atmosphere: "",
        readabilityScrim: "",
        description: "You earned this.",
        image: {
          src: "/images/page-2-incentive-trips-05.jpg",
          alt: "Corporate team descending coastal stairs during an incentive trip with tropical islands and blue sky",
          width: 681,
          height: 1024,
        },
      },
      {
        id: "event-production",
        number: "04",
        title: "Intimate Celebrations",
        atmosphere: "",
        readabilityScrim: "",
        description: "Small. Personal. Special.",
        image: {
          src: "/images/page-2-intimate-celebrations-07.png",
          alt: "Intimate rooftop dinner celebration at sunset with colleagues around a candlelit table",
          width: 681,
          height: 1024,
        },
      },
      {
        id: "product-launches",
        number: "05",
        title: "Product Launches",
        atmosphere: "",
        readabilityScrim: "",
        description: "Ready. Set. Launch.",
        image: {
          src: "/images/page-2-product-launches-05.png",
          alt: "Chery J6T automotive product launch in Indonesia with covered vehicle on stage and audience recording",
          width: 681,
          height: 1024,
        },
      },
      {
        id: "gala-dinners",
        number: "06",
        title: "Gala Dinners & Celebrations",
        atmosphere: "",
        readabilityScrim: "",
        description: "Tonight deserves a little extra.",
        image: {
          src: "/images/page-2-gala-dinners-celebrations-04.png",
          alt: "Outdoor seaside corporate gala dinner at sunset with candlelit tables and Pertamina stage in Indonesia",
          width: 681,
          height: 1024,
        },
      },
      {
        id: "brand-activations",
        number: "07",
        title: "Brand Activations",
        atmosphere: "",
        readabilityScrim: "",
        description: "Get people talking.",
        image: {
          src: "/images/page-2-brand-activation-01.png",
          alt: "Telkomsel outdoor brand activation at dusk in Indonesia with experiential booth and visitors",
          width: 681,
          height: 1024,
        },
      },
      {
        id: "conferences-exhibitions",
        number: "08",
        title: "Conventions & Exhibitions",
        atmosphere: "",
        readabilityScrim: "",
        description: "Big ideas. Bigger impact.",
        image: {
          src: "/images/page-2-convention-exhibition-final.jpg",
          alt: "Large-scale Indonesian convention and exhibition hall with crowds and branded booths from elevated view",
          width: 681,
          height: 1024,
        },
      },
    ] satisfies ServiceContent[],
  },
  statement: {
    headline: "A complete solution",
    intro: "One team for the whole experience.",
    statements: [
      {
        id: "event-management",
        lead: "Event Management",
        body: "Planning. Coordination. Execution.",
        image: {
          src: "/images/page-3-event-management.jpg",
          alt: "DPNX Event Solution team planning a corporate event with floor plans, laptops, and radios in the office",
          width: 768,
          height: 1024,
        },
      },
      {
        id: "event-production",
        lead: "Event Production",
        body: "Stage. Sound. Light. Screens. Show.",
        image: {
          src: "/images/page-3-event-production-final.png",
          alt: "DPNX event production team reviewing stage designs at workstation with live stage setup visible in venue",
          width: 768,
          height: 1024,
        },
      },
      {
        id: "manpower-crew",
        lead: "Manpower & Crew",
        body: "The right people, right where you need them.",
        image: {
          src: "/images/page-3-manpower-crew-final.png",
          alt: "Event staff assisting a guest at VIP media check-in with DPNX crew documenting in the background",
          width: 768,
          height: 1024,
        },
      },
      {
        id: "creative-design",
        lead: "Creative & Design",
        body: "Ideas that bring it all together.",
        image: {
          src: "/images/page-3-creative-design-final.png",
          alt: "Creative design team developing event visual concepts around moodboards and stage sketches in DPNX studio",
          width: 768,
          height: 1024,
        },
      },
      {
        id: "content-video",
        lead: "Content & Video",
        body: "From event content to corporate stories.",
        image: {
          src: "/images/page-3-content-video-final.png",
          alt: "Digital billboard at Bundaran HI Jakarta at night playing DPNX-produced video content with production crew in foreground",
          width: 768,
          height: 1024,
        },
      },
      {
        id: "merchandise-more",
        lead: "Merchandise & More",
        body: "T-shirts, jerseys, gifts, and more.",
        image: {
          src: "/images/page-3-merchandise-more-final.jpg",
          alt: "Premium corporate gift box with DPNX-branded merchandise being prepared on a studio table",
          width: 768,
          height: 1024,
        },
      },
    ] satisfies EditorialStatement[],
  },
  selectedWork: {
    title: "Selected work",
    intro: "A few projects we've been part of.",
    projects: [
      {
        id: "baf-fair",
        category: "Brand Activation",
        title: "BAF Fair",
        opening:
          "A public-facing fair with activities, flow, and room for the brand to connect with the community.",
        story: "",
        cover: {
          src: "/images/projects/project-baf-fair-collage.jpg",
          alt: "BAF Fair editorial collage — brand activation at a public mall fair",
          width: 1612,
          height: 975,
        },
        coverFit: "contain",
        gallery: [
          {
            src: "/images/projects/baf-fair/gallery-01.jpg",
            alt: "BAF Fair Nusantara Market entrance with branded arch and bamboo structure",
            width: 2400,
            height: 1350,
            objectPosition: "50% 50%",
          },
          {
            src: "/images/projects/baf-fair/gallery-02.jpg",
            alt: "Blood donation activation with crowd context at BAF Fair Bali",
            width: 2400,
            height: 1800,
            objectPosition: "50% 50%",
          },
          {
            src: "/images/projects/baf-fair/gallery-03.jpg",
            alt: "On-site health check at a BAF Fair booth in the mall atrium",
            width: 2400,
            height: 1800,
            objectPosition: "50% 45%",
          },
          {
            src: "/images/projects/baf-fair/gallery-04.jpg",
            alt: "Children's awards on the BAF Fair stage with mall crowd",
            width: 2400,
            height: 1800,
            objectPosition: "50% 55%",
          },
          {
            src: "/images/projects/baf-fair/gallery-05.jpg",
            alt: "Crowded BAF Fair activation with branded consultation tables",
            width: 2400,
            height: 1350,
            objectPosition: "50% 60%",
          },
          {
            src: "/images/projects/baf-fair/gallery-06.jpg",
            alt: "BAF Fair event floor with Nusantara Market arch and branded signage",
            width: 2400,
            height: 1350,
            objectPosition: "50% 50%",
          },
          {
            src: "/images/projects/baf-fair/gallery-07.jpg",
            alt: "High-angle overview of BAF Fair stage, vehicles, and mall crowd",
            width: 2400,
            height: 1800,
            objectPosition: "50% 40%",
          },
          {
            src: "/images/projects/baf-fair/gallery-08.jpg",
            alt: "BAF Fair vehicle display with branded financing signage in the mall",
            width: 2400,
            height: 1350,
            objectPosition: "50% 50%",
          },
        ],
      },
      {
        id: "baf-umc-gathering-bali",
        category: "Corporate Gathering / Incentive",
        title: "BAF UMC Gathering Bali",
        opening:
          "A Bali gathering balancing program time with space to unwind — meals, sessions, and time together.",
        story: "",
        cover: {
          src: "/images/projects/baf-umc/hero.jpg",
          alt: "Large corporate seminar audience applauding in a premium Bali ballroom",
          width: 6192,
          height: 4128,
          objectPosition: "50% 45%",
        },
        gallery: [
          {
            src: "/images/projects/baf-umc/gallery-01.jpg",
            alt: "Special dinner celebration in a stone-walled Bali venue",
            width: 4240,
            height: 2832,
            objectPosition: "50% 50%",
          },
          {
            src: "/images/projects/baf-umc/gallery-02.jpg",
            alt: "Aerial group photo on the beach during the Bali incentive trip",
            width: 4000,
            height: 2250,
            objectPosition: "50% 55%",
          },
          {
            src: "/images/projects/baf-umc/gallery-03.jpg",
            alt: "Corporate gathering session in a formal Bali meeting room",
            width: 4240,
            height: 2832,
            objectPosition: "50% 45%",
          },
          {
            src: "/images/projects/baf-umc/gallery-04.jpg",
            alt: "White-water rafting action during the BAF UMC Bali incentive trip",
            width: 2400,
            height: 1603,
            objectPosition: "50% 55%",
          },
          {
            src: "/images/projects/baf-umc/gallery-05.jpg",
            alt: "Team posing in rafts before launching on the river in Bali",
            width: 2400,
            height: 1603,
            objectPosition: "50% 50%",
          },
          {
            src: "/images/projects/baf-umc/gallery-06.jpg",
            alt: "Shared team dinner during the BAF UMC Gathering Bali program",
            width: 2400,
            height: 1600,
            objectPosition: "50% 45%",
          },
          {
            src: "/images/projects/baf-umc/gallery-07.jpg",
            alt: "Energetic group activity during the BAF UMC corporate gathering",
            width: 2400,
            height: 1635,
            objectPosition: "50% 50%",
          },
          {
            src: "/images/projects/baf-umc/gallery-08.jpg",
            alt: "Rafting prep in the jungle during the BAF UMC Bali incentive trip",
            width: 2400,
            height: 1603,
            objectPosition: "50% 50%",
          },
        ],
      },
      {
        id: "unicef-donor-love-club",
        category: "Hybrid Event Production",
        title: "UNICEF Donor Love Club",
        opening:
          "An evening for in-person and remote guests — production handled so the focus stayed on the stories.",
        story: "",
        cover: {
          src: "/images/projects/unicef-donor-love-club/hero.jpeg",
          alt: "UNICEF Donor Love Club group portrait on stage with event branding",
          width: 2592,
          height: 1728,
          objectPosition: "50% 50%",
        },
        gallery: [
          {
            src: "/images/projects/unicef-donor-love-club/new-gallery-01.jpeg",
            alt: "Engaged audience during the UNICEF Donor Love Club session",
            width: 2592,
            height: 1728,
            objectPosition: "50% 50%",
          },
          {
            src: "/images/projects/unicef-donor-love-club/new-gallery-02.jpeg",
            alt: "Group activity with confetti at the UNICEF Donor Love Club event",
            width: 2592,
            height: 1728,
            objectPosition: "50% 50%",
          },
          {
            src: "/images/projects/unicef-donor-love-club/new-gallery-03.jpeg",
            alt: "Celebratory moment with UNICEF branding at the donor event",
            width: 2592,
            height: 1728,
            objectPosition: "50% 50%",
          },
          {
            src: "/images/projects/unicef-donor-love-club/new-gallery-04.jpeg",
            alt: "Candid laughter among guests at the UNICEF Donor Love Club gathering",
            width: 2592,
            height: 1728,
            objectPosition: "50% 50%",
          },
          {
            src: "/images/projects/unicef-donor-love-club/gallery-05.jpg",
            alt: "Photo booth fun at the UNICEF Donor Love Club dinner",
            width: 2400,
            height: 1600,
            objectPosition: "50% 50%",
          },
          {
            src: "/images/projects/unicef-donor-love-club/gallery-06.jpg",
            alt: "Themed group portrait activity at the UNICEF Donor Love Club event",
            width: 2400,
            height: 1600,
            objectPosition: "50% 50%",
          },
          {
            src: "/images/projects/unicef-donor-love-club/gallery-07.jpg",
            alt: "Group dance activity during the UNICEF Donor Love Club evening",
            width: 2400,
            height: 1600,
            objectPosition: "50% 45%",
          },
          {
            src: "/images/projects/unicef-donor-love-club/gallery-08.jpg",
            alt: "Guests enjoying the UNICEF Donor Love Club dinner program",
            width: 2400,
            height: 1600,
            objectPosition: "50% 50%",
          },
        ],
      },
    ] satisfies FeaturedProjectContent[],
  },
  about: {
    eyebrow: "About DPNX!",
    headline: "Inside DPNX!",
    supporting: "The people, process, and thinking behind the work.",
    notes: [
      {
        id: "small-core",
        title: "Small core",
        body: "We keep the team close.",
      },
      {
        id: "big-crew",
        title: "Big crew",
        body: "When needed, we bring more people in.",
      },
      {
        id: "handpicked",
        title: "Handpicked",
        body: "The right people for the job.",
      },
      {
        id: "hands-on",
        title: "Hands-on",
        body: "We like being close to the action.",
      },
      {
        id: "figure-it-out",
        title: "Figure it out",
        body: "Things don't always go to plan. We adapt.",
      },
      {
        id: "get-it-done",
        title: "Get it done",
        body: "That's usually the job.",
      },
    ],
    points: [
      {
        id: "lean-by-design",
        title: "Lean by design",
        lead: "No unnecessary layers.",
        body: "You work directly with the people making the decisions — no long chain of account managers.",
      },
      {
        id: "lower-overhead",
        title: "Lower overhead",
        lead: "Less overhead, more value.",
        body: "We keep our operation lean, so you get more impact without paying for unnecessary cost.",
      },
      {
        id: "right-team",
        title: "Right team. Right project.",
        lead: "We scale with your needs.",
        body: "Our professional project-based teams scale up only when your event demands it.",
      },
    ],
    closing: {
      lead: "Bottom line?",
      body: "Better value without compromising the experience.",
    },
    image: {
      src: "/images/Picture1.png",
      alt: "DPNX! Event Solution team posing together in front of a Daily News lightbox display",
      width: 1024,
      height: 477,
    },
  } satisfies AboutContent,
  numbers: {
    items: [
      {
        id: "events-delivered",
        value: "150+",
        label: "Events delivered",
        supporting: "From intimate gatherings to large-scale conferences across Indonesia.",
        accent: "blue",
        image: {
          src: "/images/numbers-150-events.jpg",
          alt: "BAF Fair entrance with blue carpet, colorful arch, and display vehicles in mall atrium",
          width: 538,
          height: 864,
          objectPosition: "50% 45%",
        },
      },
      {
        id: "clients-partners",
        value: "50+",
        label: "Clients & partners",
        supporting: "Relationships built through trust, collaboration, and shared success.",
        accent: "purple",
        image: {
          src: "/images/numbers-50-clients.jpg",
          alt: "Participants and crowd at a crowded BAF Fair brand activation",
          width: 542,
          height: 864,
          objectPosition: "50% 72%",
        },
      },
      {
        id: "years-experience",
        value: "20+",
        label: "Years of experience",
        supporting: "Two decades of planning and producing events across Indonesia.",
        accent: "red",
        image: {
          src: "/images/numbers-20-experience.jpg",
          alt: "DPNX Event Solution crew member at BAF Fair with logo on shirt during event setup",
          width: 569,
          height: 864,
          objectPosition: "48% 52%",
        },
      },
    ] satisfies NumberStat[],
  },
  cta: {
    headline: "Let's talk",
    body: "Tell us what you're planning. We'll get back to you.",
    whatsapp: {
      lead: "Prefer WhatsApp?",
      label: "Talk to us",
    },
    form: {
      nameLabel: "Name",
      companyLabel: "Company",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      eventLabel: "Tell us about your event",
      submitLabel: "Send Inquiry",
    },
  } satisfies CtaContent,
  navigation: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#cta" },
    ] satisfies NavLink[],
  },
  footer: {
    instagram: {
      label: "@dpnxevent",
      href: "https://instagram.com/dpnxevent",
    },
    copyright: "© 2026 DPNX! Event Solution",
  } satisfies FooterContent,
} as const;
