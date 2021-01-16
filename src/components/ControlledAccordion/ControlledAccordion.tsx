import React, { useState } from "react";

type ItemType = {
  title: string,
  value: any
}

export type PropsAccordionType = {
  titleValue: string;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  color?: string;
  items: Array<ItemType>;
  onClick: (value: any) => void
};

export const ControlledAccordion = (props: PropsAccordionType) => {

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        setCollapsed={props.setCollapsed}
        collapsed={props.collapsed}
        color={props.color}
      />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
  );
};

type PropsAccordionTitleType = {
  title: string;
  setCollapsed: (value: boolean) => void;
  collapsed: boolean;
  color?: string;
};

const AccordionTitle = (props: PropsAccordionTitleType) => {
  return (
    <h3
      onClick={() => props.setCollapsed(!props.collapsed)}
      style={{ color: props.color ? props.color : "black" }}
    >
      --{props.title}--
    </h3>
  );
};


export type AccordionBodyType = {
  items: Array<ItemType>
  onClick: (value: any) => void
};

const AccordionBody = (props: AccordionBodyType) => {
  console.log(props.items)
  return (
    <div>
      <ul>
        {props.items.map((i, index) => {
          return <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>;
        })}
      </ul>
    </div>
  );
};