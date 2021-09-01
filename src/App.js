
import React, { useState, useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';


import { useAlert } from 'react-alert'
//import Drawer from 'react-drag-drawer'import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


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
import Alert from './components/Alert';
import Busket from './components/busket';
import Start from './components/start';
import Clock from './components/clock';
//import Login from './components/login';
//import UserProvider from './components/UserProvider';
//import { auth } from './components/firebase';

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
  const showReactAlert = useAlert();

  const  [value,  setValue] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [prev, setPrev] = useState(0);
 // const [popUp, setPopUp] = useState(true);
 const [showStart, setShowStart] = useState(true);
 const [timerState, setTimerState] = useState(false);
 const [score, setScore] = useState(0);




//calculate score
var calculateScore = (itemLength) => {
   // var marks = itemLength;
    setScore(itemLength * 10);
    //console.log(`Scoreeeeeeeeeeeeee ${itemLength}`)
}
//winning
if(score === 120){
  showReactAlert.show('You Won!!!!')
}

//handle starting of the game
function handleGameStart(){
  setShowStart(false);
  setList([]);
  //setSeconds(40);
 
}

//if time is up what do we do?????

//sleep in the middle
if(timerState){
  
  showReactAlert.show('Time is Up Restarting...');
    //setTimerState(false);
   // setList([]);
   //handleGameStart();
   setTimeout(() => {  window.location.reload(); }, 4000);
   
  
}

//loading values to array listOfItems
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
    
    if(item === prev+1){
      setPrev(item);
      console.log("something fishy");

      showAlert(true, "success", `${item} Clicked`);
    
      const newItem = { id: new Date().getTime().toString(), title: item };
  
      setList([...list, newItem]);
      setValue("");
    }else{
      showReactAlert.show(`... The next value should be: ${prev+1}`);
    }
   
  }
};


const showAlert = (show = false, type="", msg = "")=> {
  setAlert({ show, type, msg });
};

const removeItem = (id) => {
  showAlert(true, "danger", `Item Removed`);
  setList(list.filter((item) => item.id !== id));
  
};
const clearList = () => {
  showAlert(true, "danger", "Empty Busket!!!");
  setList([]);
  //window.location.reload();
  
}

function refreshPage(){
  clearList()
  window.location.reload();
} 



useEffect(() => {
  localStorage.setItem("list", JSON.stringify(list));
}, [list]);


var time = 40;


  return (


    <div className="App">


       <BrowserRouter>
       <div className="header">
        

         <div className="game-container">

           <div className="box change a">
             <h2>Level : 1</h2>
             <h2>Score: {score}</h2>


               {/* <button>Login In</button>
               */}
           


           </div>

           <div className="box b">
             <h1>The Busket Game</h1>
             <h4 style={{color: 'black'}}>Instructions</h4>
             <h6 style={{color: 'black'}}>Arrange the numbers in the Busket by Clicking from 1 to 12 within the Given time</h6>
             

             <h4> {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
</h4>
           </div>

           <div className="box c" >
             { showStart ? <Clock /> :
             <CountdownCircleTimer className="box c timer"
             isPlaying
            
             duration = {time}
             colors = {[["#30b837", 0.33], ["#f67e7d", 0.33], ["#ed2939"]]}
             
             >
               {<CountDownTimer setTimerState={setTimerState} className="box c"/> }
              
             </CountdownCircleTimer> 
           
}
           </div>


           <div className="box show-items-left">
             <ShowItemsLeft leftItems={leftItems} handleClickedItems={handleClickedItems} showStart = {showStart}/>
          
           </div>


           <div className=" busket-container" >

            <div className=" busket-image">
                 <img src={busket} alt="busket" />
             </div>

             <div className=" busket-items">
                {showStart ? <Start handleGameStart= {handleGameStart}/> :  <Busket items = {list} removeItem= {removeItem} calculateScore = {calculateScore}/>}
             </div>
           </div>


           <div className="box bottom show-items-right">
           <ShowItemsRight rightItems={rightItems} handleClickedItems={handleClickedItems} showStart = {showStart}/>
           </div>

           <div className="box bottom show-items-bottom">
           <ShowItems bottomItems={bottomItems} handleClickedItems={handleClickedItems} showStart = {showStart}/>
           </div>

           <div className="box change d">
             <button onClick = {() => {clearList()}}>Clear The Busket</button>
             <button style={{margin: '10px'}} onClick = {() => {refreshPage()}}>Restart The Game</button>
           </div>


         </div>
       </div>
       </BrowserRouter>
    </div>

  
  );
}

export default App;
