"use client";
import { EmblaCarousel } from "./EmblaCarousel";
import { useEffect, useState } from "react";

export default function Trending() {
  const [trending, setTrending] = useState<TMovies>([]);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const [moviesRes, bookmarksRes] = await Promise.all([
          fetch("/api/movies"),
          fetch("/api/bookmark"),
        ]);

        const moviesData = await moviesRes.json();
        const bookmarksData = await bookmarksRes.json();

        const bookmarkedIds =
          bookmarksData.bookmarks?.map((b: any) => b.movieId) || [];

        const trendingMovies = moviesData
          .filter((mov: IMovies) => mov.isTrending)
          .map((mov: IMovies) => ({
            ...mov,
            isBookmarked: bookmarkedIds.includes(mov._id), // movieId ან _id
          }));

        setTrending(trendingMovies);
      } catch (err) {
        console.error("Failed to fetch trending movies:", err);
      }
    }

    fetchMovies();
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
      <EmblaCarousel slides={trending} setMovies={setTrending} />
    </div>
  );
}
