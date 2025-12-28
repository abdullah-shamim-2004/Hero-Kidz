import React from 'react';
import { FaStar, FaShoppingCart, FaEye } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  // ডিসকাউন্ট প্রাইস ক্যালকুলেশন
  const discountedPrice = product.price - (product.price * product.discount) / 100;

  return (
    <div className="max-w-sm bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
      
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-4 left-4 z-10 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          -{product.discount}% ছাড়
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-slate-50">
        <img
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          src={product.image}
          alt={product.title}
        />
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button className="bg-white p-3 rounded-full text-primary shadow-md hover:bg-primary hover:text-white transition-colors">
            <FaEye />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Category/Badge */}
        <span className="text-[10px] font-bold tracking-widest uppercase text-teal-600 bg-teal-50 px-2 py-1 rounded mb-2 inline-block">
          Educational Toy
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-primary transition-colors leading-tight">
          {product.bangla}
        </h2>
        <p className="text-xs text-slate-400 mt-1 mb-3">{product.title}</p>

        {/* Ratings & Sold */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-amber-400 text-sm">
             {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(product.ratings) ? "fill-current" : "text-slate-200"} />
             ))}
          </div>
          <span className="text-xs font-medium text-slate-500">({product.reviews})</span>
          <span className="text-xs text-slate-300">|</span>
          <span className="text-xs font-medium text-slate-500">{product.sold} টি বিক্রি হয়েছে</span>
        </div>

        {/* Pricing */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-slate-400 line-through leading-none">
              ৳{product.price}
            </span>
            <span className="text-2xl font-black text-primary leading-none mt-1">
              ৳{discountedPrice}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button className="flex items-center gap-2 bg-primary hover:bg-blue-800 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-95">
            <FaShoppingCart />
            কিনুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;