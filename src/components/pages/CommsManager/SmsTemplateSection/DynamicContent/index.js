import React from 'react';
import DropDown from '../../../../grains/dropdown';

function DynamicContentDropdown(props) {
  const { onChange, className, dynamic_content } = props;
  const options = [
    {
      id: 'Lowe\'s Order Updates: We\'ve received your order {orderNumber} and you\'re all set to receive updates on its status. Reply STOP to opt out.',
      title: 'Sample Order SMS Template'
    }
  ]
  return (
    <DropDown
      className={className}
      name="Sample SMS Template"
      id="dynamic_content"
      options={options}
      onChange={onChange}
      selectedOption={dynamic_content}
    />
  )
}

export default DynamicContentDropdown;