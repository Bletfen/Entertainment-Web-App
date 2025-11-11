"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.trim()) {
      e.preventDefault();
      router.push(`/search?query=${encodeURIComponent(search)}`);
      setSearch("");
    }
  };
  return (
    <div
      className="mt-[2.4rem] px-[1.6rem] flex items-center gap-[1.6rem]
      md:gap-[2.4rem]"
    >
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
          fill="#FFF"
        />
      </svg>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 outline-none my-[0.2rem] text-[1.6rem] font-[300] 
        text-white md:text-[2.4rem]"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}
