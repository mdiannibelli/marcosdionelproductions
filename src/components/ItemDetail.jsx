import React from 'react'

export default function ItemDetail({dataDetail}) {
  return (
    <div className='detailContainer'>
        <div className='detailImg'>
            <img className='detailImg' src={dataDetail.img} alt="" />
            </div>
            <div className='detailContent'>
                <h1 className='h1Detail'>{dataDetail.name}</h1>
                <h4 className='h4Detail'>${dataDetail.price}</h4>
                <hr></hr>
                <p className='pDetail'>{dataDetail.description}</p>
            </div>

    </div>
    )
}
