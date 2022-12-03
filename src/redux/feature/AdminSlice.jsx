import { createSlice } from "@reduxjs/toolkit";

export const AdminSlice = createSlice({
  name: "Admins",
  initialState: {
    admins: [],
  },
  reducers: {
    setAdmins: (state, action) => {
      state.admins = action.payload;
    },
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.admins = state.admins.filter(
        (user) => user.id !== action.payload.id
      );
    },
    // updateUsername: (state, action) => {
    //   state.admins.map((user) => {
    //     if (user.id === action.payload.id) {
    //       user.username = action.payload.username;
    //     }
    //   });
    // },
  },
});

export const { setAdmins, addUser } = AdminSlice.actions;
export default AdminSlice.reducer;
