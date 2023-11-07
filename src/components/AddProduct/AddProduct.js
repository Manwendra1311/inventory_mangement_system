import styles from "./AddProduct.module.css";

const AddProduct = () => {
  return (
    <div className={styles.add_product_wrap}>
      <span className={styles.header}>Add Product</span>
      <form className={styles.add_product_form}>
        <div className={styles.input_wrap}>
          <div className={styles.field_wrap}>
            <label>Name</label>
            <input placeholder="Enter your name" />
          </div>
          <div className={styles.field_wrap}>
            <label>Category</label>
            <input placeholder="Enter your name" />
          </div>
        </div>
        <div className={styles.input_wrap}>
          <div className={styles.field_wrap}>
            <label>Stock</label>
            <input placeholder="Enter your name" />
          </div>

          <div className={styles.field_wrap}>
            <label>Price</label>
            <input placeholder="Enter your name" />
          </div>
        </div>
      </form>
      <button className={styles.add_product_button}>Add Product</button>
    </div>
  );
};

export default AddProduct;
