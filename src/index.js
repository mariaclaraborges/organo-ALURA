
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //strict mode: renderiza o componente duas vezes, uma vez com o modo estrito e outra sem o modo estrito
  <React.StrictMode>
    <App />  {/* This is the App component from src\App.js */}
  </React.StrictMode>
);

