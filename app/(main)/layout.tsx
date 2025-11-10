import Header from "@/components/Header";
import Search from "@/components/Search";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="xl:relative max-w-[1440px] xl:mx-auto">
      <Header />
      <div className="xl:pt-[6.4rem] xl:pl-[calc(9.6rem+3.6rem+2.4rem)]">
        <Search />
        {children}
      </div>
    </div>
  );
}
