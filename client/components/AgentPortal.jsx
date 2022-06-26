import React from "react";
import TicketRow from './TicketRow.jsx';
import { addTicketRows } from "../action/actions.js";
import { ADD_TICKET_ROWS } from "../constants/actionTypes.js";
import { useSelector, useDispatch } from "react-redux";

const AgentPortal = (props) => {
    const dispatch = useDispatch();
    const ticketRowElements = useSelector((state) => state.client.ticketRowElements);
    const ticketRowRender = [];

    const thTicketData = (str) => {
        return <th className='th-ticket-data'>{str}</th>
    };

    // iterate over ticketRowElements - creating a ticket row for each object within the array
    // push the ticket row to ticketRowRender
    ticketRowElements.forEach(el => {
        const {ticket_id, ticket_reason, ticket_status, create_tmstmp, first_name, last_name} = el;
        ticketRowRender.push(<TicketRow key={'tr_row' + ticket_id} idHTML={'tr_row' + ticket_id} 
        ticket_id={ticket_id} ticket_reason={ticket_reason} 
        ticket_status={ticket_status} client_name={first_name + ' ' + last_name} create_tmstmp={create_tmstmp}/>)
    })

    //<Link to={'/' + props.ticket_id<}>props.ticket_id<</Link>

    // UNCOMMENT WHEN BACK END CONNECTION IS WORKING
    // fetch('/getTickets')
    // .then(data => data.json())
    // .then(data => dispatch(ADD_TICKET_ROWS(data)))

    return(
        <div>
            TICKET TABLE
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
                <tbody>
                  {ticketRowRender}
                </tbody>
            </table>
        </div>
    )

};

export default AgentPortal;