import React from 'react';

import './styles/busket.css';
//imports
// import BusketBox from './busketBox';

function Busket ({ items, removeItem, calculateScore }){

// function sortItems (items){
//   var temp = 0;
//   for(var i = 0; i < items.length; i++) {
//     for(var j = 0; j < items[i].length; j++) {
//       if (items[j] < items[i][i]) {
//         temp = items[i][i];
//         items[j] = items[i][i];
//         items[i][i] = temp;
//       }
//     }
//   }
//   return items[0].title;
// }

// function sortItems (){
//   items.sort(function(a, b){return a - b});
// }


    return(
       

          <div className=''>
            
            {
           
            items.map((item) => {
              const { id, title } = item;
              console.log(`Items in the busket ${items.length}`);
              calculateScore (items.length);
              // console.log(`Sort array ${sortItems(items)}`);

              return(
                <div className="busket-item" key={id} onClick={()=> removeItem(id)}>
                
                  <p>{title}</p>
                  
                
                </div>
              );
            })

            }
          </div>
            
     
    );
}

//const boxes = [1,2,3,4,5,6,7,8,9,10,11,12];

export default Busket;