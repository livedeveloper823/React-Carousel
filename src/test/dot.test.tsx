import * as React from 'react';
import * as Sinon from 'sinon';
import { shallow } from 'enzyme';
import { Dot } from '../components/dot';

describe('Dot', () => {
  it('should render without crashing', () => {
    const comp = shallow(<Dot
      id={0}
      isActive={false}
      onClick={() => undefined} />
    );
    expect(comp.exists()).toBe(true);
  });
    it('should render with initial settings', () => {
      const comp = shallow(<Dot
        id={0}
        isActive={false}
        onClick={() => undefined} />
      );
      expect(comp.prop('id')).toEqual('0');
      expect(comp.prop('className')).not.toContain('active');
      expect(comp.prop('onClick')).toBeDefined();
    });
  it('should include active in className when isActive is true', () => {
    const comp = shallow(<Dot
      id={0}
      isActive={true}
      onClick={() => undefined} />
    );
    expect(comp.prop('className')).toContain('active');
  });
  it('should pass onClick into node element', () => {
    const onClick = () => 'test';
    const comp = shallow(<Dot
      id={0}
      isActive={false}
      onClick={onClick} />
    );
    expect(comp.prop('onClick')).toEqual(onClick);
  });
  it('should call spy when simulate click event', () => {
    const onClickSpy = Sinon.spy();
    const comp = shallow(<Dot
      id={0}
      isActive={false}
      onClick={onClickSpy} />
    );
    comp.simulate('click');
    expect(onClickSpy.callCount).toEqual(1);
  });
});
