import React from 'react';
import DropDown from '../../../../grains/dropdown';

function DynamicContentDropdown(props) {
  const { onChange, className, dynamic_content } = props;
  const options = [
    {
      id: 'orderSterling',
      title: 'Order_ID_Sterling'
    },
    {
      id: 'orderGenesis',
      title: 'Order_ID_Genesis'
    },
    {
      id: 'orderDate',
      title: 'Order_Date'
    },
    {
      id: 'deliveryDate',
      title: 'Delivery_date'
    },
    {
      id: 'userName',
      title: 'User_Name'
    },
    {
      id: 'totalUnits',
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