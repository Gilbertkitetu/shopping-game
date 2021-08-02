import React from 'react';

function ShowItemsLeft (props){

    const arr = props.leftItems;

    const arrayOfLeftItems = arr.map((item) => 
    <li className="item">{item}</li>
    );
 

    return (
        <ul>{arrayOfLeftItems}</ul>
        );
}

export default ShowItemsLeft;