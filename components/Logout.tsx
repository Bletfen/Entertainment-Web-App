"use client";

import { useRouter } from "next/navigation";

interface LogoutProps {
  onClose?: () => void;
}

export default function Logout({ onClose }: LogoutProps) {
  const router = useRouter();

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#161d2f] rounded-[1rem] max-w-[40rem] mx-auto gap-6 shadow-md">
      <img src="/assets/logo.svg" alt="Logo" className="mb-4" />
      <h2 className="text-[2.4rem] font-[300] tracking-[-0.5px]">Log Out?</h2>
      <p className="text-[1.5rem] text-gray-400 mb-2 text-center">
        Are you sure you want to log out of your account?
      </p>
      <form onSubmit={handleLogout} className="flex flex-col gap-4 w-full">
        <button
          type="submit"
          className="
          cursor-pointer bg-[#fc4747] text-white py-2 rounded hover:bg-[#ff6f6f] transition"
        >
          Log Out
        </button>
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer text-[#5a698f] underline text-[1.3rem] text-center hover:text-white"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
