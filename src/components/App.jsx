import React, { createContext, useState } from "react";

import CounterHook from "./Counterhook/CounterHook";
import Counter from "./Counter/Counter";

export const ThemeContext = React.createContext();

function App() {
  const [theme, settheme] = useState("green");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      w Counter
      <Counter amirProps={0} />
      <br />
      CounterHook
      <CounterHook amirProps={0} />
      <br />
      <button
        className="App"
        onClick={() =>
          settheme((pretheme) => {
            return pretheme === "red" ? "blue" : "red";
          })
        }
      >
        Contorl colore
      </button>
    </ThemeContext.Provider>
  );
}
export default App;
