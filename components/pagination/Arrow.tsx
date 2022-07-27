import React, { useState } from 'react';

import styles from '../../styles/Arrow.module.css';
import Icon from '../Icon';
import { useHousesContext } from '../../context/housesContext';

export interface ArrowProps {
  direction: string;
  icon: string;
}

const Arrow: React.FC<ArrowProps> = ({ direction, icon }) => {
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
    switch (direction) {
      case 'back':
        if (pages.activePage <= 1) return;
        if (pages.activePage === pages.last)
          fetchAllHouses(pages.last - 1, pageSize);
        else fetchAllHouses(pages.back, pageSize);
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
      <Icon type={icon} alt={direction} />
    </div>
  );
};

export default Arrow;
