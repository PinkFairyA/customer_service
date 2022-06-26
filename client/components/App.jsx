import React from 'react';
import Nav from './Nav.jsx';
import AgentPortal from './AgentPortal.jsx';

//wrap the element that will redirect away from with Link
//make sure to specify the route you want it to take, and keep this route in mind for setting up the index.js file
export default function App(){
    return(
        <div>
            < Nav />
            <AgentPortal/>
        </div>
    );
}