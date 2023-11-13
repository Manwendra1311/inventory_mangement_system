import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import User from './components/User/User';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("http://localhost:3000/check-auth"); // Replace with your authentication check API endpoint
        if (response.data === "authenticated") {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      }
    };

    // Call the authentication check function
    checkAuthentication();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/user" /> : <Login />}
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
