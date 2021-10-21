import { NewProduct } from '../types/Product';

const BASE_URL = 'http://localhost:3000';

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);

  return response.json();
};

export const addProduct = async (newProduct: NewProduct) => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add the product');
  }

  return null;
};

export const deleteProduct = async (productId: string) => {
  await fetch(`${BASE_URL}/products/${productId}`, {
    method: 'DELETE',
  });
};
