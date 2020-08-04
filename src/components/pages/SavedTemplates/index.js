import React from 'react';
import { withRouter } from "react-router";
import Table from 'react-bootstrap/Table';
import {
  StyledHeader,
  StyledContainer,
  StyledTableHead,
  StyledCell,
  StyledCellChangesSection,
  StyledSearchButton
} from './styled';
import Button from '../../modules/Button';
import { savedTemplatesList } from '../../../mockData/templates';

function SavedTemplates(props) {
  const { headers, data } = savedTemplatesList;
  function onClick(e) {
    const { name, id } = e.target;
    if (name === 'edit') {
      props.history.push('/editTemplate', {
        templateId: id
      });
    }
  }
  return (
    <StyledContainer>
      <StyledHeader>List of Templates</StyledHeader>
      <Table striped bordered hover>
        <StyledTableHead>
          <tr>
            {headers.map((columnName) => <th>{columnName}</th>)}
            <th>Changes</th>
          </tr>
        </StyledTableHead>
        <tbody>
          {data.map((cellData) => {
            return (
              <tr>
                {headers.map((columnName) => <StyledCell>{cellData[columnName]}</StyledCell>)}
                <StyledCellChangesSection>
                  <StyledSearchButton id={cellData['Template ID']} name='view' onClick={onClick} icon='fa-search' text='View' />
                  <Button id={cellData['Template ID']} name='edit' onClick={onClick} icon='fa-pencil' text='Edit' />
                </StyledCellChangesSection>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </StyledContainer>
  )
}

export default withRouter(SavedTemplates);