import React, { useState } from 'react';
import styles from './test.module.scss';


type PropsType = {
  on: boolean
}


export const OnOff = () => {

  const [on, setOn] = useState<boolean>(false)


  const onStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: on ? "green" : "white"
  };
  const offStyle = {
    width: '30px',
    height: '20px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: on ? "white" : "red",


  };
  const indicatorStyle = {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: on ? "green" : "red",


  };

  return (
    <div>
      <div style={onStyle} onClick={() => {setOn(true)}}>On</div>
      <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  );
};