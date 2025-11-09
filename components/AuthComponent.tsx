"use client";
import { usePathname } from "next/navigation";
import Input from "./Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Authentication() {
  const pathName = usePathname();
  const router = useRouter();
  const isLogin = pathName === "/login";
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErorr, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setEmail("");
    setPasswordError("");
    setConfirmPassword("");

    if (!email || !password) {
      setEmailError("Can't be empty");
      setPasswordError("Can't be empty");
      return;
    }

    if (!isLogin && !confirmPassword) {
      setErrorMessage("Can't be empty");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    try {
      const endpoint = isLogin ? "/api/login" : "/api/register";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.error || "Something went wrong");
        return;
      }
      if (isLogin) {
        window.location.href = "/";
      } else {
        router.push("/login");
      }
    } catch (err) {
      console.log("Network error. Please try again.");
    }
  };

  const handleRedirect = () => {
    if (isLogin) {
      router.push("/register");
    } else {
      router.push("login");
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
        {errorMessage && (
          <p className="text-[1.3rem] text-[#fc4747] font-[300]">
            {errorMessage}
          </p>
        )}
        <form className="flex flex-col gap-[2.4rem]" onSubmit={handleSubmit}>
          <Input
            type={"email"}
            placeHolder={"Email address"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          <Input
            type={"password"}
            placeHolder={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordErorr}
          />
          {!isLogin && (
            <Input
              type={"password"}
              placeHolder={"Confirm Password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPasswordError}
            />
          )}
          <button
            type="submit"
            className="w-full py-[1.5rem] bg-[#fc4747] rounded-[0.6rem]
            text-[1.5rem] font-[300]
            cursor-pointer hover:bg-white hover:text-[#10141e]
            transition-colors duration-300"
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
              Already have an account?
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
