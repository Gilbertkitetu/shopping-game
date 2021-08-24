import React, { useState } from 'react';

import './styles/busket.css';
//imports
// import BusketBox from './busketBox';

function Busket (props){

  let [updateColor, setUpdateColor] = useState('');

  //props busket values shall be 
  var busketItems = props.busketItems;
 var updateBusketItemStyle = props.updateBusketItem;
  console.log(`busketItems shall be ${busketItems}`);

  console.log(`Busket style ${updateBusketItemStyle}`);

  setUpdateColor = updateBusketItemStyle;

  var color = '';
if(updateColor){
  color = 'red';
}

 var item = 12
  if([1,6,4,10].includes(item)){
    color = 'green'
    
  }

  

console.log(`Element clicked at the busket ${props.item}`)
 
var mappedItems = busketItems.map((item)=>
<li style={{backgroundColor: color}} className="busket-item" key={item}>{item}</li>
);

    return(
       

          <ul>{mappedItems}</ul>
            
     
    );
}

//const boxes = [1,2,3,4,5,6,7,8,9,10,11,12];

export default Busket;