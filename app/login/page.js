"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import loginImg from "@/public/loginImage.png";
import Image from "next/image";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      Cookies.set("token", "authenticated", { expires: 1 });
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="w-full h-full ">
      <div className="h-screen flex justify-center items-center bg-[#E7E2FF]  w-full ">
        <form
          className="h-full flex justify-center items-center  w-full"
          onSubmit={handleSubmit}
        >
          <div className="  flex rounded-md overflow-hidden shadow-2xl shadow-gray-400/70 h-[70vh] w-[80vw] ">
            <div className="flex w-full flex-1 bg-white">
              <div className="w-full h-full flex justify-center gap-6 p-6 flex-col items-center">
                <h1 className="text-3xl font-bold font-mono">Login</h1>
                <p className="w-[70%] text-center text-gray-400 leading-4">
                  Login to get access to our services dont have and account?{" "}
                  <span className="underline cursor-pointer">signup?</span>
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex w-full justify-between gap-2 ">
                    <input
                      className="outline-none border rounded-md bg-[#e7e2ff4e] border-gray-400 py-3 px-8"
                      type="text"
                      placeholder="Username"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex w-full justify-between gap-2">
                    <input
                      className="outline-none border rounded-md bg-[#e7e2ff4e] border-gray-400 py-3 px-8"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between ">
                    <button
                      onClick={() => {
                        router.push("/");
                      }}
                      className="px-8 w-fit capitalize text-white rounded py-2 bg-gray-600"
                      type="button"
                    >
                      back
                    </button>
                    <button
                      className="px-8 w-fit rounded py-2 bg-black text-white"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-1 ">
              <div className="h-full full overflow-hidden ">
                <Image
                  className="object-cover"
                  src={loginImg}
                  alt="Auth Image"
                  width={640}
                  height={360}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
