// ToolTip.js
import React, { useState } from 'react';
// Assuming App.css is in the sibling 'styles' directory (e.g., src/styles/App.css)
import './styles/App.css'; 

/**
 * A reusable Tooltip component that displays text on hover over its children.
 * @param {object} props - Component props.
 * @param {string} props.text - The text to display inside the tooltip.
 * @param {ReactNode} props.children - The content to be wrapped (the element to hover over).
 */
const Tooltip = ({ text, children }) => {
  // 1. State to track whether the mouse is currently hovering over the component
  const [isHovering, setIsHovering] = useState(false);

  return (
    // Apply the required class name 'tooltip' to the children element container
    <div 
      className="tooltip"
      // Event handler to show the tooltip on mouse enter
      onMouseEnter={() => setIsHovering(true)} 
      // Event handler to hide the tooltip on mouse leave
      onMouseLeave={() => setIsHovering(false)} 
    >
      {/* Render the wrapped content (children) */}
      {children}

      {/* 2. Conditionally Render the Tooltip Text */}
      {/* The tooltip should only be displayed when the user hovers (isHovering is true) */}
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
