import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    category: "",
    search: "",
    comments: []
  },
  reducers: {
    // update Posts, takes an action, which should hold an array of posts, and updates the state to equal that array
    updatePosts: (state, action ) => {
      state.posts = action.payload
    },
    updateCategory: (state, action)  => {
      state.category = action.payload
    },
    updateSearch: (state, action) => {
      state.search = action.payload
    },
    updateComments: (state, action ) => {
      state.comments = action.payload
    }
  }
});

export const { updatePosts, updateCategory, updateSearch, updateComments } = postSlice.actions;
export default postSlice.reducer;