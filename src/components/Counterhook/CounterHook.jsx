/* eslint-disable */

import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";

const CounterHook = ({ amirProps }) => {
  const [State, setState] = useState(amirProps);
  const style = useContext(ThemeContext);
  debugger;

  return (
    <dive>
      <button style={style} onClick={() => setState(State + 1)}>
        +
      </button>
      <span>{State}</span>
      <button style={style} onClick={() => setState(State - 1)}>
        -
      </button>
    </dive>
  );
};

export default CounterHook;
