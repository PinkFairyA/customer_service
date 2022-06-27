import React, { Component, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/loginstyles.scss';
import { logIn } from '../actions/actions.js';


export default function Login(){
    // useEffect(() => {
    //     location.reload();
    // })
    const dispatch = useDispatch();
    const userNameRef = useRef(null);
    const passRef = useRef(null);
    const handleSubmit = () => {
        console.log(userNameRef.current.value, passRef.current.value);
        // send a POST request to '/login', request body should have a JSON encoded
        // object of {username: userNameRef, password: passRef}
         const userNameVal = userNameRef.current.value;
         const passwordVal = passRef.current.value;
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: userNameVal, 
                password: passwordVal})
        }
        )
        .then(data => data.json())
        .then(data => {
            if(data === 'Success'){
                dispatch(logIn());
            }else{
                window.alert('Incorrect username or password')
            }
        })
    }
    
    return(
        <div>
           <main id="mainpage">
                <div id="login-container">
                    <h4>Login</h4>
                    <div className='username-container'>
                        <label htmlFor='username-input'>Username:</label>
                        <input type='text' id='username-input' ref={userNameRef}/>
                    </div>
                    <div className='password-container'>
                        <label htmlFor='password-input'>Password:</label>
                        <input type='password' id='password-input' ref={passRef}/>
                    </div>
                    <button id="button" onClick={handleSubmit}>Submit</button>
                </div>
           </main>
        </div>
    );
}

//jwt steps: if we get to this...
/*
https://www.robinwieruch.de/react-router-authentication/

backend
https://siddharthac6.medium.com/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e

Step 1 - The React App requests a jwt from the server when the user wants to sign on, deletes token when logging out
            [-] onclick event handler
            [ ] callback for event handler in parent component (App.jsx?),
                which sets the token returned from server using the setToken() method
            [ ] callback for another onclick event handler (App.jsx again?) for logout,
                which sets token to null using setToken()
Step 2 - The server generates a jwt using a private key and sends the jwt back to the React App
Step 3 - The React App stores this jwt and sends it to the server whenever the user needs to make a request
Step 4 - The server verifies the jwt using a public key and reads the payload
         to determine which user is making the request.
*/


/*
BACKEND REQUESTS:
  - Add a column of type varchar to the user table to store SSID cookie

*/


/*
APP Routing

 - Check for cookies
    - TRUE: make a 
    - FALSE: useNavigate to '/login'
*/

/*
 handleSubmit
    - send a POST request to '/login' with a JSON encoded body
        - the body should be an object { username: username_value, password: password_value }
    - if server response is success: invoke useNavigate(locationState) to direct to agent portal
        - navigate("...", { replace: true }) clear out browser stack

*/