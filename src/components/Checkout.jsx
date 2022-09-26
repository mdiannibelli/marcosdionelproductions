import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { db } from '../firebase/firebase';
import AlertCheckout from './AlertCheckout';
import SpinnerLoading from './SpinnerLoading';
import { useForm } from "react-hook-form";


export default function Checkout() {
    const [buyer, setBuyer] = useState({});
    const [orderId, setOrderId] = useState('');
    const {cart, cartTotal, clear} = useCart();
    const [alert, setAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const databuyer = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]:e.target.value
        })
    }
    /* console.log(buyer) */


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => { 
        if(errors.register > 0) {
        setAlert(true)
        console.log("aca")        
        
    }else {
        setAlert(false)    
        setLoading(true)
        const sales = collection(db, "orders")
        addDoc(sales, {
            buyer,
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        })
        .then((res) => {
            setOrderId(res.id)
            clear()
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }};
    

    /* const ordenCheckout = (e) => {
        e.preventDefault()
        if(Object.values(buyer).length !== 9) {
            setAlert(true)        
            
        }else {
            setAlert(false)    
            setLoading(true)
            const sales = collection(db, "orders")
            addDoc(sales, {
                buyer,
                items: cart,
                total: cartTotal(),
                date: serverTimestamp()
            })
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
        }
    } */

/* console.log(Object.values(buyer)) */

if(loading) {
    return ( <SpinnerLoading/>)
}
  return (
    <>
    <div>
       {!orderId ? <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='formCheckout' style={{display:'flex', justifyContent:'center' }}>
            <div className='formcheck' style={{display:'flex', flexDirection:'column'}}>
            <Row className="mb-3">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Full Name">
                <Form.Control 
                type="fullname" 
                placeholder="fullname" 
                name="fullname"
                {...register('fullname', {
                    required: true,
                    maxLength: 18
                })}
                onChange={databuyer}
                />
                {errors.fullname?.type === 'required' && <p style={{color:'red', fontSize:'0.9rem'}}>The field is required</p>}
                {errors.fullname?.type === 'maxLength' && <p style={{color:'red', fontSize:'0.9rem'}}>The field must be less than 18 characters </p>}
                
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel
                controlId="floatingSelectGrid"
                label="Genre"
                >
                <Form.Select aria-label="Floating label select example" name="genre"
                {...register('genre', {
                    required: false,
                })}
                onChange={databuyer}
                >
                    <option>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Form.Select>
                </FloatingLabel>
            </Col>
            </Row>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="dni"
                placeholder="dni"
                name="dni"
                {...register('dni', {
                    required: true,
                    maxLength: 11
                })}
                onChange={databuyer}
                
            />
            {errors.dni?.type === 'required' && <p style={{color:'red', fontSize:'0.9rem'}}>The field is required</p>}
            {errors.dni?.type === 'maxLength' && <p style={{color:'red', fontSize:'0.9rem'}}>The field must be less than 11 characters </p>}
            <label htmlFor="floatingPasswordCustom">DNI</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                name="email"
                {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })}
                onChange={databuyer}
            />
            {errors.email?.type === 'required' && <p style={{color:'red', fontSize:'0.9rem'}}>The field is required</p>}
            {errors.email?.type === 'pattern' && <p style={{color:'red', fontSize:'0.9rem'}}>Email format incorrect</p>}
            <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="phone"
                placeholder="123456789"
                name="phone"
                {...register('phone', {
                    required: true,
                    maxLength: 10
                })}
                onChange={databuyer}
            />
            {errors.phone?.type === 'required' && <p style={{color:'red', fontSize:'0.9rem'}}>The field is required</p>}
            {errors.phone?.type === 'maxLength' && <p style={{color:'red', fontSize:'0.9rem'}}>The field must be less than 10 characters </p>}
            <label htmlFor="floatingInputCustom">Phone</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="country"
                placeholder="country"
                name="country"
                {...register('country', {
                    required: true,
                    maxLength: 14
                })}
                onChange={databuyer}
            />
            {errors.country?.type === 'required' && <p style={{color:'red', fontSize:'0.9rem'}}>The field is required</p>}
            {errors.country?.type === 'maxLength' && <p style={{color:'red', fontSize:'0.9rem'}}>The field must be less than 14 characters </p>}
            <label htmlFor="floatingPasswordCustom">Country</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="adress"
                placeholder="adress"
                name="adress"
                {...register('adress', {
                    required: true,
                    maxLength: 18
                })}
                onChange={databuyer}
            />
            {errors.adress?.type === 'required' && <p style={{color:'red', fontSize:'0.9rem'}}>The field is required</p>}
            {errors.adress?.type === 'maxLength' && <p style={{color:'red', fontSize:'0.9rem'}}>The field must be less than 18 characters </p>}
            <label htmlFor="floatingPasswordCustom">Adress</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="city"
                placeholder="city"
                name="city"
                {...register('city', {
                    required: true,
                    maxLength: 18
                })}
                onChange={databuyer}
            />
            {errors.city?.type === 'required' && <p style={{color:'red', fontSize:'0.9rem'}}>The field is required</p>}
            {errors.city?.type === 'maxLength' && <p style={{color:'red', fontSize:'0.9rem'}}>The field must be less than 18 characters </p>}
            <label htmlFor="floatingPasswordCustom">City</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="postalcode"
                placeholder="postalcode"
                name="postalcode"
                {...register('postalcode', {
                    required: true,
                    maxLength: 5
                })}
                onChange={databuyer}
            />
            {errors.postalcode?.type === 'required' && <p style={{color:'red', fontSize:'0.9rem'}}>The field is required</p>}
            {errors.postalcode?.type === 'maxLength' && <p style={{color:'red', fontSize:'0.9rem'}}>The field must be less than 5 characters </p>}
            <label htmlFor="floatingPasswordCustom">Zip/Postal Code</label>
            </Form.Floating>
            <div className="d-grid gap-2">
            <Button variant="primary" size="lg" type='submit'>
                Submit
            </Button>
            </div>
            </div>
            </div>
            </form>
            {alert && <AlertCheckout/>}
    </div>
    :
    
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
        
        <div >
        <h1 style={{textAlign:'center'}}>Thank you for buying!</h1>
        <h2>Your oder is: {orderId}</h2>
        </div>
        <div>
        <Button variant="primary" size="lg" onClick={() => navigate('/') }>
        Back to the store
      </Button>
      </div>
    </div>
    }
    </div>
  </>

  )
}
