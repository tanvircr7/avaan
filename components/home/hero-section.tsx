import Link from "next/link";
import { Container } from "@/components/layout/container";
import { featuredReview, valueProps } from "@/data/home";

export function HeroSection() {
  return (
    <Container className="grid gap-6 py-8 lg:grid-cols-[1.5fr_0.9fr]">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
        <div className="flex min-h-[420px] items-end p-8 sm:p-10">
          <div className="max-w-2xl text-white">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
              {featuredReview.eyebrow}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {featuredReview.title}
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
              {featuredReview.description}
            </p>
            <div className="mt-6">
              <Link
                href={featuredReview.href}
                className="inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                {featuredReview.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <aside className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Why avaan
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight">
          Fast, simple, useful.
        </h2>
        <div className="mt-5 space-y-3 text-sm leading-6 text-zinc-600">
          {valueProps.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-100 bg-zinc-50 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </aside>
    </Container>
  );
}