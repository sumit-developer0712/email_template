import React from 'react';
import DropDown from '../../../../grains/dropdown';

function DynamicContentDropdown(props) {
  const { onChange, className, dynamic_content } = props;
  const options = [
    {
      id: 'OrderID',
      title: 'Order ID'
    },
    {
      id: 'OrderDt',
      title: 'Order Date'
    },
    {
      id: 'DeliveryDt',
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