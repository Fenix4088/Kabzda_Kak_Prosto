import React, { useState } from 'react';
import styles from './test.module.scss';


type PropsType = {
  // on: boolean
  setOnOutSide: (value: boolean) => void
}


export const OnOff = (props: PropsType) => {

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


  const onBtnClickHandler = (value: boolean) => {
    setOn(value)
    props.setOnOutSide(value)
  }

  return (
    <div>
      <div style={onStyle} onClick={() => {
        onBtnClickHandler(true)
      }}>On</div>
      <div style={offStyle} onClick={() => {
        onBtnClickHandler(false)
      }}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  );
};