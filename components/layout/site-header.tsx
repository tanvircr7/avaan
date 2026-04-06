"use client";

import Link from "next/link";
import { useState } from "react";
import { SearchInput } from "@/components/layout/search-input";
import { categories, categoryToSlug } from "@/data/home";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-emerald-700"
        >
          avaan
        </Link>

        <nav className="hidden gap-5 text-sm font-medium text-zinc-700 lg:flex">
          {categories.slice(0, 6).map((item) => (
            <Link
              key={item}
              href={`/categories/${categoryToSlug(item)}`}
              className="transition hover:text-emerald-700"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden w-64 md:block">
          <SearchInput />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-300 px-4 text-sm font-medium text-zinc-700 lg:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className="border-t border-zinc-200 px-6 py-3 md:hidden">
        <SearchInput />
      </div>

      {isOpen ? (
        <div className="border-t border-zinc-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {categories.map((item) => (
              <Link
                key={item}
                href={`/categories/${categoryToSlug(item)}`}
                className="border-b border-zinc-100 py-3 text-sm font-medium text-zinc-700 last:border-b-0 hover:text-emerald-700"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}