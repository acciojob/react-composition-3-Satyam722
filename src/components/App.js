// App.js
import React from "react";
// Ensure the path is correct based on your file structure
import './styles/App.css'; 
import Tooltip from "./ToolTip"; // Import the component you implemented

const App = () => {
  return (
    <div className="app-container" style={{ padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* 1. First usage of the Tooltip component */}
      <Tooltip text="This is the first tooltip text">
        {/* The children prop is the content wrapped inside the Tooltip tags */}
        <h2 style={{ borderBottom: '1px dotted #888', paddingBottom: '5px' }}>
          Hover Over Me (Title)
        </h2>
      </Tooltip>

      <br /> <br />

      {/* 2. Second usage of the Tooltip component */}
      <Tooltip text="This is the second, more detailed tooltip">
        {/* The children prop can be any React element, here it is a paragraph */}
        <p style={{ borderBottom: '1px dotted #888', paddingBottom: '5px' }}>
          Hover over this text to see another tooltip.
        </p>
      </Tooltip>

      {/* Note: The visual output from the problem statement implies simple text 
      elements wrapped by the Tooltip. I've used standard h2 and p tags here. */}
    </div>
  )
}

export default App;
