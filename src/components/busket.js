import React from 'react';

import './styles/busket.css';
//imports
// import BusketBox from './busketBox';

function Busket (props){

  //props busket values shall be 
  var busketItems = props.busketItems;
  var sendItemPropToBusket = props.sendItemPropToBusket;
  console.log(`busketItems shall be ${busketItems}`);

  var color = '';
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