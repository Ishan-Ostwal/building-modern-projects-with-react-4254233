import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// importing App component from the App.js file

// const App = () => {
// return <h1> This is a react script</h1> // way1
//   //this is the jsx syntax, and webpack converts this into:
// // return React.createElement("h1", null, "This is a react script"); //way2
// };
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App message="Hey there, you are using multiple components" />); //way1
// root.render(React.createElement(App)); //way2
