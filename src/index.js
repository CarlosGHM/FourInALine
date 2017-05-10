import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Board from './board'; 

const b = new Board();
ReactDOM.render(
  <App board={b} />,
  document.getElementById('root')
);
