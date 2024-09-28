import {combineReducers} from 'redux';
import authReducers from './features/authReducers';
import {configureStore} from '@reduxjs/toolkit';

const rootReducers = combineReducers({
  auth: authReducers,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export const store = setupStore();
