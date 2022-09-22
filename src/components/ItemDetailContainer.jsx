import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { getData } from '../mocks/mockData';
import {useParams} from 'react-router-dom';
import Dropdownsize from './Dropdownsize';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import SpinnerLoading from './SpinnerLoading';

export default function ItemDetailContainer() {

    const [dataDetail, setDataDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const{id}= useParams();


    // products w firebase
    useEffect(() => {
      const coleccionProductos = collection(db, "products")
      const referenciaDoc = doc(coleccionProductos, id)
      getDoc(referenciaDoc)
      .then((res)=>{
        setDataDetail({
          id:res.id,
          ...res.data()
        })
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    },[])


    // products w mock
   /*  useEffect(() => {
      getData.then((res) => setDataDetail(res.find((item) => item.id === id))) 
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
    }, [id]) */
    

  return (
    <>
    {loading ? <SpinnerLoading />: <ItemDetail dataDetail={dataDetail} />}
    </>
  )
}
