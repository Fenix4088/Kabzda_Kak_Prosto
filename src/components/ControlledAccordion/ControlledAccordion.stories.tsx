import React, {ComponentProps, useState} from 'react';
import { Story } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {ControlledAccordion, PropsUncontrolledAccordionType} from "./ControlledAccordion";


export default {
    title: 'ControlledAccordion',
    component: ControlledAccordion,
};

const ControlledAccordionTemplate:
    Story<PropsUncontrolledAccordionType> = (args) => <ControlledAccordion {...args} />;



export const Collapsed = ControlledAccordionTemplate.bind({});
Collapsed.args = {
    titleValue: "Menu is open",
    collapsed: false,
    setCollapsed: action("Close"),
    color: "#099344"
};

export const Uncollapsed = ControlledAccordionTemplate.bind({});
Uncollapsed.args = {
    titleValue: "Menu is close",
    collapsed: true,
    setCollapsed: action("Open"),
};

export const InteractiveMode: Story<PropsUncontrolledAccordionType>  = (args) => {
    const [collapsed , setCollapsed] = useState(false)
    return <ControlledAccordion {...args}  collapsed={collapsed}  setCollapsed={()=>setCollapsed(!collapsed)}/>
};

InteractiveMode.args = {
    titleValue: "Accordion in business",
}




