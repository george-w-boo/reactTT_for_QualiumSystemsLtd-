import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/cart-context';

import { deleteProduct } from '../api/api';

import { Product, CartProduct } from '../types/Product';
import { Button } from './Button';
import styles from './Card.module.scss';

type Props = {
  product: Product;
};

export const Card: React.FC<Props> = (props) => {
  const cartContext = useContext(CartContext);

  const { product } = props;
  const [isAdded, setIsAdded] = useState(false);

  const onDeleteHandler = (id: string) => {
    deleteProduct(id);
  };

  const onAddToCartHandler = (productForCart: CartProduct) => {
    cartContext?.setCart((currentState: CartProduct[]) => [...currentState, productForCart]);
    setIsAdded(true);
  };

  return (
    <li className={styles.card}>
      <h2 className={styles.card__title}>{product.title}</h2>
      <p className={styles['card__price-tag']}>{`$${product.price}`}</p>
      <p className={styles.card__description}>{product.description}</p>
      <form action="" className={styles.card__form}>
        <Link
          to={{
            pathname: `/edit_view/${product.id}`,
            state: product,
          }}
          className={styles.card__link}
        >
          <Button type="button" content="Edit" />
        </Link>
        <Button type="submit" content="Delete" onClick={() => onDeleteHandler(product.id)} />
        <Button
          type="button"
          content="Add to cart"
          disabled={isAdded}
          onClick={() => onAddToCartHandler({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            quantity: 1,
          })}
        />
      </form>
    </li>
  );
};
