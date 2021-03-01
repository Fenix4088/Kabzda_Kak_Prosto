import React from "react";
import {ClockViewPropsT} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsT> = ({date}) => {

    const formatDate = (date: number): number | string =>
        date < 10 ? "0" + date : date;

    return (
        <>
            <span>{formatDate(date.getHours())}</span>:
            <span>{formatDate(date.getMinutes())}</span>:
            <span>{formatDate(date.getSeconds())}</span>
        </>
    )
}