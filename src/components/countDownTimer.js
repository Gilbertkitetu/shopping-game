import React, {useState} from 'react'

import Alert from 'react-popup-alert'


//import { useAlert } from 'react-alert';

const CountDownTimer = ({remainingTime}) => {

// const [alert, setAlert] = useState({
//     type: 'error',
//     text: 'This is a pop up alert',
//     show: false
// })
// function onCloseAlert(){
//     setAlert({
//         type: '',
//         text: '',
//         show: false
//     })

// }

// function onShowAlert(type){
//     setAlert({
//         type: type,
//         text: 'Demo alert',
//         show: true
//     })
// }



    //const alertTimeOut = useAlert();
    if(remainingTime === 0) {
       //alertTimeOut.show('Time is Up');
      window.location.reload();
        return <div className="timer" >Time is Up</div>;
        

   
    
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