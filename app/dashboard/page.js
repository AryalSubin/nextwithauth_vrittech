"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import withAuth from "../../components/withAuth";

function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="h-screen flex w-full">
      <div className="flex flex-[0.2] bg-gray-500 h-full w-full">
        <div className="w-full h-full flex justify-center py-6 ">
          <h1 className="text-5xl text-white font-bold font-mono">Sidebar</h1>
        </div>
      </div>
      <div className="flex flex-1 bg-gray-800 h-full w-full">
        <div className="flex gap-8 items-center flex-col py-6 w-full">
          <h1 className="text-3xl text-white">Welcome to dashboard</h1>

          <div className="flex justify-center ">
            <button
              onClick={() => {
                Cookies.remove("token");
                router.push("/login");
              }}
              className="px-8 w-fit rounded py-2 bg-white font-bold "
              type="submit"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
