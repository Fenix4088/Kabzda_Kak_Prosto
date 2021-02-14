import React, {useMemo, useState} from "react";

export default {
    title: "useState demo",
};

const generateData = ():number => {
    console.log("generateData")
    //diffcult count
    return 33050404504324;
}

export const Example1 = () => {
    console.log("Example1")
//1
/*    const initValue = useMemo(generateData, []);

    const [counter, setCounter] = useState(initValue);*/


    const [counter, setCounter] = useState(generateData); // 2

    const changer = (state: number):number => {
        return state + 1;
    }

    return (
        <>
            {/*<button onClick={() => setCounter(counter + 1)}>+</button> /!*1 and 2*!/*/}
            <button onClick={() => setCounter(changer)}>+</button> {/* 3 */}
            {counter}
        </>
    );
};