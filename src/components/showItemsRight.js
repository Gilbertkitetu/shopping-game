import React from 'react';

import './styles/showItemsLeft.css';

function ShowItemsRight (props){

 var rightItems = props.rightItems;
 console.log(`Right items shall be ${rightItems}`);


 var mappedRightItems = rightItems.map((item)=>
 <li className="item" key={item}>{item}</li>
 );







 
    


    return (
         <ul>{mappedRightItems}</ul>
        
        );
}

export default ShowItemsRight;