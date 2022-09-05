import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
const Glovesimg = require.context('../assets/img/products/gloves', true);

const productDetail =
    { id: 1, name: "Blue Gloves", category:"gloves", description: 'Our Original Leather Boxing Gloves boast the quality and attention to detail you would expect from Revgear at an affordable price point. The simple, no-frills design is ideal for entry-level participants who want a high quality glove that is built to last through countless rigorous training sessions. Enjoy a comfortable, secure fit so you can focus on your performance. Choose your favorite color combination to match your unique sense of style.', price: "45", stock:5, img: Glovesimg('./bluegloves.png')}



export default function ItemDetailContainer() {

    const [dataDetail, setDataDetail] = useState({});
    useEffect(() => {
    
        const getDataDetail = new Promise(resolve => {
        setTimeout(() => {
            resolve(productDetail)
        }, 3000);
      })

      getDataDetail.then(res => setDataDetail(res));
    }, [])
    

  return (
    <ItemDetail dataDetail={dataDetail} />  
  )
}
