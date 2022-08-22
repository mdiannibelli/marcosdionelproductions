import React from 'react'
import Button from 'react-bootstrap/Button';
import Cartimg from '../assets/img/icons8-carrito-de-compras-30.png'

export default function CartWidget() {
  return (
    <Button variant="light"><img src={Cartimg}/></Button>
  )
}
