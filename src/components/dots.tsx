import * as React from 'react';
import { Dot } from './dot';

interface DotsProps {
  images: string[]
  currentIndex: number
  onChange: (e:any) => void
}

export const Dots = (props:DotsProps) => {
  const { images, currentIndex, onChange } = props;
  return <ul className="dots">
    {images.map((img, index) => <Dot
      key={img}
      id={index}
      isActive={index === currentIndex}
      onClick={onChange} />
    )}
  </ul>;
};

Dots.displayName = 'Dots';
