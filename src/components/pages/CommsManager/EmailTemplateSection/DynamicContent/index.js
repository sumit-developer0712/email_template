import React from 'react';
import DropDown from '../../../../grains/dropdown';

function DynamicContentDropdown(props) {
  const { onChange, className, email_dynamic_content } = props;
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
      id="email_dynamic_content"
      options={options}
      onChange={onChange}
      selectedOption={email_dynamic_content}
    />
  )
}

export default DynamicContentDropdown;