import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import UserProvider from "./context/UserContext";
import ReposProvider  from "./context/ReposContext";
// import Input from "./input/Input";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ReposProvider>
      {/* <Input /> */}
      <App/>
      </ReposProvider>
    </UserProvider>
  </React.StrictMode>
);
