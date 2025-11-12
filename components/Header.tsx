"use client";

import { useState } from "react";
import NavBar from "./NavBar";
import Logout from "./Logout";

export default function Header() {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <div
        className="xl:fixed xl:left-[2.4rem] xl:top-[3.2rem]
        xl:bottom-[3.2rem] xl:z-50
        "
      >
        <div
          className="flex justify-between items-center p-[1.6rem]
          xl:h-full xl:flex-col xl:bg-[#161d2f] xl:pt-[3.5rem]
          xl:pb-[3.2rem] xl:px-[3.2rem] xl:rounded-[2rem]
          "
        >
          <img src="/assets/logo.svg" alt="logo-icon" />
          <NavBar />
          <img
            src="/assets/image-avatar.png"
            alt="avatar"
            className="w-[2.4rem] h-[2.4rem] xl:w-[4rem] xl:h-[4rem]
            border border-white rounded-full cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setShowLogout(true)}
          />
        </div>
      </div>
      {showLogout && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center"
          onClick={() => setShowLogout(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Logout onClose={() => setShowLogout(false)} />
          </div>
        </div>
      )}
    </>
  );
}
