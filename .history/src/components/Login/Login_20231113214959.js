import { useState } from 'react';
import styles from "./Login.module.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password
      });

      console.log('Authentication Response:', response);

      if (response.data === "authenticated") {
        alert("Successfully Logged In");
        navigate("/user");
      } else {
        setError("Invalid User");
      }
    } catch (error) {
      setError("Authentication failed");
      console.error('Authentication Error:', error);
    }
  };

  return (
    <div className={styles.body}>
      <form action="" className={styles.login_body} onSubmit={handleLogin}>
        <span className={styles.header}>Login</span>
        <div className={styles.login_inputs_container}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.login_inputs_container}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.login_button} type="submit">
          Login
        </button>
        <a href="/Register/" className={styles.signup_button}>
          Sign Up
        </a>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
