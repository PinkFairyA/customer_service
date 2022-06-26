import React, { Component, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createHistory } from 'react-router';
import './loginstyles.scss';


export default function Login(){
    // useEffect(() => {
    //     location.reload();
    // })

    const userNameRef = useRef(null);
    const passRef = useRef(null);
    const handleSubmit = () => {
        console.log(userNameRef.current.value, passRef.current.value);
    }
    
    return(
        <div>
           <main>
                <div>
                    <h3>Hello</h3>
                    <div className='username-container'>
                        <label htmlFor='username-input'>Username</label>
                        <input type='text' id='username-input' ref={userNameRef}/>
                    </div>
                    <div className='password-container'>
                        <label htmlFor='password-input'>Password</label>
                        <input type='password' id='password-input' ref={passRef}/>
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
           </main>
        </div>
    );
}
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