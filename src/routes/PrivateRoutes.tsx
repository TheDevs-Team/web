import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { isAuthenticated } from '../services/auth';

export const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }): any => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/entrar', state: { from: props.location } }} />
      )
    }
  />
);
