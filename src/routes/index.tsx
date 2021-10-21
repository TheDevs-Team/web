import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { Login, HomeAdm, Profile, Course, Material, Home } from '~/pages';
import { PrivateRoutes } from './PrivateRoutes';
export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoutes exact path={'/'} component={HomeAdm} />
      <PrivateRoutes exact path={'/perfil'} component={Profile} />
      <PrivateRoutes exact path={'/cursos'} component={Course} />
      <PrivateRoutes exact path={'/materiais'} component={Material} />
      <PrivateRoutes exact path={'/home'} component={Home} />
      <Route exact path={'/entrar'} component={Login} />
    </Switch>
  </BrowserRouter>
);
