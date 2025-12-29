// app/products/[id]/loading.js
import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="container mx-auto p-6 my-8 animate-pulse">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col ">
        {/* Image Skeleton */}
        <div className=" p-6  bg-slate-100 h-[400px] md:h-auto">
          <div className="w-full h-full bg-slate-200 rounded-lg"></div>
        </div>

        {/* Details Skeleton */}
        <div className=" p-8 flex flex-col">
          <div>
            <div className="h-4 w-32 bg-slate-200 rounded-full mb-3"></div>{" "}
            {/* Category */}
            <div className="h-8 w-3/4 bg-slate-300 rounded-lg mb-2"></div>{" "}
            {/* Title (Bangla) */}
            <div className="h-5 w-1/2 bg-slate-200 rounded-lg mb-4"></div>{" "}
            {/* Title (English) */}
            {/* Ratings Skeleton */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
              <div className="h-4 w-16 bg-slate-200 rounded-full"></div>
            </div>
            {/* Price Skeleton */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-6 w-20 bg-slate-200 rounded-lg"></div>
              <div className="h-10 w-32 bg-slate-300 rounded-lg"></div>
            </div>
            {/* Description Skeleton */}
            <div className="h-5 w-full bg-slate-200 rounded-lg mb-2"></div>
            <div className="h-5 w-11/12 bg-slate-200 rounded-lg mb-2"></div>
            <div className="h-5 w-10/12 bg-slate-200 rounded-lg mb-6"></div>
            {/* Info Points Skeleton */}
            <div className="h-5 w-40 bg-slate-200 rounded-lg mb-2"></div>
            <div className="space-y-2 mb-6">
              <div className="h-4 w-full bg-slate-100 rounded-full"></div>
              <div className="h-4 w-5/6 bg-slate-100 rounded-full"></div>
              <div className="h-4 w-4/5 bg-slate-100 rounded-full"></div>
            </div>
            {/* Q&A Skeleton */}
            <div className="h-5 w-40 bg-slate-200 rounded-lg mb-2"></div>
            <div className="space-y-3">
              <div className="h-16 w-full bg-slate-100 rounded-lg"></div>
              <div className="h-16 w-full bg-slate-100 rounded-lg"></div>
            </div>
          </div>

          {/* Button Skeleton */}
          <div className="w-full mt-8 h-14 bg-slate-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
