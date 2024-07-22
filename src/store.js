import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/postSlice'; // imports the defaul export (reducer) fro mthe postSlice

export default configureStore({
  reducer: {
    post: postReducer
  }
});