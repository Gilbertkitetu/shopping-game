import React from 'react';

import './styles/show-item.css';

function ShowItems (){
    const listOfItems = [1,2,3,4,5,6,7,8];

    const arrayOfItems = listOfItems.map((item) => 
  <li className="item">{item}</li>
  );

    return(
        <ul>{arrayOfItems}</ul>
    );
}

export default ShowItems;