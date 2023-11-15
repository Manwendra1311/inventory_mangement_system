import styles from "./User.module.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import DashBoard from "../DashBoard/DashBoard";
import AddProduct from "../AddProduct/AddProduct";
// import Notification from "../Notification/Notification";
import ConatctUs from "../ContactUs/ContactUs";


const User = () => {
  

  const inventoryFeatures = [
    {
      sectionName: "DashBoard",
      url: "/",
      component: <DashBoard/>,
    },
    {
      sectionName: "AddProducts",
      url: "/add_products",
      component: <AddProduct/> ,
    },
    
    {
      sectionName: "Contact Us",
      url: "/ContactUs",
      component: <ConatctUs/>,
    },
  ];
  


  return (
    <div className={styles.tenant}>
      <NavBar/>
      <div className={styles.content}>
        <Header/>
        <Routes>
          {inventoryFeatures.map((feature, index) => {
            return (
              <Route
                key={index}
                path={feature.url}
                element={feature.component}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default User;