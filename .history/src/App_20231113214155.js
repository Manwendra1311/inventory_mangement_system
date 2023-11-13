import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import User from './components/User/User';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Add your authentication logic here
    // For example, check if the user is logged in from your authentication service

    // For demonstration purposes, let's set isAuthenticated to true after a delay
    const delay = setTimeout(() => {
      setIsAuthenticated(true);
    }, 1000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/user" /> : <Login />}
          />
          <Route path="/user/*" element={<User />} />
          <Route path="/register/*" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
