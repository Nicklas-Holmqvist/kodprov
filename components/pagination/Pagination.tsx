import React from 'react';

import prev from '../../assets/svg/prev-arrow.svg';
import next from '../../assets/svg/next-arrow.svg';
import last from '../../assets/svg/last-arrow.svg';
import first from '../../assets/svg/first-arrow.svg';
import Arrow from './Arrow';
import styles from '../../styles/Pagination.module.css';
import PageDropdown from './PageDropdown';
import { Pagination } from '../../types/pagination';

export interface PaginationProps {
  pagination: Pagination;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  onPageChange,
}) => {
  const pages = {
    first: Number(pagination['first'].page),
    back: pagination['prev'] ? Number(pagination['prev'].page) : undefined,
    activePage: pagination['next']
      ? Number(pagination['next'].page) - 1
      : Number(pagination['last'].page),
    next: pagination['next'] ? Number(pagination['next'].page) : undefined,
    last: Number(pagination['last'].page),
  };

  return (
    <div className={styles.paginationContainer}>
      <Arrow
        icon={first}
        direction={'first'}
        onClick={() =>
          pages.activePage !== pages.first && onPageChange?.(pages.first)
        }
      />
      <Arrow
        icon={prev}
        direction={'back'}
        onClick={() => pages.back && onPageChange?.(pages.back)}
      />
      <PageDropdown
        pageSize={pages.last}
        page={pages.activePage}
        onChange={(page) => onPageChange?.(page)}
      />
      <Arrow
        icon={next}
        direction={'next'}
        onClick={() => pages.next && onPageChange?.(pages.next)}
      />
      <Arrow
        icon={last}
        direction={'last'}
        onClick={() =>
          pages.activePage !== pages.last && onPageChange?.(pages.last)
        }
      />
    </div>
  );
};

export default Pagination;
