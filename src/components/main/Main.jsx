import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './main.css';
import Card from './cards/Card';

const TICKETS_ON_PAGE = 2;

const Main = () => {
  const flights = useSelector((state) => state.flights.filtred);
  const [ticketsCount, setTicketsCount] = useState(TICKETS_ON_PAGE);

  const addNewFlights = () => {
    setTicketsCount(ticketsCount + TICKETS_ON_PAGE);
  };

  return (
    <div className='main'>
      <div className='main__flightCards'>
        {flights
          .map((el) => {
            const { flight, id } = el;
            return <Card key={id} flight={flight} />;
          })
          .slice(0, ticketsCount)}
      </div>
      <div className='main__flightCards-btn'>
        <button onClick={addNewFlights}>Показать еще</button>
      </div>
    </div>
  );
};

export default Main;
