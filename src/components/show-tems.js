import React from 'react';
//import i2 from '../images/fruits/i11.jpg';
import { useAlert } from 'react-alert'
// import ShowItemsLeft from './showItemsLeft';
// import ShowItemsRight from './showItemsRight';
// import fruits from './fruit-images';

// import Busket from './busket';

import './styles/show-item.css';


function ShowItems (props){
    const bottomAlert = useAlert();

//props from app
var bottomItems = props.bottomItems;

console.log(`Buttom items are: ${bottomItems}`);

function status(item){
    if(!props.showStart){
      handleClick(item)
    }else{
      bottomAlert.show('Sorry Ninja, Click Start New Game')
    }
   }
  
  

var handleClick = (item)  => {
    console.log(`Click happened at show-item-button: ${item}`);
    props.handleClickedItems(item);
}

var mappedBottomItems = bottomItems.map((item)=>
<li className="item-bottom" key={item} onClick={() => status(item)}>{item}</li>
);









    return(
         <ul>{mappedBottomItems}</ul>
        // <h1>show items.{console.log(`Array ${arr}`)}</h1>
           
       
    );
}

export default ShowItems;