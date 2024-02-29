import * as React from 'react';
import { shallow } from 'enzyme';
import { Slide } from '../components/slide';
import { Arrow } from '../components/arrow';

describe('Slide', () => {
  it('should render without crashing', () => {
    const comp = shallow(<Slide onChange={() => undefined} />);
    expect(comp.exists()).toBe(true);
    expect(comp.prop('style')).toEqual({ backgroundImage: "url('undefined')" });
    expect(comp.find(Arrow).length).toEqual(2);
  });
  it('should pass given imageUrl into style as backgroundImage', () => {
    const imageUrl = '../assets/images/1.jpg';
    const comp = shallow(
      <Slide imageUrl={imageUrl} onChange={() => undefined} />
    );
    expect(comp.prop('style'))
      .toEqual({ backgroundImage: `url('${imageUrl}')` });
  });
  it('should pass given onChange as a prop into Arrow components', () => {
    const onChange = () => 'test';
    const comp = shallow(<Slide onChange={onChange} />);
    const arrows = comp.find(Arrow);
    arrows.map(arrow => expect(arrow.prop('onClick')).toEqual(onChange));
  });
});
