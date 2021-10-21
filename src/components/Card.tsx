import React from 'react';
import { Link } from 'react-router-dom';

import { deleteProduct } from '../api/api';

import { Product } from '../types/Product';
import { Button } from './Button';
import styles from './Card.module.scss';

type Props = {
  product: Product;
};

export const Card: React.FC<Props> = (props) => {
  const { product } = props;

  const onDeleteHandler = (id: string) => {
    deleteProduct(id);
  };

  return (
    <li className={styles.card}>
      <h2 className={styles.card__title}>{product.title}</h2>
      <p className={styles['card__price-tag']}>{`$${product.price}`}</p>
      <p className={styles.card__description}>{product.description}</p>
      <form action="">
        <Link to={`/edit_view/${product.id}`} className={styles.card__link}>
          <Button type="button" content="Edit" />
        </Link>
        <Button type="submit" content="Delete" onClick={() => onDeleteHandler(product.id)} />
        <Button type="button" content="Add to cart" />
      </form>
    </li>
  );
};
