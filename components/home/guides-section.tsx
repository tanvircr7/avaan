import Link from "next/link";
import { Container } from "@/components/layout/container";
import { latestGuides } from "@/data/home";
import { SectionHeading } from "@/components/ui/section-heading";

export function GuidesSection() {
  return (
    <section className="py-6">
      <Container>
        <SectionHeading
          title="Latest Guides"
          action={
            <Link
              href="#"
              className="text-sm font-medium text-emerald-700 hover:underline"
            >
              View all
            </Link>
          }
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {latestGuides.map((guide) => (
            <Link href={guide.href}>
              <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm">
                <div className="h-44 bg-gradient-to-br from-zinc-100 to-zinc-200" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold leading-6 tracking-tight transition group-hover:text-emerald-700">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {guide.description}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}