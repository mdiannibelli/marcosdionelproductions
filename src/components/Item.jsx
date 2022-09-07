import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

const Item = ({info}) => {
  const navegate = useNavigate();
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
      <Button variant="outline-dark" onClick={() =>navegate(`/detail/${info.id}`)}>View product</Button>
    </Card>
  );
}

export default Item;
