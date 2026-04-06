"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type SearchInputProps = {
  className?: string;
};

export function SearchInput({ className = "" }: SearchInputProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search gadgets, reviews, guides..."
        className="w-full rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-emerald-600"
      />
    </form>
  );
}