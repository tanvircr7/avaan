export type Review = {
  slug: string;
  category: string;
  title: string;
  name: string;
  tagline: string;
  excerpt: string;
  description: string;
  affiliateUrl: string;
  specs: string[];
  pros: string[];
  cons: string[];
  whoShouldBuyIt: string;
  badge?: string;
};

export const reviews: Review[] = [
  {
    slug: "asus-rog-rapture-gt-be98-pro",
    category: "Routers",
    title: "ASUS ROG Rapture GT-BE98 PRO Review",
    name: "ASUS ROG Rapture GT-BE98 PRO",
    tagline:
      "A flagship WiFi 7 gaming router for buyers who want multi-gig speeds, advanced gaming features, and dense network controls.",
    excerpt:
      "Quad-band WiFi 7 gaming router with 320MHz channels, dual 10G ports, triple-level game acceleration, subscription-free security, AiMesh, and VPN features.",
    description:
      "Quad-band WiFi 7 router with 320MHz support, dual 10G ports, advanced gaming acceleration, subscription-free security, AiMesh, and VPN features.",
    affiliateUrl: "https://example.com/asus-rog-rapture-gt-be98-pro",
    badge: "Premium Pick",
    specs: [
      "Quad-band WiFi 7",
      "320MHz channel support",
      "Dual 10G ports",
      "Triple-level game acceleration",
      "Subscription-free security",
      "AiMesh and VPN support",
    ],
    pros: [
      "Very high-end connectivity",
      "Strong gaming-focused feature set",
      "Excellent port selection",
      "Rich software and security features",
    ],
    cons: [
      "Expensive",
      "Overkill for smaller homes",
      "Large physical footprint",
    ],
    whoShouldBuyIt:
      "Buy it if you want a flagship router with multi-gig ports, future-facing WiFi support, and extra gaming-oriented software controls. Skip it if you want the best value or do not need premium network hardware.",
  },
  {
    slug: "tp-link-archer-be800",
    category: "Routers",
    title: "TP-Link Archer BE800 Review",
    name: "TP-Link Archer BE800",
    tagline:
      "A premium WiFi 7 router with strong multi-gig connectivity and a flashy design.",
    excerpt:
      "High-speed WiFi 7 router with strong multi-gig connectivity and premium hardware.",
    description:
      "High-speed WiFi 7 router with strong multi-gig connectivity.",
    affiliateUrl: "https://example.com/tp-link-archer-be800",
    badge: "Best Design",
    specs: [
      "WiFi 7 support",
      "Multi-gig ports",
      "Premium hardware",
      "High throughput design",
    ],
    pros: [
      "Fast wireless performance",
      "Good multi-gig support",
      "Striking design",
    ],
    cons: ["Premium pricing", "Not for budget buyers"],
    whoShouldBuyIt:
      "Buy it if you want premium WiFi 7 speeds and like high-end networking gear with a bold design.",
  },
  {
    slug: "netgear-nighthawk-rs700s",
    category: "Routers",
    title: "Netgear Nighthawk RS700S Review",
    name: "Netgear Nighthawk RS700S",
    tagline:
      "A high-end WiFi 7 router built for speed-focused buyers who want simple setup and strong hardware.",
    excerpt:
      "Fast WiFi 7 performance with premium hardware and clean setup.",
    description:
      "Fast WiFi 7 performance with premium hardware and a streamlined setup experience.",
    affiliateUrl: "https://example.com/netgear-nighthawk-rs700s",
    badge: "Top Speed",
    specs: [
      "WiFi 7 support",
      "High-end internals",
      "Multi-gig connectivity",
      "Performance-first design",
    ],
    pros: [
      "Very fast throughput",
      "Clean setup experience",
      "Strong hardware",
    ],
    cons: ["Expensive", "Limited value for casual users"],
    whoShouldBuyIt:
      "Buy it if you want top-tier speeds and are comfortable paying more for premium network hardware.",
  },
  {
    slug: "asus-rt-be88u",
    category: "Routers",
    title: "ASUS RT-BE88U Review",
    name: "ASUS RT-BE88U",
    tagline:
      "A high-performance WiFi 7 router for buyers who want strong multi-gig networking without going all the way to ASUS's most extreme flagship models.",
    excerpt:
      "WiFi 7 router with multi-gig connectivity, strong wired networking options, and a more practical high-end feature set for demanding home users.",
    description:
      "A premium WiFi 7 router with fast wireless performance, useful multi-gig ports, and a feature set that should appeal to gamers, enthusiasts, and heavy home network users.",
    affiliateUrl: "https://example.com/asus-rt-be88u",
    badge: "Smart Buy",
    specs: [
      "WiFi 7 support",
      "Multi-gig Ethernet",
      "High-speed wireless performance",
      "Advanced ASUS networking features",
      "VPN and security tools",
    ],
    pros: [
      "Strong balance of speed and features",
      "Useful multi-gig wired connectivity",
      "Good fit for advanced home users",
      "Less over-the-top than ultra-flagship models",
    ],
    cons: [
      "Still expensive",
      "Likely more than casual users need",
    ],
    whoShouldBuyIt:
      "Buy it if you want a serious WiFi 7 upgrade with strong wired and wireless performance but do not need the biggest, most expensive flagship router. Skip it if you want a budget router or only have basic networking needs.",
  },
];

export function getReviewBySlug(slug: string) {
  return reviews.find((review) => review.slug === slug);
}

export function getReviewsByCategory(category: string) {
  return reviews.filter((review) => review.category === category);
}