import React, {ChangeEvent, useRef, useState} from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';
import {action} from "@storybook/addon-actions";

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Click me',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};



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

export const ControlledSelect = () => {
    const [value, setValue] = useState("banana");

    const onChangeHandler = (e:any):void => {
      setValue(e.currentTarget.value)
    }

    return (
            <select value={value} onChange={onChangeHandler}>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
                <option value="apple">Apple</option>
            </select>
    )
}

export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>;
