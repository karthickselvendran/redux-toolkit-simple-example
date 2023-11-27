import React from "react";
import { useSelector } from "react-redux";
import { deleteUser as deleteUserAction } from "./slices/userlistSlice";
import { useDispatch } from "react-redux";

export const UsersList = () => {
  const dispatch = useDispatch();
  const userslist = useSelector((state) => state.userslist);

  const deleteUser = (index) => {
    dispatch(deleteUserAction(index));
  };

  return (
    <div>
      <h3>UsersList</h3>
      {userslist?.length > 0 &&
        userslist.map((user, index) => (
          <li>
            {user}
            <button onClick={() => deleteUser(index)}>delete</button>
          </li>
        ))}
    </div>
  );
};
