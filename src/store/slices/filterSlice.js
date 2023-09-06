import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filtredBy: {
    transfer: '',
    price: '',
    airlines: [],
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterByTransfer: (state, { payload }) => {
      state.filtredBy.transfer = payload;
    },
    filterByPrice: (state, { payload }) => {
      state.filtredBy.price = payload;
    },
    filterByAirlines: (state, { payload }) => {
      console.log('payload', payload);
      state.filtredBy.airlines = payload;
    },
  },
});

export const { actions } = filterSlice;
export default filterSlice.reducer;
