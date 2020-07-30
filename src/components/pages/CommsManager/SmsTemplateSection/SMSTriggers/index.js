import React from 'react';
import Label from '../../../../grains/label';
import { StyledContainer, StyledOrderTypes, StyledChecker, StyledOrderValue } from './styled';

function SMSTriggers(props) {
  const { onChange, order_types, order_checker, order_status } = props;
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
    }
  ];
  return (
    <StyledContainer>
      <Label id="order">
        {"Add SMS triggers"}
      </Label>
      <StyledOrderTypes selectedOption={order_types} id='order_types' name="Order Varients" options={orderTypes} onChange={onChange} />
      <StyledChecker selectedOption={order_checker} id="order_checker" name="Operator" options={orderOperators} onChange={onChange} />
      <StyledOrderValue selectedOption={order_status} id="order_status" name="Order Status" options={orderStatus} onChange={onChange} />
    </StyledContainer>
  )
}

export default SMSTriggers;