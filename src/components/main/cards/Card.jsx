import React from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const Card = ({ flight }) => {
  return (
    <div className='card'>
      <CardHeader flight={flight} />
      <CardBody flight={flight} />
      <CardFooter />
    </div>
  );
};

export default Card;
