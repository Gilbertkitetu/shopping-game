import React from 'react';

function ShowItemsLeft (props){

    const arr = props.leftItems;

    const arrayOfLeftItems = arr.map((item) => 
    <li className="item"><img src={item.src} alt={item.id}/></li>
    );
 

    return (
        <ul>{arrayOfLeftItems} </ul>
        
        );
}

export default ShowItemsLeft;