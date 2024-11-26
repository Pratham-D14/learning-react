import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

// Importing Components
import Header from "./components/Header";
import BodyComponent from "./components/BodyComponent";

// Importing Data
import { logoURL } from "./utils/constant";

const AppLayout = () => {
  return (
    <div className="app">
      {/*  Header */}
      <Header logoImage={logoURL} />

      {/* Body */}
      <BodyComponent />

      {/* Footer */}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
