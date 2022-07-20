import React, { useState } from 'react';
import Image from 'next/image';

const Icon = (props: { type: string; alt: string }) => {
  const iconSize: { height: number; width: number } = { height: 20, width: 20 };
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
