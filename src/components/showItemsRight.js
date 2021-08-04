import React from 'react';

import ShowItems from './show-tems';

function ShowItemsRight (props){

  //function to search if item clicked is in the selected
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

    console.log(include(busketItemsArr, id));

    var state = include(busketItemsArr, id);
    props.parentCallback(state);

    
console.log(id);

}


    const arr = props.rightItems;
    

     const arrayOfItemsRight = arr.map((item) => 
   <li className="item" onClick={()=> {handleClick(item.id)}}><img src={item.src} alt={item.id}/></li>
   );


    return (
         <ul>{arrayOfItemsRight}</ul>
        
        );
}

export default ShowItemsRight;