import * as React from 'react';
import { shallow } from 'enzyme';
import { ImagesSource } from '../components/images-source';

describe('ImagesSource', () => {
  it('should render without crashing', () => {
    const comp = shallow(<ImagesSource source={['source1']} />);
    expect(comp.exists()).toBe(true);
  });
  it('should display a single source', () => {
    const comp = shallow(<ImagesSource source={['source1']} />);
    expect(comp.text()).toEqual('Source of images: source1');
  });
  it('should display multiple sources', () => {
    const comp = shallow(<ImagesSource source={['source1', 'source2']} />);
    expect(comp.text()).toEqual('Source of images: source1, source2');
  });
});
