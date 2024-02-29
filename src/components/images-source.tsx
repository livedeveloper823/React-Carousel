import * as React from 'react';

interface ImagesSourceProps {
  source: string[]
}

export const ImagesSource = (props:ImagesSourceProps) =>
  <div className="source">
    {`Source of images: ${props.source.join(', ')}`}
  </div>;

ImagesSource.displayName = 'ImagesSorce';
