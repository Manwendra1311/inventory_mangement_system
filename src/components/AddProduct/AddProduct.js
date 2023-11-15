import axios from "axios";
import styles from "./AddProduct.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = (props) => {

  const [name,setName]=useState("");
  const [category,setCategory]=useState("");
  const [stock,setStock]=useState("");
  const [price,setPrice]=useState("");
  const navigate=useNavigate();

  const [arr,setArr]=useState([]);

  const handleClick=()=>{
    setArr([name,category,stock,price])
    console.log(props.data);
  }

  const handelSubmit=()=>{
    const data={name: arr[0],category:arr[1],stock:arr[2],price:arr[3]};
    axios.post("http://localhost:3000/dashboardRoute/create-item",data)
    .then((res)=>{
      if(res.status===200){
        
      alert("Record added Successfully");
      navigate("/user")
    }
    else
    Promise.reject();
    })
    .catch((err)=>alert(err));

  }


  return (
    <div className={styles.add_product_wrap}>
      <span className={styles.header}>Add Product</span>
      <form className={styles.add_product_form} onSubmit={handelSubmit} action={"/user"}>
        <div className={styles.input_wrap}>
          <div className={styles.field_wrap}>
            <label>Name</label>
            <input placeholder="Enter the product name" onChange={(event)=>setName(event.target.value)}/>
          </div>
          <div className={styles.field_wrap}>
            <label>Category</label>
            <input placeholder="Enter the category" onChange={(event)=>setCategory(event.target.value)} />
          </div>
        </div>
        <div className={styles.input_wrap}>
          <div className={styles.field_wrap}>
            <label>Stock</label>
            <input placeholder="Enter the quantity" onChange={(event)=>setStock(event.target.value)}/>
          </div>

          <div className={styles.field_wrap}>
            <label>Price</label>
            <input placeholder="Enter the price" onChange={(event)=>setPrice(event.target.value)}/>
          </div>
        </div>
        <button className={styles.add_product_button} onClick={handleClick}>Add Product</button>
      </form>  
    </div>
  );
};

export default AddProduct;
