"use client";
import Link from "next/link";
import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";

const error = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center text-center gap-3">
      <BiSolidErrorAlt size={100} className="text-primary" />
      <h2 className="text-4xl font-bold text-primary">Something Went Wrong!</h2>
      <Link className="btn btn-primary btn-outline" href={"/"}>
        Go Home
      </Link>
    </div>
  );
};

export default error;
