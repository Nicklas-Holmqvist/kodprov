import React from 'react';

import List from './list/List';
import styles from '../styles/Layout.module.css';
import Search from './Search';
import PageSize from './PageSize';
import Pagination from './pagination/Pagination';
import { useHousesContext } from '../context/housesContext';

const Layout = () => {
  const context = useHousesContext();
  const { loaded, noResult } = context;

  return (
    <div className={styles.mainSection}>
      <div className={styles.listSection}>
        <Search />
        {!loaded && 'Laddar'}
        {loaded && !noResult.resultBoolean && (
          <>
            <List />
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
