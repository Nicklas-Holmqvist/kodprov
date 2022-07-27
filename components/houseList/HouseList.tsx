import React from 'react';

import styles from '../../styles/HouseList.module.css';
import ListItem from './ListItem';
import { useHousesContext } from '../../context/housesContext';

export interface HouseListProps {}

const HouseList: React.FC<HouseListProps> = () => {
  const context = useHousesContext();
  const houses = context.houses;
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
