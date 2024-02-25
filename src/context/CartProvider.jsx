import React from 'react'
import { useContext,createContext } from 'react'
import { useReducer } from 'react'
const CartContext=createContext()
function reducer(cart,action){
  switch(action.type){
    case "ADD_TO_CART":
      return [...cart,action.payload]
    case "INCREASE_QTY":
        return cart.map((item)=>{
          if(item.id===action.payload){
            return {...item,quantity:item.quantity+1}
          }
          return item
        })
    case "DECREASE_QTY":
      return cart.map((item)=>{
        if(item.id===action.payload){
          return {...item,quantity:item.quantity-1}
        }
        return item
      })
    case "REMOVE_ITEM":
      return cart.filter((item)=>item.id!==action.payload)
  }
}
function CartProvider({children}) {
 
  const [ cart,dispatch]=useReducer(reducer,[])

 function addToCartDispatch(newItem){ 
  dispatch({
    type:"ADD_TO_CART",payload:newItem
  })
}

function increaseQty(id){
  dispatch({
    type:"INCREASE_QTY",
    payload:id
  })

}

function decreaseQty(id){
  dispatch({
    type:"DECREASE_QTY",
    payload:id
  })

}

function removeItem(id){
  dispatch({
    type:"REMOVE_ITEM",
    payload:id
  })
}

  return <>
  <CartContext.Provider value={{cart,dispatch, addToCartDispatch,increaseQty,decreaseQty,removeItem}}>
  {children}
  </CartContext.Provider>
  </>
}
export function useCart(){
 return  useContext(CartContext)
}

export default CartProvider