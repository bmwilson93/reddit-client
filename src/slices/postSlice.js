import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: []
  },
  reducers: {
    // update Posts, takes an action, which should hold an array of posts, and updates the state to equal that array
    updatePosts: (state, action ) => {
      state.posts = action.payload
    }
  }
});

export const { updatePosts } = postSlice.actions;
export default postSlice.reducer;