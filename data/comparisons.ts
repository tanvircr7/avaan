export type ComparisonItem = {
  name: string;
  category: string;
  description: string;
  reviewHref: string;
  affiliateUrl: string;
  badge: string;
};

export type ComparisonPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  items: ComparisonItem[];
};

export const comparisons: ComparisonPage[] = [
  {
    slug: "best-wifi-7-routers",
    title: "Best WiFi 7 Routers",
    description:
      "Top WiFi 7 router picks for gamers, enthusiasts, and multi-gig households.",
    intro:
      "These are the WiFi 7 routers we’d look at first if we wanted strong wireless performance, good wired connectivity, and room to grow into faster home networking.",
    items: [
      {
        name: "ASUS ROG Rapture GT-BE98 PRO",
        category: "Routers",
        description:
          "Flagship-level performance and features for buyers who want the most aggressive setup.",
        reviewHref: "/reviews/asus-rog-rapture-gt-be98-pro",
        affiliateUrl: "https://example.com/asus-rog-rapture-gt-be98-pro",
        badge: "Best Premium",
      },
      {
        name: "ASUS RT-BE88U",
        category: "Routers",
        description:
          "A smarter high-end pick for buyers who want strong performance without going all-in on the most extreme model.",
        reviewHref: "/reviews/asus-rt-be88u",
        affiliateUrl: "https://example.com/asus-rt-be88u",
        badge: "Best Value High-End",
      },
      {
        name: "TP-Link Archer BE800",
        category: "Routers",
        description:
          "A premium WiFi 7 option with strong connectivity and a bold design.",
        reviewHref: "/reviews/tp-link-archer-be800",
        affiliateUrl: "https://example.com/tp-link-archer-be800",
        badge: "Best Design",
      },
    ],
  },
];

export function getComparisonBySlug(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}