import StatsBoard from "../StatsBoard/StatsBoard";
import styles from "./Product.module.css";
import IT from "../../assets/Product/It_logo.png";
import Sports from "../../assets/Product/sport.png";
import Grocery from "../../assets/Product/grocery.png";
import Furniture from "../../assets/Product/furniture.png";
import StatsTable from "../StatsTable/StatsTable";

const Product = () => {
  const product_icons = [IT, Sports, Grocery, Furniture];
  const product_details = [
    "IT Products",
    "Sports Product",
    "Grocery Product",
    "Furniture Products",
  ];
  const product_details_values = ["15", "42", "50", "5"];

  //stats_table

  const units_statsTable_headers = [
    "Sr No",
    "Name",
    "Category",
    "Stock",
    "Price",
  ];

  const units_tableFieldMapping = [
    "sr_no",
    "name",
    "category",
    "stock",
    "price",
  ];

  const units_statsTable_data = [
    {
      sr_no: "1",
      name: "laptop",
      category: "IT",
      stock: "12",
      price: "$150",
    },
    {
        sr_no: "2",
        name: "Mouse",
        category: "IT",
        stock: "10",
        price: "$170",
      },
      {
        sr_no: "3",
        name: "Bats",
        category: "Sports",
        stock: "13",
        price: "$50",
      },
      {
        sr_no: "4",
        name: "Chair",
        category: "Furniture",
        stock: "5",
        price: "$200",
      },
      {
        sr_no: "5",
        name: "Tissue",
        category: "Grocery",
        stock: "50",
        price: "$5",
      },
      {
        sr_no: "6",
        name: "Speaker",
        category: "IT",
        stock: "8",
        price: "$100",
      },
      {
        sr_no: "7",
        name: "Table",
        category: "Furniture",
        stock: "10",
        price: "$250",
      },
      {
        sr_no: "8",
        name: "Keyboard",
        category: "IT",
        stock: "12",
        price: "$150",
      },
      {
        sr_no: "9",
        name: "Sofa",
        category: "Furniture",
        stock: "12",
        price: "$100",
      },
      {
        sr_no: "10",
        name: "Vegetables",
        category: "Grocery",
        stock: "5",
        price: "$20",
      },
      
  ];

  return (
    <div className={styles.product_wrap}>
      <StatsBoard
        boardName="Products Status"
        statIcons={product_icons}
        statNames={product_details}
        statValues={product_details_values}
      ></StatsBoard>
        <StatsTable
          tableTitle={"Products"}
          tableHeaders={units_statsTable_headers}
          tableData={units_statsTable_data}
          tableFieldMapping={units_tableFieldMapping}
        ></StatsTable>
    </div>
  );
};

export default Product;
