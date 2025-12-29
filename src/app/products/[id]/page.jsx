import { getSingleProducts } from "@/actions/server/products";
import Image from "next/image";
import React from "react";
import {
  FaCheckCircle,
  FaQuestionCircle,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
// Meta data
export async function generateMetadata({ params }) {
  // ১. Next.js ১৬ অনুযায়ী params কে await করে id সংগ্রহ করা
  const { id } = await params;

  // ২. ডাটাবেস থেকে প্রোডাক্টের তথ্য নিয়ে আসা
  const product = await getSingleProducts(id);

  // ৩. যদি প্রোডাক্ট না পাওয়া যায় তবে একটি ডিফল্ট মেটাডেটা রিটার্ন করা
  if (!product) {
    return {
      title: "পণ্য পাওয়া যায়নি | Hero-Kidz",
      description: "দুঃখিত, আপনি যে পণ্যটি খুঁজছেন তা আমাদের কাছে নেই।",
    };
  }

  // ৪. প্রফেশনাল মেটাডেটা অবজেক্ট তৈরি করা
  return {
    title: `${product.bangla} | Hero-Kidz`,
    description:
      product.description?.slice(0, 160) ||
      `${product.bangla} কিনুন সেরা দামে Hero-Kidz থেকে।`,

    // সোশ্যাল মিডিয়া শেয়ারিং প্রিভিউ (OpenGraph)
    openGraph: {
      title: `${product.bangla} - Hero-Kidz`,
      description: `শিশুদের জন্য ${product.bangla}। এখনই অর্ডার করুন Hero-Kidz-এ।`,
      url: `https://hero-kidz-kappa.vercel.app/products/${id}`,
      siteName: "Hero-Kidz",
      images: [
        {
          url: product.image || "https://ibb.co.com/1tZ2s2DG", // প্রোডাক্টের আসল ইমেজ
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      locale: "bn_BD",
      type: "article",
    },

    // Twitter (X) কার্ড
    twitter: {
      card: "summary_large_image",
      title: product.bangla,
      description: `সাশ্রয়ী মূল্যে কিনুন ${product.bangla}`,
      images: [product.image],
    },
  };
}

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProducts(id);
  if (!product) {
    return (
      <div className="container mx-auto p-6 text-center text-lg text-red-500 min-h-[60vh] flex items-center justify-center">
        পণ্যটি খুঁজে পাওয়া যায়নি।
      </div>
    );
  }

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;
  const ratingStars = Array.from({ length: 5 }, (_, i) => (
    <FaStar
      key={i}
      className={
        i < Math.floor(product.ratings) ? "text-amber-400" : "text-slate-300"
      }
    />
  ));

  return (
    <div className="container mx-auto p-2 my-2">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        {/* Product Image Section */}
        <div className=" p-2 flex items-center justify-center bg-slate-50 relative">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            priority={true} // প্রথম লোডের জন্য অপ্টিমাইজড
            className="rounded-lg object-contain w-full h-auto max-h-[500px]"
          />
          {product.discount > 0 && (
            <span className="absolute top-6 left-6 bg-rose-500 text-white text-md font-bold px-4 py-2 rounded-full shadow-lg">
              -{product.discount}% ছাড়
            </span>
          )}
        </div>

        {/* Product Details Section */}
        <div className="p-5 flex flex-col justify-between">
          <div>
            <span className="text-sm font-bold tracking-wider uppercase text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-3 inline-block">
              Educational Toy
            </span>
            <h1 className="text-3xl font-extrabold text-slate-800 mb-2 leading-tight">
              {product.bangla}
            </h1>
            <p className="text-xl font-semibold text-slate-600 mb-4">
              {product.title}
            </p>

            {/* Ratings */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-lg">{ratingStars}</div>
              <span className="text-sm font-medium text-slate-600">
                ({product.reviews} রিভিউ)
              </span>
              <span className="text-sm text-slate-300 mx-1">|</span>
              <span className="text-sm font-medium text-slate-600">
                {product.sold} টি বিক্রি হয়েছে
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              {product.discount > 0 && (
                <span className="text-2xl text-slate-400 line-through font-medium">
                  ৳{product.price}
                </span>
              )}
              <span className="text-4xl font-black text-primary">
                ৳{discountedPrice}
              </span>
            </div>

            {/* Description */}
            <h3 className="text-lg font-bold text-slate-700 mb-2">
              পণ্যের বিবরণ:
            </h3>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line mb-6">
              {product.description}
            </p>

            {/* Info Points */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-700 mb-2">
                বিশেষ বৈশিষ্ট্য:
              </h3>
              <ul className="space-y-2 text-slate-700">
                {product.info.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 text-lg" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Q&A Section */}
            {product.qna && product.qna.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-700 mb-2">
                  প্রশ্ন ও উত্তর:
                </h3>
                <div className="space-y-3">
                  {product.qna.map((item, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 p-3 rounded-lg border border-slate-100"
                    >
                      <p className="font-semibold text-slate-800 flex items-start gap-2">
                        <FaQuestionCircle className="mt-1 text-primary" />{" "}
                        প্রশ্ন: {item.question}
                      </p>
                      <p className="text-slate-600 ml-6">
                        উত্তর: {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Add to Cart Button */}
          <button className="w-full mt-8 flex items-center justify-center gap-3 bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-xl transition-all shadow-lg active:scale-95">
            <FaShoppingCart />
            এখনই কিনুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
