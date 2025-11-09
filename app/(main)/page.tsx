import Recommended from "@/components/Recommended";
import Trending from "@/components/Trending";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

  if (!token) {
    redirect("login");
  }
  return (
    <div>
      <Trending />
      <Recommended />
    </div>
  );
}
