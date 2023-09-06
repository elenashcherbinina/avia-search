import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from './slices/flightsSlice';
import sortingReducer from './slices/sortingSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    flights: flightsReducer,
    sorting: sortingReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
