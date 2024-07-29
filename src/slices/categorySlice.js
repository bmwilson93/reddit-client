import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: "test"
  },
  reducers: {
    // update the currently selected category, takes an action, which should hold the string of the category, and updates the state to equal that category
    updateCategory: (state, action ) => {
      state.category = action.payload
      console.log('test')
    }
  }
});

export const { updateCategory } = categorySlice.actions;
export default categorySlice.reducer;