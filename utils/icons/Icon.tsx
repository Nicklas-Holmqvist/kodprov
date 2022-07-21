import React, { useState } from 'react';
import Image from 'next/image';

import first from './svg/first-arrow.svg';

const Icon = (props: { type: string; alt: string }) => {
  const iconSize: { height: number; width: number } = { height: 20, width: 20 };
  if (!props.type) {
    return (
      <Image
        src={first}
        height={iconSize.height}
        width={iconSize.width}
        alt={props.alt}
      />
    );
  }
  return (
    <Image
      src={props.type}
      height={iconSize.height}
      width={iconSize.width}
      alt={props.alt}
    />
  );
};

export default Icon;
