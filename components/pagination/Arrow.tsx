import React from 'react';

import Icon from '../Icon';
import styles from '../../styles/Arrow.module.css';

export interface ArrowProps extends React.HTMLAttributes<HTMLDivElement> {
  direction: string;
  icon: string;
}

const Arrow: React.FC<ArrowProps> = ({ direction, icon, ...props }) => {
  return (
    <div className={styles.arrowContainer} {...props}>
      <Icon src={icon} alt={direction} />
    </div>
  );
};

export default Arrow;
