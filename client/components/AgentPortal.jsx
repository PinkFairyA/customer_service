import React from "react";
import TicketRow from './TicketRow.jsx';
import { addTicketRows } from "../action/actions.js";
import { ADD_TICKET_ROWS } from "../constants/actionTypes.js";
import { useSelector, useDispatch } from "react-redux";

const AgentPortal = (props) => {
    const dispatch = useDispatch();
    const ticketRowElements = useSelector((state) => state.client.ticketRowElements);

    const thTicketData = (str) => {
        return <th className='th-ticket-data'>{str}</th>
    };

    fetch('/getTickets')
    .then(data => data.json())
    .then(data => dispatch(ADD_TICKET_ROWS(data)))

    return(
        <div>
            TICKET TABLE
            <table className='agent-portal-ticket-table'>
                <tr className='tr-ticket-data'>
                    {thTicketData('Id')}
                    {thTicketData('Customer Name')}
                    {thTicketData('Description')}
                    {thTicketData('Status')}
                    {thTicketData('Open Time')}
                </tr>
                {ticketRowElements}
            </table>
        </div>
    )

};

export default AgentPortal;