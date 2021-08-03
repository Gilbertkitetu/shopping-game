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
import ShowItemsLeft from './components/showItemsLeft';
import CountDownTimer from './components/countDownTimer';
import fruits from './components/fruit-images';









import './App.css';




function App() {

  //countDownTimer variables
  const hoursMinSecs = {hours:0, minutes: 0, seconds: 40}


  
//main array with supplies to all boxes
  //let listOfItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 //let listOfItems = fruits;

//loading images to array listOfItems
  const listOfItems1 = [];
for (let i = 0; i <= 19; i++){
listOfItems1.push(fruits[i]);
}




  //const arr = ['a','b','c','d','e','f','g','h','i','j'];

  //the busket images

  //randomize images array

  function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  const listOfItems = randomArrayShuffle(listOfItems1);
  

  //busket box image values

  const busketItems1 = [];
for (let i = 0; i <= 19; i++){
busketItems1.push(fruits[i]);
}

const busketItems = randomArrayShuffle(busketItems1);


  busketItems.length = Math.min(listOfItems.length, 12);

  console.log(`busket items ${busketItems}`);


  //buttom boxes image values
  const bottomItems = [];
  for (let i = 0; i <= 9; i++){
    //console.log(listOfItems[i]);
    bottomItems.push(listOfItems[i]);
  }


  console.log(`Bottom items ${bottomItems}`);


  //right boxes images value
const rightItems = [];
for (let i = 10; i <= 14; i++){
rightItems.push(listOfItems[i]);
}

 
//left boxes images values
const leftItems = [];
for(let i = 15; i <= 19; i++){
  leftItems.push(listOfItems[i]);
}


  return (
    <div className="App">
       <BrowserRouter>
       <div className="header">
        

         <div className="game-container">

           <div className="box a">
             <h2>Level : 1</h2>
           </div>

           <div className="box b">
             <h1>Shopping Game</h1>
           </div>

           <div className="box c">
             <h2><CountDownTimer hoursMinSecs={hoursMinSecs}/></h2>
           </div>


           <div className="box show-items-left">
             <ShowItemsLeft leftItems= {leftItems} busketItems={busketItems}/>
          
           </div>


           <div className=" busket-container" >

            <div className=" busket-image">
                 <img src={busket} alt="busket" />
             </div>

             <div className=" busket-items">
                 <Busket busketItems = {busketItems}/>
             </div>
           </div>


           <div className="box show-items-right">
           <ShowItemsRight rightItems = {rightItems} busketItems={busketItems}/>
           </div>

           <div className="box show-items-bottom">
           <ShowItems buttomItem = {bottomItems} busketItems={busketItems}/>
           </div>

           <div className="box d"></div>


         </div>
       </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
