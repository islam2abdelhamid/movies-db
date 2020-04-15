import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Filters from './components/Filters/Filters';
import SearchForm from './components/SearchForm/SearchForm';
import Movies from './containers/Movies/Movies';
import FavoriteMovies from './containers/FavoriteMovies/FavoriteMovies';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const FilterContext = React.createContext();

function App() {
  const [filter, setFilter] = useState('top_rated');

  const handleFilter = filter => {
    setFilter(filter);
  };

  return (
    <>
      <FilterContext.Provider value={filter}>
        <BrowserRouter>
          <Navbar />
          <Filters changeFilter={handleFilter} />
          <SearchForm />
          <Switch>
            <Route path='/' exact component={Movies} />
            <Route path='/favorite' exact component={FavoriteMovies} />
          </Switch>
        </BrowserRouter>
      </FilterContext.Provider>
    </>
  );
}

export default App;
