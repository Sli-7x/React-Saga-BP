import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { AboutPage } from '../AboutPage';
import { shallow } from 'enzyme';

describe('AboutPage.tsx', () => {
  it('should render correctly', () => {
    const filledTree = renderer.create(<AboutPage />).toJSON();
    expect(filledTree).toMatchSnapshot();
  });

  it('should cover onClick()', () => {
    const component = shallow(<AboutPage />);
    component.setState = jest.fn();
    const instance = component.instance() as AboutPage;
    instance.onClick();
    expect(component.setState).toHaveBeenCalled();
  });
});
