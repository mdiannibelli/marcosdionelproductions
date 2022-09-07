import React from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function SpinnerLoading() {
  return (
    <div className="d-grid gap-2">
    <Button variant="light" size='lg' disabled>
      <Spinner
        position='middle-center'
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
    </div>
  )
}
