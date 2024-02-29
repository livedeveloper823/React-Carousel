import * as React from 'react';
import * as Sinon from 'sinon';
import { shallow } from 'enzyme';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { Arrow } from '../components/arrow';

describe('Arrow', () => {
  it('should render without crashing', () => {
    const comp = shallow(<Arrow onClick={() => undefined} />);
    expect(comp.exists()).toBe(true);
  });
  it('should render FaChevronCircleLeft if direction is not defined', () => {
    const comp = shallow(<Arrow onClick={() => undefined} />);
    expect(comp.find(FaChevronCircleLeft).exists()).toBe(true);
    expect(comp.find(FaChevronCircleRight).exists()).toBe(false);
  });
  it('should render FaChevronCircleLeft if direction is left', () => {
    const comp = shallow(<Arrow direction="left" onClick={() => undefined} />);
    expect(comp.find(FaChevronCircleLeft).exists()).toBe(true);
    expect(comp.find(FaChevronCircleRight).exists()).toBe(false);
  });
  it('should render FaChevronCircleRight if direction is not left', () => {
    const comp = shallow(<Arrow direction="right" onClick={() => undefined} />);
    expect(comp.find(FaChevronCircleLeft).exists()).toBe(false);
    expect(comp.find(FaChevronCircleRight).exists()).toBe(true);
  });
  it('should call spy when simulate click event', () => {
    const onClickSpy = Sinon.spy();
    const comp = shallow(<Arrow onClick={onClickSpy} />);
    comp.find('.arrow').simulate('click');
    expect(onClickSpy.callCount).toEqual(1);
  });
});
