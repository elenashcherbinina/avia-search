import { createSlice } from '@reduxjs/toolkit';

import api from '../../routes/flights.json';
import { getAllAirlines } from '../../utils/getRouteData';

const { flights } = api.result;
const flightsWithId = flights.map((el) => ({ flight: el.flight, id: el.flightToken }));
const airlines = getAllAirlines(flightsWithId);

const initialState = {
  api: flightsWithId,
  sorted: [],
  filtred: [],
  airlines,
};

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    sortFlights: (state, { payload }) => {
      state.sorted = payload;
    },
    filterFlights: (state, { payload }) => {
      state.filtred = payload;
    },
    updateAirlines: (state, { payload }) => {
      state.airlines = payload;
    },
  },
});

export const { actions } = flightsSlice;
export default flightsSlice.reducer;
