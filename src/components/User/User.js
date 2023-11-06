import styles from "./User.module.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import DashBoard from "../DashBoard/DashBoard";

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
      component: <div>Products</div>,
    },
    {
      sectionName: "AddProducts",
      url: "/add_products",
      component: <div>Add Products</div>,
    },
    {
      sectionName: "Notification",
      url: "/notification",
      component: <div>notification</div>,
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