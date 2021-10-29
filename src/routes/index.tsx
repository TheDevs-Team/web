import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { Login, HomeAdm, Profile, Course, Material, Home, CourseById, User } from '~/pages';
import { PrivateRoutes } from './PrivateRoutes';
export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoutes exact path={'/'} component={Home} />
      <PrivateRoutes exact path={'/perfil'} component={Profile} />
      <PrivateRoutes exact path={'/usuarios'} component={User} />
      <PrivateRoutes exact path={'/materiais'} component={Material} />
      <PrivateRoutes exact path={'/home'} component={HomeAdm} />
      <PrivateRoutes exact path={'/cursos'} component={Course} />
      <PrivateRoutes path={'/cursos/:id'} component={CourseById} />
      <Route exact path={'/entrar'} component={Login} />
    </Switch>
  </BrowserRouter>
);
