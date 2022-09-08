import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <div className='formContainer'>
    <Form style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="password" placeholder="Full Name" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Select className='mb-4'>
          <option>English</option>
          <option>Español</option>
        </Form.Select>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
  )
}
