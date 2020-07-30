import React from 'react';
import Label from '../../../../grains/label';
import { StyledContainer, StyledOrderTypes, StyledChecker, StyledOrderValue } from './styled';

function EmailTriggers(props) {
  const { onChange, email_order_types, email_order_checker, email_order_status } = props;
  const orderTypes = [
    {
      id:'order_status',
      title: 'Order Status'
    },
    {
      id:'order_date',
      title: 'Order Date'
    },
    {
      id:'sterling_order_status',
      title: 'Sterling Order Status'
    }
  ];
  const orderOperators = [
    {
      id:'equal',
      title: '='
    },
    {
      id:'not_equal',
      title: '!='
    },
  ];
  const orderStatus = [
    {
      id:'order_confirmed',
      title: 'Order Confirmation'
    },
    {
      id:'order_ack',
      title: 'Order Acknowledged'
    },
    {
      id:'sterling_order_status_value',
      title: 'Sterling Order Status'
    },
    {
      id:'pickup_confirmed',
      title: 'Pickup Confirmed'
    },
    {
      id:'order_confirmed',
      title: 'Order Confirmed'
    }
  ];
  return (
    <StyledContainer>
      <Label id="order">
        {"Add Email triggers"}
      </Label>
      <StyledOrderTypes selectedOption={email_order_types} id='email_order_types' name="Order Varients" options={orderTypes} onChange={onChange} />
      <StyledChecker selectedOption={email_order_checker} id="email_order_checker" name="Operator" options={orderOperators} onChange={onChange} />
      <StyledOrderValue selectedOption={email_order_status} id="email_order_status" name="Order Status" options={orderStatus} onChange={onChange} />
    </StyledContainer>
  )
}

export default EmailTriggers;