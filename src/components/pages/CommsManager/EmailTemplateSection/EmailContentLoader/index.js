import React from 'react';
import DropDown from '../../../../grains/dropdown';

function EmailContentLoader(props) {
  const { onChange, className, email_content_loader } = props;
  const options = [
    {
      id: 'Load Communication Email',
      title: 'Load Communication Email'
    }
  ]
  return (
    <DropDown
      className={className}
      name="Email Content Loader"
      id="email_content_loader"
      options={options}
      onChange={onChange}
      selectedOption={email_content_loader}
    />
  )
}

export default EmailContentLoader;