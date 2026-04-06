import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ReviewCard } from "@/components/reviews/review-card";
import { featuredProducts } from "@/data/home";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProductsSection() {
  return (
    <section className="py-6">
      <Container>
        <SectionHeading
          title="Featured Products"
          action={
            <Link
              href="#"
              className="text-sm font-medium text-emerald-700 hover:underline"
            >
              Browse all
            </Link>
          }
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ReviewCard
              key={product.name}
              name={product.name}
              category={product.category}
              description={product.description}
              badge={product.badge}
              reviewHref={product.reviewHref}
              affiliateUrl={product.affiliateUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}