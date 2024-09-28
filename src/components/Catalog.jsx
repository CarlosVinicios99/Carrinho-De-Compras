import {useState, useEffect} from 'react'
import productsData from '../data/products_mocks.json'
import Product from './Product'

const Catalog = () => {

  return (
    <div>
        <h1>Catálogo de Produtos</h1>
        <div className="product-container">
            {
                productsData.map(product => (
                    <Product key={product.id} product={product}/>
                ))
            }
        </div>
    </div>
  )

}
export default Catalog