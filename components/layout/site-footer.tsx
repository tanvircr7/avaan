import Link from "next/link";
import { Container } from "@/components/layout/container";
import { categories, categoryToSlug } from "@/data/home";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-zinc-200 bg-white">
      <Container className="grid gap-10 py-10 md:grid-cols-3">
        <div>
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-emerald-700"
          >
            avaan
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
            Fast, simple gadget reviews and buying guides for people who want the
            right gear without the fluff.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Categories
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/categories/${categoryToSlug(category)}`}
                className="text-sm text-zinc-700 transition hover:text-emerald-700"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
            About
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-700">
            <Link href="/" className="transition hover:text-emerald-700">
              Home
            </Link>
            <Link href="/search" className="transition hover:text-emerald-700">
              Search
            </Link>
            <a href="#" className="transition hover:text-emerald-700">
              Affiliate Disclosure
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-zinc-200">
        <Container className="flex flex-col gap-2 py-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} avaan. All rights reserved.</p>
          <p>Built for speed, clarity, and trust.</p>
        </Container>
      </div>
    </footer>
  );
}