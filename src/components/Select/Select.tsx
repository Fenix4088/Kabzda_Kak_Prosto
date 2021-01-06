import React, { useState, MouseEvent } from "react";
import { SelectItemType } from "../../App";
import s from "./Select.module.scss";

export type SelectPropsType = {
  selected: string;
  options: Array<SelectItemType>;
  onChange: (selectedValue: string) => void;
  testCollapsed?: boolean;
};

export const Select = (props: SelectPropsType) => {
  const [collapsed, setCollapsed] = useState<boolean>(
    props.testCollapsed ? props.testCollapsed : false
  );

  const [hoveredElementValue, setHoveredElementValue] = useState(props.selected);
  const hoveredItem = props.options.find(i => i.value === hoveredElementValue);

  const toggleSelect = (): void => {
    setCollapsed(!collapsed);
  };
  const changeSelect = (e: MouseEvent<HTMLLIElement>): void => {
    props.onChange(e.currentTarget.title);
    toggleSelect();
  };



  return (
    <div className={s.wrapper}>
      <div onClick={toggleSelect} className={s.select}>
        {props.selected}
        <div className={`${collapsed && s.rotated}`}>^</div>
      </div>
      {collapsed && (
        <ul className={s.list}>
          {props.options.map((option, index) => (
            <li className={`${props.selected === option.value && s.selected}`} onClick={changeSelect} key={index} title={option.value} >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
