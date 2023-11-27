import React, { useState } from "react";
import { addUser } from "./slices/userlistSlice";
import { useDispatch } from "react-redux";
export const UserAdd = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  // const [userslist, setUserslist] = useState([]);

  const handleAdd = () => {
    if (username) {
      dispatch(addUser(username));
      // setUserslist((prevNameList) => [...prevNameList, username]);
      setUsername("");
    } else {
      alert("please enter username");
    }
  };
  console.log(username);
  // console.log(userslist);
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
