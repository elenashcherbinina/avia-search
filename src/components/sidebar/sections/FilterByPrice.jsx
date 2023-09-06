import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { actions as filterActions } from '../../../store/slices/filterSlice';

const FilterByPrice = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const handleSubmit = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setPrice({ ...price, [name]: Number(value) });
    dispatch(filterActions.filterByPrice({ ...price, [name]: Number(value) }));
  };

  return (
    <div className='sidebar__section-price mb-15'>
      <p className='bold mb-15'>Цена</p>
      <form onChange={handleSubmit}>
        <div className='inline-flex mb-15'>
          <label htmlFor='from' className='mr-5'>
            Oт
          </label>
          <input type='number' name='priceFrom' placeholder='0' defaultValue={price.priceFrom} />
        </div>
        <div className='inline-flex'>
          <label htmlFor='to' className='mr-5'>
            До
          </label>
          <input type='number' name='priceTo' placeholder='10000' defaultValue={price.priceTo} />
        </div>
      </form>
    </div>
  );
};

export default FilterByPrice;
