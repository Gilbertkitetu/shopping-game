import React from 'react';
//import i2 from '../images/fruits/i11.jpg';

import ShowItemsLeft from './showItemsLeft';
import ShowItemsRight from './showItemsRight';
import fruits from './fruit-images';

import Busket from './busket';

import './styles/show-item.css';

function ShowItems (props){
console.log(props);
const arr = props.buttomItem;

//function to search if item clicked is in the selected
const handleClick = (id) => {
console.log(id);
}

const arrayOfItemsBotttom = arr.map((item) => 
   <li className="item"><img className="item" src={item.src} alt={item.id} onClick={()=> {handleClick(item.id)}}/></li>
   );
    return(
         <ul>{arrayOfItemsBotttom}   </ul>
        // <h1>show items.{console.log(`Array ${arr}`)}</h1>
           
       
    );
}

export default ShowItems;