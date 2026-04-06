import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getReviewBySlug, reviews } from "@/data/reviews";

type ReviewPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.slug,
  }));
}

export async function generateMetadata({
  params,
}: ReviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = getReviewBySlug(slug);

  if (!review) {
    return {
      title: "Review Not Found",
    };
  }

  return {
    title: review.title,
    description: review.excerpt,
  };
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;
  const review = getReviewBySlug(slug);

  if (!review) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 text-zinc-900">
      <SiteHeader />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {review.category} Review
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {review.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-zinc-600">
          {review.tagline}
        </p>

        <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="h-64 rounded-2xl bg-zinc-100" />
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={review.affiliateUrl}
              className="inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              View Deal
            </a>
            <Link
              href="/"
              className="inline-flex rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight">Quick verdict</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              {review.description}
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-bold tracking-tight">Key specs</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
              {review.specs.map((spec) => (
                <li key={spec}>• {spec}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-bold tracking-tight">Pros</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
              {review.pros.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-bold tracking-tight">Cons</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
              {review.cons.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6">
          <h2 className="text-2xl font-bold tracking-tight">Who should buy it</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            {review.whoShouldBuyIt}
          </p>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}