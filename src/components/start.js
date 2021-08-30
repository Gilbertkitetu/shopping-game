import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import './styles/start.css';

function Start ({ handleGameStart }){


    return(
        <div className="start">
            {/* <h1>Start</h1> */}
            <Flippy
                FlipOnHover={false}
                FlipOnClick={true}

                FlipDirection = "horizontal"
               
                style={{ width: '100%', height: '200px' }}
                >
                    <FrontSide style={{backgroundColor: '#175852',}}>
                        <div className="start-btn" onClick={() => {handleGameStart()}}><h2>Start New Game</h2></div>
                    </FrontSide>
                    <BackSide style={{ backgroundColor: '#30'}}>
                        Let's Go
                    </BackSide>
            </Flippy>
        </div>
    );
}

export default Start;