import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import { addTicketRows } from '../actions/actions.js';
import '../styles/agentportal.scss';
import TicketRow from './TicketRow.jsx';

const AgentPortal = (props) => {
  const dispatch = useDispatch();
  const ticketRowElements = useSelector(
    (state) => state.customer.ticketRowElements
  );
  const ticketRowRender = [];

  const thTicketData = (str) => {
    return <th className='th-ticket-data'>{str}</th>;
  };

  // iterate over ticketRowElements - creating a ticket row for each object within the array
  // push the ticket row to ticketRowRender
  ticketRowElements.forEach((el) => {
    const {
      id,
      ticket_reason,
      ticket_status,
      create_tmstmp,
      first_name,
      last_name,
    } = el;
    ticketRowRender.push(
      <TicketRow
        key={'tr_row' + id}
        idHTML={'tr_row' + id}
        ticket_id={id}
        ticket_reason={ticket_reason}
        ticket_status={ticket_status}
        client_name={first_name + ' ' + last_name}
        create_tmstmp={create_tmstmp}
      />
    );
  });

  //<Link to={'/' + props.ticket_id<}>props.ticket_id<</Link>

  // UNCOMMENT WHEN BACK END CONNECTION IS WORKING
  fetch('/getTickets')
    .then((data) => data.json())
    .then((data) => dispatch(addTicketRows(data)));

  return (
    <div className='agent-portal-container'>
      <table className='agent-portal-ticket-table'>
        <thead>
          <tr className='tr-ticket-data'>
            {thTicketData('Id')}
            {thTicketData('Customer Name')}
            {thTicketData('Description')}
            {thTicketData('Status')}
            {thTicketData('Open Time')}
          </tr>
        </thead>
        <tbody>{ticketRowRender}</tbody>
      </table>
    </div>
  );
};

export default AgentPortal;
