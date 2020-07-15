import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
require('dotenv').config({ path: '../.env' })
console.log(process.env.KEY);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);