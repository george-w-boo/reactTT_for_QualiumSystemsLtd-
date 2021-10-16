import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getProducts } from '../api/api';

import styles from './MainView.module.scss';

import { Product } from '../types/Product';
import { Button } from '../components/Button';
import { ProductList } from '../components/ProductList';
import { Pagination } from '../components/Pagination';
import { FilterByTitle } from '../components/FilterByTitle';

export const MainView: React.FC = () => {
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
      setFilteredProducts(productsFromApi);
    })();
  }, []);

  const paginationHandler = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filterByTitle = (title: string) => {
    const currentFilteredProducts = [...products].filter((product: Product) => {
      return product.title.toLowerCase().includes(title.toLowerCase());
    });

    setFilteredProducts(currentFilteredProducts);
  };

  const currentPageFirstProductIndex = currentPage * productsPerPage - productsPerPage;
  const currentPageLastProductIndex = currentPage * productsPerPage;
  const currentPageProducts = filteredProducts
    .slice(currentPageFirstProductIndex, currentPageLastProductIndex);

  return (
    <>
      <Link to="/create_view" className={styles['create-view-link']}>
        <Button type="button" content="Create View" />
      </Link>
      <FilterByTitle onFilter={filterByTitle} />
      <ProductList products={currentPageProducts} loadingStatus={isLoading} />
      <Pagination
        productsPerPage={productsPerPage}
        productsNumber={filteredProducts.length}
        onPaginationListItem={paginationHandler}
      />
    </>
  );
};
