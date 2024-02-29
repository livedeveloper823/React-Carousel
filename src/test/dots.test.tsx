import * as React from 'react';
import { shallow } from 'enzyme';
import { Dot } from '../components/dot';
import { Dots } from '../components/dots';

describe('Dots', () => {
  const images = ['image1', 'image2', 'image3'];
  it('should render successfully with default settings', () => {
    const comp = shallow(<Dots
      images={[]}
      currentIndex={0}
      onChange={() => undefined} />
    );
    expect(comp.exists()).toBe(true);
    expect(comp.html()).toEqual('<ul class="dots"></ul>');
  });
  it('should render children when images array is not empty', () => {
    const comp = shallow(<Dots
      images={images}
      currentIndex={0}
      onChange={() => undefined} />
    );
    expect(comp.find(Dot).length).toEqual(3);
  });
  it('should set isActive to true of Dot with index equal given currentIndex',
  () => {
    const comp = shallow(<Dots
      images={images}
      currentIndex={1}
      onChange={() => undefined} />
    );
    const dots = comp.find(Dot);
    dots.map((dot, i) => expect(dot.prop('isActive')).toEqual(i === 1));
  });
  it('should pass given onChange into children', () => {
    const onChange = () => 'hi';
    const comp = shallow(<Dots
      images={images}
      currentIndex={0}
      onChange={onChange} />
    );
    const dots = comp.find(Dot);
    dots.map(dot => expect(dot.prop('onClick')).toEqual(onChange));
  });
});
