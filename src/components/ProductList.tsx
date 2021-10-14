import React from 'react';
import { Card } from './Card';
import { Product } from '../types/Product';
import { Grid } from './Grid';

type Props = {
  products: Product[];
  loadingStatus: boolean;
};

export const ProductList: React.FC<Props> = (props) => {
  const { products, loadingStatus } = props;

  if (loadingStatus) {
    return (
      <p>Loading products...</p>
    );
  }

  return (
    <ul>
      <Grid>
        {products.map(product => (
          <Card product={product} key={product.id} />
        ))}
      </Grid>
    </ul>
  );
};
