import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type ClockPropsT = {
    mode?: "digital" | "analog";
};

export type ClockViewPropsT = {
    date: Date
}

export const Clock = (props: ClockPropsT) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const ID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(ID);
    };
  }, []);


  let view;

  switch(props.mode) {
      case "analog":
          view = <AnalogClockView date={date}/>;
            break;
      case "digital":
      default:
          view = <DigitalClockView date={date}/>
  }

  return (

    <div>
        {view}
    </div>
  );
};


