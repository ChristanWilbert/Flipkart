import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("Insertion of data Successful");
  } catch (error) {
    console.log("Error on Loading default data", error.message);
  }
};
export default DefaultData;
