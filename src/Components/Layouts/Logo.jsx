import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex justify-center items-center">
      <Image alt="logo" src={"/assets/logo.png"} width={50} height={50}></Image>
      <h2 className="text-xl font-bold ">
        Hero<span className="text-primary">KIdz</span>
      </h2>
    </Link>
  );
};

export default Logo;
