import styles from "./ConatctUs.module.css";
import logo from "../../assets/ContactUs/inventory_logo.png";
const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.title}>INVENTORY MANAGEMENT SYSTEM</span>
        <div>
          <span className={styles.reach_us}>Reach Us At</span>
          <p>Contact Us: +91-1234567891</p>
          <p>E-mail:  feedback@inventorymanagementsys.org</p>
          <p>Address: A-143, 9th Floor, Sovereign Corporate Tower Sector-136, Noida, Uttar Pradesh</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
