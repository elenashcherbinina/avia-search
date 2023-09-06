import React from 'react';
import { getAirlineLogo, getTicketPrice } from '../../../utils/getRouteData';

const CardHeader = ({ flight }) => {
  const logo = getAirlineLogo(flight);
  const price = getTicketPrice(flight);

  return (
    <div className='card__header'>
      <div className='card__header-logo'>
        <img className='logo' src={logo} alt='airline-logo' />
      </div>
      <div className='card__header-price'>
        <p className='fs-22 bold'>
          {price} <span>₽</span>
        </p>
        <p className='fs-12'>Стоимость для одного взрослого пассажира</p>
      </div>
    </div>
  );
};

export default CardHeader;
