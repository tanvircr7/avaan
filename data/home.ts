import { reviews } from "@/data/reviews";

export const categories = [
  "Routers",
  "Laptops",
  "Monitors",
  "Keyboards",
  "Mice",
  "Audio",
  "Storage",
  "Smart Home",
];

export const featuredReview = {
  eyebrow: "Featured Review",
  title: reviews[0].name,
  description: reviews[0].excerpt,
  ctaLabel: "Read the Review",
  href: `/reviews/${reviews[0].slug}`,
};

export const valueProps = [
  "Fast, clean reviews.",
  "Simple comparisons.",
  "Specs that matter.",
  "Affiliate links, clearly disclosed.",
];

export const featuredProducts = reviews.map((review) => ({
  name: review.name,
  category: review.category,
  description: review.description,
  badge: review.badge ?? "Top Pick",
  reviewHref: `/reviews/${review.slug}`,
  affiliateUrl: review.affiliateUrl,
}));

export const topPicks = [
  {
    title: "Best WiFi 7 Routers",
    description: "Fast picks for gamers, power users, and multi-gig homes.",
    href: "/categories/routers",
  },
  {
    title: "Best Gaming Monitors",
    description: "High refresh, fast response, and clean panel choices.",
    href: "/categories/monitors",
  },
  {
    title: "Best Mechanical Keyboards",
    description: "Compact, full-size, wired, and wireless options.",
    href: "/categories/keyboards",
  },
];

export const latestGuides = [
  {
    title: "How to Choose a WiFi 7 Router",
    description: "What actually matters: bands, ports, range, and latency.",
    href: "/guides/how-to-choose-wifi-7-router",
  },
  {
    title: "How to Choose a Gaming Monitor",
    description: "Refresh rate, panel type, response time, and HDR basics.",
    href: "/guides/how-to-choose-gaming-monitor",
  },
];

export function categoryToSlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function slugToCategory(slug: string) {
  return categories.find((category) => categoryToSlug(category) === slug);
}