import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "Users",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
    // updateUsername: (state, action) => {
    //   state.users.map((user) => {
    //     if (user.id === action.payload.id) {
    //       user.username = action.payload.username;
    //     }
    //   });
    // },
  },
});

export const { setUsers, addUser } = UsersSlice.actions;
export default UsersSlice.reducer;
