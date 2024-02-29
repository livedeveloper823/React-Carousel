import * as React from 'react';
import { shallow } from 'enzyme';
import { CarouselApp } from '../components/carousel-app';
import { Dots } from '../components/dots';
import { ImagesSource } from '../components/images-source';
import { Slide } from '../components/slide';

describe('CarouselApp', () => {
  it('should render without crashing', () => {
    shallow(<CarouselApp />);
  });
  it('should render children components with default settings', () => {
    const comp = shallow(<CarouselApp />);

    const slide = comp.find(Slide);
    expect(slide.prop('imageUrl')).toBeUndefined();
    expect(slide.prop('onChange')).toBeDefined();

    expect(comp.find(ImagesSource).exists()).toBe(false);

    const dots = comp.find(Dots);
    expect(dots.prop('images')).toEqual([]);
    expect(dots.prop('currentIndex')).toEqual(0);
    expect(dots.prop('onChange')).toBeDefined();
  });
  it('should render children components with given imagesUrls', () => {
    const imagesUrls:string[] = ['url1', 'url2'];
    const comp = shallow(<CarouselApp imagesUrls={imagesUrls} />);
    expect(comp.find(Slide).prop('imageUrl')).toEqual(imagesUrls[0]);
    expect(comp.find(Dots).prop('images')).toEqual(imagesUrls);
  });
  it('should render images source with given source', () => {
    const source = ['abc'];
    const comp = shallow(<CarouselApp imagesSource={source} />);
    const imagesSource = comp.find(ImagesSource);
    expect(imagesSource.exists()).toBe(true);
    expect(imagesSource.prop('source')).toEqual(source);
  });
  it('should pass onSlideChange as a prop into Slide component', () => {
    const comp = shallow(<CarouselApp />);
    const slide = comp.find('Slide');
    const instance = comp.instance() as CarouselApp;
    const onSlideChange = instance.onSlideChange;
    expect(slide.prop('onChange')).toEqual(onSlideChange);
  });
  it('should deal with slide change when target id is left', () => {
    const imagesUrls:string[] = ['url1', 'url2', 'url3'];
    const comp = shallow(<CarouselApp imagesUrls={imagesUrls} />);
    const instance = comp.instance() as CarouselApp;
    instance.onSlideChange({ target: { id: 'left' }});
    expect(comp.state('currentSlideIndex')).toEqual(2);
  });
  it('should deal with slide change when target id is not left', () => {
    const imagesUrls:string[] = ['url1', 'url2', 'url3'];
    const comp = shallow(<CarouselApp imagesUrls={imagesUrls} />);
    const instance = comp.instance() as CarouselApp;
    instance.onSlideChange({ target: { id: 'right' }});
    expect(comp.state('currentSlideIndex')).toEqual(1);
  });
  it('should pass onDotChange as a prop into Slide component', () => {
    const comp = shallow(<CarouselApp />);
    const dots = comp.find('Dots');
    const instance = comp.instance() as CarouselApp;
    const onDotChange = instance.onDotChange;
    expect(dots.prop('onChange')).toEqual(onDotChange);
  });
  it('should deal with dot change', () => {
    const imagesUrls:string[] = ['url1', 'url2', 'url3'];
    const comp = shallow(<CarouselApp imagesUrls={imagesUrls} />);
    const instance = comp.instance() as CarouselApp;
    instance.onDotChange({ target: { id: '1' }});
    expect(comp.state('currentSlideIndex')).toEqual(1);
  });
});
