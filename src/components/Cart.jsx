import React from 'react';
import { useCart } from '../context/CartContext';
import {Navigate, NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ItemCart from './ItemCart';
import { useState } from 'react';

export default function Cart() {
    const {cart} = useCart();
    const {cartTotal} = useCart();
    const {clear} = useCart();
    const navigate = useNavigate();
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
      <div className="d-grid gap-3" style={{justifyContent:'center'}}>
      <Button variant="primary" size="sm" onClick={clear}>Delete cart</Button>
      </div>
      <hr></hr>
      <div style={{display:'flex', justifyContent:'flex-end', alignItems:'flex-start', gap:'12px', padding:'24px'}}><h3 className='h4Detail' style={{color:'black', fontWeight:'300'}}>TOTAL: ${cartTotal()}</h3>
      <Button variant="danger" size="sm" onClick={()=>navigate('/checkout')}>Checkout</Button>
      </div>
    </>
  )
}
