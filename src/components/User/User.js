import styles from "./User.module.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import DashBoard from "../DashBoard/DashBoard";
import Product from "../Product/Product";
import AddProduct from "../AddProduct/AddProduct";
import Notification from "../Notification/Notification";
import ConatctUs from "../ContactUs/ContactUs";


const User = () => {

  const tenantFeatures = [
    {
      sectionName: "DashBoard",
      url: "/",
      component: <DashBoard/>,
    },
    {
      sectionName: "Products",
      url: "/products",
      component: <Product/> ,
    },
    {
      sectionName: "AddProducts",
      url: "/add_products",
      component: <AddProduct/> ,
    },
    {
      sectionName: "Notification",
      url: "/notification",
      component: <Notification/> ,
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
          {tenantFeatures.map((feature, index) => {
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