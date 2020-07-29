import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DropDown(props) {
  const { className, id, name, options = [], onChange } = props;
  return (
    <Dropdown className={className}>
      <Dropdown.Toggle id={id}>
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item id={option.id} onClick={onChange}>{option.title}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDown;