import React from 'react';

function ShowItemsLeft (props){


//function to search if item clicked is in the selected
const handleClick = (id) => {
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