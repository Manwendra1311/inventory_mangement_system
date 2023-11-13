import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import User from './components/User/User';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthentication = async (username, password) => {
    try {
      const response = await fetch("http://localhost:3000/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data === "exist") {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/user" />
              ) : (
                <Login checkAuthentication={checkAuthentication} />
              )
            }
          />
          <Route
            path="/user/*"
            element={
              isAuthenticated ? (
                <User />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="/register/*" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;