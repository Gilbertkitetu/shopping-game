import React from 'react';

import './styles/busket.css';
//imports
// import BusketBox from './busketBox';

function Busket ({ items, removeItem }){




    return(
       

          <div className=''>
            {items.map((item) => {
              const { id, title } = item;
              return(
                <div className="busket-item" key={id}>
                  <p>{title}</p>
                  <button  type="button" onClick={()=> removeItem(id)}>X</button>
                </div>
              );
            })

            }
          </div>
            
     
    );
}

//const boxes = [1,2,3,4,5,6,7,8,9,10,11,12];

export default Busket;