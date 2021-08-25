import React from 'react'

const CountDownTimer = ({remainingTime}) => {
    if(remainingTime === 0) {
        return <div className="timer">Too late...</div>;
    }
   
    return (
        <div className="timer">
            <div className="text">Remaining</div>
            <div className="value">{remainingTime}</div>
            <div className="text">Seconds</div>
        </div>

    );
}

export default CountDownTimer;