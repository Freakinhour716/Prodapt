// MyComponent.js

import React from 'react';

const MyComponent = () => {

  // Function 1: A simple greeting function
  const sayHello = () => {
    console.log('Hello!');
  };

  // Function 2: Adds two numbers
  const addNumbers = (a, b) => {
    return a + b;
  };

  // Function 3: Handle button click
  const handleClick = () => {
    sayHello();
    const result = addNumbers(5, 3);
    console.log('Result:', result);
  };

  return (
    <div>
      <h1>My Component</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default MyComponent;
