import * as React from 'react';
import { Arrow } from './arrow';

interface SlideProps {
  imageUrl?: string,
  onChange: (e:any) => void
}

export const Slide = (props:SlideProps) => {
  const { imageUrl, onChange } = props;
  const style = { backgroundImage: `url('${imageUrl}')` };
  return <div className="slide" style={style}>
    <Arrow key={0} onClick={onChange} />
    <Arrow key={1} direction="right" onClick={onChange} />
  </div>;
};

Slide.displayName = 'Slide';
