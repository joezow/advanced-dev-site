export type PortfolioProject = {
  slug: string;
  title: string;
  region: string;
  heroImage: string;
  heroAlt: string;
  narrative: string;
  images: { src: string; alt: string }[];
  /** Optional explicit block pattern for the gallery below the narrative.
   * Each entry consumes 1 ("full") or 2 ("pair") images from `images.slice(1)`, in order.
   * Falls back to the default alternating rhythm when omitted. */
  galleryLayout?: ("full" | "pair")[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "split-level-residence",
    title: "Upper North Shore Residence",
    region: "Upper North Shore, NSW",
    heroImage: "/hero2.jpg",
    heroAlt: "Upper North Shore Residence, front elevation",
    narrative:
      "A refined split-level custom home characterised by expansive glazing, detailed joinery and a high level of finish.\n\nThe complex structure and level changes required careful coordination throughout construction. Working directly with the owner and collaboratively with the architect and consultants, we focused on resolving the detail and delivering the home with precision.",
    images: [
      { src: "/hero2.jpg", alt: "Upper North Shore Residence — front elevation" },
      { src: "/hero.jpg", alt: "Upper North Shore Residence — exterior" },
      { src: "/portfolio/split-level-residence/02.jpg", alt: "Upper North Shore Residence — pool and glazing" },
      { src: "/portfolio/split-level-residence/01.jpg", alt: "Upper North Shore Residence — living room" },
      { src: "/portfolio/split-level-residence/03.jpg", alt: "Upper North Shore Residence — entry and driveway" },
      { src: "/portfolio/split-level-residence/04.jpg", alt: "Upper North Shore Residence — garden path" },
    ],
  },
  {
    slug: "contemporary-residence",
    title: "North Shore Residence",
    region: "Upper North Shore, NSW",
    heroImage: "/portfolio/contemporary-residence/01.jpg",
    heroAlt: "North Shore Residence, Upper North Shore",
    narrative:
      "A custom home defined by a restrained palette and a consistent level of detail throughout.\n\nTimber flooring, custom joinery and a steel-and-timber staircase bring warmth and character to the interiors, with careful attention given to the finishes and execution throughout the home.",
    images: [
      { src: "/portfolio/contemporary-residence/01.jpg", alt: "North Shore Residence — exterior" },
      { src: "/portfolio/contemporary-residence/02.jpg", alt: "North Shore Residence — kitchen" },
      { src: "/portfolio/contemporary-residence/03.jpg", alt: "North Shore Residence — bathroom" },
      { src: "/portfolio/contemporary-residence/04.jpg", alt: "North Shore Residence — rear exterior" },
      { src: "/portfolio/contemporary-residence/05.jpg", alt: "North Shore Residence — front exterior" },
    ],
  },
  {
    slug: "dual-residence",
    title: "Dual Residence",
    region: "Sydney, NSW",
    heroImage: "/project2.jpg",
    heroAlt: "Dual Residence, Sydney — street elevation",
    narrative:
      "Two attached residences completed with close attention to detail throughout.\n\nThe floating staircase forms the centrepiece of the interiors, complemented by carefully finished kitchens, bathrooms and living spaces across both homes.",
    images: [
      { src: "/project2.jpg", alt: "Dual Residence — street elevation" },
      { src: "/portfolio/dual-residence/01.jpg", alt: "Dual Residence — floating staircase" },
      { src: "/portfolio/dual-residence/02.jpg", alt: "Dual Residence — kitchen" },
      { src: "/portfolio/dual-residence/03.jpg", alt: "Dual Residence — bedroom" },
      { src: "/portfolio/dual-residence/04.jpg", alt: "Dual Residence — bathroom" },
      { src: "/portfolio/dual-residence/05.jpg", alt: "Dual Residence — balcony" },
      { src: "/portfolio/dual-residence/06.jpg", alt: "Dual Residence — rear courtyard at dusk" },
    ],
  },
  {
    slug: "central-coast-residences",
    title: "Central Coast Residences",
    region: "Central Coast, NSW",
    heroImage: "/portfolio/central-coast-residences/01.webp",
    heroAlt: "Central Coast Residences",
    narrative:
      "A pair of residences defined by warm materials and a refined level of finish.\n\nSolid timber floors run throughout, complemented by detailed joinery and carefully finished kitchens, bathrooms and interiors.",
    images: [
      { src: "/portfolio/central-coast-residences/01.webp", alt: "Central Coast Residences — exterior at dusk" },
      { src: "/portfolio/central-coast-residences/02.webp", alt: "Central Coast Residences — kitchen" },
      { src: "/portfolio/central-coast-residences/03.webp", alt: "Central Coast Residences — bathroom" },
      { src: "/portfolio/central-coast-residences/04.webp", alt: "Central Coast Residences — bedroom" },
      { src: "/portfolio/central-coast-residences/05.webp", alt: "Central Coast Residences — living space" },
      { src: "/portfolio/central-coast-residences/06.webp", alt: "Central Coast Residences — second dwelling, front elevation at dusk" },
    ],
    galleryLayout: ["pair", "pair", "full"],
  },
];
