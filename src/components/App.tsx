import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import css from "./App.module.scss";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const onClick = () => setCounter((prevState) => prevState + 1);
  return (
    <>
      <Link to={"/about"}>about </Link>
      <Link to={"/shop"}>shop</Link>

      <div className={css.text}>{counter}</div>

      <button className={css.button} onClick={onClick}>
        Click me
      </button>

      <Outlet />
    </>
  );
};
