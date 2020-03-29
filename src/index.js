import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "./Components/AppComponents/AppContainer";

function App() {
  return <AppContainer />;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
