import React from 'react'




//import { useAlert } from 'react-alert';

const CountDownTimer = ({remainingTime, setTimerState}) => {



    //const alertTimeOut = useAlert();
    if(remainingTime === 0) {
       //alertTimeOut.show('Time is Up');
    //  window.location.reload();
    setTimerState(true);
      return  <div className="timer" >Too Late</div>;
        
    }else{
        setTimerState(false);
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