import React, { useState } from 'react';

import Icon from '../../Icon';
import styles from '../../../styles/List.module.css';
import arrowUp from '../../../assets/svg/bi_arrow-up-square-fill.svg';
import arrowDown from '../../../assets/svg/bi_arrow-down-square.svg';
import HouseInformation from './HouseInformation';
import { House } from '../../../types';

const ListItem = (props: { house: House }) => {
  const house = props.house;

  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className={styles.listItem}>
        <div className={styles.itemTitle}>
          <h2 onClick={() => setOpen(!open)}>{house.name}</h2>
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <Icon type={arrowUp} alt="stäng" />
            ) : (
              <Icon type={arrowDown} alt="öppna" />
            )}
          </div>
        </div>
        <>{open && <HouseInformation house={house} />}</>
      </div>
    </>
  );
};

export default ListItem;
