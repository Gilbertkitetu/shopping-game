import React from 'react';

import './styles/busket.css';
//imports
// import BusketBox from './busketBox';

function Busket (props){

  //const numberOfBoxes = [1,2,3,4,5,6,7,8,9,10,11,12];


console.log(`show items id ${props.id}`);
console.log(props)

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


  const listOfAllItems = props.listOfItems;

  const itemsInTheBusket = randomArrayShuffle(listOfAllItems);
  itemsInTheBusket.length = Math.min(itemsInTheBusket.length, 12);
  console.log(`items in the busket ${itemsInTheBusket[1].src}`);

  const arrayOfBoxes = itemsInTheBusket.map((box) => 
  <li className="busket-item"><img src={box.src} alt={box.id}/></li>
  
  );


    return(
       

          <ul>{arrayOfBoxes}</ul>
            
     
    );
}

//const boxes = [1,2,3,4,5,6,7,8,9,10,11,12];

export default Busket;