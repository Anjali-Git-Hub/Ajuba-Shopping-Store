import React from 'react'
import Products from './components/Products'
import CartProvider from './context/CartProvider'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <CartProvider>
      <ToastContainer position='bottom-right' newestOnTop={true} autoClose={700} hideProgressBar={true}/>
      <Header/>
   <Products/>
   </CartProvider>
  )
}

export default App