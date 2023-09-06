import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { actions as sortingActions } from '../../../store/slices/sortingSlice';

const Sorting = () => {
  const dispatch = useDispatch();
  const [sorted, setSorted] = useState('low-to-hight');

  const handleSubmit = (e) => {
    setSorted(e.target.value);
    dispatch(sortingActions.changeSortingType(e.target.value));
  };

  return (
    <div className='sidebar__section-sorting mb-15'>
      <p className='bold mb-15'>Сортировать</p>
      <form>
        <div>
          <input
            className='mr-5'
            type='radio'
            name='low-to-hight'
            value='low-to-hight'
            onChange={handleSubmit}
            checked={sorted === 'low-to-hight'}
          />
          <label htmlFor='low-to-hight'>- по возрастанию цены</label>
        </div>
        <div>
          <input
            className='mr-5'
            type='radio'
            name='hight-to-low'
            value='hight-to-low'
            onChange={handleSubmit}
            checked={sorted === 'hight-to-low'}
          />
          <label htmlFor='hight-to-low'>- по убыванию цены</label>
        </div>
        <div>
          <input
            className='mr-5'
            type='radio'
            name='time'
            value='time'
            onChange={handleSubmit}
            checked={sorted === 'time'}
          />
          <label htmlFor='time'>- по времени в пути</label>
        </div>
      </form>
    </div>
  );
};

export default Sorting;
