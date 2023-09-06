import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortedBy: 'low-to-hight',
};

const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    changeSortingType: (state, { payload }) => {
      state.sortedBy = payload;
    },
  },
});

export const { actions } = sortingSlice;
export default sortingSlice.reducer;
