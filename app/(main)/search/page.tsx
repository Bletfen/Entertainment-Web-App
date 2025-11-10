"use client";
import { handleBookMarkToggle } from "@/functions";
import BookmarkController from "@/components/BookmarkController";
import MovieDetails from "@/components/MovieDetails";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const movieTitle = searchParams.get("query") || "";

  const searchQuery = movieTitle.toLowerCase();
  const [searchedMovies, setSearchedMovies] = useState<TMovies>([]);

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

        const foundMovies = moviesData
          .filter((item: IMovies) =>
            item.title.toLowerCase().includes(searchQuery as string)
          )
          .map((mov: IMovies) => ({
            ...mov,
            isBookmarked: bookmarkedIds.includes(mov._id), // movieId ან _id
          }));

        setSearchedMovies(foundMovies);
      } catch (err) {
        console.error("Failed to fetch trending movies:", err);
      }
    }

    fetchMovies();
  }, [searchParams]);

  return (
    <div className="mt-[2.4rem] px-[1.6rem]">
      <h1
        className="text-[2rem] font-[300] tracking-[-0.31px] mb-[2.4rem]
        md:text-[3.2rem] md:tracking-[-0.5px]"
      >
        Found {searchedMovies.length}{" "}
        {searchedMovies.length > 1 ? <span>results</span> : <span>result</span>}{" "}
        for `{movieTitle}`
      </h1>
      <div
        className="mt-[2.4rem] grid grid-cols-2 gap-[1.5rem]
              md:grid-cols-3 md:gap-[3rem] xl:grid-cols-4 xl:gap-[4rem]"
      >
        {searchedMovies.map((movie: IMovies) => (
          <div key={movie.title}>
            <div className="relative mb-[0.8rem]">
              <picture>
                <source
                  media="(min-width:1024px)"
                  srcSet={movie.thumbnail.regular.large}
                />
                <source
                  media="(min-width:768px)"
                  srcSet={movie.thumbnail.regular.medium}
                />
                <img
                  src={movie.thumbnail.regular.small}
                  alt={movie.title}
                  className="rounded-[0.8rem]"
                />
              </picture>
              <BookmarkController
                bookmarked={movie.isBookmarked}
                onToggle={() =>
                  handleBookMarkToggle(movie as IMovies, setSearchedMovies)
                }
              />
            </div>
            <MovieDetails movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
