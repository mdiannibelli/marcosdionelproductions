import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function AlertCheckout() {
    const [show, setShow] = useState(true);

    if (show) {  
  return (
    <Alert variant="danger" onClose={() => setShow(false)} dismissible style={{textAlign:'center', marginTop:'10px'}}>
        You must complete all the fields!
      </Alert>
  )
    }

}
