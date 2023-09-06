import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { actions as filterActions } from '../../../store/slices/filterSlice';

const FilterByTransfer = () => {
  const dispatch = useDispatch();
  const [checkedTransfer, setCheckedTransfer] = useState({ oneTransfer: false, noTransfer: false });

  const handleSubmit = (e) => {
    const { value, checked } = e.target;
    setCheckedTransfer({ ...checkedTransfer, [value]: checked });
    dispatch(filterActions.filterByTransfer({ ...checkedTransfer, [value]: checked }));
  };

  return (
    <div className='sidebar__section-filter mb-15'>
      <p className='bold mb-15'>Фильтровать</p>
      <form>
        <div className='inline-flex'>
          <input
            className='mr-5 mt-5'
            type='checkbox'
            name='oneTransfer'
            value='oneTransfer'
            onChange={handleSubmit}
            checked={checkedTransfer.oneTransfer}
          />
          <label htmlFor='one-transfer'>- 1 пересадка</label>
        </div>
        <div className='inline-flex'>
          <input
            className='mr-5'
            type='checkbox'
            name='noTransfer'
            value='noTransfer'
            onChange={handleSubmit}
            checked={checkedTransfer.noTransfer}
          />
          <label htmlFor='direct'>- без пересадок</label>
        </div>
      </form>
    </div>
  );
};

export default FilterByTransfer;
