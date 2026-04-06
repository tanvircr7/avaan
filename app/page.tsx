import type { Metadata } from "next";
import { CategoryStrip } from "@/components/home/category-strip";
import { DisclosureSection } from "@/components/home/disclosure-section";
import { GuidesSection } from "@/components/home/guides-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProductsSection } from "@/components/home/products-section";
import { TopPicksSection } from "@/components/home/top-picks-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Tech Reviews & Buying Guides",
  description:
    "Fast, simple gadget reviews and buying guides for routers, monitors, keyboards, storage, and more.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-zinc-900">
      <SiteHeader />
      <CategoryStrip />
      <HeroSection />
      <TopPicksSection />
      <ProductsSection />
      <GuidesSection />
      <DisclosureSection />
      <SiteFooter />
    </main>
  );
}