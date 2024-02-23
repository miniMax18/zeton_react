import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./api/store";
import App from "./App.jsx";
//import * as serviceWorker from "./serviceWorker";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="">
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
