import React, { useReducer } from "react";
import { reducer, TOGGLE_COLLAPSED } from "./reducer";

type ItemType = {
  title: string;
  value: any;
};

export type PropsAccordionType = {
  titleValue: string;
};

export const UncontrolledAccordion = (props: PropsAccordionType) => {
  // const [collapsed, setCollapsed] = useState<boolean>(false);

  const [state, dispatch] = useReducer(reducer, {collapsed: false})

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => dispatch({type: TOGGLE_COLLAPSED})}
      />
      {!state.collapsed && <AccordionBody />}
    </div>
  );
};

type PropsAccordionTitleType = {
  title: string;
  onClick: () => void;
  color?: string;
};

const AccordionTitle = (props: PropsAccordionTitleType) => {
  return (
    <h3
      onClick={props.onClick}
      style={{ color: props.color ? props.color : "black" }}
    >
      --{props.title}--
    </h3>
  );
};

export type AccordionBodyType = {};

const AccordionBody = (props: AccordionBodyType) => {
  return (
    <div>
      <ul>
        <li>Item-1</li>
        <li>Item-2</li>
        <li>Item-3</li>
      </ul>
    </div>
  );
};