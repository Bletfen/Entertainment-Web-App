"use client";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import MovieDetails from "./MovieDetails";
import BookmarkController from "./BookmarkController";
import { handleBookMarkToggle } from "@/functions";
import PlayDisplay from "./PlayDisplay";

interface ICarouselProps {
  slides: TMovies;
  setMovies: React.Dispatch<React.SetStateAction<TMovies>>;
}

export const EmblaCarousel: React.FC<ICarouselProps> = ({
  slides,
  setMovies,
}) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is Tailwind's md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const [emblaRef] = useEmblaCarousel({
    align: "center",
    loop: false,
    containScroll: "trimSnaps",
    skipSnaps: false,
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-[1.6rem] md:gap-[4rem]">
        {slides.map((movie: IMovies, index: number) => (
          <div
            className="flex-shrink-0 w-[24rem] md:w-[47rem] pt-[7rem]
            pl-[1.6rem] pr-[0.8rem] pb-[1.6rem]
            bg-center bg-cover bg-no-repeat rounded-[0.8rem] relative group
            md:pt-[13rem] md:px-[2.4rem]
            "
            key={index}
            style={{
              backgroundImage: `url(${
                isMobile
                  ? movie.thumbnail.trending?.small
                  : movie.thumbnail.trending?.large
              })`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/15 z-0"></div>
            <BookmarkController
              bookmarked={movie.isBookmarked}
              onToggle={() => handleBookMarkToggle(movie as IMovies, setMovies)}
            />
            <div className="relative z-10">
              <MovieDetails movie={movie} />
            </div>
            <div
              className="absolute inset-0 flex items-center
                justify-center opacity-0 group-hover:opacity-100
                pointer-events-none
                bg-black/25 transition-all duration-300"
            >
              <div className="pointer-events-auto cursor-pointer">
                <PlayDisplay />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
