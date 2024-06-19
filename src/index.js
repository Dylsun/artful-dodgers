// src/index.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import './stylesheets/App.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice.js';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
