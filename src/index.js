import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import { transitions, positions, Provider as AlertProvider } from 'react-alert'
//import AlertTemplate from 'react-alert-template-basic'

import App from './App';
import reportWebVitals from './reportWebVitals';

const AlertTemplate = ({ style, options, message, close }) => (
  <div className="alert" style={style}>
    {options.type === 'info' && '!'}
    {options.type === 'success' && ':)'}
    {options.type === 'error' && ':('}
    {message}
    <button onClick={close}>X</button>
  </div>
)

// const AlertTemplate = ({ message, close }) => (
//   <div className="alert red-bg">
//     {message}
//     <button onClick={close}>X</button>
//   </div>
// );


// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 10000,
 
  
  // you can also just use 'scale'
  transition: transitions.SCALE
}



ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options} >
    <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
