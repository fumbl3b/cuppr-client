import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service'; //remember to create this !

export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Component {...componentProps} />
          : <Redirect 
              to={{
                pathname: '/Signup',
                state: { from: componentProps.location }
              }}
            />
      )}
    />
  );
}