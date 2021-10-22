import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Container } from './components/Container';
import { CreateView } from './pages/CreateView';
import { MainView } from './pages/MainView';
import { EditView } from './pages/EditView';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
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
        <Route path="/edit_view/:productId">
          <EditView />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
};
