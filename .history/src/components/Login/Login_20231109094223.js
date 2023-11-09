import { useState } from 'react';
import styles from "./Login.module.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Array of users with their usernames and passwords
  const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' },
    

    // Add more users as needed
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered username and password match any user
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
      // Display success message and navigate to the User page
      setError('');
      alert('Login successful!');
      navigate('/user');
    } else {
      // Display an error message if no match is found
      setError('Username or password is incorrect');
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
        <button className={styles.login_button} type="submit">Login</button>
        <a href="/Register/" className={styles.signup_button}>Sign Up</a>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
