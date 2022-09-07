import React from 'react'
import { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import SpinnerLoading from './SpinnerLoading';
import {getData} from '../mocks/mockData';
import {useParams} from 'react-router-dom';


export default function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const{categoryId}= useParams();

  useEffect(() => {
    /* mockData */
    /* getData.then(res => setData(res)) */
    getData
      .then((res) => {
        if(categoryId) {
          setData(res.filter((item)=> item.category === categoryId));
        } else {
          setData(res);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
      
  }, [categoryId])


  return (
    <>
    {/* <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
    </Toast.Header> 
    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
  </Toast> */}
    {loading ? <SpinnerLoading />: <ItemList data={data} />}
    </>
  )
}
