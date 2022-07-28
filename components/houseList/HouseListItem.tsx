import React, { useState } from 'react';

import Icon from '../Icon';
import styles from '../../styles/HouseListItem.module.css';
import arrowUp from '../../assets/svg/bi_arrow-up-square-fill.svg';
import arrowDown from '../../assets/svg/bi_arrow-down-square.svg';
import HouseInformation from './HouseInformation';
import { House } from '../../types/houses';

export interface ListItemProps {
  house: House;
}

const HouseListItem: React.FC<ListItemProps> = ({ house }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={styles.listItem}>
      <div className={styles.itemTitle}>
        <h2 onClick={() => setOpen(!open)}>{house.name}</h2>
        <div onClick={() => setOpen(!open)} className={styles.itemButton}>
          {open ? (
            <Icon src={arrowUp} alt="stäng" />
          ) : (
            <Icon src={arrowDown} alt="öppna" />
          )}
        </div>
      </div>
      <>{open && <HouseInformation houseData={house} />}</>
    </div>
  );
};

export default HouseListItem;
