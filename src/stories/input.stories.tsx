import React, {ChangeEvent, ComponentProps, RefObject, useRef, useState} from 'react';
import { Story } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {OnOff} from "../components/onOff/onOff";


export default {
    title: 'input',
};

export const UncontrolledInput = () => <input />;

export const TrackingValueOfUncontrolledInput = (props:any) => {
    const [value, setValue] = useState("");
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>):void => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }

    return <><input value={value} onChange={onChangeHandler}/>{value}</>;
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const targetedInput = useRef<HTMLInputElement>(null);


    const onClickHandler = ():void => {
        const elem = targetedInput.current as HTMLInputElement;
        setValue(elem.value)
    }

    return (
        <>
            <input  ref={targetedInput}/>
            <button onClick={onClickHandler}>Save</button> - actual value: {value}
        </>
    );
};

export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>;








