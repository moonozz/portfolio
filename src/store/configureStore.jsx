import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from '../reducer/reducer';

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
