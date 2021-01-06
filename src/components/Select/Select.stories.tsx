import React, { ComponentProps, useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Select, SelectPropsType } from "./Select";
import { PropsAccordionType } from "../ControlledAccordion/ControlledAccordion";

export default {
  title: "Select",
  component: Select,
};

const selectData = [
  {
    title: "City",
    value: "Kiev",
  },
  {
    title: "City",
    value: "Moscow",
  },
  {
    title: "City",
    value: "Minsk",
  },
];

const SelectTemplate: Story<SelectPropsType> = (args) => <Select {...args} />;

const onClickCallback = action("some item was clicked");

export const Uncollapsed = SelectTemplate.bind({});
Uncollapsed.args = {
  selected: "Kiev",
  onChange: onClickCallback,
  options: [],
  testCollapsed: false,
};

export const Collapsed = SelectTemplate.bind({});
Collapsed.args = {
  selected: "Kiev",
  onChange: onClickCallback,
  options: selectData,
  testCollapsed: true,
};

export const Interactive: Story<SelectPropsType> = (args) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return <Select {...args} />;
};
Interactive.args = {
  selected: "Kiev",
  options: selectData,
  onChange: onClickCallback,
};
