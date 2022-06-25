import React, {Component} from 'react';
import { Link } from "react-router-dom";

//wrap the element that will redirect away from with Link
//make sure to specify the route you want it to take, and keep this route in mind for setting up the index.js file
export default function App(){
    return(
        <div>
            <Link to="/login">
                <h3>To Login</h3>
            </Link>
        </div>
    );
}