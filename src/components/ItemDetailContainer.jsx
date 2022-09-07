import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { getData } from '../mocks/mockData';
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer() {

    const [dataDetail, setDataDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const{id}= useParams();

    useEffect(() => {
      getData.then((res) => setDataDetail(res.find((item) => item.id === id))) 
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
    }, [id])
    

  return (
    <ItemDetail dataDetail={dataDetail} />  
  )
}
