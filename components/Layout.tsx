import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styles from '../styles/Layout.module.css';
import Loader from './Loader';
import Search from './Search';
import PageSize from './PageSize';
import HouseList from './houseList/HouseList';
import Pagination from './pagination/Pagination';
import gameOfThronesLogo from '../assets/img/png-transparent-a-game-of-thrones-logo-emblem-font-game-of-trones-game-emblem-text.png';
import { Pagination as PaginationInterface } from './pagination/Pagination';
import { House, Houses } from '../types/houses';

export interface NoResult {
  msg: string;
  resultBoolean: boolean;
}

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  const basePage = 1;
  const basePageSize = 10;

  const [houses, setHouses] = useState<House[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pagination, setPagination] = useState<PaginationInterface>({});
  const [searchValue, setSearchValue] = useState<string>('');
  const [noResult, setNoResult] = useState<NoResult>({
    msg: 'No house found by name, try with the full name!',
    resultBoolean: false,
  });

  /**
   * Resets the searchResult
   */
  const resetSearch = () => {
    setSearchValue('');
    fetchAllHouses(basePage, pageSize);
    setPageSize(pageSize);
    setNoResult((oldState) => ({
      ...oldState,
      resultBoolean: false,
    }));
  };

  /**
   * Gets a list of houses queried by the params
   * @param page pagenumber in the pagination that will be fetch in the api query
   * @param pageSize how many items to show per page, 10-50
   * @returns list of houses
   */
  const fetchAllHouses = React.useCallback(
    async (page: number, pageSize: number) => {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page, pageSize }),
      };

      const response = await fetch('api/houses', options);
      const data: Houses = await response.json();
      if (!data.status) return;
      setHouses(data.houses);
      setLoaded(data.status);
      setPagination(data.links);
      setPageSize(Number(data.links['first'].pageSize));
    },
    []
  );

  /**
   * Gets the result of a search by housename
   */
  const fetchSearchResult = React.useCallback(async () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pageSize, basePage }),
    };

    const formatedSearchValue = searchValue.toLowerCase().replace('house ', '');

    const response = await fetch(`api/houses/${formatedSearchValue}`, options);
    const data: Houses = await response.json();

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
  }, [pageSize, searchValue]);

  /**
   * Handle the searchInput input
   * @param event searchValue from input input
   * @returns resets the houseList
   */
  const prevSearchValueRef = React.useRef(searchValue);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (prevSearchValueRef.current.length > 0 && event.target.value === '') {
      resetSearch();
    } else setSearchValue(event.target.value);
    setSearchValue(event.target.value);

    prevSearchValueRef.current = event.target.value;
  };

  /**
   * Handle the pagination and page dropdown
   */
  const onPageChange = React.useCallback(
    (page: number) => fetchAllHouses(page, pageSize),
    [fetchAllHouses, pageSize]
  );

  /**
   * Handle the select of pageSize dropdown
   */
  const onPageSizeChange = React.useCallback(
    (page: number, pageSize: number) => fetchAllHouses(page, pageSize),
    [fetchAllHouses]
  );

  /**
   * Runs at start once to fetch the list
   */
  const initialRef = useRef(false);
  useEffect(() => {
    if (initialRef.current) return;

    initialRef.current = true;
    fetchAllHouses(basePage, basePageSize);
  }, [fetchAllHouses]);

  return (
    <div className={styles.mainSection}>
      <div className={styles.headerContainer}>
        <Image src={gameOfThronesLogo} alt="Game of Thrones logo" />
      </div>
      <div className={styles.listSection}>
        <Search
          searchValue={searchValue}
          onInputChange={handleInputChange}
          resetSearch={resetSearch}
          noResult={noResult}
          fetchSearchResult={fetchSearchResult}
        />
        {!loaded && <Loader />}
        {loaded && !noResult.resultBoolean && (
          <>
            <HouseList houses={houses} />
            <div className={styles.paginationsContainer}>
              <PageSize
                pageSize={pageSize}
                onPageSizeChange={onPageSizeChange}
              />
              <Pagination pagination={pagination} onPageChange={onPageChange} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
