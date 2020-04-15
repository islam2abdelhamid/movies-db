import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Filters from './components/Filters/Filters';
import SearchForm from './components/SearchForm/SearchForm';
import Movies from './containers/Movies/Movies';

export const FilterContext = React.createContext();

function App() {
  const [filter, setFilter] = useState('top_rated');

  const handleFilter = filter => {
    setFilter(filter);
  };

  return (
    <>
      <FilterContext.Provider value={filter}>
        <Navbar />
        <Filters changeFilter={handleFilter} />
        <SearchForm />
        <Movies />
      </FilterContext.Provider>
    </>
  );
}

export default App;
