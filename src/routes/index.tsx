import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import { Login, HomeAdm, Profile, Course, Material, Home, CourseById, User, Notifications } from '~/pages';
import { PrivateRoutes } from './PrivateRoutes';
export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoutes exact path={'/'} component={Home} />
      <Route exact path={'/perfil'} component={Profile} />
      <PrivateRoutes exact path={'/usuarios'} component={User} />
      <PrivateRoutes exact path={'/materiais'} component={Material} />
      <PrivateRoutes exact path={'/home'} component={HomeAdm} />
      <PrivateRoutes exact path={'/cursos'} component={Course} />
      <PrivateRoutes exact path={'/cursos/:id'} component={CourseById} />
      <PrivateRoutes exact path={'/notificacoes'} component={Notifications} />
      <Route exact path={'/entrar'} component={Login} />
    </Switch>
  </BrowserRouter>
);
