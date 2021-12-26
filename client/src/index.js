import React from 'react';
import { render }from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import dotenv from 'dotenv';
import store from './redux/store.js';
import App from './App';
 
dotenv.config();
process.env.CI = false;
axios.defaults.baseURL = process.env.REACT_APP_SERVER || 'http://localhost:3001';

render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

