// Single source of truth for site content.
// ponytail: plain TS data, no CMS/MDX. Edit here to change site copy.
// When the client wants to self-edit, this file is what a CMS would replace.

export const SITE = {
  name: "Void Architects",
  tagline: "Architecture, Interiors & Design",
  cities: ["Hyderabad", "Madhapur"], // office locations
  coverage: "Telangana & across India",
  phone: "+91 90000 00000",
  email: "studio@voidarchitects.in",
  whatsapp: "919000000000",
  url: "https://voidarchitects.in",
  description:
    "Void Architects is an architecture, interior and design studio delivering projects across Telangana and India, with studios in Hyderabad and Madhapur.",
};

export type Service = {
  key: string;
  index: string;
  title: string;
  blurb: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    key: "architecture",
    index: "A",
    title: "Architecture",
    blurb:
      "Residential, commercial and institutional buildings shaped by site, light and use — from first sketch to final handover.",
    image: "/projects/matrusri.jpg",
  },
  {
    key: "interior",
    index: "B",
    title: "Interiors",
    blurb:
      "Interiors that carry the architecture inward — material, joinery and light detailed to the millimetre.",
    image: "/projects/sridhar.jpg",
  },
  {
    key: "design",
    index: "C",
    title: "Design",
    blurb:
      "Master planning, landscape and bespoke furniture — the full arc of a place, considered as one.",
    image: "/projects/pothunuri.jpg",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  image: string;
  w: number;
  h: number;
  blurb: string;
};

// Real Void Architects projects. Images carved from the studio's own
// client documents (3D concepts + on-site photography), stored in /public.
export const PROJECTS: Project[] = [
  {
    slug: "nit-warangal-entrance",
    title: "NIT Warangal Entrance",
    category: "Institutional / Landscape",
    location: "Warangal",
    year: "2024",
    area: "12,200 sq.ft.",
    image: "/projects/nit-warangal.jpg",
    w: 2400,
    h: 1355,
    blurb:
      "A monumental campus gateway for NIT Warangal (CPWD) fusing contemporary minimalism with Neo-Vernacular Kakatiya heritage, parametric accents and landscape urbanism.",
  },
  {
    slug: "dr-sree-reddy-residence",
    title: "Dr Sree Reddy Residence",
    category: "Residence",
    location: "Hunter Road, Warangal",
    year: "2024",
    area: "3,375 sq.ft.",
    image: "/projects/sree-reddy.jpg",
    w: 2400,
    h: 1697,
    blurb:
      "A contemporary tropical-minimalist duplex — cubist massing, industrial detailing and biophilic design for a climate-responsive, timeless home.",
  },
  {
    slug: "pothunuri-convention-hall",
    title: "Pothunuri Convention Hall",
    category: "Commercial",
    location: "Gorrekunta, Warangal",
    year: "2025",
    area: "9,125 sq.ft.",
    image: "/projects/pothunuri.jpg",
    w: 1370,
    h: 1148,
    blurb:
      "A contemporary luxury convention hall — clean architectural lines, premium materials and warm hospitality lighting forming a distinctive landmark of celebration and prestige.",
  },
  {
    slug: "lbs-school",
    title: "LBS School",
    category: "Institutional",
    location: "Hyderabad",
    year: "2024",
    area: "21,000 sq.ft.",
    image: "/projects/lbs-school.jpg",
    w: 2400,
    h: 1057,
    blurb:
      "A low-maintenance institutional building in locally-sourced brick cladding, using natural light and landscape as its primary design elements within a tight budget.",
  },
  {
    slug: "kiran-kidney-care",
    title: "Kiran Kidney Care",
    category: "Healthcare",
    location: "Hanamkonda, Warangal",
    year: "2023",
    area: "1,200 sq.ft.",
    image: "/projects/kiran-kidney.jpg",
    w: 1280,
    h: 720,
    blurb:
      "A contemporary-minimal urology & gastroenterology clinic — clean lines, warm textures and glass partitions folding a full care journey into a compact, healing space.",
  },
  {
    slug: "sree-mathrushri-college",
    title: "Sree Mathrushri College",
    category: "Institutional",
    location: "Bheemaram, Hanamkonda",
    year: "2024",
    area: "6,150 sq.ft.",
    image: "/projects/matrusri.jpg",
    w: 2000,
    h: 1449,
    blurb:
      "A contemporary-minimal degree college for a girls' campus — rectilinear design principles giving an affordable build a strong, well-balanced commercial identity.",
  },
  {
    slug: "harsha-residence",
    title: "Harsha Residence",
    category: "Residence",
    location: "Gadepally, Warangal",
    year: "2023",
    area: "1,985 sq.ft.",
    image: "/projects/harsha.jpg",
    w: 1472,
    h: 1068,
    blurb:
      "A contemporary tropical courtyard home — a central court drawing in light and ventilation, with luxury suites and seamless indoor–outdoor living.",
  },
  {
    slug: "sridhar-interiors",
    title: "Sridhar Residence Interiors",
    category: "Interior",
    location: "Ghanpur, Warangal",
    year: "2024",
    area: "4,500 sq.ft.",
    image: "/projects/sridhar.jpg",
    w: 2000,
    h: 1500,
    blurb:
      "Warm contemporary-minimal interiors for a 3BHK duplex — clean framing, natural wood, open planning and understated luxury detailed to the joint.",
  },
  {
    slug: "spinlaunch-campus",
    title: "SpinLaunch Campus",
    category: "Interior",
    location: "Madhapur, Hyderabad",
    year: "2025",
    area: "4,000 sq.ft.",
    image: "/projects/spinlaunch.jpg",
    w: 1920,
    h: 1080,
    blurb:
      "Modern institutional interiors built for collaboration — maximised space, durable materials and brand identity woven into an inspiring, welcoming campus.",
  },
  {
    slug: "dr-v-ramesh-skin-clinic",
    title: "Dr V Ramesh Skin Clinic",
    category: "Healthcare",
    location: "Hanamkonda, Warangal",
    year: "2024",
    area: "3,200 sq.ft.",
    image: "/projects/v-ramesh.jpg",
    w: 2000,
    h: 1500,
    blurb:
      "A contemporary-minimal dermatology clinic balancing strict clinical hygiene with a warm, spa-like calm — hospitality-inspired planning and biophilic materiality.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  project: string;
};

// Verbatim client feedback from the studio's project records.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The design perfectly balances contemporary minimalism with regional heritage, resulting in an iconic campus entrance. We appreciate the creativity, attention to detail, and professional execution delivered by VOID Architects.",
    author: "CPWD",
    role: "National Institute of Technology, Warangal",
    project: "NIT Warangal Entrance",
  },
  {
    quote:
      "VOID Architects transformed our vision into a beautiful contemporary home. Every space is thoughtfully planned with excellent natural lighting, ventilation and functionality. The final design exceeded our expectations.",
    author: "Dr Sree Reddy",
    role: "MBBS, MCh (USA)",
    project: "Dr Sree Reddy Residence",
  },
  {
    quote:
      "The final outcome exceeded our expectations. The design feels premium, functional and timeless — exactly what we envisioned: a contemporary, elegant and efficient healthcare environment.",
    author: "Dr Uske Kiran",
    role: "MS, MCh Urology — Gold Medalist",
    project: "Kiran Kidney Care",
  },
  {
    quote:
      "From concept to completion, the team understood our requirements perfectly. A perfect blend of functionality, elegance and contemporary architecture — thank you, VOID Architects, for bringing our vision to life.",
    author: "Mr Ugender",
    role: "M.Tech Gold Medalist, Osmania University",
    project: "Sree Mathrushri College",
  },
  {
    quote:
      "Working with VOID Architects was a wonderful experience. They translated our vision into a contemporary architectural statement that is elegant, functional and truly iconic.",
    author: "Mr P. Venkata Ramana",
    role: "Chief Engineer, Indian Merchant Navy",
    project: "Pothunuri Convention Hall",
  },
  {
    quote:
      "VOID Architects perfectly understood our vision and transformed it into a beautiful, functional home. Elegant interiors, excellent material selection and exceptional attention to detail — we are delighted.",
    author: "Mr Sridhar",
    role: "Probationary Officer, SBI",
    project: "Sridhar Residence Interiors",
  },
  {
    quote:
      "A perfect blend of aesthetics and functionality. The collaborative zones have completely changed how our team interacts — the modern campus interiors feel welcoming and have noticeably boosted engagement.",
    author: "Mr Anil Kumar Nelagapudi",
    role: "SpinLaunch",
    project: "SpinLaunch Campus",
  },
];

// Client roster — real names/institutions. (No logos: several clients are
// private individuals, and the local "SpinLaunch" is unrelated to the US firm,
// so a web-scraped logo would be wrong. Add real logo files if the client
// supplies them.)
export const CLIENTS = [
  "NIT Warangal · CPWD",
  "LBS School",
  "Sree Mathrushri Degree College",
  "SpinLaunch",
  "Kiran Kidney Care",
  "Dr V Ramesh Skin Clinic",
  "Pothunuri Convention Hall",
  "Dr Sree Reddy",
];

// Studio metrics — architect proof-of-quality, no revenue.
// ponytail: placeholder numbers. Edit these with the client's real figures.
export type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  noCount?: boolean; // render as-is (e.g. a year), don't count up
};

export const STATS: Stat[] = [
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 1.8, decimals: 1, suffix: "M", label: "Sq. ft. built" },
  { value: 2014, noCount: true, label: "In practice since" },
  { value: 14, label: "Cities across India" },
];

export const PROCESS = [
  {
    no: "01",
    title: "Listen",
    text: "We begin with the site, the brief and the people. Every project starts as a conversation.",
  },
  {
    no: "02",
    title: "Concept",
    text: "Ideas tested in sketch and model until the plan, light and material agree.",
  },
  {
    no: "03",
    title: "Detail",
    text: "Drawings resolved to the joint. Nothing left to chance on site.",
  },
  {
    no: "04",
    title: "Build",
    text: "We stay through construction — protecting the idea until you hold the keys.",
  },
];

// SEO landing pages — local + service intent. Each renders a real,
// server-rendered page with its own metadata and JSON-LD.
export type SeoPage = {
  slug: string;
  city: string;
  service: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
};

export const SEO_PAGES: SeoPage[] = [
  {
    slug: "architects-in-hyderabad",
    city: "Hyderabad",
    service: "Architecture",
    h1: "Architects in Hyderabad",
    intro:
      "Void Architects designs homes, workplaces and public buildings across Hyderabad — considered, light-filled and built to last. From Jubilee Hills villas to Gachibowli workspaces, we take a project from first sketch to final handover.",
    metaTitle: "Architects in Hyderabad | Void Architects",
    metaDescription:
      "Award-minded architecture studio in Hyderabad. Residential, commercial and interior projects across Jubilee Hills, Banjara Hills, Kokapet & Gachibowli. Talk to Void Architects.",
  },
  {
    slug: "interior-designers-in-hyderabad",
    city: "Hyderabad",
    service: "Interior Design",
    h1: "Interior Designers in Hyderabad",
    intro:
      "Interiors that carry the architecture inward. Void Architects details material, joinery and light for apartments, villas and workspaces across Hyderabad — warm, minimal and made to be lived in.",
    metaTitle: "Interior Designers in Hyderabad | Void Architects",
    metaDescription:
      "Interior design studio in Hyderabad crafting warm, minimal, light-filled spaces. Apartments, villas & offices detailed to the millimetre. Speak with Void Architects.",
  },
  {
    slug: "architects-in-madhapur",
    city: "Madhapur",
    service: "Architecture",
    h1: "Architects in Madhapur",
    intro:
      "Our Madhapur studio is home base for Void Architects. We design homes, offices and retail across HITEC City, Kondapur and Gachibowli — considered, site-responsive and built to last.",
    metaTitle: "Architects in Madhapur, Hyderabad | Void Architects",
    metaDescription:
      "Architecture studio based in Madhapur, Hyderabad. Homes, offices & retail across HITEC City, Kondapur and Gachibowli. Talk to Void Architects.",
  },
  {
    slug: "interior-designers-in-madhapur",
    city: "Madhapur",
    service: "Interior Design",
    h1: "Interior Designers in Madhapur",
    intro:
      "Warm, material-led interiors for apartments, villas and workspaces across Madhapur, HITEC City and Kondapur — detailed to the millimetre by the Void Architects studio.",
    metaTitle: "Interior Designers in Madhapur, Hyderabad | Void Architects",
    metaDescription:
      "Interior designers in Madhapur, Hyderabad crafting warm, minimal spaces for homes and offices across HITEC City & Kondapur. Speak with Void Architects.",
  },
  {
    slug: "architects-in-telangana",
    city: "Telangana",
    service: "Architecture & Interior Design",
    h1: "Architects & Interior Designers in Telangana",
    intro:
      "From our Hyderabad and Madhapur studios, Void Architects delivers architecture and interior projects across Telangana and India — residential, commercial and turnkey, start to finish.",
    metaTitle: "Architects in Telangana | Void Architects",
    metaDescription:
      "Architecture & interior design studio serving all of Telangana and India from Hyderabad & Madhapur. Residential, commercial and turnkey projects. Get a free estimate.",
  },
];

// Prefilled WhatsApp link — used by booking + estimate CTAs. No backend.
export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
