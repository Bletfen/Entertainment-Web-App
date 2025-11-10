import MoviesList from "@/components/MoviesList";

export default async function MoviesPage() {
  return (
    <div>
      <MoviesList filter="movie" />
    </div>
  );
}
