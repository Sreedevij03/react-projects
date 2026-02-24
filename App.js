import React from "react";
import ReactDOM from "react-dom/client"
//Nested html structure in React

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "nexted-child" }, "I am the H1 tag"),
  ),
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, Welcome to React!",
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
