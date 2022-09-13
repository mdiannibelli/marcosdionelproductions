import React from 'react';
import Dropdownsize from './Dropdownsize';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useCart } from '../context/CartContext';




export default function ItemDetail({dataDetail}) {
    
    const [counter, setCounter] = useState(1);
    const [buy, setBuy] = useState(false);
    const {name, descriptionadded, img, price, stock} = dataDetail;
    const navigate = useNavigate();
    const{addItem}= useCart()
    
    const onAdd = (id) => {
        let purchase = {
            id,
            name, 
            price, 
            stock, 
            img, 
            quantity:counter
        }
        setBuy(true);
        addItem(purchase);
      }
  
  return (
    <div className='detailContainer'>
        <div className='detailImg'>
            <img className='detailImg' src={img} alt="" />
            </div>
            <div className='detailContent'>
                <h1 className='h1Detail'>{name}</h1>
                <div className='counterDetail'>
                {!buy ? <ItemCount initial={1} stock={5} onAdd={onAdd} counter={counter} setCounter={setCounter}/> : <Button variant="primary" onClick={()=>navigate('/cart')}>View cart</Button>}
                <h4 className='h4Detail'>${price}</h4>
                </div>
                <Dropdownsize dataDetail={dataDetail} />  
                <hr></hr>
                <p className='pDetail'>{descriptionadded}</p>
            </div>

    </div>
    )
}
