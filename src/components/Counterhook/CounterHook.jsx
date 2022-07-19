/* eslint-disable */

import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";

const CounterHook = ({ amirProps }) => {
  debugger;
  const style = useContext(ThemeContext);

  const [State, setState] = useState(amirProps);

  return (
    <dive>
      <button style={style} onClick={() => setState(State + 1)}>
        plus
      </button>
      <span>{State}</span>
      <button style={style} onClick={() => setState(State - 1)}>
        nagtiv
      </button>
    </dive>
  );
};
export default CounterHook;
