import React from 'react';

import styles from '../../styles/HouseList.module.css';
import ListItem from './HouseListItem';
import { House } from '../../types/houses';

export interface HouseListProps {
  houses: House[];
}

const HouseList: React.FC<HouseListProps> = ({ houses }) => {
  return (
    <div className={styles.listContainer}>
      {houses.map((house, index) => (
        <div key={`${house.name}${index}`}>
          <ListItem house={house} />
        </div>
      ))}
    </div>
  );
};

export default HouseList;
