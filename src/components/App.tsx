import { useState } from "react";
import css from "./App.module.scss";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const onClick = () => setCounter((prevState) => prevState + 1);
  return (
    <>
      <div className={css.text}>{counter}</div>

      <button className={css.button} onClick={onClick}>
        Click me
      </button>
    </>
  );
};
