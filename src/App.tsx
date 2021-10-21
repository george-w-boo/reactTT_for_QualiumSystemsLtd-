import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Product } from './types/Product';
import { getProducts } from './api/api';
import { Container } from './components/Container';
import { CreateView } from './pages/CreateView';
import { MainView } from './pages/MainView';
import { EditView } from './pages/EditView';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const productsFromApi = await getProducts();

      setProducts(productsFromApi);
    })();
  }, [products.length]);

  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Redirect to="main_view" />
        </Route>
        <Route path="/main_view">
          <MainView />
        </Route>
        <Route path="/create_view">
          <CreateView />
        </Route>
        {products.map(product => (
          <Route path={`/edit_view/${product.id}`} key={product.id}>
            <EditView product={product} />
          </Route>
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
};
