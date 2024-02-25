import React from 'react'
import { useCart } from '../context/CartProvider'
import styles from'./Product.module.css'
import { toast } from 'react-toastify';

function Product({id,title,img,price}) {
  const {cart, addToCartDispatch}=useCart()
  function handleAddToCart(){
    for(let item of cart){
      if(item.id===id){
        toast.error("Item already is in cart !!!")
        return ;
      }
        
    }
    const newItem={
      id:id,
      title:title,
      img:img,
      price:price,
      quantity:1
    }
  addToCartDispatch(newItem)
  toast.info("Item is added ")
  }
  return (
    <div className={styles.product}>

     <img src={img} alt={title}  className={styles.image}/>
     <p className={styles.title}>{title}</p>
     <p className={styles.price}> &#8377; {price}</p> 
     <button onClick={handleAddToCart} className={styles.addtocartBtn}>Add to cart</button>
    </div>
  )
}

export default Product