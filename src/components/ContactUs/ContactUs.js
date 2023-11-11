import styles from "./ConatctUs.module.css";
import logo from "./inventory_logo.png";
const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1>INVENTORY MANAGEMENT SYSTEM CONTACT US PAGE</h1>
        <div>
          <h2>Reach Us At</h2>
          <p>+91-1234567891</p>
          <p>feedback@inventorymanagementsys.org</p>
          <p>A-143, 9th Floor, Sovereign Corporate Tower</p>
          <p>Sector-136, Noida, Uttar Pradesh</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
