import React, {ChangeEvent, ComponentProps, RefObject, useRef, useState} from 'react';
import {Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {OnOff} from "../components/onOff/onOff";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;


export default {
    title: 'input',
    component: OnOff

};

export const UncontrolledInput = () => <input/>

export const TrackingValueOfUncontrolledInput = (props: any) => {
    const [value, setValue] = useState("");
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }

    return <><input value={value} onChange={onChangeHandler}/>{value}</>;
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const targetedInput = useRef<HTMLInputElement>(null);


    const onClickHandler = (): void => {
        const elem = targetedInput.current as HTMLInputElement;
        setValue(elem.value);
    }

    return (
        <>
            <input ref={targetedInput}/>
            <button onClick={onClickHandler}>Save</button>
            - actual value: {value}
        </>
    );
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setParentValue(e.currentTarget.value);
    }

    return <input value={parentValue} onChange={onChangeHandler}/>

}

export const ControlledCheckbox = () => {
    const [value, setValue] = useState(true);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.currentTarget.checked)
    }


    return <>
        <input type="checkbox" checked={value} onChange={onChangeHandler}/>checkbox
    </>
}

/*export const ControlledSelect = () => {
    const [value, setValue] = useState("banana");

    return (
        <>
            <select>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
                <option value="apple">Apple</option>
            </select>
        </>
    )
}*/

export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>;








