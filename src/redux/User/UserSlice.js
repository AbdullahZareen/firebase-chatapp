import {createSlice} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    //accessToken: null,
    //refreshToken: null,
    email: null,
    // name: null,
  },
  reducers: {
    userLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.email = action?.payload;
    },
    userLoggedOut: (state, action) => {
      const {email, isLoggedIn} = state;

      isLoggedIn = false;
      email = null;
    },
  },
});
export const {userLoggedIn, userLoggedOut} = UserSlice.actions;
export const user = state => {
  state.user;
};

export default UserSlice.reducer;
