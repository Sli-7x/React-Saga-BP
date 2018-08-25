import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { HomePage, mapStateToProps } from '../HomePage';

const dispatch = jest.fn();

describe('HomePage.tsx', () => {
  it('should render correctly', () => {
    const filledTree = renderer.create(<HomePage filters={{}} dispatch={dispatch} />).toJSON();
    expect(filledTree).toMatchSnapshot();

    const filledTree2 = renderer.create(<HomePage filters={{ loading: true }} dispatch={dispatch} />).toJSON();
    expect(filledTree2).toMatchSnapshot();
  });

  it('should cover mapStateToProps', () => {
    expect(mapStateToProps({ filters: [] })).toEqual({ filters: [] });
  });
});
