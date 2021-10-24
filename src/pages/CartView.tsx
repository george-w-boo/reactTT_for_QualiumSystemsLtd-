import React, { useState, useEffect } from 'react';
// import CartContext from '../context/cart-context';

import { CartProduct } from '../types/Product';

export const CartView = () => {
  // const cartContext = useContext(CartContext);

  const [productsInCart, setProductsInCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('products') || '[]') as CartProduct[];

    setProductsInCart(cart);
  }, []);

  if (!productsInCart.length) {
    return <p>No products in the cart...</p>;
  }

  return (
    <ul>
      {productsInCart.map(productInCart => (
        <li key={productInCart.id}>
          <p>{productInCart.title}</p>
          <p>{productInCart.description}</p>
          <p>{productInCart.price}</p>
          <p>{productInCart.quantity}</p>
        </li>
      ))}
    </ul>
  );
};
