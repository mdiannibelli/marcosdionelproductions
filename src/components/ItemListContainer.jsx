import React from 'react'
import Toast from 'react-bootstrap/Toast';
import ItemCount from './ItemCount';

export default function ItemListContainer() {

  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} productos`)
  }

  return (
    <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
  </Toast>
  )
}
