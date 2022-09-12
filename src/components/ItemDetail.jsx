import React from 'react';
import Dropdownsize from './Dropdownsize';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';



export default function ItemDetail({dataDetail}) {
    const onAdd = () => {
        console.log(`You've bought ${counter} ${name}`)
        setBuy(true);
      }
  const [counter, setCounter] = useState(1);
  const [buy, setBuy] = useState(false);
  const {name, descriptionadded, img, price, stock} = dataDetail;
  const navigate = useNavigate();
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
                <text className='pDetail'>{descriptionadded}</text>
            </div>

    </div>
    )
}
