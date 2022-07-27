import React from 'react';

import styles from '../styles/Loader.module.css';

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
