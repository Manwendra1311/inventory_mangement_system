import styles from "./Register.module.css";

const Register=()=>{
    return (
        <div className={styles.body}>
          <form action="" className={styles.login_body}>
            <span className={styles.header}>Login</span>
            <div class={styles.login_inputs_container}>
              <label for="">Username</label>
              <input placeholder="Username" type="text" />
            </div>
            <div className={styles.login_inputs_container}>
              <label for="">Password</label>
              <input placeholder="Password" type="password" />
            </div>
            <div className={styles.login_inputs_container}>
              <label for=""> Confirm Password</label>
              <input placeholder="Password" type="password" />
            </div>

            <button className={styles.login_button}>Sign Up</button>
            <a href="#" className={styles.signup_button}>Sign Up</a>
          </form>
        </div>
    )
}
export default Register;