import logo from './logo.svg';




import React, { useState, useEffect } from 'react';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

//import background image
//import blueCarbon from './backgrounds/blueCarbon.png';
import busket from './images/basket/shoppingbag.png';



//import components
// import Busket from './components/busket';
import ShowItems from './components/show-tems';
import ShowItemsRight from './components/showItemsRight';
import ShowItemsLeft from './components/showItemsLeft';
import CountDownTimer from './components/countDownTimer';
import numbers from './components/numbers';
import Popup from './components/popup';
import Busket from './components/busket';


import './App.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';








const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};


function App() {

  const  [value,  setValue] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [prev, setPrev] = useState(0);



  //countDownTimer variables
  const hoursMinSecs = {hours:0, minutes: 0, seconds: 40}

//loading images to array listOfItems
  var listOfItems1 = [];
  
for (let i = 0; i <= 19; i++){
listOfItems1.push(numbers[i].id);
}
var listOfItems = randomArrayShuffle(listOfItems1);

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


  
  console.log(`Original list ${listOfItems}`)
  





  //buttom boxes image values
  var bottomItems = listOfItems.slice(0, 10);
  // for (let i = 0; i <= 9; i++){
  
  //   bottomItems.push(listOfItems[i]);
  // }

 


  console.log(`Bottom items ${bottomItems}`);


  //right boxes images value
var rightItems = listOfItems.slice(10, 15);


console.log(`Right items ${rightItems}`);

 
//left boxes images values
var leftItems = listOfItems.slice(15, 20);

console.log(`Left items ${leftItems}`);



//a function to collect clicked items in the children

var handleClickedItems = (item) => {
  console.log(`I have been clicked ${item}`);
  
  if(!item){
    showAlert(true, "danger", "Nothing was Clicked");
  } else{
    console.log(`Previuly clicked item  ${prev}`);
    //setPrev(item);
    //console.log(`Assigned clicked item ${item}`);
    
    if(prev < item){
      setPrev(item);
      console.log("something fishy")
    }else{
      window.alert(`${item} is less than ${prev}`);
    }
    showAlert(true, "success", "Something clicked");
    
    const newItem = { id: new Date().getTime().toString(), title: item };

    setList([...list, newItem]);
    setValue("");
  }
};

const showAlert = (show = false, type="", msg = "")=> {
  setAlert({ show, type, msg });
};

const removeItem = (id) => {
  showAlert(true, "danger", "item removed");
  setList(list.filter((item) => item.id !== id));
  
};

const clearList = () => {
  showAlert(true, "danger", "empty list");
  setList([]);
}

useEffect(() => {
  localStorage.setItem("list", JSON.stringify(list));
}, [list]);


  return (
    <div className="App">


       <BrowserRouter>
       <div className="header">
        

         <div className="game-container">

           <div className="box change a">
             <h2>Level : 1</h2>
           </div>

           <div className="box b">
             <h1>Busket</h1>
             <p>Instructions</p>
           </div>

           <div className="box c">
             <CountdownCircleTimer
             isPlaying
             duration = {40}
             colors = {[["#30b837", 0.33], ["#09302e", 0.33], ["#000000"]]}
             onComplete = {() => [true, 1000]}
             >
               {CountDownTimer}
             </CountdownCircleTimer>
           </div>


           <div className="box show-items-left">
             <ShowItemsLeft leftItems={leftItems} handleClickedItems={handleClickedItems}/>
          
           </div>


           <div className=" busket-container" >

            <div className=" busket-image">
                 <img src={busket} alt="busket" />
             </div>

             <div className=" busket-items">
                  <Busket items = {list} removeItem= {removeItem}/>
             </div>
           </div>


           <div className="box bottom show-items-right">
           <ShowItemsRight rightItems={rightItems} handleClickedItems={handleClickedItems}/>
           </div>

           <div className="box bottom show-items-bottom">
           <ShowItems bottomItems={bottomItems} handleClickedItems={handleClickedItems}/>
           </div>

           <div className="box change d">
             <button onClick = {() => {clearList()}}>Clear Busket</button>
           </div>


         </div>
       </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
