import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './app/store.js'
import './index.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


const root = ReactDOM.createRoot(document.getElementById('myRoot'));
root.render(
  <Provider store={store}>
  {/* <Provider> */}
    <App />
  </Provider>
);
