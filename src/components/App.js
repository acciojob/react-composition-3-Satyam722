
import React from "react";
import './../styles/App.css';
import Tooltip from "./ToolTip";

const App = () => {
  return (
    <div>
      <Tooltip text="This is tool tip">
        <h2>Hover Over Me</h2> 
        </Tooltip>

      <br /> <br />

        <Tooltip text="This is another tooltip">
          <h3>Hover over me to see another tooltip.</h3>
        </Tooltip>

    </div>
  )
}

export default App
