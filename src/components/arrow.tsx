import * as React from 'react';
import { IconContext } from "react-icons";
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

interface ArrowProps {
  direction?: string
  onClick: (e:any) => void
}

export const Arrow = (props:ArrowProps) => {
  const { direction = 'left', onClick } = props;
  return <IconContext.Provider value={{ size: '2em' }}>
    <div className="arrow" onClick={onClick}>
      {direction === 'left'
        ? <FaChevronCircleLeft />
        : <FaChevronCircleRight />
      }
    </div>
  </IconContext.Provider>;
};

Arrow.displayName = 'Arrow';
