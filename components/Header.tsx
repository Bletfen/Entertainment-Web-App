import NavBar from "./NavBar";
import Search from "./Search";

export default function Header() {
  return (
    <div>
      <div
        className="flex justify-between items-center
      p-[1.6rem]"
      >
        <img src="/assets/logo.svg" alt="logo-icon" />
        <NavBar />
        <img
          src="/assets/image-avatar.png"
          alt="avatar"
          className="w-[2.4rem] h-[2.4rem]"
        />
      </div>
      <Search />
    </div>
  );
}
