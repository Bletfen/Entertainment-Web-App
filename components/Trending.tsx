"use client";
import { EmblaCarousel } from "./EmblaCarousel";
import { useEffect, useState } from "react";

export default function Trending() {
  const [trending, setTrending] = useState<TMovies>([]);
  useEffect(() => {
    const fetchTrending = async () => {
      const res = await fetch("/api/movies");
      const data = await res.json();
      console.log("Fetched data:", data);
      const trendingMovies = data.filter((movie: IMovies) => movie.isTrending);
      console.log("Trending movies:", trendingMovies);
      setTrending(trendingMovies);
    };
    fetchTrending();
  }, []);
  return (
    <div
      className="mt-[2.4rem] flex flex-col gap-[1.6rem]
        pl-[1.6rem]"
    >
      <h1
        className="text-[2rem] font-[300] tracking-[-0.31px]
        text-white"
      >
        Trending
      </h1>
      <EmblaCarousel slides={trending} />
    </div>
  );
}
