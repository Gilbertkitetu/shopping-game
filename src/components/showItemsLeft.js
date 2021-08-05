import React from 'react';


import './styles/showItemsLeft.css';

function ShowItemsLeft (props){


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





    const arr = props.leftItems;

    const arrayOfLeftItems = arr.map((item) => 
    <li className="item" onClick={()=> {handleClick(item.id)}}><img src={item.src} alt={item.id}/></li>
    );
 

    return (
        <ul>{arrayOfLeftItems} </ul>
        
        );
}

export default ShowItemsLeft;