import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Mount the React app to the root div
const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) {
  throw new Error("Root element not found. Make sure index.html has <div id='root'>");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
