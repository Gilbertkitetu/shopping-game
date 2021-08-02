import React from 'react';


import ShowItemsLeft from './showItemsLeft';
import ShowItemsRight from './showItemsRight';

import './styles/show-item.css';

function ShowItems (props){
   //const itemsButtom = props.bottomItems;
  // const arrayOfItems = itemsRight.map((item) => 
  // <li className="item">{item}</li>
  // );
  //console.log(`show items ${itemsButtom}`);



    return(
        // <ul>{arrayOfItems}   </ul>
        <h1>show items{console.log(props.bottomItem)}</h1>
       
       
    );
}

export default ShowItems;