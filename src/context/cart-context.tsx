import React, { useState, useEffect } from 'react';
import { CartProduct } from '../types/Product';
import { getCartProducts } from '../api/api';

interface CartContextInterface {
  cart: CartProduct[],
  setCart: React.Dispatch<React.SetStateAction<CartProduct[] | null>>
}

const CartContext = React.createContext<CartContextInterface | null>(null);

export const CartContextProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[] | null>(null);

  useEffect(() => {
    (async () => {
      const cartProductsFromApi = await getCartProducts();

      setCart(cartProductsFromApi);
    })();
  }, [cart?.length]);

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
