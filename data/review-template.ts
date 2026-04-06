// export type Review = {
//   slug: string;
//   category: string;
//   title: string;
//   name: string;
//   tagline: string;
//   excerpt: string;
//   description: string;
//   affiliateUrl: string;
//   specs: string[];
//   pros: string[];
//   cons: string[];
//   whoShouldBuyIt: string;
//   badge?: string;
// };

// HOW TO ADD A NEW REVIEW:
// 1) Copy the object from data/review-template.ts
// 2) Paste it into the reviews array below
// 3) Update slug, title, category, affiliateUrl, specs, pros, and cons
// 4) Deploy
// The homepage, category pages, search, and review route will update automatically.



import type { Review } from "@/data/reviews";

export const reviewTemplate: Review = {
  slug: "replace-with-slug",
  category: "Routers",
  title: "Product Name Review",
  name: "Product Name",
  tagline:
    "One-sentence summary of who this product is for and why it matters.",
  excerpt:
    "Short summary for cards, search, and SEO. Keep it tight and specific.",
  description:
    "A slightly fuller quick-verdict description for homepage cards and review pages.",
  affiliateUrl: "https://example.com/your-affiliate-link",
  badge: "Top Pick",
  specs: [
    "Spec one",
    "Spec two",
    "Spec three",
  ],
  pros: [
    "First pro",
    "Second pro",
    "Third pro",
  ],
  cons: [
    "First con",
    "Second con",
  ],
  whoShouldBuyIt:
    "Explain who should buy it, and who should skip it.",
};