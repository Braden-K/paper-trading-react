import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types";

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action: PayloadAction<UserState>) => {
      console.log("init user login", action.payload);
      return { ...action.payload };
    },
  },
});

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;
