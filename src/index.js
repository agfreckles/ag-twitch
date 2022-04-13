import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import App from "./components/App";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
// import { Provider } from "react";
import reducers from "./reducers";
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

// const root = createRoot(document.querySelector("#root"));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
