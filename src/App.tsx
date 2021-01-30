import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { OnOff } from "./components/onOff/onOff";
import { ControlledAccordion } from "./components/ControlledAccordion/ControlledAccordion";
import { Rating } from "./components/Rating/Rating";
import { type } from "os";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { ControlledOnOff } from "./components/ControlledOnOff/ControlledOnOff";
import { Select } from "./components/Select/Select";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";

export type StarsStatusType = Array<StartStatusItemType>;
type StartStatusItemType = {
  isDone: boolean;
};

export type SelectItemType = {
  title?: string;
  value?: any;
  countryId?: number;
  city?: string;
  population?: number;
};


function App() {
  const starsStatus: Array<StartStatusItemType> = [
    { isDone: false },
    { isDone: false },
    { isDone: false },
    { isDone: false },
    { isDone: false },
  ];

  const [ratingStatus, setRatingStatus] = useState<StarsStatusType>(
    starsStatus
  );
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [on, setOn] = useState<boolean>(false);

  const changeStatusCallBack = (id: number): void =>
    changeStatus(ratingStatus, id);
  const changeStatus = (arr: StarsStatusType, id: number): void => {
    const updatedStarStatus = arr.map((item, arrIndex) => {
      item.isDone = false;
      if (arrIndex <= id) {
        item.isDone = true;
      }

      return item;
    });

    setRatingStatus(updatedStarStatus);
  };
  const onClick = (value: any): void => {};

  //! data for Select component

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

  const [selected, setSelected] = useState<string>("Kiev");

  const onSelectChange = (selectedValue: string): void => {
    setSelected(selectedValue);
  };

  //! //data for Select component

  return (
    <div className={"App"}>
      <TestDoubleInputs />
      <OnOff setOnOutSide={setOn} />
      {on.toString()}
      <ControlledOnOff on={on} setOn={setOn} />
      <ControlledAccordion
        titleValue={"Menu"}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        items={[
          { title: "Yehor", value: "son" },
          { title: "Tania", value: "mom" },
          {
            title: "Janna",
            value: "granny",
          },
        ]}
        onClick={onClick}
      />
      <UncontrolledAccordion titleValue={"UncontrolledAccordion"} />
      <Rating
        ratingStatus={ratingStatus}
        changeStatusCallBack={changeStatusCallBack}
      />
      <UncontrolledRating />
      <Select
        selected={selected}
        options={selectData}
        onChange={onSelectChange}
      />
    </div>
  );
}

export default App;

const TestDoubleInputs = () => {
  const [isGoing, setIsGoing] = useState<boolean>(false);
  const [numberOfGuests, setNumberOfGuests] = useState<string>("");

  return (
    <form>
      <label>
        Пойдут:
        <input
          name="isGoing"
          type="checkbox"
          checked={isGoing}
          onChange={(e) => setIsGoing(e.target.checked)}
        />
      </label>
      <br />
      <label>
        Количество гостей:
        <input
          name="numberOfGuests"
          type="number"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />
      </label>
    </form>
  );
};
