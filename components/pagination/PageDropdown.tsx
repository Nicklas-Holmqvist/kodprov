import React from 'react';

import styles from '../../styles/PageDropdown.module.css';

export interface PageDropdownProps {
  pageSize: number;
  page: number;
  onChange?: (page: number) => void;
}

const PageDropdown: React.FC<PageDropdownProps> = ({
  pageSize,
  page,
  onChange,
}) => {
  return (
    <div className={styles.pageDropdownLabel}>
      <label>
        <select
          value={page}
          onChange={(event) => onChange?.(Number(event?.target.value))}
        >
          {Array.from({ length: pageSize }, (page: number, index: number) => (
            <option key={index} value={index + 1}>
              {index + 1} of {pageSize}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default PageDropdown;
