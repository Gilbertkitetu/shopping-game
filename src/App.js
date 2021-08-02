import logo from './logo.svg';

import React from 'react';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

//import background image
//import blueCarbon from './backgrounds/blueCarbon.png';
import busket from './images/basket/shoppingbag.png';


//import components
import Busket from './components/busket';
import ShowItems from './components/show-tems';
import ShowItemsRight from './components/showItemsRight';





import './App.css';




function App() {


  const listOfItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  const arr = ['a','b','c','d','e','f','g','h','i','j'];

  const bottomItems = [];
  for (let i = 0; i < 9; i++){
    //console.log(listOfItems[i]);
    bottomItems.push(listOfItems[i]);
  }


  console.log(bottomItems);



 


  return (
    <div className="App">
       <BrowserRouter>
       <div className="header">
        

         <div className="game-container">

           <div className="box a"></div>

           <div className="box b">
             <h1>Shopping Game</h1>
           </div>

           <div className="box c"></div>


           <div className="box show-items-left">
             
          
           </div>


           <div className=" busket-container" >

            <div className=" busket-image">
                 <img src={busket} alt="busket" />
             </div>

             <div className=" busket-items">
                 <Busket />
             </div>
           </div>


           <div className="box show-items-right">
           {/* <ShowItemsRight bottomItems = {bottomItems}/> */}
           </div>

           <div className="box show-items-bottom">
           <ShowItems buttomItem = {listOfItems}/>
           </div>

           <div className="box d"></div>


         </div>
       </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
