import React from 'react';
import { useEffect, useState } from 'react';

import { IHouses, House, IPagination } from '../types';
import Search from './Search';
import List from './list/List';
import Pagination from './pagination/Pagination';

const Layout = () => {
  const [houses, setHouses] = useState<House[] | []>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [pagination, setPagination] = useState<IPagination>({});
  const [searchValue, setSearchValue] = useState<string>('');
  const [noResult, setNoResult] = useState<{
    msg: string;
    resultBoolean: boolean;
  }>({
    msg: 'Inget hus hittades, sök på hela namnet!',
    resultBoolean: false,
  });

  const basePage = 1;
  const baseDisplayNumber = 10;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (noResult.resultBoolean === true && searchValue.length >= 0) {
      setNoResult((oldState) => ({
        ...oldState,
        resultBoolean: false,
      }));
    }
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
    setPagination(data.links);
  };

  const fetchSearchResult = async () => {
    setSearchValue('');

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ searchValue }),
    };

    const response = await fetch('api/search', options);
    const data: IHouses = await response.json();
    if (!data.status) return;
    if (data.houses.length === 0)
      return setNoResult((oldState) => ({
        ...oldState,
        resultBoolean: true,
      }));
    setLoaded(false);
    setNoResult((oldState) => ({
      ...oldState,
      resultBoolean: false,
    }));
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
        resultMessage={noResult}
        reset={resetSearch}
      />
      {!loaded && 'Laddar'}
      {loaded && <List data={houses} />}
      {loaded && (
        <Pagination pages={pagination} handlePagination={fetchAllHouses} />
      )}
    </>
  );
};

export default Layout;
