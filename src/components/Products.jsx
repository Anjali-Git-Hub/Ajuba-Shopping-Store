import React from 'react'
import { data } from '../data/products.js'
import Product from './Product'
import styles from './Products.module.css'
import Container from '../UI/Container'
function Products() {
  return (
    <Container>
      <h1 className={styles.hd}>Best of Ajuba Store</h1>
      <div className={styles.products}>
      {
        data.map((product)=><Product key={product.id} {...product}/>)
      }
      </div>

      </Container>
  )
}

export default Products