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

    const ordenCheckout = (e) => {
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
    }

/* console.log(Object.values(buyer)) */

if(loading) {
    return ( <SpinnerLoading/>)
}
  return (
    <>
    <div>
       {!orderId ? <div>
            <form onSubmit={ordenCheckout}>
            <div className='formCheckout' style={{display:'flex', justifyContent:'center' }}>
            <div className='formcheck' style={{display:'flex', flexDirection:'column'}}>
            <Row className="mb-3">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Full Name">
                <Form.Control 
                type="fullname" 
                placeholder="fullname" 
                name="fullname"
                onChange={databuyer}
                />
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel
                controlId="floatingSelectGrid"
                label="Genre"
                >
                <Form.Select aria-label="Floating label select example" name="genre"
                onChange={databuyer}>
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
                onChange={databuyer}
            />
            <label htmlFor="floatingPasswordCustom">DNI</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={databuyer}
            />
            <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="phone"
                placeholder="123456789"
                name="phone"
                onChange={databuyer}
            />
            <label htmlFor="floatingInputCustom">Phone</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="country"
                placeholder="country"
                name="country"
                onChange={databuyer}
            />
            <label htmlFor="floatingPasswordCustom">Country</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="adress"
                placeholder="adress"
                name="adress"
                onChange={databuyer}
            />
            <label htmlFor="floatingPasswordCustom">Adress</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="city"
                placeholder="city"
                name="city"
                onChange={databuyer}
            />
            <label htmlFor="floatingPasswordCustom">City</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            <Form.Control
                id="floatingInputCustom"
                type="zip/postalcode"
                placeholder="zip-postalcode"
                name="zip-postalcode"
                onChange={databuyer}
            />
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
