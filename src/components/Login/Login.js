import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <p className={styles.header}>Inventory Management System</p>
        <form action="" className={styles.login_body}>
          <div class={styles.login_inputs_container}>
            <label for="">Username</label>
            <input placeholder="Username" type="text" />
          </div>
          <div className={styles.login_inputs_container}>
            <label for="">Password</label>
            <input placeholder="Password" type="password" />
          </div>
          <button className={styles.login_button}>login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
