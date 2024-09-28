import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
  isAuthLoading: true,
  logout: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setAuthLoading(state, action) {
      state.isAuthLoading = action.payload;
    },

    setLogout(state) {
      AsyncStorage.removeItem('TOKEN');
      state.token = null;
      state.user = null;
      state.isAuthLoading = false;
    },
  },
});

export const AuthActions = authSlice.actions;
export default authSlice.reducer;
