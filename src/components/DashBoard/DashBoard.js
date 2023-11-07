import styles from "./DashBoard.module.css";
import ShoppingCart from "../../assets/DashBoard/shopping_cart.png";
import Value from "../../assets/DashBoard/money.png";
import OutOfStock from "../../assets/DashBoard/sold_out.png";
import Categories from "../../assets/DashBoard/category.png";
import StatsBoard from "../StatsBoard/StatsBoard";
import ActionButton from "../ActionButton/ActionButton";
import { useState } from "react";
import StatsTable from "../StatsTable/StatsTable";
import SearchField from "../SearchField/SearchField";


const DashBoard = () => {
  const [searchText, setSearchText] = useState("");

  const dashboard_icons = [ShoppingCart, Value, OutOfStock, Categories];
  const dashboard_details = [
    "Total Products",
    "Total Store Value",
    "Out of Stock",
    "All Catogories",
  ];
  const dashboard_details_values = ["9", "$35,775.000", "1", "2"];


  const handleGetMoreDetails = () => {};

  const handleSearch = () => {
  setSearchText("");
  };

  //dashboard table

  const units_statsTable_headers = [
    "Name",
    "Category",
    "Price",
    "Quantity",
    "Value",
    "Action",
  ];

  const units_tableFieldMapping = [
    "name",
    "category",
    "price",
    "quantity",
    "value",
    "action",
  ];

  const units_statsTable_data = [
    {
      name: "Wireless Bluetooth",
      category: "Electronics",
      price: "$12",
      quantity: "15",
      value: "$180",
      action: (
        <div className={styles.action_buttons_wrapper}>
          <ActionButton
            buttonText={"Delete"}
            click={handleGetMoreDetails}
          ></ActionButton>
          <ActionButton
            buttonText={"Edit"}
            click={handleGetMoreDetails}
          ></ActionButton>
        </div>
      ),
    },
    {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
      {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
      {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
      {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
      {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
      {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
      {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
      {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
      {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
      {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
      {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
      {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
      {
        name: "Wireless Bluetooth",
        category: "Electronics",
        price: "$12",
        quantity: "15",
        value: "$180",
        action: (
          <div className={styles.action_buttons_wrapper}>
            <ActionButton
              buttonText={"Delete"}
              click={handleGetMoreDetails}
            ></ActionButton>
            <ActionButton
              buttonText={"Edit"}
              click={handleGetMoreDetails}
            ></ActionButton>
          </div>
        ),
      },
  ];

  //profile Approval

  return (
    <div className={styles.dashboard_wrap}>
      <StatsBoard
        boardName="Inventory Status"
        statIcons={dashboard_icons}
        statNames={dashboard_details}
        statValues={dashboard_details_values}
      ></StatsBoard>
        <StatsTable
          tableTitle={"DashBoard"}
          tableHeaders={units_statsTable_headers}
          tableData={units_statsTable_data}
          tableFieldMapping={units_tableFieldMapping}
          tableActionsElement={
            <div className={styles.approvals_stats_table_actions}>
              <SearchField searchText={searchText} onSearch={handleSearch} />
            </div>
          }
        ></StatsTable>
    </div>
  );
};

export default DashBoard;
