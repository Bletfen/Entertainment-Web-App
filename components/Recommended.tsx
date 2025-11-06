import data from "../data.json";
import BookmarkController from "./BookmarkController";
import MovieDetails from "./MovieDetails";
export default function Recommended() {
  const movies = data.filter((mov) => !mov.isTrending);
  return (
    <div className="mt-[2.4rem] px-[1.6rem] pb-[6.1rem]">
      <h1 className="text-[2rem] font-[300] tracking-[-0.31px]">
        Recommended for you
      </h1>
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
              <BookmarkController />
            </div>
            <MovieDetails movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
