import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from './components/Container';
import { CreateView } from './pages/CreateView';
import { MainView } from './pages/MainView';

export const App: React.FC = () => {
  return (
    <Container>
      <Switch>
        <Route path="/create_view">
          <CreateView />
        </Route>
        <Route path="/">
          <MainView />
        </Route>
      </Switch>
    </Container>
  );
};
