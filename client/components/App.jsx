import React, { useEffect } from 'react';
import Nav from './Nav.jsx';
import AgentPortal from './AgentPortal.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useNavigate, Outlet } from 'react-router';
import Login from './Login.jsx'
import { addTicketRows } from '../actions/actions.js';

export default function App(){
    const userloggedIn = useSelector((state) => state.customer.userloggedIn);
    const navigate = useNavigate();
    const dispatch = useDispatch();
        if(userloggedIn){
            fetch('/getTickets')
            .then((data) => data.json())
            .then((data) => dispatch(addTicketRows(data)));

            return(
                <div>
                    <Nav />
                    <Outlet />
                </div>
            );
        } else {
            //navigate('/login', { replace: true });
            return(
            <div>
                <Login />
            </div>
            );
        }
    // return(
    //     <div>
    //         <Nav />
    //         <AgentPortal/>
    //     </div>
    // );
}