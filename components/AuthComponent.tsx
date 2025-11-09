"use client";
import { redirect, usePathname } from "next/navigation";
import Input from "./Input";

export default function Authentication() {
  const pathName = usePathname();
  const isLogin = pathName === "/login";

  const handleRedirect = () => {
    if (isLogin) {
      redirect("/register");
    } else {
      redirect("login");
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-[5.8rem]
    w-full"
    >
      <div>
        <img src="./assets/logo.svg" alt="" />
      </div>
      <div
        className="px-[2.4rem] pt-[2.4rem] pb-[3.2rem]
        bg-[#161d2f] rounded-[1rem] w-full max-w-[40rem]
        flex flex-col gap-[4rem]"
      >
        <h1 className="text-[3.2rem] font-[300] tracking-[-0.5px]">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <form className="flex flex-col gap-[2.4rem]">
          <div className="flex flex-col gap-[1.7rem]">
            <Input type={"email"} placeHolder={"Email address"} />
            <div className="w-full h-px bg-[#5a698f]"></div>
          </div>
          <div className="flex flex-col gap-[1.7rem]">
            <Input type={"password"} placeHolder={"Password"} />
            <div className="w-full h-px bg-[#5a698f]"></div>
          </div>
          {!isLogin && (
            <div className="flex flex-col gap-[1.7rem]">
              <Input type={"password"} placeHolder={"Confirm Password"} />
              <div className="w-full h-px bg-[#5a698f]"></div>
            </div>
          )}
          <button
            type="submit"
            className="w-full py-[1.5rem] bg-[#fc4747] rounded-[0.6rem]
            text-[1.5rem] font-[300]"
          >
            {isLogin ? "Login to your account" : "Create an account"}
          </button>
        </form>
        <div className="flex justify-center">
          {isLogin ? (
            <p className="text-[1.5rem] font-[300] flex gap-[0.8rem]">
              Don't have an account?{" "}
              <span
                className="cursor-pointer text-[#fc4747]"
                onClick={handleRedirect}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="text-[1.5rem] font-[300] flex gap-[0.8rem]">
              Alread have an account?
              <span
                className="cursor-pointer text-[#fc4747]"
                onClick={handleRedirect}
              >
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
