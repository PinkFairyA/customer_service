import React, { useEffect } from 'react';
import Nav from './Nav.jsx';
import AgentPortal from './AgentPortal.jsx';
import { useSelector } from 'react-redux';
import { Redirect, useNavigate, Outlet } from 'react-router';
import Login from './Login.jsx'

export default function App(){
    const userloggedIn = useSelector((state) => state.customer.userloggedIn);
    const navigate = useNavigate();
        if(userloggedIn){
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