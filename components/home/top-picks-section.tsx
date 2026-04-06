import Link from "next/link";
import { Container } from "@/components/layout/container";
import { topPicks } from "@/data/home";
import { SectionHeading } from "@/components/ui/section-heading";

export function TopPicksSection() {
  return (
    <section className="py-6">
      <Container>
        <SectionHeading title="Top Picks" />

        <div className="grid gap-6 lg:grid-cols-3">
          {topPicks.map((pick) => (
            <article
              key={pick.title}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm"
            >
              <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200" />
              <h3 className="text-xl font-semibold leading-7 tracking-tight transition group-hover:text-emerald-700">
                {pick.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {pick.description}
              </p>
              <div className="mt-6">
                <Link
                  href={pick.href}
                  className="inline-flex rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
                >
                  Explore
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}