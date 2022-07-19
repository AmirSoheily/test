/* eslint-disable */

import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";

const Counter = ({ amirProps }) => {
  debugger;
  const style = useContext(ThemeContext);

  const [State, setState] = useState(amirProps);

  return (
    <dive>
      <button style={style} onClick={() => setState(State + 1)}>
        pluse
      </button>
      <span>{State}</span>
      <button style={style} onClick={() => setState(State - 1)}>
        nagtive ish ih ish
      </button>
    </dive>
  );
};

export default Counter;
