import React from 'react'

const CountDownTimer = ({remainingTime}) => {
    if(remainingTime === 0) {
        return <div className="timer">Too late...</div>;
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