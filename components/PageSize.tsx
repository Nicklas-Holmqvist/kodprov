import React from 'react';

import styles from '../styles/PageSize.module.css';

export interface PageSizeProps {
  pageSize: number;
  onPageSizeChange: (size: number, pageSize: number) => void;
}

const PageSize: React.FC<PageSizeProps> = ({ pageSize, onPageSizeChange }) => {
  const pageSizes: number[] = [10, 30, 50];

  return (
    <div className={styles.pageSizeContainer}>
      <p className={styles.pageSizeTitle}>Items per page:</p>
      <label>
        <select
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onPageSizeChange(1, Number(event.target.value))
          }
          value={pageSize}
        >
          {pageSizes.map((size: number, index: number) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default PageSize;
