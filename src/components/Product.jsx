import React from 'react'

const Product = ({product}) => {

  return (
    <div className="product">
        <img src={product.image} alt={product.name}/>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <div className="cart-buttons">
            <select>
                <option value="">1</option>
            </select>
            <button>
                Adicionar ao carrinho
            </button>
        </div>
    </div>
  )

}
export default Product