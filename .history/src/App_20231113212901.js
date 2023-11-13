import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import User from './components/User/User';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('http://localhost:3000/check-auth'); // Replace with your actual authentication check endpoint
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  const PrivateRoute = ({ element, path }) => {
    return isAuthenticated ? (
      <Route path={path} element={element} />
    ) : (
      <Navigate to="/login" replace />
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <PrivateRoute path="/user/*" element={<User />} />
          <Route path="/register/*" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
