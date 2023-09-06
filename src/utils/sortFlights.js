const sortFlights = (sortingType, flights) => {
  switch (sortingType) {
    case 'low-to-hight':
      return [...flights].sort((a, b) => {
        const price1 = Number(a.flight.price.total.amount);
        const price2 = Number(b.flight.price.total.amount);
        return price1 - price2;
      });
    case 'hight-to-low':
      return [...flights].sort((a, b) => {
        const price1 = Number(a.flight.price.total.amount);
        const price2 = Number(b.flight.price.total.amount);
        return price2 - price1;
      });
    case 'time':
      return [...flights].sort((a, b) => {
        const duration1 = Number(a.flight.legs[0].duration + a.flight.legs[1].duration);
        const duration2 = Number(b.flight.legs[0].duration + b.flight.legs[1].duration);
        return duration1 - duration2;
      });
    default:
      return null;
  }
};

export default sortFlights;
