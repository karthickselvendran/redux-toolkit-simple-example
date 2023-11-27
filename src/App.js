import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { UserAdd } from "./usersAdd";
import { UsersList } from "./usersList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserAdd />
        <UsersList /* userslist={userslist} */ />
      </div>
    </Provider>
  );
}

export default App;
