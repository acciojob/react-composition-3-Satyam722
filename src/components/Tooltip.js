// ToolTip.js
import React, { useState } from 'react';
// Assuming your App.css is correctly located in the sibling 'styles' directory
import './styles/App.css'; 

/**
 * A reusable Tooltip component that displays text on hover over its children.
 * It demonstrates React Composition by using the 'children' prop.
 * * @param {object} props - Component props.
 * @param {string} props.text - The content of the tooltip.
 * @param {ReactNode} props.children - The element(s) the user hovers over.
 */
const Tooltip = ({ text, children }) => {
  // 1. State Management: Tracks whether the mouse is over the container.
  const [isHovering, setIsHovering] = useState(false);

  return (
    // Apply the required class name 'tooltip' to the children element container
    // and set up event handlers for hovering.
    <div 
      className="tooltip"
      onMouseEnter={() => setIsHovering(true)} // Show tooltip on mouse enter
      onMouseLeave={() => setIsHovering(false)} // Hide tooltip on mouse leave
    >
      {/* 2. Render the content passed inside the Tooltip tags */}
      {children}

      {/* 3. Conditional Rendering: Render the tooltip text ONLY when isHovering is true */}
      {isHovering && (
        // Apply the required class name 'tooltiptext' to the tooltip content
        <div className="tooltiptext">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
