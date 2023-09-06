import { hasTransfer } from './utils';
import { getTicketPrice } from './getRouteData';

const filterByTransfer = (filters, flights) => {
  const { transfer } = filters;
  const { oneTransfer, noTransfer } = transfer;

  if (oneTransfer) {
    return flights.filter((el) => hasTransfer(el.flight.legs[0]) || hasTransfer(el.flight.legs[1]));
  } else if (noTransfer) {
    return flights.filter(
      (el) => !hasTransfer(el.flight.legs[0]) && !hasTransfer(el.flight.legs[1]),
    );
  }
  return flights;
};

const filterByPrice = (filters, flights) => {
  const { price } = filters;
  const { priceFrom, priceTo } = price;

  if (priceFrom && !priceTo) {
    return flights.filter((el) => {
      const flightPrice = getTicketPrice(el.flight);
      return flightPrice >= priceFrom;
    });
  }
  if (!priceFrom && priceTo) {
    return flights.filter((el) => {
      const flightPrice = getTicketPrice(el.flight);
      return flightPrice <= priceFrom;
    });
  }

  if (priceFrom && priceTo) {
    return flights.filter((el) => {
      const flightPrice = getTicketPrice(el.flight);
      return flightPrice >= priceFrom && flightPrice <= priceTo;
    });
  }
  return flights;
};

const filterByAirlines = (filters, flights) => {
  const { airlines } = filters;

  if (airlines.length > 0) {
    return flights.filter(({ flight }) => airlines.includes(flight.carrier.caption));
  }
  return flights;
};

const filterFlights = (filters, flights) => {
  let filtredFlights;
  filtredFlights = filterByTransfer(filters, flights);
  filtredFlights = filterByPrice(filters, filtredFlights);
  filtredFlights = filterByAirlines(filters, filtredFlights);
  return filtredFlights;
};

export default filterFlights;
