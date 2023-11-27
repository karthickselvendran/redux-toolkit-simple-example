import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

export const userlistSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      const deleteIndex = action.payload;
      return state.filter((data, index) => index !== deleteIndex);
    },
  },
});

export const { addUser, deleteUser } = userlistSlice.actions;
export default userlistSlice.reducer;
