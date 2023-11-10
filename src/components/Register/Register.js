import { useState } from 'react';
import styles from "./Register.module.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   setError('Passwords do not match');
    //   return;
    // }
    // alert('Registration successful!');
    // navigate('/');

    try{
      await axios.post("http://localhost:3000/register",{
        username, password
        // navigate('/')
      }).then(res=>{
        if(res.data==="exist"){
          alert("user already exist")
        }else if(res.data==="not exist"){
          navigate("/");
        }
      }).catch(e=>{
        alert("Invalid user");
        console.log(e);
      })
    }catch(e){
      setError(e);
    }
  };

  return (
    <div className={styles.body}>
      <form action="" className={styles.register_body} onSubmit={handleRegister}>
        <span className={styles.header}>Register</span>
        <div className={styles.register_inputs_container}>
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
        <div className={styles.register_inputs_container}>
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
        <div className={styles.register_inputs_container}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Re-type Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className={styles.register_button} type="submit">Sign Up</button>
        <div className={styles.register_par}>
          <div>
            <p>Already registered?</p>
          </div>
          <div>
            <a href="/" className={styles.signup_button}>Sign In</a>
          </div>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
