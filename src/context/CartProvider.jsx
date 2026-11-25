import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find(
        (product) => product.id === item.id
      );

      const currentQuantity = productInCart
        ? productInCart.quantity
        : 0;

      if (currentQuantity + quantity > item.stock) {
        return prevCart;
      }

      if (productInCart) {
        return prevCart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        );
      }

      return [...prevCart, { ...item, quantity }];
    });
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
