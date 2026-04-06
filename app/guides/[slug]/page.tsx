import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getGuideBySlug, guides } from "@/data/guides";

type GuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) return notFound();

  return (
    <main className="min-h-screen bg-stone-50 text-zinc-900">
      <SiteHeader />

      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {guide.title}
        </h1>

        <p className="mt-4 text-lg text-zinc-600">
          {guide.description}
        </p>

        <div className="mt-8 space-y-4 text-sm leading-7 text-zinc-700">
          {guide.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}