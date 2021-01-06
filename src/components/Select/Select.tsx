import React, { useState, MouseEvent, KeyboardEvent } from "react";
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

  const toggleSelect = (): void => {
    setCollapsed(!collapsed);
  };
  const changeSelect = (e: MouseEvent<HTMLLIElement>): void => {
    props.onChange(e.currentTarget.title);
    toggleSelect();
  };
  const resetHover = (e: MouseEvent<HTMLLIElement>):void => {
    props.onChange(e.currentTarget.title);
  }
  const onArrowBtnPress = (e: KeyboardEvent<HTMLDivElement>):void => {
    if(e.key === "ArrowDown") {

      const currentOptionID = props.options.findIndex(option => option.value === props.selected);
      let nextIndex;
      if(currentOptionID === props.options.length - 1) {
        nextIndex = 0
      } else {
        nextIndex = currentOptionID + 1;
      }
      props.onChange(props.options[nextIndex].value)
    }
  }

  return (
    <div className={s.wrapper} onKeyDown={onArrowBtnPress} tabIndex={0}>
      <div onClick={toggleSelect} className={s.select} >
        {props.selected}
        <div className={`${collapsed && s.rotated}`}>^</div>
      </div>
      {collapsed && (
        <ul className={s.list}>
          {props.options.map((option, index) => (
            <li
              className={`${props.selected === option.value && s.selected}`}
              onClick={changeSelect}
              onMouseEnter={resetHover}
              key={index}
              title={option.value}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};