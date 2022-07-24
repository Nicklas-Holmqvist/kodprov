import React from 'react';

import styles from '../../styles/List.module.css';
import ListItem from './component/ListItem';
import { useHousesContext } from '../../context/housesContext';

const List = () => {
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

export default List;
