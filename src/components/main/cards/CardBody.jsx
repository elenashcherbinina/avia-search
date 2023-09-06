import React from 'react';

import { getAirline, getRouteData } from '../../../utils/getRouteData';
import clock from '../../../assets/clock.svg';

const CardBody = ({ flight }) => {
  const airline = getAirline(flight);
  const from = getRouteData(flight, 0);
  const back = getRouteData(flight, 1);

  const transferFrom = from.transfer;
  const transferBack = back.transfer;

  return (
    <div className='card__body'>
      <div className='card__body_route from'>
        <div className='card__body-direction'>
          <span>{from.departureCity}, </span>
          <span>{from.departureAirport} </span>
          <span className='color-blue'>({from.departureAirportUid}) &rarr; </span>
          <span>{from.arrivalCity}, </span>
          <span>{from.arrivalAirport} </span>
          <span className='color-blue'>({from.arrivalAirportUid})</span>
        </div>

        <div className='card__body-time'>
          <div>
            <span className='fs-22'>{from.depatureTime}</span>{' '}
            <span className='color-blue'>{from.departureDate}</span>
          </div>
          <div className='inline-flex'>
            <img className='mr-5' src={clock} alt='clock' />
            <span className='fs-22'>{from.duration}</span>
          </div>
          <div>
            <span className='color-blue'>{from.arrivalDate}</span>{' '}
            <span className='fs-22'>{from.arrivalTime}</span>
          </div>
        </div>

        <div className='card__body-tranfer'>
          {transferFrom ? <span className='color-orange'>1 пересадка </span> : null}
        </div>

        <div className='card__body-airCompany'>
          <p>Рейс выполняет: {airline}</p>
        </div>
      </div>

      <div className='card__body_route back'>
        <div className='card__body-direction'>
          <span>{back.departureCity}, </span>
          <span>{back.departureAirport} </span>
          <span className='color-blue'>({back.departureAirportUid}) &rarr; </span>
          <span>{back.arrivalCity}, </span>
          <span>{back.arrivalAirport} </span>
          <span className='color-blue'>({back.arrivalAirportUid})</span>
        </div>

        <div className='card__body-time'>
          <div>
            <span className='fs-22'>{back.depatureTime}</span>{' '}
            <span className='color-blue'>{back.departureDate}</span>
          </div>
          <div className='inline-flex'>
            <img className='mr-5' src={clock} alt='clock' />
            <span className='fs-22'>{back.duration}</span>
          </div>
          <div>
            <span className='color-blue'>{back.arrivalDate}</span>{' '}
            <span className='fs-22'>{back.arrivalTime}</span>
          </div>
        </div>

        <div className='card__body-tranfer'>
          {transferBack ? <span className='color-orange'>1 пересадка </span> : null}
        </div>

        <div>
          <span className='fs-16'>Рейс выполняет: {airline}</span>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
