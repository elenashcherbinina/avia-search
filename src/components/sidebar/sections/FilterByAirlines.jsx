import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as filterActions } from '../../../store/slices/filterSlice';

const FilterByAirlines = () => {
  const airlines = useSelector((state) => state.flights.airlines);
  console.log('props', airlines);
  const [checkedAirlines, setCheckedAirlines] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const { value } = e.target;
    checkedAirlines.includes(value)
      ? setCheckedAirlines(checkedAirlines.filter((el) => el !== value))
      : setCheckedAirlines([...checkedAirlines, value]);
  };

  useEffect(() => {
    dispatch(filterActions.filterByAirlines(checkedAirlines));
  }, [checkedAirlines, dispatch]);

  return (
    <div className='sidebar__section-airlines mb-15'>
      <p className='bold mb-15'>Авиакомпании</p>
      <form className='flex-column'>
        {airlines &&
          airlines.map((airline) => {
            return (
              <div key={airline}>
                <input
                  className='mr-5'
                  type='checkbox'
                  name={airline}
                  value={airline}
                  onChange={handleSubmit}
                  //desabled={airlines.includes(airline) ? 'false' : undefined}
                />
                <label htmlFor='name_company'>- {airline}</label>
              </div>
            );
          })}
      </form>
    </div>
  );
};

export default FilterByAirlines;
