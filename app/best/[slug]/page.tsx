import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ReviewCard } from "@/components/reviews/review-card";
import { comparisons, getComparisonBySlug } from "@/data/comparisons";

type ComparisonPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return comparisons.map((comparison) => ({
    slug: comparison.slug,
  }));
}

export async function generateMetadata({
  params,
}: ComparisonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: comparison.title,
    description: comparison.description,
  };
}

export default async function ComparisonPage({ params }: ComparisonPageProps) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 text-zinc-900">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Best Picks
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {comparison.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
          {comparison.description}
        </p>

        <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6">
          <p className="text-sm leading-7 text-zinc-700">{comparison.intro}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {comparison.items.map((item) => (
            <ReviewCard
              key={item.name}
              name={item.name}
              category={item.category}
              description={item.description}
              badge={item.badge}
              reviewHref={item.reviewHref}
              affiliateUrl={item.affiliateUrl}
            />
          ))}
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}