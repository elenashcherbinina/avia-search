import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import sortFlights from './utils/sortFlights';
import filterFlights from './utils/filterFlights';
import { actions as flightsActions } from './store/slices/flightsSlice';
import { getAllAirlines } from './utils/getRouteData';

const App = () => {
  const flights = useSelector((state) => state.flights.api);
  const sortedFlights = useSelector((state) => state.flights.sorted);
  const sortedBy = useSelector((state) => state.sorting.sortedBy);
  const filtredBy = useSelector((state) => state.filter.filtredBy);

  const dispatch = useDispatch();

  useEffect(() => {
    const sorted = sortFlights(sortedBy, flights);
    const airlines = getAllAirlines(sorted);
    dispatch(flightsActions.sortFlights(sorted));
    dispatch(flightsActions.updateAirlines(airlines));
  }, [dispatch, flights, sortedBy]);

  useEffect(() => {
    const filtred = filterFlights(filtredBy, sortedFlights);
    console.log('filtred', filtred);

    const airlines = getAllAirlines(filtred);
    dispatch(flightsActions.filterFlights(filtred));
    dispatch(flightsActions.updateAirlines(airlines));
  }, [dispatch, filtredBy, sortedFlights]);

  return (
    <div className='container'>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
