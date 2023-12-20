"use client";
import React, { useState, useEffect, useRef } from 'react';

const MyComponent = (props) => {
  // State for tracking the number of clicks
  const [clicks, setClicks] = useState(0);

  // Ref to hold a reference to the component's div element
  const myComponentDivRef = useRef(null);

  // Event handler for click events
  const clickHandler = () => {
    // Update the state to reflect the increased number of clicks
    setClicks(clicks + 1);
  };

  useEffect(() => {
    // Access the current value of the ref, which points to the div element
    const divElement = myComponentDivRef.current;

    // Event handler for the click event
    const handleEvent = () => clickHandler();

    // Add a click event listener to the div element
    divElement.addEventListener('click', handleEvent);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      divElement.removeEventListener('click', handleEvent);
    };
  }, [clicks]); // Include clicks in the dependency array to avoid stale closures

  // Render the component
  return (
    <div className="my-component" ref={myComponentDivRef} data-testid="my-component">
      <h2>My Component ({clicks} clicks)</h2>
    </div>
  );
};

export default MyComponent;