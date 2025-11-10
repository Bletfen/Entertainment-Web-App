"use client";
import { navigationArray } from "@/navigationArray";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavBar() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div
      className="flex items-center gap-[2.4rem]
      xl:flex-col"
    >
      {navigationArray.map((item) => {
        const Icon = item.icon;
        const isActive = pathName === item.navigate;
        return (
          <Link key={item.navigate} href={item.navigate} className="group">
            <Icon
              className={`group-hover:text-[#fc4747] transition-all duration-300
                ${isActive ? "text-white" : "text-[#5a698f]"}`}
            />
          </Link>
        );
      })}
    </div>
  );
}
