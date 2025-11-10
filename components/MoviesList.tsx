"use client";
import { handleBookMarkToggle } from "@/functions";
import BookmarkController from "./BookmarkController";
import MovieDetails from "./MovieDetails";
import { useEffect, useState } from "react";
export default function MoviesList({ filter }: { filter: string }) {
  const [movies, setMovies] = useState<TMovies>([]);
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
          bookmarksData.bookmarks?.map((bookmark: any) => bookmark.movieId) ||
          [];
        const recommended = moviesData
          .filter((mov: IMovies) => {
            if (filter === "all") {
              return !mov.isTrending;
            } else if (filter === "movie") {
              return mov.category === "Movie";
            } else if (filter === "tv") {
              return mov.category === "TV Series";
            } else if (filter === "bookmarked") {
              return bookmarkedIds.includes(mov._id);
            }
          })
          .map((mov: IMovies) => ({
            ...mov,
            isBookmarked: bookmarkedIds.includes(mov._id),
          }));

        setMovies(recommended);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    }

    fetchMovies();
  }, []);
  return (
    <div className="mt-[2.4rem] px-[1.6rem] pb-[6.1rem]">
      {filter === "all" && (
        <h1 className="text-[2rem] font-[300] tracking-[-0.31px]">
          Recommended for you
        </h1>
      )}
      {filter === "movie" && (
        <h1 className="text-[2rem] font-[300] tracking-[-0.31px]">Movies</h1>
      )}
      {filter === "tv" && (
        <h1 className="text-[2rem] font-[300] tracking-[-0.31px]">TV Series</h1>
      )}
      <div
        className="mt-[2.4rem] grid grid-cols-2 gap-[1.5rem]
        md:grid-cols-3 md:gap-[3rem] xl:grid-cols-4 xl:gap-[4rem]"
      >
        {movies.map((movie) => (
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
                onToggle={() => handleBookMarkToggle(movie, setMovies)}
              />
            </div>
            <MovieDetails movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
