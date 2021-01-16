import {reducer, TOGGLE_COLLAPSED} from "./reducer";

test("Reducer test", () => {
    const state: StateType = {
        collapsed: false
    }


    expect(() => {
        reducer(state, {type: "Fake type"})
    }).toThrowError();


})