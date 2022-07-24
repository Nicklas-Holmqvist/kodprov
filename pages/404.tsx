import Link from 'next/link';
import React from 'react';

import styles from '../styles/ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.center}>
      <h1>You have been betrayd!</h1>
      <Link href="/" replace>
        <a className={styles.button}>Go back home</a>
      </Link>
    </div>
  );
};

export default ErrorPage;
