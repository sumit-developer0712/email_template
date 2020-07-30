import React from 'react';
import DropDown from '../../../../grains/dropdown';

function DynamicContentDropdown(props) {
  const { onChange, className, dynamic_content } = props;
  const options = [
    {
      id: 'Order_ID_Sterling',
      title: 'Order_ID_Sterling'
    },
    {
      id: 'Order_ID_Genesis',
      title: 'Order_ID_Genesis'
    },
    {
      id: 'Order_Date',
      title: 'Order_Date'
    },
    {
      id: 'Delivery_date',
      title: 'Delivery_date'
    },
    {
      id: 'User_Name',
      title: 'User_Name'
    },
    {
      id: 'Total_units',
      title: 'Total_units'
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