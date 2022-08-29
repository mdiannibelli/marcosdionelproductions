import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ItemCount({initial, stock, onAdd}) {
    const [counter, setCounter] = useState(initial);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }
  return (

    <Card  bg="light" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Text>
          Some description of the product
        </Card.Text>
        <div className='counter'>
        <Button disabled={counter <= 1} className='buttonCounter' size="sm" variant="outline-dark" onClick={decrease}>-</Button>
            <h1>{counter}</h1>
        <Button disabled= {counter >= stock} className='buttonCounter2' size="sm" variant="outline-dark" onClick={increase}>+</Button>
        </div>
        <div>
        <Button disabled= {stock <= 0} onClick={() => onAdd(counter)} variant="outline-dark">Add product to cart</Button>
        </div>
      </Card.Body>
    </Card>
  )
}
