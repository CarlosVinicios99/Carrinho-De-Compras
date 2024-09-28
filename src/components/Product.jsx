import React, { useState } from 'react'

const Product = ({product, onAddToCart}) => {

    const [quantity, setQuantity] = useState(1)

    return (
        <div className="product">
            <img src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <div className="cart-buttons">
                <select onChange={(e) => setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((op) => (
                        <option key={op + 1} value={op + 1}>{op + 1}</option>
                    ))}
                </select>
                <button onClick={() => onAddToCart(product, quantity)}>
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    )

}
export default Product