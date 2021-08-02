import React from 'react';


import ShowItemsLeft from './showItemsLeft';
import ShowItemsRight from './showItemsRight';

import './styles/show-item.css';

function ShowItems (props){
console.log(props);
const arr = props.buttomItem;

    return(
        // <ul>{arrayOfItems}   </ul>
        <h1>show items.{console.log(`Array ${arr}`)}</h1>
           
       
    );
}

export default ShowItems;