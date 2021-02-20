import React, { useEffect, useState } from "react";
import clock from "../../assets/img/clock.png";
import s from "./Clock.module.scss";

type ClockPropsT = {};

export const Clock = (props: ClockPropsT) => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const ID = setInterval(() => {
      console.log("Tick");
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(ID);
    };
  }, []);

  const formatDate = (date: number): number | string =>
    date < 10 ? "0" + date : date;

  return (
    <div>
      <span>{formatDate(date.getHours())}</span>:
      <span>{formatDate(date.getMinutes())}</span>:
      <span>{formatDate(date.getSeconds())}</span>
      <div className={s.clock}>
        <img src={clock} alt="" />
      </div>
    </div>
  );
};


