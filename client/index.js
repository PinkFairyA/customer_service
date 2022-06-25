import React from 'react';
import ReactDOM from 'react-dom/client';
// import store from './app/store.js';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import all route files
import App from './containers/App.jsx';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


const root = ReactDOM.createRoot(document.getElementById('myRoot'));
root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
  // </Provider>
);
