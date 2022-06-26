import React from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import '../styles/navbarstyles.scss';
import logo from '../../public/pinkfairylogo.png';

export default function Nav(){
    return(
        <nav>
            <div id="inside-nav">
                <img id="logo" src={logo}/>
                <div id="right-side">
                    <Link to="/login"><h4>Login</h4></Link>
                    <Link to="/1"><h4>Ticket Detail</h4></Link>
                    <h4>Archive</h4>
                    <h4>Unread</h4>
                    <h4>Settings</h4>
                    <h4>LogOut</h4>
                </div>
            </div>
        </nav>
    );
}