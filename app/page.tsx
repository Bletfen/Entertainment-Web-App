import Recommended from "@/components/Recommended";
import Search from "@/components/Search";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div>
      <Search />
      <Trending />
      <Recommended />
    </div>
  );
}
