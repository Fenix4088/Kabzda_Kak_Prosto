import React, { useMemo, useState } from "react";

export default {
  title: "useMemo",
};

export const DifficultCountExample = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 1000000000) {
        fake++;
      }
      tempResultA *= i;
    }
    return tempResultA;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB *= i;
  }

  return (
    <>
      <input
        type="text"
        value={a}
        onChange={(e) => setA(+e.currentTarget.value)}
      />
      <input
        type="text"
        value={b}
        onChange={(e) => setB(+e.currentTarget.value)}
      />
      <div>
        <div>Result for a : {resultA}</div>
        <div>Result for b : {resultB}</div>
      </div>
    </>
  );
};



  const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users Secret");
    return (
      <div>
        {props.users.map((u, i) => (
          <div>{u}</div>
        ))}
      </div>
    );
  };

  const Users = React.memo(UsersSecret);

  export const HelpReactMemo = () => {
    console.log("HelpReactMemo")
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Yehor", "Dima", "Roma"]);

    const newArray = useMemo(()=>{
      return users.filter( u => u.toLowerCase().indexOf("a") > -1)
    }, users) ;

    return (
      <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray} />
      </>
    );
  };

