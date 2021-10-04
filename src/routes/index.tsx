import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { Login, HomeAdm, Profile, Course } from '../pages';
import { PrivateRoute } from './PrivateRoutes';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path={'/'} component={HomeAdm} />
      <PrivateRoute exact path={'/perfil'} component={Profile} />
      <PrivateRoute exact path={'/cursos'} component={Course} />
      <Route exact path={'/entrar'} component={Login} />
    </Switch>
  </BrowserRouter>
);
