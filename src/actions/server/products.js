"use server";
import { dbConnect, collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
export const getProducts = async () => {
  const products = await dbConnect(collections.PRODUCTS).find().toArray();
  return products;
};

export const getSingleProducts = async (id) => {
  try {
    const product = await dbConnect(collections.PRODUCTS).findOne({
      _id: new ObjectId(id),
    });
    return product;
  } catch (error) {
    console.log("Server Error:", error);
    return {};
  }
};
