import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ReviewCard } from "@/components/reviews/review-card";
import { reviews } from "@/data/reviews";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const params = await searchParams;
  const query = params.q?.trim();

  return {
    title: query ? `Search: ${query}` : "Search",
    description: query
      ? `Search results for ${query} on avaan.`
      : "Search gadget reviews and buying guides on avaan.",
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";

  const normalizedQuery = query.toLowerCase();

  const matchedReviews = query
    ? reviews.filter((review) => {
        const haystack = [
          review.name,
          review.title,
          review.category,
          review.tagline,
          review.excerpt,
          review.description,
          ...review.specs,
          ...review.pros,
          ...review.cons,
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      })
    : [];

  return (
    <main className="min-h-screen bg-stone-50 text-zinc-900">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Search
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {query ? `Results for "${query}"` : "Search"}
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
          {query
            ? `${matchedReviews.length} result${matchedReviews.length === 1 ? "" : "s"} found.`
            : "Use the search bar to find reviews and buying guides."}
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
          >
            Back to Home
          </Link>
        </div>

        {query ? (
          matchedReviews.length > 0 ? (
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {matchedReviews.map((review) => (
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
            <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6">
              <h2 className="text-xl font-bold tracking-tight">No matches</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Try searching by brand, product type, or feature.
              </p>
            </div>
          )
        ) : null}
      </div>

      <SiteFooter />
    </main>
  );
}