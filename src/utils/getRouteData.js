import { hasTransfer, parseDate, parseTime, formatDuration } from './utils';

export const getAirline = (flight) => {
  const { carrier } = flight;
  return carrier.caption;
};

export const getAllAirlines = (flights) => {
  const airlines = [];
  flights.map(({ flight }) => {
    const airline = getAirline(flight);
    if (!airlines.includes(airline)) {
      airlines.push(airline);
    }
    return airlines;
  });
  return airlines;
};

export const getAirlineLogo = (flight) => {
  const logos = {
    AF: require('../assets/AF.png'),
    AY: require('../assets/AY.png'),
    AZ: require('../assets/AZ.png'),
    BT: require('../assets/BT.png'),
    KL: require('../assets/KL.png'),
    LO: require('../assets/LO.png'),
    PC: require('../assets/PC.png'),
    SN: require('../assets/SN.png'),
    SU: require('../assets/SU.png'),
    TK: require('../assets/TK.png'),
  };

  const { carrier } = flight;
  return logos[carrier.airlineCode];
};

export const getTicketPrice = (flight) => {
  const { price } = flight;
  return Number(price.total.amount);
};

export const getRouteData = (flight, direction) => {
  const { legs } = flight;
  const route = legs[direction];
  const transfer = hasTransfer(route);

  const departureCity = route.segments[0].departureCity.caption;
  const departureAirport = route.segments[0].departureAirport.caption;
  const departureAirportUid = route.segments[0].departureAirport.uid;
  const departureDate = parseDate(route.segments[0].departureDate);
  const depatureTime = parseTime(route.segments[0].departureDate);

  const arrivalCity = transfer
    ? route.segments[1].arrivalCity.caption
    : route.segments[0].arrivalCity.caption;
  const arrivalAirport = transfer
    ? route.segments[1].arrivalAirport.caption
    : route.segments[0].arrivalAirport.caption;
  const arrivalAirportUid = transfer
    ? route.segments[1].arrivalAirport.uid
    : route.segments[0].arrivalAirport.uid;
  const arrivalDate = transfer
    ? parseDate(route.segments[1].arrivalDate)
    : parseDate(route.segments[0].arrivalDate);
  const arrivalTime = transfer
    ? parseTime(route.segments[1].arrivalDate)
    : parseTime(route.segments[0].arrivalDate);

  const duration = formatDuration(route.duration);

  return {
    departureCity,
    departureAirport,
    departureAirportUid,
    departureDate,
    depatureTime,
    arrivalCity,
    arrivalAirport,
    arrivalAirportUid,
    arrivalDate,
    arrivalTime,
    duration,
    transfer,
  };
};
