import styles from "./Register.module.css";

const Register=()=>{
    return (
        <div className={styles.body}>
          <form action="" className={styles.register_body}>
            <span className={styles.header}>Register</span>
            <div class={styles.register_inputs_container}>
              <label for="">Username</label>
              <input placeholder="Username" type="text" />
            </div>
            <div className={styles.register_inputs_container}>
              <label for="">Password</label>
              <input placeholder="Password" type="password" />
            </div>
            <div className={styles.register_inputs_container}>
              <label for=""> Confirm Password</label>
              <input placeholder="Password" type="password" />
            </div>
            <button className={styles.register_button}>Sign Up</button>
            <p className="">Already registered?</p>
            <a href="/" className={styles.signup_button}>Sign In</a>
          </form>
        </div>
    )
}
export default Register;