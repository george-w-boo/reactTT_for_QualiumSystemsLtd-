import React, { useState, useEffect } from 'react';
import './App.scss';
import { getProducts } from './api/api';
import { Product } from './types/Product';
import { ProductList } from './components/ProductList';
import { Container } from './components/Container';
import { Pagination } from './components/Pagination';
import { FilterByTitle } from './components/FilterByTitle';

export const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const productsFromApi = await getProducts();

      setIsLoading(false);
      setProducts(productsFromApi);
    })();

    if (!filteredProducts.length) {
      setFilteredProducts(products);
    }
  }, []);

  const paginationHandler = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filterByTitle = (title: string) => {
    const currentFilteredProducts = [...products].filter((product: Product) => {
      return product.title.toLowerCase().includes(title.toLocaleLowerCase());
    });

    setFilteredProducts(currentFilteredProducts);
  };

  const currentPageFirstProductIndex = currentPage * productsPerPage - productsPerPage;
  const currentPageLastProductIndex = currentPage * productsPerPage;
  const currentPageProducts = [...filteredProducts]
    .slice(currentPageFirstProductIndex, currentPageLastProductIndex);

  return (
    <Container>
      <FilterByTitle onFilter={filterByTitle} />
      <ProductList products={currentPageProducts} loadingStatus={isLoading} />
      <Pagination
        productsPerPage={productsPerPage}
        productsNumber={filteredProducts.length}
        onPaginationListItem={paginationHandler}
      />
    </Container>
  );
};
