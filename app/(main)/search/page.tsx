"use client";
import { handleBookMarkToggle } from "@/functions";
import data from "../../../data.json";
import BookmarkController from "@/components/BookmarkController";
import MovieDetails from "@/components/MovieDetails";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
export default function SearchPage() {
  const searchParams = useSearchParams();
  const movieTitle = searchParams.get("query") || "";

  const searchQuery = movieTitle.toLowerCase();

  const filteredData = data.filter((item: IMovies) =>
    item.title.toLowerCase().includes(searchQuery as string)
  );
  const [bookmark, setBookmark] = useState<TMovies>(filteredData);

  return (
    <div className="mt-[2.4rem] px-[1.6rem]">
      <h1 className="text-[2rem] font-[300] tracking-[-0.31px] mb-[2.4rem]">
        Found {filteredData.length}{" "}
        {filteredData.length > 1 ? <span>results</span> : <span>result</span>}{" "}
        for `{movieTitle}`
      </h1>
      <div
        className="mt-[2.4rem] grid grid-cols-2 gap-[1.5rem]
              md:grid-cols-3 md:gap-[3rem] xl:grid-cols-4 xl:gap-[4rem]"
      >
        {filteredData.map((movie: IMovies) => (
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
                isBookmarked={movie.isBookmarked}
                onToggle={() => handleBookMarkToggle(movie.title, setBookmark)}
              />
            </div>
            <MovieDetails movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
