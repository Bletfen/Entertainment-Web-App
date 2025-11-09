import Recommended from "@/components/Recommended";
import Trending from "@/components/Trending";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <div>
      <Trending />
      <Recommended />
    </div>
  );
}
