import React from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function SpinnerLoading() {
  return (
    <Button variant="light" disabled>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
  )
}
