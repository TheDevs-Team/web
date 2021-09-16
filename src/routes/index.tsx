import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { PrivateRoute } from './PrivateRoutes';
import { Login, HomeAdm } from '../pages';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path={'/adm'} component={HomeAdm} />
      <Route exact path={'/entrar'} component={Login} />
    </Switch>
  </BrowserRouter>
);
