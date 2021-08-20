import React from 'react';
//import i2 from '../images/fruits/i11.jpg';

// import ShowItemsLeft from './showItemsLeft';
// import ShowItemsRight from './showItemsRight';
// import fruits from './fruit-images';

// import Busket from './busket';

import './styles/show-item.css';
import './styles/busket.css';

function ShowItems (props){

//props from app
var bottomItems = props.bottomItems;

console.log(`Buttom items are: ${bottomItems}`);


var mappedBottomItems = bottomItems.map((item)=>
<li className="item" key={item}>{item}</li>
);









    return(
         <ul>{mappedBottomItems}</ul>
        // <h1>show items.{console.log(`Array ${arr}`)}</h1>
           
       
    );
}

export default ShowItems;