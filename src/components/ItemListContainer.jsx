import React from 'react'
import { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const Glovesimg = require.context('../assets/img/products/gloves', true);

const products = [
  { id: 1, name: "Blue Gloves", description: "Blue professional boxing gloves for competitions", price: "45", img: Glovesimg('./bluegloves.png')},
  { id: 2, name: "Red Gloves", description: "Red professional boxing gloves for competitions", price: "45", img: Glovesimg('./redgloves.png')},
  { id: 3, name: "White Gloves", description: "White professional boxing gloves for competitions", price: "50", img: Glovesimg('./whitegloves.png')},
  { id: 4, name: "Snake White Gloves", description: "Snake white professional boxing gloves for competitions", price: "60", img: Glovesimg('./snakewhitegloves.png')},
  { id: 5, name: "Snake Yellow Gloves", description: "Snake yellow professional boxing gloves for competitions", price: "60", img: Glovesimg('./snakeyellowgloves.png')},
]

export default function ItemListContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    }); 
    getData.then(res => setData(res))

  }, [])
  

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
    <ItemList data={data} />
  </Toast>
  )
}
