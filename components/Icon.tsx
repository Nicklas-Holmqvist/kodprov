import React from 'react';
import Image from 'next/image';

import styles from '../styles/Icon.module.css';

export interface IconProps {
  src: string;
  alt: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ src, alt, size = 20 }) => {
  if (!src) {
    return <span>{alt}</span>;
  }
  return (
    <Image
      src={src}
      height={size}
      width={size}
      alt={alt}
      className={styles.icon}
    />
  );
};

export default Icon;
