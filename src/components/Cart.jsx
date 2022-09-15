import React from 'react';
import { useCart } from '../context/CartContext';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ItemCart from './ItemCart';

export default function Cart() {
    const {cart} = useCart();
    console.log('carrito', cart)

    if (cart.length === 0) {
      return (
        <>
        <h3 style={{display: 'flex', justifyContent: 'center', textTransform: 'uppercase'}}>The cart has no products</h3>
        <NavLink to='/' className='navbarCategory'>
          <div className="d-grid gap-1" style={{justifyContent:'center'}}>
            <Button variant="primary" size="lg" style={{textTransform:'uppcerase'}}>Return to the store</Button>
          </div>
        </NavLink>
        </>
      );
    }
  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
    </>
  )
}
