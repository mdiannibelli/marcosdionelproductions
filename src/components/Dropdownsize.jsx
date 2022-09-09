import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Dropdownsize({dataDetail}) {
  return (
    <DropdownButton id="dropdown-item-button" title="Size" variant="outline-secondary" className="d-grid gap-2" style={{width:'400px', marginTop:'10px'}}>
      <Dropdown.Item as="button">{dataDetail.size1}</Dropdown.Item>
      <Dropdown.Item as="button">{dataDetail.size2}</Dropdown.Item>
      <Dropdown.Item as="button">{dataDetail.size3}</Dropdown.Item>
    </DropdownButton>
  )
}
