
// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, authenticated, ...props }) => {
  return authenticated ? (
    <Route {...props} path="/user" element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
