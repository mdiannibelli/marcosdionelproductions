import React from 'react'
import { useCart } from '../context/CartContext'

export default function ItemCart({ product }) {
    const {removeItem} = useCart()
  return (
    <div className='itemCart'>
    <img src={product.img} alt={product.name} />
      <div>
        <p>Name: {product.name}</p>
        <p>Amount: {product.quantity}</p>
        <p>Price: {product.price}</p>
        <button onClick={() =>removeItem(product.id)}>-</button>
        <p>Total: ${product.quantity * product.price}</p>
      </div>

    </div>
  )
}

