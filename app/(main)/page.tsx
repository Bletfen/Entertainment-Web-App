import MoviesList from "@/components/MoviesList";
import Trending from "@/components/Trending";

export default async function Home() {
  return (
    <div>
      <Trending />
      <MoviesList filter="all" />
    </div>
  );
}
