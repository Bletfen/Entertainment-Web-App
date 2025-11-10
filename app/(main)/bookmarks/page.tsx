import MoviesList from "@/components/MoviesList";

export default function BookmarksPage() {
  return (
    <div>
      <MoviesList filter="bookmarked movies" />
      <MoviesList filter="bookmarked tv-series" />
    </div>
  );
}
