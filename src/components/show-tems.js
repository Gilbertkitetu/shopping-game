import React from 'react';


import ShowItemsLeft from './showItemsLeft';
import ShowItemsRight from './showItemsRight';

import './styles/show-item.css';

function ShowItems (props){
console.log(props);
const arr = props.buttomItem;


const arrayOfItemsBotttom = arr.map((item) => 
   <img className="item" src={item} />
   );
    return(
         <ul>{arrayOfItemsBotttom}   </ul>
        // <h1>show items.{console.log(`Array ${arr}`)}</h1>
           
       
    );
}

export default ShowItems;