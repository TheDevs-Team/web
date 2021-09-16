import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { PrivateRoute } from './PrivateRoutes';
import { Login, Course, HomeAdm } from '../pages';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/adm'} component={HomeAdm} />
      <Route exact path={'/entrar'} component={Login} />
      <PrivateRoute exact path={'/'} component={Course} />
      <PrivateRoute
        exact
        path={'/sair'}
        component={() => (
          <h1>
            <button type="button" onClick={() => localStorage.removeItem('@g2k:token')}>
              Sair
            </button>
          </h1>
        )}
      />
    </Switch>
  </BrowserRouter>
);
