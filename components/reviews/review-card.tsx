import Link from "next/link";

type ReviewCardProps = {
  name: string;
  category: string;
  description: string;
  badge: string;
  reviewHref: string;
  affiliateUrl: string;
};

export function ReviewCard({
  name,
  category,
  description,
  badge,
  reviewHref,
  affiliateUrl,
}: ReviewCardProps) {
  return (
    <article className="group rounded-3xl border border-zinc-200 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          {badge}
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
          {category}
        </span>
      </div>

      <div className="mb-5 h-40 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200" />

      <h3 className="text-xl font-semibold leading-7 tracking-tight transition group-hover:text-emerald-700">
        {name}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          View Deal
        </a>
        <Link
          href={reviewHref}
          className="inline-flex rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
        >
          Read Review
        </Link>
      </div>
    </article>
  );
}