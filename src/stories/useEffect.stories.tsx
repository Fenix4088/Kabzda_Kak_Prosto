import React, {useEffect, useMemo, useState} from "react";

export default {
    title: "useEffect demo",
};



export const Example1 = () => {
    console.log("Example1")

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        console.log("useEffect every time when component render");
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log("useEffect only first component render like(componentDidMount)");
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])


    return (
        <>
            {console.log("Render")}

            <button onClick={() => setFake(fake + 1)}>Fake+</button>
            {fake}
            <button onClick={() => setCounter(counter + 1)}>Counter+</button>
            {counter}

        </>
    );
};

export const SetTimeoutExample = () => {
    console.log("SetTimeoutExample")

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    const [date, setDate] = useState(new Date);

    useEffect(() => {
        setInterval(() => {
            setDate((state) => state = new Date)
        }, 1000);
    }, [date]);

    const formatDate = (time: Date):string => {
        return time.toLocaleTimeString("ru", {
            hour: "2-digit", minute: "2-digit", second: "2-digit"
        })
    }

    return (
        <>
            {console.log("Render")}
            counter: {counter};
            fake: {fake}
            <br/>
            {formatDate(date)}

{/*            <button onClick={() => setFake(fake + 1)}>Fake+</button>
            {fake}
            <button onClick={() => setCounter(counter + 1)}>Counter+</button>
            {counter}*/}

        </>
    );
};