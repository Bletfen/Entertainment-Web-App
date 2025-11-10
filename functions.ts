export const handleBookMarkToggle = async (
  movie: IMovies,
  setMovies: React.Dispatch<React.SetStateAction<TMovies>>
) => {
  try {
    setMovies((prev) =>
      prev.map((m) =>
        m._id === movie._id ? { ...m, isBookmarked: !m.isBookmarked } : m
      )
    );

    await fetch("/api/bookmark", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        movieId: movie._id,
        title: movie.title,
        thumbnail: movie.thumbnail,
        year: movie.year,
        category: movie.category,
        rating: movie.rating,
      }),
    });
  } catch (error) {
    console.error("Bookmark toggle failed:", error);
  }
};
