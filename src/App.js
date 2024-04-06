import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Paper } from "./Components/Paper";
import { Skills } from "./Components/Skills";
import { Experience } from "./Components/Experience";
import { ColumnLeft } from "./Components/ColumnLeft";
import { MenuRight } from "./Components/MenuRight";
import { useState } from "react";

//Commented out for Netlify

// import { useState } from 'react';

const App = () => {
  document.title = "Charlotte Megroff";
  const [clickState, setClickState] = useState([1, 0, 0, 0]);

  if (clickState[2] === 1) {
    return (
      <div>
        <Navbar clickState={clickState} setClickState={setClickState} />

        <div className="bodyArea">
          <ColumnLeft />
          <Skills />
          <MenuRight />
        </div>
      </div>
    );
  }
  if (clickState[3] === 1) {
    return (
      <div>
        <Navbar clickState={clickState} setClickState={setClickState} />

        <div className="bodyArea">
          <ColumnLeft />
          <Experience />
          <MenuRight />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar clickState={clickState} setClickState={setClickState} />

        <div className="bodyArea">
          <ColumnLeft />
          <Paper />
          <MenuRight />
        </div>
      </div>
    );
  }
};

export default App;
