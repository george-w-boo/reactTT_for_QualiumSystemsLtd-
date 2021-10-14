import React from 'react';
import { Product } from '../types/Product';
import { Button } from './Button';
import styles from './Card.module.scss';

type Props = {
  product: Product;
};

export const Card: React.FC<Props> = (props) => {
  const { product } = props;

  return (
    <li className={styles.card}>
      <h2 className={styles.card__title}>{product.title}</h2>
      <p className={styles['card__price-tag']}>{`$${product.price}`}</p>
      <p className={styles.card__description}>{product.description}</p>
      <Button type="button" content="Edit" />
      <Button type="button" content="Delete" />
      <Button type="button" content="Add to cart" />
    </li>
  );
};
