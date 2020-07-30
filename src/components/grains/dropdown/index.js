import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DropDown(props) {
  const { className, id, name, options = [], onChange, selectedOption } = props;
  // Enable below code to show the selected option in the place of the dropdown
  // const isOptionSelected = !!selectedOption;
  // const selectedOptionDetails = options.find((option) => option.id === selectedOption) || {};
  // const titleToDisplay = isOptionSelected ? selectedOptionDetails.title : name;
  return (
    <Dropdown className={className}>
      <Dropdown.Toggle id={id}>
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item active={selectedOption === option.id} name={id} id={option.id} onClick={onChange}>{option.title}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDown;