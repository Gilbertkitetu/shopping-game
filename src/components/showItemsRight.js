import React from 'react';

import { useAlert } from 'react-alert'

import './styles/showItemsRight.css';

function ShowItemsRight (props){
  const rightAlert = useAlert();

 var rightItems = props.rightItems;
 console.log(`Right items shall be ${rightItems}`);

 function status(item){
  if(!props.showStart){
    handleClick(item)
  }else{
    rightAlert.show('Sorry Ninja, Click Start New Game')
  }
 }


var handleClick = (item)  => {
 
  
  console.log(`Click happened at show-item-right: ${item}`);
  props.handleClickedItems(item);
}
 


 var mappedRightItems = rightItems.map((item)=>
 <li className="item" key={item} onClick={() => status(item)}><h3>{item}</h3></li>
 );







 
    


    return (
         <ul>{mappedRightItems}</ul>
        
        );
}

export default ShowItemsRight;