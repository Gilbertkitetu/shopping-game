import React from 'react';

import './styles/busket.css';
//imports
// import BusketBox from './busketBox';

function Busket (props){

  //props busket values shall be 
  var busketItems = props.busketItems;
  console.log(`busketItems shall be ${busketItems}`);


 

  

 
var mappedItems = busketItems.map((item)=>
<li className="busket-item" key={item}>{item}</li>
);

    return(
       

          <ul>{mappedItems}</ul>
            
     
    );
}

//const boxes = [1,2,3,4,5,6,7,8,9,10,11,12];

export default Busket;