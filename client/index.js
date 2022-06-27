import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './app/store.js';
import { Provider } from 'react-redux';
import './index.scss';
import './styles/loginstyles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import all route files
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import  CustomerDetailContainer  from './containers/CustomerDetailContainer.jsx'
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

//after importing the file, add it as a route with the route url that was specified in its parent url component
const root = ReactDOM.createRoot(document.getElementById('myRoot'));
root.render(

<Provider store={store}>
  <BrowserRouter>
    <div>
<p>Go Team!</p>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<CustomerDetailContainer />}/>
      </Routes>
<p>Yeah Team!</p>
    </div>
  </BrowserRouter>
 </Provider>
);
