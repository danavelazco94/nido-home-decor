import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const getProductById = (productId) => {
  const productRef = doc(db, "products", productId);

  return getDoc(productRef).then((res) => {
    if (res.exists()) {
      return {
        id: res.id,
        ...res.data(),
      };
    } else {
      throw new Error("Producto no encontrado");
    }
  });
};