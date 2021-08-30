import React, { useEffect } from "react";
import './styles/alert.css';
 
const Alert = ({ type, msg, removeAlert, list }) => {
 
    useEffect(() => {
      const timeout = setTimeout(() => {
        removeAlert();
      }, 3000);
      return () => clearTimeout(timeout);
    }, [list]);
    return <p className={`alert1 alert-${type}`}>{msg}</p>;
  
};
 
export default Alert;