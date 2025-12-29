import React from "react";
// import products from "@/data/toys.json";
import ProductsCard from "../cards/ProductsCard";
import { getProducts } from "@/actions/server/products";

const Products = async () => {
  const products = await getProducts();

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-5 ">Our Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <ProductsCard key={product.title} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
