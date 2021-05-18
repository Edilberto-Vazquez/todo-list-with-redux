import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import App from "./containers/App";

// todosArray save all created items
// todosFilter save only items with the indicated filter

const initialState = {
  todosArray: [],
  todosFilter: [],
};

// store is created with todosArray and todosfilter
const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
