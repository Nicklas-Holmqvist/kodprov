import React from 'react';
import Image from 'next/image';

import styles from '../styles/Icon.module.css';

export interface IconProps {
  type: string;
  alt: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ type, alt, size = 20 }) => {
  if (!type) {
    return <span>{alt}</span>;
  }
  return (
    <Image
      src={type}
      height={size}
      width={size}
      alt={alt}
      className={styles.icon}
    />
  );
};

export default Icon;
