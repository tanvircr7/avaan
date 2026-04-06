import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-stone-50 text-zinc-900">
      <SiteHeader />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600">
          The page you’re looking for doesn’t exist or may have moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Go Home
          </Link>

          <Link
            href="/search"
            className="inline-flex rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
          >
            Search Reviews
          </Link>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}