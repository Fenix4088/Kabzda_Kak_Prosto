import React, {useState} from 'react';

type  PropsUncontrolledAccordionType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (value: boolean) => void
}

export const ControlledAccordion = (props: PropsUncontrolledAccordionType) => {

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );

};


type  PropsAccordionTitleType = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

const AccordionTitle = (props: PropsAccordionTitleType) => {

    return (
        <h3 onClick={() => props.setCollapsed(!props.collapsed)}>--{props.title}--</h3>
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