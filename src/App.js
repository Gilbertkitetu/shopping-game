import logo from './logo.svg';

import React from 'react';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

//import background image
//import blueCarbon from './backgrounds/blueCarbon.png';
import busket from './images/basket/shoppingbag.png';
//import components






import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <div className="header">
         <NavLink exact activeClassName="active" to="/" ><h1>Shopping Game</h1></NavLink>

         <div className="game-container">
           

           <div className="busket">
            
             <img src={busket} alt="busket" />
           </div>

         </div>
       </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
