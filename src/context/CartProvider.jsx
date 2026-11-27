import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const productInCart = cart.find(
      (product) => product.id === item.id
    );

    const currentQuantity = productInCart
      ? productInCart.quantity
      : 0;

    if (currentQuantity + quantity > item.stock) {
      return false;
    }

    if (productInCart) {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    }

    return true;
  };

  const removeItem = (itemId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== itemId)
    );
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
