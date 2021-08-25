import React from 'react';

import './styles/showItemsRight.css';

function ShowItemsRight (props){

 var rightItems = props.rightItems;
 console.log(`Right items shall be ${rightItems}`);


 
var handleClick = (item)  => {
  
  console.log(`Click happened at show-item-right: ${item}`);
  props.handleClickedItems(item);
}


 var mappedRightItems = rightItems.map((item)=>
 <li className="item" key={item} onClick={() => handleClick(item)}>{item}</li>
 );







 
    


    return (
         <ul>{mappedRightItems}</ul>
        
        );
}

export default ShowItemsRight;