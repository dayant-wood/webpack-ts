import { useState } from "react";
import "./App.scss";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const onClick = () => setCounter((prevState) => prevState + 1);
  return (
    <>
      <div>{counter}</div>

      <button onClick={onClick}>Click me</button>
    </>
  );
};
