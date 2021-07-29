import logo from './logo.svg';

import React from 'react';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

//import background image
//import blueCarbon from './backgrounds/blueCarbon.png';
import busket from './images/basket/shoppingbag.png';
//import components
import Busket from './components/busket';
import ShowItems from './components/show-tems';





import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <div className="header">
         <NavLink exact activeClassName="active" to="/" ><h1>Shopping Game</h1></NavLink>

         <div className="game-container">
           <div className="show-items">
             <ShowItems />
           </div>

           <div className="busket-container" >

            <div className="busket-image">
                 <img src={busket} alt="busket" />
             </div>

             <div className="busket-items">
                 <Busket />
             </div>
           </div>

         </div>
       </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
