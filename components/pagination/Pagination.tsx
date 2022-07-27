import React from 'react';

import prev from '../../assets/svg/prev-arrow.svg';
import next from '../../assets/svg/next-arrow.svg';
import last from '../../assets/svg/last-arrow.svg';
import first from '../../assets/svg/first-arrow.svg';
import Arrow from './Arrow';
import styles from '../../styles/Pagination.module.css';
import PageDropdown from './PageDropdown';

export interface Pagination {}

const Pagination: React.FC<Pagination> = () => {
  return (
    <div className={styles.paginationContainer}>
      <Arrow icon={first} direction={'first'} />
      <Arrow icon={prev} direction={'back'} />
      <PageDropdown />
      <Arrow icon={next} direction={'next'} />
      <Arrow icon={last} direction={'last'} />
    </div>
  );
};

export default Pagination;
