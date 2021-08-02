import React from 'react';

import ShowItems from './show-tems';

function ShowItemsRight (props){

    const arr = props.rightItems;
    

     const arrayOfItemsRight = arr.map((item) => 
   <li className="item">{item}</li>
   );


    return (
         <ul>{arrayOfItemsRight}</ul>
        
        );
}

export default ShowItemsRight;