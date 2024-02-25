import React, { useEffect } from 'react'
import { useState } from 'react'
import Modal from '../UI/Modal'
import Cart from './Cart'
import styles from './Header.module.css'
import Container from '../UI/Container'
import {BsCartFill} from "react-icons/bs"
import { useCart } from '../context/CartProvider'
function Header() {
 const {cart}= useCart()
 const totalQty=cart.reduce((accumulator,productObj)=>accumulator+productObj.quantity,0)
  const [isModalOpen,setIsModalOpen]=useState(false)
  useEffect(()=>{
    if(isModalOpen){
      document.documentElement.style.overflowY="hidden"
    }
    else{
      document.documentElement.style.overflowY="scroll"
    }

  },[isModalOpen])
  return (
    <div className={styles.header}>
     <Container>
      <nav className={styles.nav}>
        <h1 style={{letterSpacing:"4px",
      textTransform:"uppercase"}}>Ajuba Store </h1>
        <button className={styles.showCartBtn}  onClick={()=>{setIsModalOpen(true)}}>
          <span className={styles.cartIconAndNumber}>
          <BsCartFill/>
          {totalQty>0 &&   <span className={styles.number}>{totalQty}</span>}
        
          <span>Cart</span>
          </span>
          </button>
      </nav>
      {isModalOpen &&
      <Modal setIsModalOpen={setIsModalOpen}>
        <Cart/>
      </Modal>
}
</Container>
    </div>
  )
}

export default Header