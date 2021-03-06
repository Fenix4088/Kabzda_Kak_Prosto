import React, { useEffect, useMemo, useState } from "react";

export default {
  title: "useEffect demo",
};

export const Example1 = () => {
  console.log("Example1");

  const [counter, setCounter] = useState(1);
  const [fake, setFake] = useState(1);

  useEffect(() => {
    console.log("useEffect every time when component render");
    document.title = counter.toString();
  });

  useEffect(() => {
    console.log(
      "useEffect only first component render like(componentDidMount)"
    );
    document.title = counter.toString();
  }, []);

  useEffect(() => {
    console.log("useEffect first render and every counter change");
    document.title = counter.toString();
  }, [counter]);

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
  console.log("SetTimeoutExample");

  const [counter, setCounter] = useState(1);
  const [fake, setFake] = useState(1);


  return (
    <>
      {console.log("Render")}
      counter: {counter}; fake: {fake}
      <br />
      {/*            <button onClick={() => setFake(fake + 1)}>Fake+</button>
            {fake}
            <button onClick={() => setCounter(counter + 1)}>Counter+</button>
            {counter}*/}
    </>
  );
};

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const ID = setInterval(() => {
      setDate((state) => (state = new Date()));
    }, 1000);

    return () => {
      clearInterval(ID)
    }
  }, [date]);

  const formatDate = (time: Date): string => {
    return time.toLocaleTimeString("ru", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return <>{formatDate(date)}</>;
};

export const ResetEffectExample = () => {
  console.log("ResetEffectExample");

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log("Effect occurred: " + counter );

    return () => {
      console.log("Effect is dead")
    }
  }, [counter])


  return (
      <>
        Hello counter: {counter}
        <button onClick={() => {setCounter(counter + 1)}}> + </button>
      </>
  );
};

export const KeysTrackerExample = () => {
  console.log("KeysTrackerExample");

  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Effect occurred: " + text );

    const onAnyKeyPress = (e: KeyboardEvent):void => {
      console.log(e.key);
      // setText((state) => state + e.key)
      setText(text + e.key)
    }

      window.addEventListener("keypress", onAnyKeyPress);

    return () => {
      window.removeEventListener("keypress", onAnyKeyPress);
    }
  }, [text])


  return (
      <>
        Typed text: {text}
      </>
  );
};