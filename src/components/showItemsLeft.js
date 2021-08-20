import React from 'react';


import './styles/showItemsLeft.css';

function ShowItemsLeft (props){


var leftItems = props.leftItems;

console.log(`Items on the left shall be: ${leftItems}`);

var mappedLeftItems = leftItems.map((item)=>
<li className="item" key={item}>{item}</li>
);




    return (
        <ul>{mappedLeftItems}</ul>
        
        );
}

export default ShowItemsLeft;