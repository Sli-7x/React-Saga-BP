import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Filters } from '../Filters';

const mock = [
  {
    id: 12,
    title: 'Some random title',
  },
];

describe('Filters.tsx', () => {
  it('should render correctly', () => {
    const filledTree = renderer.create(<Filters list={mock} />).toJSON();
    expect(filledTree).toMatchSnapshot();
  });
});
