import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Container } from './components/Container';
import { CartContextProvider } from './context/cart-context';
import { MainView } from './pages/MainView';
import { CreateView } from './pages/CreateView';
import { EditView } from './pages/EditView';
import { CartView } from './pages/CartView';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <Container>
      <CartContextProvider>
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
          <Route path="/edit_view/:productId">
            <EditView />
          </Route>
          <Route path="/cart_view">
            <CartView />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CartContextProvider>
    </Container>
  );
};
