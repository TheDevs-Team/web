import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import { Login } from './pages';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/entrar'} component={Login} />
    </Switch>
  </BrowserRouter>
);
