import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import "./style/css/main.css"

//Views
import App from './App'


const root = document.querySelector("#__body");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);