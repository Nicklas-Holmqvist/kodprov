import React, { useState } from 'react';

import styles from '../../styles/Arrow.module.css';
import Icon from '../Icon';

export interface ArrowProps extends React.HTMLAttributes<HTMLDivElement> {
  direction: string;
  icon: string;
}

const Arrow: React.FC<ArrowProps> = ({ direction, icon, ...props }) => {
  return (
    <div className={styles.arrowContainer} {...props}>
      <Icon type={icon} alt={direction} />
    </div>
  );
};

export default Arrow;
