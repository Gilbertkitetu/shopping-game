import React from 'react';
//import i2 from '../images/fruits/i11.jpg';

// import ShowItemsLeft from './showItemsLeft';
// import ShowItemsRight from './showItemsRight';
// import fruits from './fruit-images';

// import Busket from './busket';

import './styles/show-item.css';
import './styles/busket.css';

function ShowItems (props){
console.log(props);
const arr = props.buttomItem;

//busket items
const busketItems = props.busketItems;
console.log(`Buttom busketItems ${busketItems}`);

const busketItemsArr = [];
for(let i = 0; i <= 11; i++){
  busketItemsArr.push(busketItems[i].id);
  console.log(`show items busket items ${busketItems[i].id}`)
}
console.log(busketItemsArr);




const include = (arr,obj) => {
    return (arr.indexOf(obj) !== -1);
}
const handleClick = (id) => {
    //id.preventDefault();
    console.log(include(busketItemsArr, id));
    
    var state = include(busketItemsArr, id);
    props.parentCallback(state);


//console.log(id);

}
const handleSubmit = (event) => {
    event.preventDefault();
  }


const arrayOfItemsBotttom = arr.map((item) => 
   <li className="item" onClick={()=> {handleClick(item.id)}}> <img className="item" src={item.src} alt={item.id} /></li>
   );
    return(
         <ul>{arrayOfItemsBotttom}   </ul>
        // <h1>show items.{console.log(`Array ${arr}`)}</h1>
           
       
    );
}

export default ShowItems;