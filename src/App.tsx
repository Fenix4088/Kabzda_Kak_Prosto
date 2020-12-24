import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {OnOff} from './components/onOff/onOff';
import {ControlledAccordion} from './components/ControlledAccordion/ControlledAccordion';
import {Rating} from "./components/Rating/Rating";
import {type} from "os";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {ControlledOnOff} from "./components/ControlledOnOff/ControlledOnOff";

export type StarsStatusType = Array<StartStatusItemType>
type StartStatusItemType = {
    status: boolean
}

function App() {
    const starsStatus: StarsStatusType = [
        {status: false},
        {status: false},
        {status: false},
        {status: false},
        {status: false},
    ]

    const [ratingStatus, setRatingStatus] = useState<StarsStatusType>(starsStatus);
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [on, setOn] = useState<boolean>(false)


    const changeStatusCallBack = (id: number): void => changeStatus(ratingStatus, id);
    const changeStatus = (arr: StarsStatusType, id: number): void => {
        const updatedStarStatus = arr.map((item, arrIndex) => {
            item.status = false;
            if (arrIndex <= id) {
                item.status = true;
            }

            return item;
        })

        setRatingStatus(updatedStarStatus);

    }


    return (
        <div className={'App'}>
            <TestDoubleInputs/>
            <OnOff setOnOutSide={setOn}/>{on.toString()}
            <ControlledOnOff on={on} setOn={setOn}/>
            <ControlledAccordion titleValue={"Menu"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Rating ratingStatus={ratingStatus} changeStatusCallBack={changeStatusCallBack}/>
            <UncontrolledRating />
        </div>
    );
}

export default App;

const TestDoubleInputs = () => {
    const [isGoing, setIsGoing] = useState<boolean>(false)
    const [numberOfGuests, setNumberOfGuests] = useState<string>('')

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
            <br/>
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
    )
}
