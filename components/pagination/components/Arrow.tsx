import React, { useState } from 'react';

import styles from '../../../styles/Arrow.module.css';
import Icon from '../../../utils/icons/Icon';
import { useHousesContext } from '../../../context/housesContext';

const Arrow = (props: { direction: string; icon: string }) => {
  const context = useHousesContext();
  const { pagination, fetchAllHouses } = context;

  const pageSize = Number(pagination['first'].pageSize);

  const pages = {
    first: Number(pagination['first'].page),
    back: pagination['next']
      ? Number(pagination['next'].page) - 2
      : Number(pagination['last'].page),
    activePage: pagination['next']
      ? Number(pagination['next'].page) - 1
      : Number(pagination['last'].page),
    next: pagination['next']
      ? Number(pagination['next'].page)
      : Number(pagination['last'].page),
    last: Number(pagination['last'].page),
  };

  const handleChange = () => {
    switch (props.direction) {
      case 'back':
        if (pages.activePage <= 1) return;
        fetchAllHouses(pages.back, pageSize);
        break;
      case 'next':
        if (pages.activePage >= pages.last) return;
        fetchAllHouses(pages.next, pageSize);
        break;
      case 'first':
        if (pages.activePage <= 1) return;
        fetchAllHouses(pages.first, pageSize);
        break;
      case 'last':
        if (pages.activePage >= pages.last) return;
        fetchAllHouses(pages.last, pageSize);
        break;
    }
  };

  return (
    <div className={styles.arrowContainer} onClick={handleChange}>
      <Icon type={props.icon} alt={props.direction} />
    </div>
  );
};

export default Arrow;
