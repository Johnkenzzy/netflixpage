import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './sections/home.js';
import Tv from './sections/Tv.js';
import Download from './sections/download.js';
import Everywhere from './sections/everywhere.js';
import Kids from './sections/kids.js';
import Fqa from './sections/fqa.js';
import reportWebVitals from './reportWebVitals';
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Tv />
    <Download />
    <Everywhere />
    <Kids />
    <Fqa />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
