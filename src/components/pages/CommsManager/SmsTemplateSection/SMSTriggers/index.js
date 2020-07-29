import React from 'react';
import Label from '../../../../grains/label';
import { StyledContainer, StyledOrderTypes, StyledChecker, StyledOrderValue } from './styled';

function SMSTriggers(props) {
  const { onChange } = props;
  const orderTypes = [
    {
      id:'order_status',
      title: 'Order status'
    },
    {
      id:'order_date',
      title: 'Order_Date'
    },
    {
      id:'sterling_order_status',
      title: 'Sterling_Order_status'
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
      id:'equal',
      title: '='
    },
    {
      id:'not_equal',
      title: '!='
    },
  ];
  return (
    <StyledContainer>
      <Label id="order">
        {"Add SMS triggers"}
      </Label>
      <StyledOrderTypes id='order_types' name="Order Varients" options={orderTypes} onChange={onChange} />
      <StyledChecker id="order-checker" name="Operator" options={orderOperators} onChange={onChange} />
      <StyledOrderValue id="order-status" name="Order Status" options={orderStatus} onChange={onChange} />
    </StyledContainer>
  )
}

export default SMSTriggers;