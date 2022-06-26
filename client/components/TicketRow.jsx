import React from "react";
import { Link } from 'react-router-dom';

const TicketRow = (props) => {

    return (
        <tr id={props.idHTML}>
            <td className='td-ticket-data'>{props.ticket_id}</td>
            <td className='td-ticket-data'>{props.client_name}</td>
            <td className='td-ticket-data'>{props.ticket_reason}</td>
            <td className='td-ticket-data'>{props.ticket_status}</td>
            <td className='td-ticket-data'>{props.create_tmstmp}</td>
        </tr>
    )
};

export default TicketRow;