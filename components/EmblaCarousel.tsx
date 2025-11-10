"use client";
import useEmblaCarousel from "embla-carousel-react";
import MovieDetails from "./MovieDetails";
import BookmarkController from "./BookmarkController";
import { handleBookMarkToggle } from "@/functions";

interface ICarouselProps {
  slides: TMovies;
  setMovies: React.Dispatch<React.SetStateAction<TMovies>>;
}

export const EmblaCarousel: React.FC<ICarouselProps> = ({
  slides,
  setMovies,
}) => {
  const [emblaRef] = useEmblaCarousel({
    align: "center",
    loop: false,
    containScroll: "trimSnaps",
    skipSnaps: false,
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-[1.6rem]">
        {slides.map((movie: IMovies, index: number) => (
          <div
            className="flex-shrink-0 w-[24rem] md:w-[40%] 
            lg:w-[30%] pt-[7rem] pl-[1.6rem] pr-[0.8rem] pb-[1.6rem]
            bg-center bg-cover rounded-[0.8rem] relative"
            key={index}
            style={{
              backgroundImage: `url(${movie.thumbnail.trending?.small})`,
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
          </div>
        ))}
      </div>
    </div>
  );
};
