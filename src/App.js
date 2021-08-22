import logo from './logo.svg';




import React, { useState } from 'react';

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
import numbers from './components/numbers';
import Popup from './components/popup';


import './App.css';








var handleChangeOfClicked;

function App() {



  // const [isOpen,  setIsOpen] = useState(false);

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // }


  //countDownTimer variables
  const hoursMinSecs = {hours:0, minutes: 0, seconds: 40}


 




//loading images to array listOfItems
  var listOfItems1 = [];
for (let i = 0; i <= 19; i++){
listOfItems1.push(numbers[i].id);
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


  var listOfItems = listOfItems1;
  console.log(`Original list ${listOfItems}`)
  

  //center busket values

  var busketItems1 = [];
for (let i = 0; i <= 19; i++){
busketItems1.push(listOfItems[i]);
}

var busketItems = busketItems1;


  busketItems.length = Math.min(listOfItems.length, 12);

  console.log(`busket items ${busketItems}`);


  //buttom boxes image values
  var bottomItems1 = [];
  for (let i = 0; i <= 9; i++){
  
    bottomItems1.push(listOfItems[i]);
  }

  var bottomItems = randomArrayShuffle(bottomItems1);


  console.log(`Bottom items ${bottomItems}`);


  //right boxes images value
var rightItems1 = [];
for (let i = 10; i <= 14; i++){
rightItems1.push(listOfItems[i]);
}
var rightItems = randomArrayShuffle(rightItems1);
console.log(`Right items ${rightItems}`);

 
//left boxes images values
var leftItems1 = [];
for(let i = 15; i <= 19; i++){
  leftItems1.push(listOfItems[i]);
}
var leftItems = randomArrayShuffle(leftItems1);
console.log(`Left items ${leftItems}`);



//a function to collect clicked items in the children
var handleClickedItems = (item) => {
  console.log(`I have been clicked ${item}`);
  

  if(busketItems.includes(item)){
    console.log(`${item} is in the busket`)
    
    //sendItemProp(item);
    return item;
  }
  

}

//var item = 2
//handleChangeOfClicked = handleClickedItems();


// var sendItemProp = (item) => {
//   handleChangeOfClicked = item;
  
// }
console.log(`HANDLE${handleChangeOfClicked}`);


  return (
    <div className="App">


{/* <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    
    {isOpen && <Popup
     
      handleClose={togglePopup}
    />}
  </div> */}



       <BrowserRouter>
       <div className="header">
        

         <div className="game-container">

           <div className="box a">
             <h2>Level : 1</h2>
           </div>

           <div className="box b">
             <h1>Math Games</h1>
           </div>

           <div className="box c">
             <h2><CountDownTimer hoursMinSecs={hoursMinSecs}/></h2>
           </div>


           <div className="box show-items-left">
             <ShowItemsLeft leftItems={leftItems} handleClickedItems={handleClickedItems}/>
          
           </div>


           <div className=" busket-container" >

            <div className=" busket-image">
                 <img src={busket} alt="busket" />
             </div>

             <div className=" busket-items">
                 <Busket busketItems= {busketItems}/>
             </div>
           </div>


           <div className="box show-items-right">
           <ShowItemsRight rightItems={rightItems} handleClickedItems={handleClickedItems}/>
           </div>

           <div className="box show-items-bottom">
           <ShowItems bottomItems={bottomItems} handleClickedItems={handleClickedItems}/>
           </div>

           <div className="box d"></div>


         </div>
       </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
