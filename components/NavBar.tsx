import { navigationArray } from "@/navigationArray";
import Link from "next/link";
export default function NavBar() {
  return (
    <div>
      {navigationArray.map((item) => {
        const Icon = item.icon;
        return (
          <Link key={item.navigate} href={item.navigate} className="group">
            <Icon className="text-[#5a698f] group-hover:text-white transition-colors" />
          </Link>
        );
      })}
    </div>
  );
}
