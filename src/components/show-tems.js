import React from 'react';
import i2 from '../images/fruits/i11.jpg';

import ShowItemsLeft from './showItemsLeft';
import ShowItemsRight from './showItemsRight';
import fruits from './fruit-images';

import './styles/show-item.css';

function ShowItems (props){
console.log(props);
const arr = props.buttomItem;


const arrayOfItemsBotttom = arr.map((item) => 
   <img className="item" src={item.src} alt={item.id} />
   );
    return(
         <ul>{arrayOfItemsBotttom}   </ul>
        // <h1>show items.{console.log(`Array ${arr}`)}</h1>
           
       
    );
}

export default ShowItems;