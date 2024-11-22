import React from "react";
import ReactDOM from "react-dom";

// Creating element using JSX

const jsxHeading = (
  <h1 id="heading" className="heading">
    Hello using JSX 📈
  </h1>
);

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Funcitonal Component
const FunctionalComponet = () => {
  return <h1>React Functional Component</h1>;
};

const title = <h1>Using Javascipt Expression </h1>;
const OtherComponent = () => {
  return (
    <div>
      {/* Component Composition */}
      <FunctionalComponet />

      {/*  */}
      {title}
      {FunctionalComponet()}
      <h1>Parent Component </h1>
    </div>
  );
};

// Calling the Functional Component
root.render(<OtherComponent />);
