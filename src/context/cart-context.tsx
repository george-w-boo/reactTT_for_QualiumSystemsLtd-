import React, { useState, useEffect } from 'react';
import { CartProduct } from '../types/Product';

interface CartContextInterface {
  cart: CartProduct[],
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>
}

const CartContext = React.createContext<CartContextInterface | null>(null);

export const CartContextProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cart));
  }, [cart.length]);

  if (!cart) {
    return <p>Loading...</p>;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
