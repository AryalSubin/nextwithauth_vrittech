import Image from "next/image";
import authImg from "@/public/auth_img.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex  w-full  h-screen justify-between bg-[#FFFFFF]">
      <div className="flex  w-full h-full items-center justify-center  flex-1 ">
        <div className="w-full h-fit flex flex-col gap-5  py-20 px-20 ">
          <h1 className="text-[4vw] leading-[3.5vw] font-black ">
            This is the most loved Home Page
          </h1>
          <p>
            we can check the protected routes by using below buttons and try to
            go to the dashboard and login pages
          </p>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="bg-black hover:bg-black/80 transition-colors duration-300 text-white px-8 py-2 "
            >
              Login Page
            </Link>
            <Link
              href="/dashboard"
              className="bg-gray-500 hover:bg-gray-500/80  transition-colors duration-300 text-white px-8 py-2"
            >
              Dashboard Page
            </Link>
          </div>
        </div>
      </div>
      <div className="flex  w-full  h-full flex-1 ">
        <div className="size-full flex items-center justify-center px-20">
          <div className="h-fit w-[400px] bg-red-300">
            <Image
              className="object-cover"
              src={authImg}
              alt="Auth Image"
              width={640}
              height={360}
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
