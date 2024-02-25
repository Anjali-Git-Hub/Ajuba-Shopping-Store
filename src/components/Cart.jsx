import React from 'react'
import { useCart } from '../context/CartProvider'
import CartItem from './CartItem'
import styles from './Cart.module.css'
function Cart() {
  const {cart} = useCart()
  if(cart.length===0) return <h1>No item is in cart</h1>
  
  const totalPrice=cart.reduce((accumulator,productObj)=>{
    return accumulator+productObj.price*productObj.quantity
  },0
  )
  return <div className={styles.cart}>
    <h2 className={styles.cartHeading}>Shopping Cart</h2>
     {
    cart.map((item)=><CartItem key={item.id} {...item}/>)
  }
  <h3>Total Price: &#8377;  {totalPrice}</h3>
  </div>
}

export default Cart