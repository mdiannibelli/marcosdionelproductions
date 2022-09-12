import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ItemCount({initial, stock, onAdd, counter, setCounter}) {

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }
  return (

    <Card  bg="light" style={{ width: '20rem', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', border:'none' }}>
        <div className='counter'>
        <Button disabled={counter <= 1} className='buttonCounter' size="sm" variant="outline-dark" onClick={decrease}>-</Button>
            <h1 className='h1Count'>{counter}</h1>
        <Button disabled= {counter >= stock} className='buttonCounter2' size="sm" variant="outline-dark" onClick={increase}>+</Button>
        </div>
        <div>
        <Button disabled= {stock <= 0} onClick={() => onAdd(counter)} variant="danger">Add product to cart</Button>
        </div>
    </Card>
  )
}
