import React from 'react'
import { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import SpinnerLoading from './SpinnerLoading';
import {getData} from '../mocks/mockData';
import {useParams} from 'react-router-dom';
import { useInsertionEffect } from 'react';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';


export default function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const{categoryId}= useParams();

  // products w firebase
  useEffect(() => { 
    setLoading(true);
    const products = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)) : collection(db, "products");
    getDocs(products)
    .then((res) => {
      const list = res.docs.map((product) => {
        return {
          id:product.id,
          ...product.data()
        }
      })
      setData(list)
    })
    .catch((error) =>console.log(error))
    .finally(() =>setLoading(false))
  }, [categoryId])
  



  // products w mock
  /* useEffect(() => { */
    /* mockData */
    /* getData.then(res => setData(res)) */
    /* getData
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
      
  }, [categoryId]) */


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
