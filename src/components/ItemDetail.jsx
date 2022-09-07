import React from 'react'
import ItemCount from './ItemCount'

const onAdd = (quantity) => {
    alert("Hola")
  }

export default function ItemDetail({dataDetail}) {
  return (
    <div className='detailContainer'>
        <div className='detailImg'>
            <img className='detailImg' src={dataDetail.img} alt="" />
            </div>
            <div className='detailContent'>
                <h1 className='h1Detail'>{dataDetail.name}</h1>
                <div className='counterDetail'>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                <h4 className='h4Detail'>${dataDetail.price}</h4>
                </div>
                <hr></hr>
                <p className='pDetail'>{dataDetail.descriptionadded}</p>
            </div>

    </div>
    )
}
