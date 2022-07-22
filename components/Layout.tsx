import React from 'react';
import { useEffect, useState } from 'react';

import styles from '../styles/Layout.module.css';
import List from './list/List';
import Search from './Search';
import PageSize from './PageSize';
import Pagination from './pagination/Pagination';
import { IHouses, House, IPagination } from '../types';

const Layout = () => {
  const [houses, setHouses] = useState<House[] | []>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [pagination, setPagination] = useState<IPagination>({});
  const [pageSize, setPageSize] = useState<number>(10);
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
      fetchAllHouses(basePage, baseDisplayNumber);
      setNoResult((oldState) => ({
        ...oldState,
        resultBoolean: false,
      }));
    }
    if (searchValue.length >= 0) fetchAllHouses(basePage, baseDisplayNumber);
    setSearchValue(event.target.value);
  };

  const resetSearch = () => {
    setSearchValue('');
    fetchAllHouses(basePage, pageSize);
    setPageSize(pageSize);
    setNoResult((oldState) => ({
      ...oldState,
      resultBoolean: false,
    }));
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
    setPageSize(Number(data.links['first'].pageSize));
  };

  const fetchSearchResult = async () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ searchValue }),
    };

    const response = await fetch('api/search', options);
    const data: IHouses = await response.json();

    if (!data.status) return;
    setPagination(data.links);
    setPageSize(Number(data.links['first'].pageSize));
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
    <div className={styles.mainSection}>
      <div className={styles.listSection}>
        <Search
          value={searchValue}
          handleChange={handleChange}
          search={fetchSearchResult}
          resultMessage={noResult}
          reset={resetSearch}
        />
        {!loaded && 'Laddar'}
        {loaded && (
          <>
            <List data={houses} />
            <div className={styles.paginationsContainer}>
              <PageSize pageSize={pageSize} handlePageSize={fetchAllHouses} />
              <Pagination
                pages={pagination}
                handlePagination={fetchAllHouses}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
