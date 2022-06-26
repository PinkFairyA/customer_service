import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './app/store.js'
import { Provider } from 'react-redux';
import './index.scss';
import  CustomerDetailContainer  from './containers/CustomerDetailContainer.jsx'
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


const root = ReactDOM.createRoot(document.getElementById('myRoot'));
root.render(
  <Provider store={store}>
    <p>Go Team!</p>
    <CustomerDetailContainer />
    <p>Yeah Team!</p>
  </Provider>
);
