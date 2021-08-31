import React from 'react';
import { useAlert } from 'react-alert'

import './styles/showItemsLeft.css';

function ShowItemsLeft (props){
    const leftAlert = useAlert();


var leftItems = props.leftItems;

console.log(`Items on the left shall be: ${leftItems}`);

function status(item){
  
    if(!props.showStart){
      handleClick(item)
    }else{
      leftAlert.show('Sorry Ninja, Click Start New Game')
    }
   }
  
  

var handleClick = (item)  => {
    console.log(`Click happened at show-item-left: ${item}`);
    props.handleClickedItems(item);
}


var mappedLeftItems = leftItems.map((item)=>
<li className="item-left" key={item} onClick={(e) =>  status(item)}><h3>{item}</h3></li>
);




    return (
        <ul>{mappedLeftItems}</ul>
        
        );
}

export default ShowItemsLeft;