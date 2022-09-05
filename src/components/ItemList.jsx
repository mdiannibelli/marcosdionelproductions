import React from 'react'
import Item from './Item'


export default function ItemList({data = []}) {
  return (
    <div className='itemListContainer'>
      {data.map(product =><Item key={product.id} info={product} />)}
    </div>
      
  )
}

