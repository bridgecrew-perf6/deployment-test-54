import React, { useEffect } from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { RecoilRoot } from "recoil";
import { Home } from "./sections";

const App = () => {
  useEffect(() => {});
  return (
    <div className="appContainer">
      <Home />
    </div>
  );
};

render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
