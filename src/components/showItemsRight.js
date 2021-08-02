import React from 'react';

import ShowItems from './show-tems';

function ShowItemsRight (props){

    const a = props.bottomItems;
    console.log(`bottom item ${a}`);

//     const arrayOfItemsRight = a.map((item) => 
//   <li className="item">{item}</li>
//   );


    return (
        // <ul>{arrayOfItemsRight}</ul>
        <h1>right</h1>
        );
}

export default ShowItemsRight;