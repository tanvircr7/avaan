import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ReviewCard } from "@/components/reviews/review-card";
import { categories, slugToCategory } from "@/data/home";
import { getReviewsByCategory } from "@/data/reviews";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = slugToCategory(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category} Reviews`,
    description: `Browse ${category.toLowerCase()} reviews, top picks, and buying advice on avaan.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = slugToCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryReviews = getReviewsByCategory(category);

  return (
    <main className="min-h-screen bg-stone-50 text-zinc-900">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Category
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {category}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            Browse reviews, picks, and buying advice for {category.toLowerCase()}.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {categoryReviews.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-3">
            {categoryReviews.map((review) => (
              <ReviewCard
                key={review.slug}
                name={review.name}
                category={review.category}
                description={review.description}
                badge={review.badge ?? "Top Pick"}
                reviewHref={`/reviews/${review.slug}`}
                affiliateUrl={review.affiliateUrl}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-bold tracking-tight">No reviews yet</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              This category is set up. Add reviews in your data file and they’ll show here automatically.
            </p>
          </div>
        )}
      </div>

      <SiteFooter />
    </main>
  );
}