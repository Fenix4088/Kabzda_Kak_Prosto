import React, { ComponentProps, useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { ControlledAccordion, PropsAccordionType } from "./ControlledAccordion";

export default {
  title: "ControlledAccordion",
  component: ControlledAccordion,
};

const ControlledAccordionTemplate: Story<PropsAccordionType> = (args) => (
  <ControlledAccordion {...args} />
);

const onClickCallback = action("some item was clicked");

export const Collapsed = ControlledAccordionTemplate.bind({});
Collapsed.args = {
  titleValue: "Menu is open",
  collapsed: false,
  setCollapsed: action("Close"),
  color: "#099344",
  items: [
    { title: "Yehor", value: "son" },
    { title: "Tania", value: "mom" },
    { title: "Janna", value: "granny" },
  ],
  onClick: onClickCallback,
};

export const Uncollapsed = ControlledAccordionTemplate.bind({});
Uncollapsed.args = {
  titleValue: "Menu is close",
  collapsed: true,
  setCollapsed: action("Open"),
  onClick: onClickCallback,
};

export const InteractiveMode: Story<PropsAccordionType> = (args) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <ControlledAccordion
      {...args}
      collapsed={collapsed}
      onClick={onClickCallback}
      setCollapsed={() => setCollapsed(!collapsed)}
      items={[
        { title: "Yehor", value: "son" },
        { title: "Tania", value: "mom" },
        {
          title: "Janna",
          value: "granny",
        },
      ]}
    />
  );
};

InteractiveMode.args = {
  titleValue: "Accordion in business",
};




