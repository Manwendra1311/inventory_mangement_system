import styles from "./User.module.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import DashBoard from "../DashBoard/DashBoard";
// import Product from "../Product/Product";
import AddProduct from "../AddProduct/AddProduct";
import Notification from "../Notification/Notification";
import ConatctUs from "../ContactUs/ContactUs";
import { useState } from "react";


const User = () => {

  const [notifications, setNotification]=useState([
    {
        title:"Item Removed",
        content:"One Item is removed form the IT category",
        button_group: [ "Dismiss"]
    },
    {
        title:"Item Added",
        content:"One Item is added to the grocery category",
        button_group: ["Dismiss"]
    },
    {
        title:"Item Edited",
        content:"One item was edited",
        button_group: ["Dismiss"]
    },
    {
        title:"Item Edited",
        content:"One item was edited",
        button_group:["Dismiss"]
    }, 
])

  const tenantFeatures = [
    {
      sectionName: "DashBoard",
      url: "/",
      component: <DashBoard/>,
    },
    {
      sectionName: "AddProducts",
      url: "/add_products",
      component: <AddProduct state={setNotification} data={notifications}/> ,
    },
    {
      sectionName: "Notification",
      url: "/notification",
      component: <Notification data={notifications}/> ,
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