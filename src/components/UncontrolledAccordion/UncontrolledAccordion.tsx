import React, {useState} from 'react';

type  PropsUncontrolledAccordionType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: PropsUncontrolledAccordionType) => {

    const [collapsed, setCollapsed] = useState<boolean>(true);

    const openMenuCallback = () => {
        openMenu(collapsed)
    }
    const openMenu = (collapsedValue: boolean) => setCollapsed(!collapsedValue);


    return (
        <div>
            <AccordionTitle title={props.titleValue} openMenuCallback={openMenuCallback}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );

};


type  PropsAccordionTitleType = {
    title: string
    openMenuCallback: () => void
}

const AccordionTitle = (props: PropsAccordionTitleType) => {
    const openMenu = () => {
        props.openMenuCallback();
    }


    return (
        <h3 onClick={openMenu}>--{props.title}--</h3>
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