import Logo from "@/Components/Layouts/Logo";
import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center text-center gap-3">
      <h2 className="text-4xl font-bold  animate-pulse">
        L<span className="loading loading-ring loading-lg"></span>ading
      </h2>
      <div className="animate-ping">
        <Logo></Logo>
      </div>
    </div>
  );
};

export default loading;
