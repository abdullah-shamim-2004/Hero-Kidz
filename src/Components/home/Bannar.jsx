import { banglaFont } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Bannar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <h2
          className={`${banglaFont.className}text-2xl md:text-6xl font-black md:leading-20`}
        >
          আপনার সন্তানকে দিন{" "}
          <span
            className="text-primary "
          >
            সুন্দর ভবিষ্যত
          </span>
        </h2>
        <p className="text-gray-800 ">Buy every products up to 15% Dicount.</p>
        <button className="btn btn-outline btn-primary">Explore more</button>
      </div>
      <div className="flex-1">
        <Image
          width={500}
          height={400}
          alt="Hero image"
          src={"/assets/hero.png"}
        ></Image>
      </div>
    </div>
  );
};

export default Bannar;
