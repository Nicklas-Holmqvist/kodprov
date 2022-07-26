import React from 'react';
import Image from 'next/image';

import List from './list/List';
import Line from '../utils/Line';
import styles from '../styles/Layout.module.css';
import Loader from './Loader';
import Search from './Search';
import PageSize from './PageSize';
import Pagination from './pagination/Pagination';
import gameOfThronesLogo from '../assets/img/png-transparent-a-game-of-thrones-logo-emblem-font-game-of-trones-game-emblem-text.png';
import { useHousesContext } from '../context/housesContext';

const Layout = () => {
  const context = useHousesContext();
  const { loaded, noResult } = context;

  return (
    <div className={styles.mainSection}>
      <div className={styles.headerContainer}>
        <Image src={gameOfThronesLogo} alt="Game of Thrones logo" />
      </div>
      <div className={styles.listSection}>
        <Search />
        {!loaded && <Loader />}
        {loaded && !noResult.resultBoolean && (
          <>
            <List />
            <Line />
            <div className={styles.paginationsContainer}>
              <PageSize />
              <Pagination />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
