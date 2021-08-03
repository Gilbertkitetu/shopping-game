import React from 'react';

import ShowItems from './show-tems';

function ShowItemsRight (props){

  //function to search if item clicked is in the selected
const handleClick = (id) => {
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