import React, { useContext } from 'react';
import CartContext from '../context/cart-context';

export const CartView = () => {
  const cartContext = useContext(CartContext);

  return (
    <ul>
      {cartContext?.cart.map(cartProduct => (
        <li key={cartProduct.id}>
          <p>{cartProduct.title}</p>
          <p>{cartProduct.description}</p>
          <p>{cartProduct.price}</p>
          <p>{cartProduct.quantity}</p>
        </li>
      ))}
    </ul>
  );
};
