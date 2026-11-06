import createSlice from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    current: 'home'
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.current = action.payload;
    }
  }
});

export const { setCurrentPage } = pageSlice.actions;
export default pageSlice.reducer;