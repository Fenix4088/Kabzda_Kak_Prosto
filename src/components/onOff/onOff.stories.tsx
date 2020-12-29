import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import {OnOff} from "./onOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
};




export const OnMode: React.VFC<{}> = () => <OnOff setOnOutSide={action("onOff")}/>;
export const OffMode: React.VFC<{}> = () => <OnOff  setOnOutSide={action("dsfsdf")}/>;
