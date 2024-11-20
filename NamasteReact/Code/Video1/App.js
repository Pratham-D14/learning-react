// Creating Element which is core part of React
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

// Rendering into browser which can be done usingn ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Nested HTML
const parent = React.createElement(
  "div",
  { id: "parent" },
  //   Array to create sibling elements
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "Hello I am h1 tag"),
    React.createElement("h2", { id: "h2" }, "Hello I am h2 tag"),
  ])
);

root.render(parent);
