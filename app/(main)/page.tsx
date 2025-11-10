import MoviesList from "@/components/MoviesList";
import Trending from "@/components/Trending";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <div>
      <Trending />
      <MoviesList filter="all" />
    </div>
  );
}
