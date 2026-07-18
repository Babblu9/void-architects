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
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "interior",
    index: "B",
    title: "Interiors",
    blurb:
      "Interiors that carry the architecture inward — material, joinery and light detailed to the millimetre.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "design",
    index: "C",
    title: "Design",
    blurb:
      "Master planning, landscape and bespoke furniture — the full arc of a place, considered as one.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Architecture" | "Interior" | "Design";
  location: string;
  year: string;
  image: string;
  span?: boolean; // wide tile in the grid
};

// ponytail: Unsplash placeholders. Replace `image` URLs with /public paths
// (e.g. "/projects/courtyard-house.jpg") when real photos arrive.
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PROJECTS: Project[] = [
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    category: "Architecture",
    location: "Jubilee Hills, Hyderabad",
    year: "2024",
    image: u("1600585154340-be6161a56a0c", 1600),
    span: true,
  },
  {
    slug: "the-quiet-apartment",
    title: "The Quiet Apartment",
    category: "Interior",
    location: "Banjara Hills, Hyderabad",
    year: "2024",
    image: u("1618221195710-dd6b41faaea6"),
  },
  {
    slug: "stone-pavilion",
    title: "Stone Pavilion",
    category: "Architecture",
    location: "Warangal",
    year: "2023",
    image: u("1512917774080-9991f1c4c750"),
  },
  {
    slug: "warm-minimal-villa",
    title: "Warm Minimal Villa",
    category: "Interior",
    location: "Kokapet, Hyderabad",
    year: "2023",
    image: u("1600607687939-ce8a6c25118c"),
  },
  {
    slug: "campus-landscape",
    title: "Campus Landscape",
    category: "Design",
    location: "Warangal",
    year: "2022",
    image: u("1600566753086-00f18fb6b3ea", 1600),
    span: true,
  },
  {
    slug: "concrete-studio",
    title: "Concrete Studio",
    category: "Architecture",
    location: "Gachibowli, Hyderabad",
    year: "2022",
    image: u("1494203484021-3c454daf695d"),
  },
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
