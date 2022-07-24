import React, { useState } from 'react';
import Image from 'next/image';

import first from '../assets/svg/first-arrow.svg';
import styles from '../styles/Icon.module.css';

const Icon = (props: { type: string; alt: string }) => {
  const iconSize: { height: number; width: number } = { height: 20, width: 20 };
  if (!props.type) {
    return (
      <Image
        src={first}
        height={iconSize.height}
        width={iconSize.width}
        alt={props.alt}
        className={styles.icon}
      />
    );
  }
  return (
    <Image
      src={props.type}
      height={iconSize.height}
      width={iconSize.width}
      alt={props.alt}
      className={styles.icon}
    />
  );
};

export default Icon;
