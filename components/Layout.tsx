import React from 'react';
import { useEffect, useState } from 'react';

import { IHouses, House } from '../types';
import Search from './list/component/Search';
import List from './list/List';

const Layout = () => {
  const [houses, setHouses] = useState<House[] | []>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const basePage = 1;
  const baseDisplayNumber = 50;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const resetSearch = () => {
    fetchAllHouses(basePage, baseDisplayNumber);
  };

  const fetchAllHouses = async (page: number, displayCount: number) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page, displayCount }),
    };

    const response = await fetch('api/houses', options);
    const data: IHouses = await response.json();
    if (!data.status) return;
    setHouses(data.houses);
    setLoaded(data.status);
  };

  const fetchSearchResult = async () => {
    setSearchValue('');
    setLoaded(false);
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ searchValue }),
    };

    const response = await fetch('api/search', options);
    const data: IHouses = await response.json();
    if (!data.status) return;
    setHouses(data.houses);
    setLoaded(data.status);
  };

  useEffect(() => {
    fetchAllHouses(basePage, baseDisplayNumber);
  }, []);

  return (
    <>
      <Search
        value={searchValue}
        handleChange={handleChange}
        search={fetchSearchResult}
        reset={resetSearch}
      />
      {!loaded && 'Laddar'}
      {loaded && <List data={houses} />}
    </>
  );
};

export default Layout;
