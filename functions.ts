export const handleBookMarkToggle = (
  title: string,
  setMovies: React.Dispatch<React.SetStateAction<TTrendingProps>>
) => {
  setMovies((prev) =>
    prev.map((movie) =>
      movie.title === title
        ? { ...movie, isBookmarked: !movie.isBookmarked }
        : movie
    )
  );
};
