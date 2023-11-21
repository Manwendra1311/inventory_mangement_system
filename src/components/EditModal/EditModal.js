import React from 'react';
import styles from "./EditModal.module.css"
import axios from 'axios';
import { useState } from 'react';


function EditModal(props) {

    const [name,setName]=useState(props.data.name);
  const [category,setCategory]=useState(props.data.category);
  const [stock,setStock]=useState(props.data.stock);
  const [price,setPrice]=useState(props.data.price);

    const handleEdit=()=>{
        const data={name:name,category:category,stock:stock,price:price}
        axios.put("https://invetory-backend.onrender.com/dashboardRoute/upadate-item/"+props.id,data)
        .then((res)=>{
            if(res.status===200){
                alert("Record Updated Successfully");
                window.location.reload();
                props.state(false);
            }
            else
            Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return (
        <div className={styles.EditModalBackground}>
            <div className={styles.EditModalContainer}>
                <div className={styles.title}>
                    <h1>Edit Product</h1>
                <div className={styles.titleCloseBtn}>
                    <button onClick={() => props.state(false)}> X </button>
                </div>
                </div>
                <div className={styles.body}>
                    <p>Please select the details you want to edit.</p>
                    <form className={styles.form}>
                        <label>
                            Name:
                            <input type="text" defaultValue={name} name="name" onChange={(event)=>setName(event.target.value)} />
                        </label>
                        <label>
                            Price:
                            <input type="text" defaultValue={price} name="price" onChange={(event)=>setPrice(event.target.value)} />
                        </label>
                        <label>
                            Category:
                            
                            <input type="text" defaultValue={category} name="category" onChange={(event)=>setCategory(event.target.value)}></input>
                        </label>
                        <label>
                            Stock:
                            <input type="text" defaultValue={stock} name="quantity" onChange={(event)=>setStock(event.target.value)}/>
                        </label>
                    </form>

                </div>
                <div className={styles.footer}>
                    <button onClick={handleEdit}> Edit </button>
                    <button onClick={() => props.state(false)} id='cancelBtn'> Cancel </button>
                </div>
            </div>
        </div>
    )
}

export default EditModal