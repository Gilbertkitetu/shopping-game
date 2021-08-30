import React, {useState} from 'react'




//import { useAlert } from 'react-alert';

const CountDownTimer = ({remainingTime}) => {



    //const alertTimeOut = useAlert();
    if(remainingTime === 0) {
       //alertTimeOut.show('Time is Up');
    //  window.location.reload();
       return <div className="timer" >Too Late</div>;
        

   
    
    }
   
    return (
        <div className="timer">
            <div className="text">You Have</div>
            <div className="value">{remainingTime}</div>
            <div className="text">seconds</div>
    
     
        </div>
        

    );
}

export default CountDownTimer;