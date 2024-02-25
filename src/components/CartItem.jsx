import React from 'react'
import { useCart } from '../context/CartProvider'
import styles from './CartItem.module.css'
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import {ImCross} from 'react-icons/im'

function CartItem({id,img,title,price,quantity}) {
  const{increaseQty,decreaseQty,removeItem}=  useCart()
  return (
    <div className={styles.cartItem}>
      
      <div className={styles.imageAndTitle}>
        <div className={styles.imgContainer}><img src={img} alt={title} className={styles.cartImage} /></div>
        <h3>{title}</h3>
      </div>

      <div className={styles.otherContent}>
    <div className={styles.qtyInput}>
      <button onClick={()=>{
            if(quantity<=1){
                return
            }
            decreaseQty(id)}}><AiOutlineMinus/></button>
      <span className={styles.quantityDisplay}>{quantity}</span>
      <button  onClick={()=>{increaseQty(id)}}><AiOutlinePlus/></button>
    </div>
    <p> &#8377; {price*quantity}</p>
    <button onClick={()=>{removeItem(id)}} className={styles.removeItemBtn}><ImCross/></button>
      </div>
    </div>
  )
}

export default CartItem