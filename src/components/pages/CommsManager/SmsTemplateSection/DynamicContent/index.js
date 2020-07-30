import React from 'react';
import DropDown from '../../../../grains/dropdown';

function DynamicContentDropdown(props) {
  const { onChange, className, dynamic_content } = props;
  const options = [
    {
      id: 'Order ID',
      title: 'Order ID'
    },
    {
      id: 'Order Date',
      title: 'Order Date'
    },
    {
      id: 'Delivery Date',
      title: 'Delivery Date'
    }
  ]
  return (
    <DropDown
      className={className}
      name="Dynamic Content"
      id="dynamic_content"
      options={options}
      onChange={onChange}
      selectedOption={dynamic_content}
    />
  )
}

export default DynamicContentDropdown;