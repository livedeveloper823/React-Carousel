import * as React from 'react';
import { Dots } from './dots';
import { ImagesSource } from './images-source';
import { Slide } from './slide';

export interface CarouselProps {
  imagesUrls: string[]
  imagesSource: string[]
}

type CarouselState = {
  currentSlideIndex: number
};

export class CarouselApp extends React.Component<CarouselProps, CarouselState> {
  static displayName = 'CarouselApp'; // ES7

  static defaultProps = { // ES7
    imagesUrls: [],
    imagesSource: []
  }

  state = { currentSlideIndex: 0 }; // ES7

  shouldComponentUpdate = (_:CarouselProps, nextState:CarouselState) => {
    const { currentSlideIndex } = this.state;
    return currentSlideIndex !== nextState.currentSlideIndex;
  }

  onSlideChange = (e:any) => {
    const { imagesUrls } = this.props;
    const { currentSlideIndex } = this.state;

    const newIndex = e.target.id === 'left'
      ? currentSlideIndex - 1
      : currentSlideIndex + 1;

    const lastIndex = imagesUrls.length - 1;

    const newSlideIndex = newIndex < 0
      ? lastIndex
      : newIndex > lastIndex ? 0 : newIndex;

    this.setState({ currentSlideIndex: newSlideIndex });
  }

  onDotChange = (e:any) =>
    this.setState({ currentSlideIndex: parseInt(e.target.id) });

  render() {
    const { imagesUrls, imagesSource } = this.props;
    const { currentSlideIndex } = this.state;
    return <React.Fragment>
      <Slide
        imageUrl={imagesUrls[currentSlideIndex]}
        onChange={this.onSlideChange} />
      {imagesSource.length && <ImagesSource source={imagesSource} />}
      <Dots
        images={imagesUrls}
        currentIndex={currentSlideIndex}
        onChange={this.onDotChange} />
    </React.Fragment>;
  }
}
