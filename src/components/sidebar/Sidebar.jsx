import React from 'react';

import './sidebar.css';

import Sorting from './sections/Sorting';
import FilterByTransfer from './sections/FilterByTransfer';
import FilterByPrice from './sections/FilterByPrice';
import FilterByAirlines from './sections/FilterByAirlines';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__container'>
        <Sorting />
        <FilterByTransfer />
        <FilterByPrice />
        <FilterByAirlines />
      </div>
    </div>
  );
};

export default Sidebar;
