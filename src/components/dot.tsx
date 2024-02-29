import * as React from 'react';

interface DotProps {
  id: number
  isActive: boolean
  onClick: (e:any) => void
}

export const Dot = (props:DotProps) => {
  const { id, isActive, onClick } = props;
  const className = `dot ${isActive ? 'active' : ''}`;

  return <li id={id.toString()} className={className} onClick={onClick}></li>;
};

Dot.displayName = 'Dot';
