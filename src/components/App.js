
import React from "react";
import './../styles/App.css';
import Tooltip from "./tooltip";
const App = () => {

  
  return (
    <div>
        {/* Do not remove the main div */}
       <Tooltip text="This is a Tooltip">
        <p>Hover over me</p>
       </Tooltip>
       <Tooltip text="This is another Tooltip">
        <p>Hover over me to see another tooltipp
          </p>
       </Tooltip>
        
    </div>
  )
}

export default App
