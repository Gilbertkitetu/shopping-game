import React from 'react';

import './styles/busket.css';
//imports
// import BusketBox from './busketBox';

function Busket (){

  const numberOfBoxes = [1,2,3,4,5,6,7,8,9,10,11,12];
  const arrayOfBoxes = numberOfBoxes.map((box) => 
  <li className="busket-item">{box}</li>
  );


    return(
       

          <ul>{arrayOfBoxes}</ul>
            
     
    );
}

//const boxes = [1,2,3,4,5,6,7,8,9,10,11,12];

export default Busket;