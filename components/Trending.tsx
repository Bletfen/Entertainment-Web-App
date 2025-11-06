import { EmblaCarousel } from "./EmblaCarousel";
import data from "../data.json";

export default function Trending() {
  const trendingData = data.filter((item) => item.isTrending === true);
  return (
    <div
      className="mt-[2.4rem] flex flex-col gap-[1.6rem]
        pl-[1.6rem]"
    >
      <h1
        className="text-[2rem] font-[300] tracking-[-0.31px]
        text-white"
      >
        Trending
      </h1>
      <EmblaCarousel slides={trendingData} />
    </div>
  );
}
