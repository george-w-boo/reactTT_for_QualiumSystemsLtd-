const BASE_URL = 'http://localhost:3000';

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);

  return response.json();
};
