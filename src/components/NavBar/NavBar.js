import React, { useState } from "react";
import styles from "./NavBar.module.css";

import InventoryLogo from "../../assets/NavBar/inventory_logo.png";
import Collapse from "../../assets/NavBar/collapse_sidebar.png";
import Products from "../../assets/NavBar/products.png";
import Dashboard from "../../assets/NavBar/dashboard_logo.png";
import AddProducts from "../../assets/NavBar/add_products.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const dashboardItems = [
    { sectionName: "Dashboard", url: "/user/", sectionIcon: Dashboard },
    {
      sectionName: "Products",
      url: "/user/products",
      sectionIcon: Products,
    },
    {
      sectionName: "Add Products",
      url: "/user/add_products",
      sectionIcon: AddProducts,
    },
  ];

  const [collapsed, setCollapsed] = useState(true);
  const [currentSection, setCurrentSection] = useState("Dashboard"); 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={
        collapsed
          ? styles.admin_home_sidebar_collpased
          : styles.admin_home_sidebar
      }
    >
      {!collapsed ? (
        <div className={styles.inventory_logo_wrap}>
          <img
            className={
              !collapsed
                ? styles.loyal_partners_logo
                : styles.loyal_partners_logo_collapsed
            }
            src={InventoryLogo}
            alt="LoyalPartnersLogo"
          ></img>
          <span>Inventory</span>
        </div>
      ) : (
        <img
          className={
            !collapsed
              ? styles.loyal_partners_logo
              : styles.loyal_partners_logo_collapsed
          }
          src={InventoryLogo}
          alt="LoyalPartnersLogo"
        ></img>
      )}

      {!collapsed ? (
        <div className={styles.admin_dashboard_wrapper}>
          <div className={styles.dashboard_section} onClick={toggleSidebar}>
            <img
              src={Collapse}
              alt={Collapse}
              className={styles.section_logo}
            ></img>
            <span>Collapse Sidebar</span>
          </div>
          {dashboardItems.map((item, index) => (
            <div
              className={
                styles.dashboard_section +
                " " +
                (currentSection === item.sectionName
                  ? styles.dashboard_section_active
                  : "")
              }
              key={index}
              onClick={() => {
                navigate(item.url);
                setCurrentSection(item.sectionName);
              }}
            >
              <img
                src={item.sectionIcon}
                alt={item.sectionIcon}
                className={styles.section_logo}
              ></img>
              <span>{item.sectionName}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.admin_dashboard_wrapper_collapsed}>
          <div
            className={
              styles.dashboard_section + " " + styles.navbar_collapse_button
            }
            onClick={toggleSidebar}
          >
            <img
              src={Collapse}
              alt={Collapse}
              className={styles.section_logo}
            ></img>
          </div>
          {dashboardItems.map((item, index) => (
            <div
              className={
                styles.dashboard_section +
                " " +
                (currentSection === item.sectionName
                  ? styles.dashboard_section_active
                  : "")
              }
              key={index}
              onClick={() => {
                navigate(item.url);
                setCurrentSection(item.sectionName);
              }}
            >
              <img
                src={item.sectionIcon}
                alt={item.sectionIcon}
                className={styles.section_logo}
              ></img>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
