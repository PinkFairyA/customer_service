import React from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <nav>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/1">Ticket Detail</Link>
            </div>
        </nav>
    );
}