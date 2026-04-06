import { Container } from "@/components/layout/container";

export function DisclosureSection() {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Affiliate disclosure
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600">
            avaan may earn a commission from some links. That does not change our
            editorial goal: make the site useful, fast, and easy to trust.
          </p>
        </div>
      </Container>
    </section>
  );
}