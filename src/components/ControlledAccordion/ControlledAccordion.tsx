import React, {useState} from 'react';

export type  PropsUncontrolledAccordionType = {

    titleValue: string
    collapsed: boolean
    setCollapsed: (value: boolean) => void
    /**
     * Optional color text*/
    color?: string
}

export const ControlledAccordion = (props: PropsUncontrolledAccordionType) => {

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                setCollapsed={props.setCollapsed}
                collapsed={props.collapsed}
                color={props.color}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    );

};


type  PropsAccordionTitleType = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
    color?: string
}

const AccordionTitle = (props: PropsAccordionTitleType) => {

    return (
        <h3 onClick={() => props.setCollapsed(!props.collapsed)} style={{color: props.color ? props.color : "black"}}>--{props.title}--</h3>
    );
}

const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}