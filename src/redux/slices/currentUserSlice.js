import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    addCurrentUser: (state, action) => {
      const { firstName, lastName, email } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
    },
    removeCurrentUser: (state, action) => {
      return initialState;
    },
  },
});

export const { addCurrentUser, removeCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
