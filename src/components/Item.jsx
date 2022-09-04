import React from 'react'
import Card from 'react-bootstrap/Card';

const Item = ({info}) => {
  return (
         <Card  bg="light" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={info.img} />
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Title>${info.price}</Card.Title>
        <Card.Text>
          {info.description}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Item;
