"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";
import loadingImg from "@/public/loading.gif";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = Cookies.get("token");
      if (!token) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    }, []);

    if (loading) {
      return (
        <div className="h-screen w-full flex justify-center items-center ">
          <Image src={loadingImg} alt="loading..." />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
