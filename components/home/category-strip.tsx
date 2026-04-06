import Link from "next/link";
import { Container } from "@/components/layout/container";
import { categories, categoryToSlug } from "@/data/home";

export function CategoryStrip() {
  return (
    <section className="border-b border-zinc-200 bg-stone-50">
      <Container className="flex gap-3 overflow-x-auto py-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/categories/${categoryToSlug(category)}`}
            className="shrink-0 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-emerald-600 hover:text-emerald-700"
          >
            {category}
          </Link>
        ))}
      </Container>
    </section>
  );
}