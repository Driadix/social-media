import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriendsList: (state, action) => {
      if (state.user) state.user.friendsList = action.payload.friendsList;
    },
  },
});

export const { setLogin, setLogout, setFriendsList } = userSlice.actions;
export default userSlice.reducer;
