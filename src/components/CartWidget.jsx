import React from 'react'
import Button from 'react-bootstrap/Button';
import Cartimg from '../assets/img/icons8-carrito-de-compras-30.png';
import { useCart } from '../context/CartContext';

export default function CartWidget() {
  const {cartQuantity} = useCart();  
  return (
    <>
    <Button variant="light"><img src={Cartimg}/></Button>
    <h5>{cartQuantity() || ''}</h5>
    </>
  )
}
