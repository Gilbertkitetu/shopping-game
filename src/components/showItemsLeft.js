import React from 'react';


import './styles/showItemsLeft.css';

function ShowItemsLeft (props){


var leftItems = props.leftItems;

console.log(`Items on the left shall be: ${leftItems}`);


var handleClick = (item)  => {
    console.log(`Click happened at show-item-left: ${item}`);
    props.handleClickedItems(item);
}


var mappedLeftItems = leftItems.map((item)=>
<li className="item-left" key={item} onClick={() => handleClick(item)}>{item}</li>
);




    return (
        <ul>{mappedLeftItems}</ul>
        
        );
}

export default ShowItemsLeft;