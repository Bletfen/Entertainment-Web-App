import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="xl:fixed xl:left-[2.4rem] xl:top-[3.2rem] xl:z-50">
      <div
        className="flex justify-between items-center p-[1.6rem]
        xl:h-[85rem] xl:flex-col xl:bg-[#161d2f] xl:pt-[3.5rem]
        xl:pb-[3.2rem] xl:px-[3.2rem] xl:rounded-[2rem]
        "
      >
        <img src="/assets/logo.svg" alt="logo-icon" />
        <NavBar />
        <img
          src="/assets/image-avatar.png"
          alt="avatar"
          className="w-[2.4rem] h-[2.4rem] xl:w-[4rem] xl:h-[4rem]
          border border-white rounded-full"
        />
      </div>
    </div>
  );
}
